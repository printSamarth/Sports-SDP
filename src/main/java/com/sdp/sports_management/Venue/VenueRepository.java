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

    @Query("select v from Venue v left outer join Tournament t on t.venue = v where t.bookingDate <> ?1")
    Set<Venue> findVenueByBookingDateNotEquals(Date bookingDate);
}
