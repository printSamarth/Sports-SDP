package com.sdp.sports_management.tournament;

import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class TournamentController {
    @Resource
    private TournamentService tournamentService;

    @GetMapping("/getAllTournaments/")
    public List<TournamentDto> getAllTournaments() {
        return tournamentService.getAllTournaments();
    }

    @GetMapping("/tournament/{tournamentId}")
    public TournamentDto getTournamentById(@PathVariable("tournamentId") Integer tournamentId) {
        return tournamentService.getTournamentById(tournamentId);
    }

    @PutMapping("/tournament/save/")
    public TournamentDto saveTournament(TournamentDto request) {
        System.out.println("Got request " + request);
        return tournamentService.saveTournament(request);
    }
}
