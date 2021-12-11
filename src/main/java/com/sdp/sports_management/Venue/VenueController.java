package com.sdp.sports_management.Venue;

import com.sdp.sports_management.Activity.ActivityController;
import com.sdp.sports_management.bean.Venue;
import com.sdp.sports_management.tournament.TournamentDto;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;
import java.util.Set;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api")
public class VenueController {
    private static Logger logger = LoggerFactory.getLogger(ActivityController.class);

    @Resource
    private VenueService venueService;

    @GetMapping("/venue")
    public List<Venue> getVenue() {
        return venueService.getVenue();
    }

    @PostMapping("/venue")
    public Venue createVenue(@RequestBody Venue venue)  //mapping the JSON Body tot he object directly
    {
        return venueService.createVenue(venue);
    }

    @PutMapping("/venue/availableVenues/")
    public Set<VenueDto> getAvailableVenues(@RequestBody TournamentDto request) {
        return venueService.getAvailableVenuesGivenDate(request);
    }
}