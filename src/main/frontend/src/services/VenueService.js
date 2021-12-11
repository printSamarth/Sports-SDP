import axios from 'axios';

const Venue_API_BASE_URL="http://localhost:8081/api/venue"
class VenueService {

    getVenue() {

        console.log("Caught in service");
        return axios.get(Venue_API_BASE_URL);   //get the data from the API mentioned
    }

    createVenue(venue) {
        return axios.post(Venue_API_BASE_URL, venue);
    }

    // getUserById(userId){
    //     return axios.get(USER_API_BASE_URL + '/' + userId);
    // }

    // updateUser(user, userId){
    //     return axios.put(USER_API_BASE_URL + '/' + userId, user);
    // }

    // deleteUser(userId){
    //     return axios.delete(USER_API_BASE_URL + '/' + userId);
    // }
}
export default new VenueService()   //exporting the object of this class