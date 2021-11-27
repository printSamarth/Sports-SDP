import axios from 'axios';

const TOURNAMENT_API_BASE_URL="http://localhost:8081/api/tournament"

const TOURNAMENT_API_BASE_URL_JOIN="http://localhost:8081/api/tournament/join"

class TournamentService{

    getTournament()
    {
        return axios.get(TOURNAMENT_API_BASE_URL);   //get the data from the API mentioned
    }

    createTournament(tournament)
    {
        console.log('in create Tournament service', tournament.sportName);
        return axios.post(TOURNAMENT_API_BASE_URL, tournament);
    }

    getTournamentById(tournamentId){
        return axios.get(TOURNAMENT_API_BASE_URL + '/' + tournamentId);
    }

    joinTournament(tournament_id,user_id)
    {
        console.log(tournament_id)
        console.log(user_id)
        return axios.put(TOURNAMENT_API_BASE_URL_JOIN+'/'+ tournament_id)
    }
    // getUserById(userId){
    //     return axios.get(Tournament_API_BASE_URL + '/' + userId);
    // }

    // updateUser(user, userId){
    //     return axios.put(Tournament_API_BASE_URL + '/' + userId, user);
    // }

    // deleteUser(userId){
    //     return axios.delete(USER_API_BASE_URL + '/' + userId);
    // }


}
export default new TournamentService()   //exporting the object of this class