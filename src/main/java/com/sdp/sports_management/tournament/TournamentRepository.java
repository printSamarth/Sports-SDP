package com.sdp.sports_management.tournament;

import com.sdp.sports_management.bean.Tournament;
import com.sdp.sports_management.bean.Venue;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.Set;

@Repository
public interface TournamentRepository extends JpaRepository<Tournament, Integer> {
    Tournament findByTournamentId(Integer tournamentId);
}
