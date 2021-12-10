package com.sdp.sports_management.team;

import com.sdp.sports_management.bean.Team;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TeamRepository extends JpaRepository<Team, Integer> {
    Team findByTeamId(Integer teamId);
}
