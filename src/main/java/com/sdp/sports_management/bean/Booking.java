package com.sdp.sports_management.bean;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int bookingId;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "userId")
    private User user;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "venue_id")
    private Venue venue;

//    @ManyToOne
//    private Venue venue;

    @Column
    private Date bookingDate;

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "tournament_id")
    private Tournament tournamentId;
//    @Column
//    private Time booking_time;
    public Booking(){}

    public Booking(User user, Venue venue, Date bookingDate, Tournament tournamentId) {
        this.user = user;
        this.venue = venue;
        this.bookingDate = bookingDate;
        this.tournamentId = tournamentId;
//        this.booking_time = booking_time;

    }

    public int getBookingId() {
        return bookingId;
    }

    public void setBookingId(int bookingId) {
        this.bookingId = bookingId;
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

    public Date getBookingDate() {
        return bookingDate;
    }

    public void setBookingDate(Date bookingDate) {
        this.bookingDate = bookingDate;
    }

//    public Time getBooking_time() {
//        return booking_time;
//    }

//    public void setBooking_time(Time booking_time) {
//        this.booking_time = booking_time;
//    }

    public Tournament getTournamentId() {
        return tournamentId;
    }

    public void setTournamentId(Tournament tournamentId) {
        this.tournamentId = tournamentId;
    }
}
