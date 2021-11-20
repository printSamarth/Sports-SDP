package com.sdp.sports_management.bean;




import javax.persistence.*;
import java.sql.Date;
import java.sql.Time;


@Entity
@Table
public class Activity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int activity_id;

    @Column
    private String sportName;
    @Column
    private Date activityDate;



    @Column
    private String activityTime;


    @Column
    private int numberOfPlayers;
    @Column
    private int chargesPerPerson;
    @Column
    private int joinedPlayers;



    @Column
    private int creatorUserId;


    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "venue_id")
    private Venue venue_id;

    public int getActivity_id() {
        return activity_id;
    }

    public void setActivity_id(int activity_id) {
        this.activity_id = activity_id;
    }

    public String getSportName() {
        return sportName;
    }

    public void setSportName(String sportName) {
        this.sportName = sportName;
    }

    public Date getActivityDate() {
        return activityDate;
    }

    public void setActivityDate(Date activityDate) {
        this.activityDate = activityDate;
    }


    public int getNumberOfPlayers() {
        return numberOfPlayers;
    }

    public void setNumberOfPlayers(int numberOfPlayers) {
        this.numberOfPlayers = numberOfPlayers;
    }

    public int getChargesPerPerson() {
        return chargesPerPerson;
    }

    public void setChargesPerPerson(int chargesPerPerson) {
        this.chargesPerPerson = chargesPerPerson;
    }




    public int getJoinedPlayers() {
        return joinedPlayers;
    }

    public void setJoinedPlayers(int joinedPlayers) {
        this.joinedPlayers = joinedPlayers;
    }

    public int getCreatorUserId() {
        return creatorUserId;
    }

    public void setCreatorUserId(int creatorUserId) {
        this.creatorUserId = creatorUserId;
    }

    public Venue getVenue_id() {
        return venue_id;
    }

    public void setVenue_id(Venue venue_id) {
        this.venue_id = venue_id;
    }

    public String getActivityTime() {
        return activityTime;
    }

    public void setActivityTime(String activityTime) {
        this.activityTime = activityTime;
    }

    public Activity() {
    }

    public Activity(String sportName, Date activityDate, String activityTime, int numberOfPlayers, int chargesPerPerson, int joinedPlayers, int creatorUserId, Venue venue_id) {
        this.sportName = sportName;
        this.activityDate = activityDate;
        this.activityTime = activityTime;
        this.numberOfPlayers = numberOfPlayers;
        this.chargesPerPerson = chargesPerPerson;
        this.joinedPlayers = joinedPlayers;
        this.creatorUserId = creatorUserId;
        this.venue_id = venue_id;
    }
}
