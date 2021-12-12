package com.sdp.sports_management.booking;

import com.sdp.sports_management.Exception.ResourceNotFoundException;
import com.sdp.sports_management.bean.Booking;
import com.sdp.sports_management.bean.User;
import com.sdp.sports_management.repository.UserRepository;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.Set;

@Service
public class BookingServiceImpl implements BookingService {

    @Resource
    private BookingRepository bookingRepository;

    @Resource
    private UserRepository userRepository;

    @Resource
    private BookingTransformer bookingTransformer;

    @Override
    public Set<BookingDto> getBookingsForUser(Integer userId) {
        User user = userRepository.findByUserId(userId);
        if (user == null) throw new ResourceNotFoundException("User not found: " + userId);
        Set<Booking> bookings = bookingRepository.findBookingByUser(user);
        return bookingTransformer.toDtos(bookings);
    }
}
