// package web_delivery.formApi.controller;

// import org.springframework.web.bind.annotation.RestController;
// import web_delivery.formApi.services.FormService;
// import web_delivery.formApi.dto.NameRequest;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;

// import java.util.Map;

// @RestController
// public class FormController {

//     @Autowired
//     private FormService service;

//     @PostMapping("/message")
//     public Map<String, String> createMessage(@RequestBody NameRequest request) {
//         return service.generateMessage(request.getName());
//     }

// }


package web_delivery.formApi.controller;

import org.springframework.web.bind.annotation.RestController;
import web_delivery.formApi.services.FormService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Map;

@RestController
public class FormController {

    @Autowired
    private FormService service;

    @GetMapping("/message")
    public Map<String, String> createMessage(@RequestParam String name) {
        return service.generateMessage(name);
    }

}