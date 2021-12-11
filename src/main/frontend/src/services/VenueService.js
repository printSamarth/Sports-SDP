import axios from 'axios';

const Venue_API_BASE_URL="http://localhost:8081/api/venue"
class VenueService{

    getVenue()
    {
        return axios.get(Venue_API_BASE_URL);   //get the data from the API mentioned
       
    }

}
export default new VenueService()   //exporting the object of this class