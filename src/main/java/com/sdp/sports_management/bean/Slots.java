package com.sdp.sports_management.bean;

import javax.persistence.*;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table
public class Venue {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int venue_id;
    @Column
    private String venueName;
    @Column
    private String venueAddress;
    @Column
    private float costPerHour;
    @Column
    private String games;
    @Column
    private String img_link;


    @OneToMany(mappedBy = "venue",
            fetch = FetchType.EAGER,
            cascade = CascadeType.ALL)
    private List<Booking> bookings;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "venue_slots",
            joinColumns = {@JoinColumn(name ="venue_id")},
            inverseJoinColumns = {@JoinColumn(name = "slot_id")}
    )
    private Set<Slots> slots= new HashSet<>();


    public Venue(){}

    public Venue(String venueName, String venueAddress, float costPerHour, String games, String img_link) {
        this.venueName = venueName;
        this.venueAddress = venueAddress;
        this.costPerHour = costPerHour;
        this.games = games;
        this.img_link = img_link;
    }

    public int getVenue_id() {
        return venue_id;
    }

    public void setVenue_id(int venue_id) {
        this.venue_id = venue_id;
    }

    public Set<Slots> getSlots() {
        return slots;
    }

    public void setSlots(Set<Slots> slots) {
        this.slots = slots;
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

    public float getCostPerHour() {
        return costPerHour;
    }

    public void setCostPerHour(float costPerHour) {
        this.costPerHour = costPerHour;
    }

    public String getGames() {
        return games;
    }

    public void setGames(String games) {
        this.games = games;
    }

    public String getImg_link() {
        return img_link;
    }

    public void setImg_link(String img_link) {
        this.img_link = img_link;
    }
}
