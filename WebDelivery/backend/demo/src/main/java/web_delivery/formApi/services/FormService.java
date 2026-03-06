
package web_delivery.formApi.services;

import org.springframework.stereotype.Service;

@Service
public class FormService {
    public String generateMessage(String name) {
        return "Hello world " + name;
    }
}
