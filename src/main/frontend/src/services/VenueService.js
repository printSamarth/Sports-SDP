import axios from 'axios';

const AVAILABLE_VENUE_API_BASE_URL="http://localhost:8081/api/venue/availableVenues/"
const Venue_API_BASE_URL = ""
class VenueService {

    getVenue(date) {

        console.log("Caught in service", date);
        return axios.put(AVAILABLE_VENUE_API_BASE_URL, date);   //get the data from the API mentioned
    }

    createVenue(venue) {
        return axios.post(Venue_API_BASE_URL, venue);
    }

    
}
export default new VenueService()   //exporting the object of this class