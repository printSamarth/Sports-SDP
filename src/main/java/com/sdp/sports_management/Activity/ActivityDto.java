package com.sdp.sports_management.Activity;

import com.sdp.sports_management.Venue.VenueDto;

public class ActivityDto {
    private Integer activityId;
    private String sportName;
    private String activityDate;
    private String activityTime;
    private Integer numberOfPlayers;
    private Float chargesPerPerson;
    private boolean open;
    private VenueDto venueDto;
    private Integer creatorUserId;

    public Integer getActivityId() {
        return activityId;
    }

    public void setActivityId(Integer activityId) {
        this.activityId = activityId;
    }

    public String getSportName() {
        return sportName;
    }

    public void setSportName(String sportName) {
        this.sportName = sportName;
    }

    public String getActivityDate() {
        return activityDate;
    }

    public void setActivityDate(String activityDate) {
        this.activityDate = activityDate;
    }

    public String getActivityTime() {
        return activityTime;
    }

    public void setActivityTime(String activityTime) {
        this.activityTime = activityTime;
    }

    public Integer getNumberOfPlayers() {
        return numberOfPlayers;
    }

    public void setNumberOfPlayers(Integer numberOfPlayers) {
        this.numberOfPlayers = numberOfPlayers;
    }

    public Float getChargesPerPerson() {
        return chargesPerPerson;
    }

    public void setChargesPerPerson(Float chargesPerPerson) {
        this.chargesPerPerson = chargesPerPerson;
    }

    public boolean isOpen() {
        return open;
    }

    public void setOpen(boolean open) {
        this.open = open;
    }

    public VenueDto getVenueDto() {
        return venueDto;
    }

    public void setVenueDto(VenueDto venueDto) {
        this.venueDto = venueDto;
    }

    public Integer getCreatorUserId() {
        return creatorUserId;
    }

    public void setCreatorUserId(Integer creatorUserId) {
        this.creatorUserId = creatorUserId;
    }
}
