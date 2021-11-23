package com.sdp.sports_management.bean;

@Entity
@Table
public class Team {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int team_id;
    @Column
    private String team_name;
    @Column
    private String game_name;

    @OneToMany(mappedBy = "userId",
            fetch = FetchType.EAGER,
            cascade = CascadeType.ALL)
    private List<User>  members;

    public String getTeam_name() {
        return team_name;
    }

    public void setTeam_name(String team_name) {
        this.team_name = team_name;
    }

    public String getGame_name() {
        return game_name;
    }

    public void setGame_name(String game_name) {
        this.game_name = game_name;
    }

    public List<User> getMembers() {
        return members;
    }

    public void setMembers(List<User> members) {
        this.members = members;
    }

    public int getTeam_id() {
        return team_id;
    }
