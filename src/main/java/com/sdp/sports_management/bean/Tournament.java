package com.sdp.sports_management.bean;


import javax.persistence.*;
import java.sql.Date;
import java.util.List;

@Entity
@Table
public class Tournament {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int tournamentId;
    @Column
    private String game_name;
    @Column
    private int no_teams;
    @Column
    private String time_table;
    @Column
    private int max_team;

    @ManyToOne
    @JoinColumn(name = "created_user_id")
    private User createdUserId;

    @ManyToOne
    @JoinColumn(name = "venue_id")
    private Venue venue;

    @Column
    private String activityTime;

    @Column
    private Date bookingDate;

    @OneToMany(mappedBy = "teamId",
            fetch = FetchType.EAGER,
            cascade = CascadeType.ALL)
    private List<Team> teams;

    public String getActivityTime() {
        return activityTime;
    }

    public void setActivityTime(String activityTime) {
        this.activityTime = activityTime;
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

    public int getTournamentId() {
        return tournamentId;
    }

    public void setTournamentId(int tournamentId) {
        this.tournamentId = tournamentId;
    }

    public User getCreatedUserId() {
        return createdUserId;
    }

    public void setCreatedUserId(User createdUserId) {
        this.createdUserId = createdUserId;
    }

    public int getTournament_id() {
        return tournamentId;
    }

    public void setTournament_id(int tournament_id) {
        this.tournamentId = tournament_id;
    }

    public String getGame_name() {
        return game_name;
    }

    public void setGame_name(String game_name) {
        this.game_name = game_name;
    }

    public int getNo_teams() {
        return no_teams;
    }

    public void setNo_teams(int no_teams) {
        this.no_teams = no_teams;
    }

    public String getTime_table() {
        return time_table;
    }

    public void setTime_table(String time_table) {
        this.time_table = time_table;
    }

    public int getMax_team() {
        return max_team;
    }

    public void setMax_team(int max_team) {
        this.max_team = max_team;
    }

    public List<Team> getTeams() {
        return teams;
    }

    public void setTeams(List<Team> teams) {
        this.teams = teams;
    }
}
