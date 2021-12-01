package com.sdp.sports_management.tournament;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api")
public class TournamentController {
    @Resource
    private TournamentService tournamentService;

    @GetMapping("/getAllTournaments/")
    public List<TournamentDto>getAllTournaments(){
        return tournamentService.getAllTournaments();
    }
}
