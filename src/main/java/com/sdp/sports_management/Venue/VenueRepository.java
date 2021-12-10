package com.sdp.sports_management.Venue;

import com.sdp.sports_management.bean.Venue;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VenueRepository extends JpaRepository<Venue,Integer> {

}