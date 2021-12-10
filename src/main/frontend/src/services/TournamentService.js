import axios from 'axios';

const TOURNAMENT_API_BASE_URL="http://localhost:8081/api/tournament/save/"
const TOURNAMENT_API_GET_URL = "http://localhost:8081/api/getAllTournaments/"
class TournamentService{

    getTournament()
    {
        return axios.get(TOURNAMENT_API_GET_URL);   //get the data from the API mentioned
    }

    createTournament(tournament)
    {
        console.log('in login user service', tournament);
        return axios.put(TOURNAMENT_API_BASE_URL, tournament);   //get the data from the API mentioned

    }


}
export default new TournamentService()   //exporting the object of this class