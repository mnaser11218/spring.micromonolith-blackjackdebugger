package com.github.curriculeon.model;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;

public class Player {
    @Id
    @GeneratedValue
    private Long id;
    private String name;

    public Player() {
    }

    public Player(String name) {
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
