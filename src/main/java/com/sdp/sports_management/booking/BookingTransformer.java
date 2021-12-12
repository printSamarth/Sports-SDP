package com.sdp.sports_management.booking;

import com.sdp.sports_management.Activity.ActivityTransformer;
import com.sdp.sports_management.bean.Booking;
import com.sdp.sports_management.tournament.TournamentTransformer;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;
import java.util.stream.Collectors;

@Component
public class BookingTransformer {

    @Resource
    private TournamentTransformer tournamentTransformer;

    @Resource
    private ActivityTransformer activityTransformer;

    public Set<BookingDto> toDtos(Set<Booking> bookings) {
        if (bookings == null) return new HashSet<>();
        return bookings.stream().map(this::toDto).collect(Collectors.toSet());
    }

    public BookingDto toDto(Booking booking) {
        if (booking == null) return new BookingDto();
        BookingDto bookingDto = new BookingDto();
        if (Objects.nonNull(booking.getActivityId())) {
            bookingDto.setActivityDto(activityTransformer.toDto(booking.getActivityId()));
        } else if (Objects.nonNull(booking.getTournamentId())) {
            bookingDto.setTournamentDto(tournamentTransformer.toDto(booking.getTournamentId()));
        }
        return bookingDto;
    }
}
