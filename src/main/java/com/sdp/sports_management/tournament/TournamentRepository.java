package com.sdp.sports_management.tournament;

import com.sdp.sports_management.bean.Tournament;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TournamentRepository extends JpaRepository<Tournament, Integer> {
    Tournament findByTournamentId(Integer tournamentId);
}
