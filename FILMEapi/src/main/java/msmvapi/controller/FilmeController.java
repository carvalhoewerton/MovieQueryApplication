package msmvapi.controller;

import msmvapi.model.FilmeOMDB;
import org.springframework.web.bind.annotation.CrossOrigin;
import msmvapi.service.FilmeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/filme")
@RestController
public class FilmeController {

    @Autowired
    private FilmeService service;

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/omdb/{tema}")
    public ResponseEntity<FilmeOMDB> getFilme(@PathVariable String tema){
        try{
            FilmeOMDB filmeOMDB  = service.getFilme(tema);
            return ResponseEntity.status(HttpStatus.OK).body(filmeOMDB);
        } catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }

    }




}
