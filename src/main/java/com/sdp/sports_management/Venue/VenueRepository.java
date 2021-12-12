package com.sdp.sports_management.Venue;

import com.sdp.sports_management.bean.Venue;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.sql.Date;
import java.util.Set;

@Repository
public interface VenueRepository extends JpaRepository<Venue, Integer> {
    Venue findByVenueId(Integer venueId);

    @Query("select v from Venue v join Booking b on b.venue = v where b.bookingDate = ?1")
    Set<Venue> findAllBookedVenuesOnDate(Date bookingDate);
}
