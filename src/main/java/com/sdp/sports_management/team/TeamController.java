package com.sdp.sports_management.team;

import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api")
public class TeamController {
    @Resource
    private TeamService teamService;

    @PutMapping("/addMember/")
    public TeamDto addMember(@RequestBody TeamDto request){
        return teamService.addTeamMember(request);
    }
}
