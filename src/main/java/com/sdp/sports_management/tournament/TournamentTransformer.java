package com.sdp.sports_management.tournament;

import com.sdp.sports_management.bean.Tournament;
import com.sdp.sports_management.team.TeamTransformer;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class TournamentTransformer {
    @Resource
    private TeamTransformer teamTransformer;

    public List<TournamentDto> toDtos(List<Tournament> tournaments) {
        return tournaments.stream().map(this::toDto).collect(Collectors.toList());
    }

    public TournamentDto toDto(Tournament tournament) {
        TournamentDto dto = new TournamentDto();
        dto.setGameName(tournament.getGame_name());
        dto.setTeams(teamTransformer.toDtos(tournament.getTeams()));
        dto.setTimeTable(tournament.getTime_table());
        return dto;
    }
}
