package com.sdp.sports_management.tournament;

import com.sdp.sports_management.team.TeamDto;

import java.util.List;
import java.util.Objects;

public class TournamentDto {
    private Integer tournamentId;
    private String timeTable;
    private String gameName;
    private List<TeamDto> teams;
    private Integer maxTeams;
    private Integer teamCount;

    public Integer getTeamCount() {
        return teamCount;
    }

    public void setTeamCount(Integer teamCount) {
        this.teamCount = teamCount;
    }

    public Integer getMaxTeams() {
        return maxTeams;
    }

    public void setMaxTeams(Integer maxTeams) {
        this.maxTeams = maxTeams;
    }

    public String getTimeTable() {
        return timeTable;
    }

    public void setTimeTable(String timeTable) {
        this.timeTable = timeTable;
    }

    public String getGameName() {
        return gameName;
    }

    public void setGameName(String gameName) {
        this.gameName = gameName;
    }

    public List<TeamDto> getTeams() {
        return teams;
    }

    public void setTeams(List<TeamDto> teams) {
        this.teams = teams;
    }

    public Integer getTournamentId() {
        return tournamentId;
    }

    public void setTournamentId(Integer tournamentId) {
        this.tournamentId = tournamentId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TournamentDto that = (TournamentDto) o;
        return Objects.equals(tournamentId, that.tournamentId) && Objects.equals(timeTable, that.timeTable) && Objects.equals(gameName, that.gameName) && Objects.equals(teams, that.teams);
    }

    @Override
    public int hashCode() {
        return Objects.hash(tournamentId, timeTable, gameName, teams);
    }
}
