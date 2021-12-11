package com.sdp.sports_management.Venue;

import com.sdp.sports_management.Exception.ResourceNotFoundException;
import com.sdp.sports_management.bean.Venue;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.Objects;

@Component
public class VenueTransformer {

    @Resource
    private VenueRepository venueRepository;

    public Venue toEntity(VenueDto venueDto) {
        Venue venue = null;
        if (venueDto == null) return venue;
        boolean isNew = Objects.isNull(venueDto.getVenueId());
        if (isNew) {
            venue = new Venue();
        } else {
            venue = venueRepository.findByVenueId(venueDto.getVenueId());
            if (venue == null) throw new ResourceNotFoundException("venueId: " + venueDto.getVenueId());
        }
        venue.setVenueName(venueDto.getVenueName());
        venue.setVenueAddress(venueDto.getVenueAddress());
        venue.setCostPerHour(venueDto.getCostPerHour());
        venue.setImg_link(venueDto.getImageLink());
        venue.setGames(venueDto.getGames());
        if (isNew) venueRepository.save(venue);
        return venue;
    }

    public VenueDto toDto(Venue venue) {
        VenueDto dto = new VenueDto();
        dto.setVenueId(venue.getVenue_id());
        dto.setImageLink(venue.getImg_link());
        dto.setVenueAddress(venue.getVenueAddress());
        dto.setVenueName(venue.getVenueName());
        dto.setGames(venue.getGames());
        dto.setCostPerHour(venue.getCostPerHour());
        return dto;
    }
}
