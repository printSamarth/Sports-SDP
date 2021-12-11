package com.sdp.sports_management.Venue;

import com.sdp.sports_management.bean.Venue;
import com.sdp.sports_management.tournament.TournamentDto;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Service
public class VenueServiceImpl implements VenueService {

    private static Logger logger = LoggerFactory.getLogger(VenueServiceImpl.class);

    @Resource
    private VenueRepository venueRepository;

    @Resource
    private VenueTransformer venueTransformer;

    @Override
    public List<Venue> getVenue() {
        List<Venue> venueList = new ArrayList<>();
        venueRepository.findAll().forEach(venueList::add);
        return venueList;
    }

    @Override
    public Venue createVenue(Venue venue) {
        return venueRepository.save(venue);
    }

    @Override
    @Transactional(readOnly = true)
    public Set<VenueDto> getAvailableVenuesGivenDate(TournamentDto request) {
        Set<Venue> venues = venueRepository.findVenueByBookingDateNotEquals(request.getActivityDate());
        return venueTransformer.toDtos(venues);
    }
}