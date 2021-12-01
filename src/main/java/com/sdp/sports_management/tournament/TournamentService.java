package com.sdp.sports_management.tournament;

import com.sdp.sports_management.bean.Tournament;

import java.util.List;

public interface TournamentService {
    List<TournamentDto> getAllTournaments();
}
