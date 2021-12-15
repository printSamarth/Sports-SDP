import axios from 'axios';

const Booking_API_GET_BOOKINGBYUSER_URL="http://localhost:8081/api/booking/getBookingsForUser"
const Booking_API_BASE_URL="http://127.0.0.1:8081/api/booking"
class BookingService{

    getBookingByUser(UserId)
    {
        return axios.get(Booking_API_GET_BOOKINGBYUSER_URL + '/' + UserId);   //get the data from the API mentioned
    }

    // createBooking(booking){
    //     return axios.post(Booking_API_BASE_URL , booking);
    // }
    
}
export default new BookingService()   //exporting the object of this class