package com.sdp.sports_management.booking;

import java.util.Set;

public interface BookingService {
    Set<BookingDto> getBookingsForUser(Integer userId);
}
