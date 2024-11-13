package com.github.curriculeon.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
@Entity
public class Card {
    @Id
    @GeneratedValue
    private Long id;
    private String rank;
    private String suit;

    public Card() {
    }

    public Card(String rank, String suit) {
        this.rank = rank;
        this.suit = suit;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRank() {
        return rank;
    }

    public void setRank(String rank) {
        this.rank = rank;
    }

    public String getSuit() {
        return suit;
    }

    public void setSuit(String suit) {
        this.suit = suit;
    }
}
