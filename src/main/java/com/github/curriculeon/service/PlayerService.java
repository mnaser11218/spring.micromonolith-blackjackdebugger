package com.github.curriculeon.service;

import com.github.curriculeon.model.Person;
import com.github.curriculeon.model.Player;
import com.github.curriculeon.repository.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PlayerService {
    PlayerRepository playerRepository;
    @Autowired
    public PlayerService(PlayerRepository playerRepository) {
        this.playerRepository = playerRepository;
    }

    public Player create(Player player) {
        Player playerCreated = playerRepository.save(player);
        return player;
    }
}
