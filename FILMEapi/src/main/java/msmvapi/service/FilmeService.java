package msmvapi.service;

import msmvapi.infra.FilmeClientOMDBFeing;
import msmvapi.model.FilmeOMDB;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class FilmeService {

    @Value("${imdb.apikey}")
    private String apiKey;

    @Autowired
    private FilmeClientOMDBFeing client;


    public FilmeOMDB getFilme(String tema){
        return client.getFilme(tema, apiKey);
    }




}
