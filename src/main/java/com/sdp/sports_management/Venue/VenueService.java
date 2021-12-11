package com.sdp.sports_management.Venue;

import com.sdp.sports_management.bean.Venue;
import com.sdp.sports_management.tournament.TournamentDto;

import java.util.List;
import java.util.Set;

public interface VenueService {
    List<Venue> getVenue();

    public Venue createVenue(Venue venue);

    Set<VenueDto> getAvailableVenuesGivenDate(TournamentDto request);
}
