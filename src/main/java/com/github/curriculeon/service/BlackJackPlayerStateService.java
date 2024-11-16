package com.github.curriculeon.service;

import com.github.curriculeon.model.BlackJackPlayerState;
import com.github.curriculeon.repository.BlackJackPlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BlackJackPlayerStateService {
    BlackJackPlayerRepository blackJackPlayerRepository;
    @Autowired
    public BlackJackPlayerStateService(BlackJackPlayerRepository blackJackPlayerRepository) {
        this.blackJackPlayerRepository = blackJackPlayerRepository;
    }

    public BlackJackPlayerState create(BlackJackPlayerState player) {
        BlackJackPlayerState playerCreated = blackJackPlayerRepository.save(player);
        return player;
    }

    public List<BlackJackPlayerState> getAll() {
     List<BlackJackPlayerState> blackJackPlayerStates = new ArrayList<>();
    blackJackPlayerRepository.findAll().forEach(blackJackPlayerStates::add);
    return blackJackPlayerStates;
    }
}
