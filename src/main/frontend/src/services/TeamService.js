import axios from 'axios';

const TEAM_API_BASE_URL = "http://localhost:8081/api/addMember/"

class TeamService {

    getTeam() {
        return axios.get(TEAM_API_BASE_URL);   //get the data from the API mentioned
    }

    createTeam(team) {
        console.log('in login user service', team);
        return axios.post(TEAM_API_BASE_URL, team);   //get the data from the API mentioned

    }

    joinTeam(teamId, userId) {
        var req = {
            "teamId": teamId,
            "members": [
                {
                    "userId": userId
                }
            ]
        }
        return axios.put(TEAM_API_BASE_URL, req);
    }


}

export default new TeamService()   //exporting the object of this class