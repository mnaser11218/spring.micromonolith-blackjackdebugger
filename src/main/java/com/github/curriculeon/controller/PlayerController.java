package com.github.curriculeon.controller;

import com.github.curriculeon.model.Player;
import com.github.curriculeon.service.PlayerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RequestMapping(value = "/player-controller")
@RestController
public class PlayerController {
    PlayerService playerService;
    @Autowired
    public PlayerController(PlayerService playerService){
        this.playerService = playerService;
    }

    @RequestMapping(value="/read-all", method= RequestMethod.GET)
    public ResponseEntity<List<Player>>readAll(){
        return null;
    }
    @RequestMapping(value="/create", method=RequestMethod.POST)
    public ResponseEntity<Player> createPlayer(@RequestBody Player player){
       Player responseBody  = this.playerService.create(player);
       ResponseEntity responseEntity = new ResponseEntity(responseBody, HttpStatus.OK);

        return responseEntity;
    }


}
