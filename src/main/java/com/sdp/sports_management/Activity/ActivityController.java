package com.sdp.sports_management.Activity;

import com.sdp.sports_management.bean.Activity;
import com.sdp.sports_management.Activity.ActivityService;
import org.apache.logging.log4j.LogManager;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins= "*")
@RestController
@RequestMapping("/api/")
public class ActivityController {

    private ActivityService activityService;

    @Autowired
    public ActivityController(ActivityService activityService) {
        this.activityService = activityService;
    }
    private static Logger logger = LoggerFactory.getLogger(ActivityController.class);
    @GetMapping("/activity")
    public List<Activity> getAllActivity() {
        return activityService.getAllActivity();
    }


    @PostMapping("/activity")
    public Activity createActivity(@RequestBody Activity activity)  //mapping the JSON Body tot he object directly
    {
        System.out.println(activity.getActivityTime());
        System.out.println( activity.getActivityDate());
        System.out.println(activity.getVenue_id());

        return activityService.createActivity(activity);
    }

    @GetMapping("/activity/{id}")
    public ResponseEntity<Activity> getActivityById(@PathVariable Integer id) {
        Activity activity = activityService.getActivityById(id);
        if(activity!=null) {
            return ResponseEntity.ok(activity);
        }
        return null;
    }

    @PutMapping("/activity/join/{activity_id}")
    public ResponseEntity<Activity> joinActivity( @PathVariable Integer activity_id)
    {

        System.out.println(activity_id);
        Activity updatedActivity= activityService.joinActivity(activity_id);

        if(updatedActivity!=null) {
            logger.info("[User joined the activity] - " + updatedActivity.getActivity_id());
            return ResponseEntity.ok(updatedActivity);
        }
        else
            return null;
//              logger.warn("[Maximum limit reached for activity] - " + updatedActivity.getActivity_id());

    }

}
