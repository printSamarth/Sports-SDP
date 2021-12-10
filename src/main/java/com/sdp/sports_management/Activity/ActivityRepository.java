package com.sdp.sports_management.Activity;

import com.sdp.sports_management.bean.Activity;
import com.sdp.sports_management.bean.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ActivityRepository extends JpaRepository<Activity,Integer>  {
}