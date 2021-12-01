package com.sdp.sports_management.tournament;

import com.sdp.sports_management.bean.Tournament;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class TournamentServiceImpl implements TournamentService {

    @Resource
    private TournamentRepository tournamentRepository;

    @Resource
    private TournamentTransformer tournamentTransformer;

    @Override
    public List<TournamentDto> getAllTournaments() {
        List<Tournament> tournaments = tournamentRepository.findAll();
        return tournamentTransformer.toDtos(tournaments);
    }
}
