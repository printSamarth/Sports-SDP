package com.sdp.sports_management.Activity;

import com.sdp.sports_management.Venue.VenueTransformer;
import com.sdp.sports_management.bean.Activity;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;

@Component
public class ActivityTransformer {

    @Resource
    private VenueTransformer venueTransformer;

    public ActivityDto toDto(Activity activity) {
        if (activity == null) {
            return new ActivityDto();
        }
        ActivityDto dto = new ActivityDto();
        dto.setActivityId(activity.getActivity_id());
        dto.setActivityDate(activity.getActivityDate().toString());
        dto.setActivityTime(activity.getActivityTime());
        dto.setOpen(activity.isOpen());
        dto.setVenueDto(venueTransformer.toDto(activity.getVenue_id()));
        dto.setChargesPerPerson((float) activity.getChargesPerPerson());
        dto.setCreatorUserId(activity.getCreatorUserId());
        dto.setSportName(activity.getSportName());
        dto.setNumberOfPlayers(activity.getNumberOfPlayers());
        return dto;
    }
}
