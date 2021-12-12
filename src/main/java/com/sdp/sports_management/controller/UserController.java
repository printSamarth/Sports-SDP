package com.sdp.sports_management.controller;

import com.sdp.sports_management.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import com.sdp.sports_management.bean.User;
// import com.iiitb.sportitup.service.ActivityService;
// import com.iiitb.sportitup.service.UserService;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api")
public class UserController {

    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    private static Logger logger = LoggerFactory.getLogger(UserController.class);

    @GetMapping("/user")
    public List<User> getUsers() {
        return userService.getUsers();
    }


    @PostMapping("/user")
    public User createUser(@RequestBody User user)  //mapping the JSON Body tot he object directly
    {
        User u = userService.createUser(user);
        logger.info("[New user created with id] - " + u.getUser_id());
        return u;

    }


    @GetMapping("/user/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Integer id) {
        return userService.getUserById(id);

    }

    @PutMapping("/user/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Integer id, @RequestBody User user) {
        return userService.updateUser(id, user);
    }

    @PostMapping("/user/login")
    @Transactional(readOnly = true)
    public ResponseEntity<User> login(@RequestBody User user) {


        String email = user.getEmailId();
        String pass = user.getPassword();
        System.out.println("email" + email + " " + pass);
        User loggedIn = userService.getUserByEmailId(email);
        //System.out.println("Size" + li.size());

        if (loggedIn.getEmailId().equals(email) && loggedIn.getPassword().equals(pass)) {
            System.out.println("Password Matched");
            logger.info("[Login by user with id] - " + loggedIn.getUser_id());

//               System.out.println("flag after:"+ check.isLog_status());
            loggedIn.setTeamId(null);
            return ResponseEntity.ok(loggedIn);
        } else {
//            logger.error("[Login by user failed] ");
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }


    }
}
