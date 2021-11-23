package com.sdp.sports_management.bean;

import javax.persistence.*;
import java.sql.Date;
import java.sql.Time;

@Entity
@Table
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int booking_id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "userId")
    private User user;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "venue_id")
    private Venue venue;

//    @ManyToOne
//    private Venue venue;

    @Column
    private Date booking_date;

    @Column
    private int tournament_id;
//    @Column
//    private Time booking_time;

    @Column
    private int slot;
    public Booking(){}

    public Booking(User user, Venue venue, Date booking_date, int slot) {
        this.user = user;
        this.venue = venue;
        this.booking_date = booking_date;
//        this.booking_time = booking_time;
        this.slot = slot;
    }

    public int getBooking_id() {
        return booking_id;
    }

    public void setBooking_id(int booking_id) {
        this.booking_id = booking_id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Venue getVenue() {
        return venue;
    }

    public void setVenue(Venue venue) {
        this.venue = venue;
    }

    public Date getBooking_date() {
        return booking_date;
    }

    public void setBooking_date(Date booking_date) {
        this.booking_date = booking_date;
    }

//    public Time getBooking_time() {
//        return booking_time;
//    }

//    public void setBooking_time(Time booking_time) {
//        this.booking_time = booking_time;
//    }

    public int getSlot() {
        return slot;
    }

    public void setSlot(int slot) {
        this.slot = slot;
    }

    public int getTournament_id() {
        return tournament_id;
    }

    public void setTournament_id(int tournament_id) {
        this.tournament_id = tournament_id;
    }
}
