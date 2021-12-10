package com.sdp.sports_management.Venue;

import com.sdp.sports_management.Activity.ActivityController;
import com.sdp.sports_management.bean.User;
import com.sdp.sports_management.bean.Venue;
import com.sdp.sports_management.Venue.VenueService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins= "*")
@RestController
@RequestMapping("api")
public class VenueController {
    private VenueService venueService;
    private static Logger logger = LoggerFactory.getLogger(ActivityController.class);
    @Autowired
    public VenueController(VenueService theVenueService){
        venueService = theVenueService;
    }
    @GetMapping("/venue")
    public List<Venue> getVenue(){
        return venueService.getVenue();
    }

    @PostMapping("/venue")
    public Venue createVenue(@RequestBody Venue venue)  //mapping the JSON Body tot he object directly
    {
        Venue v= venueService.createVenue(venue);
//        logger.info("[Venue created with venueId] - " + v.getVenue_id());
        return v;
    }
}