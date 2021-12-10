package com.sdp.sports_management.tournament;

import com.sdp.sports_management.Exception.ResourceNotFoundException;
import com.sdp.sports_management.bean.Tournament;
import com.sdp.sports_management.team.TeamTransformer;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Component
public class TournamentTransformer {
    @Resource
    private TeamTransformer teamTransformer;

    @Resource
    private TournamentRepository tournamentRepository;

    public List<TournamentDto> toDtos(List<Tournament> tournaments) {
        return tournaments.stream().map(this::toDto).collect(Collectors.toList());
    }

    public TournamentDto toDto(Tournament tournament) {
        TournamentDto dto = new TournamentDto();
        dto.setTournamentId(tournament.getTournament_id());
        dto.setGameName(tournament.getGame_name());
        dto.setTeams(teamTransformer.toDtos(tournament.getTeams()));
        dto.setTimeTable(tournament.getTime_table());
        return dto;
    }

    public Tournament toEntity(TournamentDto dto) {
        Tournament tournament = null;
        if (Objects.nonNull(dto)) {
            boolean isNew = Objects.isNull(dto.getTournamentId());
            if (isNew) {
                tournament = new Tournament();
            } else {
                tournament = tournamentRepository.findByTournamentId(dto.getTournamentId());
                if (tournament == null) {
                    throw new ResourceNotFoundException("Tournament with id: "
                            + dto.getTournamentId() + " not found");
                }
            }
            tournament.setTeams(teamTransformer.toEntities(dto.getTeams()));
            tournament.setGame_name(dto.getGameName());
            tournament.setMax_team(dto.getMaxTeams());
            tournament.setNo_teams(dto.getTeamCount());
            tournament.setTime_table(dto.getTimeTable());
        }
        return tournament;
    }

}
