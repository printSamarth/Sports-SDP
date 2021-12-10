package com.sdp.sports_management.Venue;

import com.sdp.sports_management.bean.Venue;
import com.sdp.sports_management.Activity.ActivityController;
import com.sdp.sports_management.Venue.VenueRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class VenueService {
    private final VenueRepository venueRepository;

    private static Logger logger = LoggerFactory.getLogger(VenueService.class);
    @Autowired
    public VenueService(VenueRepository theVenueRepository){
        venueRepository = theVenueRepository;

    }
    public List<Venue> getVenue(){
        List<Venue> venueList = new ArrayList<>();
        venueRepository.findAll().forEach(venueList::add);
        return venueList;
    }

    public Venue createVenue(Venue venue) {
        return venueRepository.save(venue);
    }
}