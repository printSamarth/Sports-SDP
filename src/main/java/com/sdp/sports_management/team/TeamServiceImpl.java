package com.sdp.sports_management.team;

import com.sdp.sports_management.Exception.ResourceNotFoundException;
import com.sdp.sports_management.bean.Team;
import com.sdp.sports_management.bean.User;
import com.sdp.sports_management.repository.UserRepository;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;

public class TeamServiceImpl implements TeamService {
    @Resource
    private TeamRepository teamRepository;

    @Resource
    private UserRepository userRepository;

    @Resource
    private TeamTransformer teamTransformer;

    @Override
    @Transactional
    public TeamDto addTeamMember(TeamDto request) {
        if (request == null) return new TeamDto();
        Team team = teamRepository.findByTeamId(request.getTeamId());
        if (team == null) throw new ResourceNotFoundException("Team not found: " + request.getTeamId());
        User user = userRepository.findByUserId(request.getMembers().get(0).getUserId());
        if (user == null)
            throw new ResourceNotFoundException("User not found: " + request.getMembers().get(0).getUserId());
        team.getMembers().add(user);
        user.setTeamId(team);
        team = teamRepository.save(team);
        return teamTransformer.toDto(team);
    }
}
