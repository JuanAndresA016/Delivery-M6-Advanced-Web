package web_delivery.formApi.controller;

import org.springframework.web.bind.annotation.RestController;
import java.util.Map;

import web_delivery.formApi.services.HelloWorldServices;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
public class helloWorld {

    @Autowired
    private HelloWorldServices service;

    @GetMapping("/")
    public Map<String, String> getMethodName(
            @RequestParam(required = false) Integer cascoID,
            @RequestParam(required = false) Integer pecheraID,
            @RequestParam(required = false) Integer pantalonID,
            @RequestParam(required = false) Integer botasID) {

        return service.generateMessage(cascoID, pecheraID, pantalonID, botasID);
    }
}