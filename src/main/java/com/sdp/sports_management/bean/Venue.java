
package com.sdp.sports_management.bean;

import java.sql.Time;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import javax.persistence.*;

@Entity
@Table
public class Slots {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int slot_id;

    @Column
    private Time start_time;

    @Column
    private Time end_time;

    @Column
    private int grounds;

    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "slots")
    private Set<Venue> venues = new HashSet<>();



    public Slots(){}

    public Slots(Time start_time, Time end_time, Integer grounds) {
        this.start_time = start_time;
        this.end_time = end_time;
        this.grounds = grounds;
    }

    public int getGrounds() {
        return grounds;
    }

    public void setGrounds(int grounds) {
        this.grounds = grounds;
    }

    public int getSlot_id() {
        return slot_id;
    }

    public void setSlot_id(int slot_id) {
        this.slot_id = slot_id;
    }

    public Time getStart_time() {
        return start_time;
    }

    public void setStart_time(Time start_time) {
        this.start_time = start_time;
    }

    public Time getEnd_time() {
        return end_time;
    }

    public void setEnd_time(Time end_time) {
        this.end_time = end_time;
    }
}