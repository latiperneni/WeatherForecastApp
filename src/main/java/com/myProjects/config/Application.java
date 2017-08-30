package com.myProjects.config;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.xml.ws.Endpoint;


@SpringBootApplication

public class Application {

    public static void main(String[] args) throws Throwable {

        SpringApplication.run(Application.class, args);
    }


}