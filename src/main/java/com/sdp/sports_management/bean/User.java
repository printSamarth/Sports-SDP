package com.sdp.sports_management.bean;

import javax.persistence.*;
import java.util.List;

@Entity
@Table
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int userId;

    @Column
    private String firstName;

    @Column
    private String lastName;

    @ManyToOne
    @JoinColumn(name = "team_id")
    private Team teamId;

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    @Column(length = 50, nullable = false, unique = true)
    private String emailId;

    @Column(length = 10)
    private Integer contactNumber;

    @Column(length = 50, nullable = false)
    private String password;


    @Column(columnDefinition = "boolean default false")
    private Boolean isAdminFlag; //0-> user   1->Admin


    public int getUser_id() {
        return userId;
    }

    public void setUser_id(int user_id) {
        this.userId = user_id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }


    public Integer getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(Integer contactNumber) {
        this.contactNumber = contactNumber;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Boolean getAdminFlag() {
        return isAdminFlag;
    }

    public void setAdminFlag(Boolean adminFlag) {
        isAdminFlag = adminFlag;
    }

    public Team getTeamId() {
        return teamId;
    }

    public void setTeamId(Team teamId) {
        this.teamId = teamId;
    }

    public User(String firstName, String lastName, String emailId, Integer contactNumber, String password, Boolean isAdminFlag) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailId = emailId;
        this.contactNumber = contactNumber;
        this.password = password;
        this.isAdminFlag = isAdminFlag;
    }

    public User() {
    }

}