package com.sdp.sports_management.repository;


import com.sdp.sports_management.bean.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    @Query(value = "SELECT * FROM user u WHERE u.email_id=:emailid", nativeQuery = true)
    public User findByEmailId(@Param("emailid") String emailid);

    @Query(value = "SELECT u.user_id, u.email_id FROM user u", nativeQuery = true)
    public List<String> getAllUser();
    User findByUserId(Integer userId);
}
