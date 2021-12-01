package com.sdp.sports_management.tournament;

import com.sdp.sports_management.bean.Tournament;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TournamentRepository extends JpaRepository<Tournament, Integer> {
}
