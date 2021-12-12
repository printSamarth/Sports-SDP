package com.sdp.sports_management.booking;

import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.Set;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api")
public class BookingController {
    @Resource
    private BookingService bookingService;

    @GetMapping("/booking/getBookingsForUser/{userId}")
    public Set<BookingDto> getBookingsForUser(@PathVariable("userId") Integer userId){
        return bookingService.getBookingsForUser(userId);
    }

}
