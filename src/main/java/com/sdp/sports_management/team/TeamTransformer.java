package com.sdp.sports_management.team;

import com.sdp.sports_management.bean.Team;
import com.sdp.sports_management.user.UserTransformer;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class TeamTransformer {

    @Resource
    private UserTransformer userTransformer;

    public List<TeamDto> toDtos(List<Team> teams) {
        return teams.stream().map(this::toDto).collect(Collectors.toList());
    }

    TeamDto toDto(Team team) {
        TeamDto dto = new TeamDto();
        dto.setTeamName(team.getTeam_name());
        dto.setGameName(team.getGame_name());
        dto.setMembers(userTransformer.toDtos(team.getMembers()));
        return dto;
    }
}
