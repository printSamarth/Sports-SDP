package com.sdp.sports_management.tournament;

import com.sdp.sports_management.Exception.ResourceLimitReachedException;
import com.sdp.sports_management.Exception.ResourceNotFoundException;
import com.sdp.sports_management.Venue.VenueTransformer;
import com.sdp.sports_management.bean.Booking;
import com.sdp.sports_management.bean.Team;
import com.sdp.sports_management.bean.Tournament;
import com.sdp.sports_management.bean.User;
import com.sdp.sports_management.booking.BookingRepository;
import com.sdp.sports_management.repository.UserRepository;
import com.sdp.sports_management.team.TeamTransformer;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Component
public class TournamentTransformer {
    @Resource
    private TeamTransformer teamTransformer;

    @Resource
    private UserRepository userRepository;

    @Resource
    private VenueTransformer venueTransformer;

    @Resource
    private TournamentRepository tournamentRepository;

    @Resource
    private BookingRepository bookingRepository;

    public List<TournamentDto> toDtos(List<Tournament> tournaments) {
        return tournaments.stream().map(this::toDto).collect(Collectors.toList());
    }

    public TournamentDto toDto(Tournament tournament) {
        TournamentDto dto = new TournamentDto();
        dto.setTournamentId(tournament.getTournament_id());
        dto.setGameName(tournament.getGame_name());
        dto.setTeams(teamTransformer.toDtos(tournament.getTeams()));
        dto.setTimeTable(tournament.getTime_table());
        dto.setActivityTime(tournament.getActivityTime());
        dto.setVenue(venueTransformer.toDto(tournament.getVenue()));
        dto.setCreatedUserId(tournament.getCreatedUserId().getUser_id());
        dto.setActivityDate(tournament.getBookingDate());
        dto.setMaxTeams(tournament.getMax_team());
        dto.setTeamCount(tournament.getTeams().size());
        return dto;
    }

    public Tournament toEntity(TournamentDto dto) {
        Tournament tournament = null;
        Booking booking = null;
        if (Objects.nonNull(dto)) {
            boolean isNew = Objects.isNull(dto.getTournamentId());
            if (isNew) {
                tournament = new Tournament();

            } else {
                tournament = tournamentRepository.findByTournamentId(dto.getTournamentId());
                if (tournament == null) {
                    throw new ResourceNotFoundException("Tournament with id: "
                            + dto.getTournamentId() + " not found");
                }
            }
            tournament.setTeams(teamTransformer.toEntities(dto.getTeams()));
            tournament.setGame_name(dto.getGameName());
            tournament.setMax_team(dto.getMaxTeams());
            if (tournament.getTeams() != null && tournament.getTeams().size() > tournament.getMax_team()) {
                throw new ResourceLimitReachedException("Max team limit reached for tournament: " + dto.getTournamentId());
            }
            tournament.setNo_teams(dto.getTeamCount());
            tournament.setTime_table(dto.getTimeTable());
            for (Team team : tournament.getTeams()) {
                team.setTournamentId(tournament);
            }
            User createdUserId = userRepository.findByUserId(dto.getCreatedUserId());
            if (createdUserId == null) throw new ResourceNotFoundException("createdUserId: " + dto.getCreatedUserId());
            tournament.setCreatedUserId(createdUserId);
            tournament.setVenue(venueTransformer.toEntity(dto.getVenue()));
            tournament.setBookingDate(dto.getActivityDate());
            tournament.setActivityTime(dto.getActivityTime());
            if (isNew) {
                //If new tournament then do booking.
                booking = new Booking(createdUserId, tournament.getVenue(), tournament.getBookingDate(), tournament);
                bookingRepository.save(booking);
            }
        }
        return tournament;
    }

}
