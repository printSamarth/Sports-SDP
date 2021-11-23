package com.sdp.sports_management.bean;


import javax.persistence.*;
import java.util.List;

@Entity
@Table
public class Tournament {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int tournament_id;
    @Column
    private String game_name;
    @Column
    private int no_teams;
    @Column
    private String time_table;
    @Column
    private int max_team;

    @OneToMany(mappedBy = "team_id",
            fetch = FetchType.EAGER,
            cascade = CascadeType.ALL)
    private List<Teams>  teams;

    public int getTournament_id() {
        return tournament_id;
    }

    public void setTournament_id(int tournament_id) {
        this.tournament_id = tournament_id;
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

    public List<Teams> getTeams() {
        return teams;
    }

    public void setTeams(List<Teams> teams) {
        this.teams = teams;
    }
}
