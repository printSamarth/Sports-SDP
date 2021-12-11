package com.sdp.sports_management.Venue;

public class VenueDto {
    private Integer venueId;
    private String venueName;
    private String venueAddress;
    private Float costPerHour;
    private String games;
    private String imageLink;

    public Integer getVenueId() {
        return venueId;
    }

    public void setVenueId(Integer venueId) {
        this.venueId = venueId;
    }

    public String getVenueName() {
        return venueName;
    }

    public void setVenueName(String venueName) {
        this.venueName = venueName;
    }

    public String getVenueAddress() {
        return venueAddress;
    }

    public void setVenueAddress(String venueAddress) {
        this.venueAddress = venueAddress;
    }

    public Float getCostPerHour() {
        return costPerHour;
    }

    public void setCostPerHour(Float costPerHour) {
        this.costPerHour = costPerHour;
    }

    public String getGames() {
        return games;
    }

    public void setGames(String games) {
        this.games = games;
    }

    public String getImageLink() {
        return imageLink;
    }

    public void setImageLink(String imageLink) {
        this.imageLink = imageLink;
    }
}
