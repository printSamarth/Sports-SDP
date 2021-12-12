package com.sdp.sports_management.booking;

import com.sdp.sports_management.Activity.ActivityDto;
import com.sdp.sports_management.tournament.TournamentDto;

public class BookingDto {
    private TournamentDto tournamentDto;
    private ActivityDto activityDto;

    public TournamentDto getTournamentDto() {
        return tournamentDto;
    }

    public void setTournamentDto(TournamentDto tournamentDto) {
        this.tournamentDto = tournamentDto;
    }

    public ActivityDto getActivityDto() {
        return activityDto;
    }

    public void setActivityDto(ActivityDto activityDto) {
        this.activityDto = activityDto;
    }
}
