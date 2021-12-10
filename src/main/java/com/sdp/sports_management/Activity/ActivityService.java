package com.sdp.sports_management.Activity;

import com.sdp.sports_management.bean.Activity;
import com.sdp.sports_management.Activity.ActivityController;
import com.sdp.sports_management.controller.UserController;
import com.sdp.sports_management.Exception.ResourceNotFoundException;
import com.sdp.sports_management.Activity.ActivityRepository;
import org.apache.logging.log4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.util.ArrayList;
import java.util.List;

@Service
public class ActivityService {

    private final ActivityRepository activityRepository;

    @Autowired
    public ActivityService(ActivityRepository activityRepository) {
        this.activityRepository = activityRepository;
    }
    private static org.slf4j.Logger logger = LoggerFactory.getLogger(ActivityService.class);
    public List<Activity> getAllActivity() {

        List<Activity> activityList= activityRepository.findAll();
        return activityList;    //convert iterable class to List collection and return
    }

    public Activity createActivity(Activity activity)
    {
        System.out.println(activity.toString());
        Activity activity2= activityRepository.save(activity);

        logger.info("[New Activity Created with id] - " + activity2.getActivity_id());
        return activity2;
    }
    public Activity getActivityById(Integer id){

        Activity activity= activityRepository.findById(id).orElseThrow(()
                -> new ResourceNotFoundException("Activity not exists with id:"+id));

        return activity;  //entity is returned along with the status
    }

    public Activity joinActivity(int activity_id) {

        Activity activity = activityRepository.findById(activity_id)
                .orElseThrow(() -> new ResourceNotFoundException("Activity not exist with id :" + activity_id));

        if (activity.getJoinedPlayers() < activity.getNumberOfPlayers()) {
            int new_count= activity.getJoinedPlayers()+1;
            activity.setJoinedPlayers(new_count);

            Activity updatedActivity=activityRepository.save(activity);
            return updatedActivity;
        }
        else
            return null;
    }
}