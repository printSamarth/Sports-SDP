import axios from 'axios';

const TEAM_API_BASE_URL="abc"
class TeamService{

    getTeam()
    {
        return axios.get(TEAM_API_BASE_URL);   //get the data from the API mentioned
    }

    createTeam(team)
    {
        console.log('in login user service', team);
        return axios.post(TEAM_API_BASE_URL, team);   //get the data from the API mentioned

    }


}
export default new TeamService()   //exporting the object of this class