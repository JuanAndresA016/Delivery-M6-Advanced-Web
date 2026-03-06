package web_delivery.formApi.controller;


import org.springframework.web.bind.annotation.RestController;

import web_delivery.formApi.services.FormService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
public class FormController {
    @Autowired
    private FormService service;

    @GetMapping("/")
    public String getMethodName(@RequestParam String name) {
        return service.generateMessage(name);
    }
    
    
    
}