package com.sdp.sports_management.booking;

import com.sdp.sports_management.bean.Booking;
import com.sdp.sports_management.bean.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Set;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Integer> {
    Set<Booking> findBookingByUser(User user);
}
