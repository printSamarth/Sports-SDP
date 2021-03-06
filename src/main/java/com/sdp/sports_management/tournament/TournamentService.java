package com.sdp.sports_management.tournament;

import com.sdp.sports_management.bean.Tournament;

import java.util.List;

public interface TournamentService {
    List<TournamentDto> getAllTournaments();

    TournamentDto getTournamentById(Integer tournamentId);

    TournamentDto saveTournament(TournamentDto request);

    TournamentDto addTeamToTournament(TournamentDto dto);
}
