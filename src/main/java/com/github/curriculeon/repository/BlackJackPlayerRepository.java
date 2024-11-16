package com.github.curriculeon.repository;

import com.github.curriculeon.model.BlackJackPlayerState;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BlackJackPlayerRepository extends CrudRepository<BlackJackPlayerState, Long> {
}
