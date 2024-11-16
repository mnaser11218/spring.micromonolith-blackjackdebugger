package com.github.curriculeon.controller;

import com.github.curriculeon.model.BlackJackPlayerState;
import com.github.curriculeon.service.BlackJackPlayerStateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RequestMapping(value = "/player-controller")
@RestController
public class BlackJackPlayerController {
    BlackJackPlayerStateService blackJackPlayerStateService;
    @Autowired
    public BlackJackPlayerController(BlackJackPlayerStateService blackJackPlayerStateService){
        this.blackJackPlayerStateService = blackJackPlayerStateService;
    }

    @RequestMapping(value="/read-all", method= RequestMethod.GET)
    public ResponseEntity<List<BlackJackPlayerState>>readAll(){
         List<BlackJackPlayerState> responseBody = this.blackJackPlayerStateService.getAll();
         ResponseEntity responseEntity = new ResponseEntity(responseBody, HttpStatus.OK);
         return responseEntity;


    }
    @RequestMapping(value="/create", method=RequestMethod.POST)
    public ResponseEntity<BlackJackPlayerState> createPlayer(@RequestBody BlackJackPlayerState player){
        BlackJackPlayerState responseBody  = this.blackJackPlayerStateService.create(player);
       ResponseEntity responseEntity = new ResponseEntity(responseBody, HttpStatus.OK);

        return responseEntity;
    }


}
