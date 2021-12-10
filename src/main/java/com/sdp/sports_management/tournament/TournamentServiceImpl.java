package com.sdp.sports_management.tournament;

import com.sdp.sports_management.bean.Tournament;
import com.sdp.sports_management.team.TeamTransformer;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;

@Service
public class TournamentServiceImpl implements TournamentService {

    @Resource
    private TournamentRepository tournamentRepository;

    @Resource
    private TournamentTransformer tournamentTransformer;

    @Resource
    private TeamTransformer teamTransformer;

    @Override
    @Transactional
    public List<TournamentDto> getAllTournaments() {
        List<Tournament> tournaments = tournamentRepository.findAll();
        return tournamentTransformer.toDtos(tournaments);
    }

    @Override
    @Transactional
    public TournamentDto getTournamentById(Integer tournamentId) {
        Tournament tournament = tournamentRepository.findByTournamentId(tournamentId);
        return tournamentTransformer.toDto(tournament);
    }

    @Override
    @Transactional
    public TournamentDto saveTournament(TournamentDto request) {
        Tournament tournament = tournamentTransformer.toEntity(request);
        tournament = tournamentRepository.save(tournament);
        return tournamentTransformer.toDto(tournament);
    }
}
