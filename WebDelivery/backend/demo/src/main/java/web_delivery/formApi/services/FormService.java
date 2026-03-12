
package web_delivery.formApi.services;

import org.springframework.stereotype.Service;
import java.util.Map;


@Service
public class FormService {

    public Map<String, String> generateMessage(String name) {
        return Map.of("message", "Hello world " + name);
    }

}