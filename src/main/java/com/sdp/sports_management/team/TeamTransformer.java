package com.sdp.sports_management.team;

import com.sdp.sports_management.Exception.ResourceNotFoundException;
import com.sdp.sports_management.bean.Team;
import com.sdp.sports_management.user.UserTransformer;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Component
public class TeamTransformer {

    @Resource
    private UserTransformer userTransformer;

    @Resource
    private TeamRepository teamRepository;

    public List<TeamDto> toDtos(List<Team> teams) {
        return teams.stream().map(this::toDto).collect(Collectors.toList());
    }

    TeamDto toDto(Team team) {
        TeamDto dto = new TeamDto();
        dto.setTeamId(team.getTeam_id());
        dto.setTeamName(team.getTeamName());
        dto.setGameName(team.getGameName());
        dto.setMembers(userTransformer.toDtos(team.getMembers()));
        return dto;
    }

    public List<Team> toEntities(List<TeamDto> teams) {
        List<Team> teamList = new ArrayList<>();
        if (teams == null) return teamList;
        for (TeamDto dto : teams) {
            teamList.add(toEntity(dto));
        }
        return teamList;
    }

    private Team toEntity(TeamDto dto) {
        boolean isNew = Objects.isNull(dto.getTeamId());
        Team team;
        if (isNew) {
            team = new Team();
        } else {
            team = teamRepository.findByTeamId(dto.getTeamId());
            if (Objects.isNull(team)) {
                throw new ResourceNotFoundException("Team with team id: " + dto.getTeamId() + " not found");
            }
        }
        team.setTeamName(dto.getTeamName());
        team.setGameName(dto.getGameName());
        team.setMembers(userTransformer.toEntities(dto.getMembers()));
        return team;
    }
}
