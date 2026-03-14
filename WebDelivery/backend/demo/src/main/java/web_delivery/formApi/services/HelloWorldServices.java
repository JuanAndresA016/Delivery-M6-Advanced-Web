package web_delivery.formApi.services;

import java.util.HashMap;
import java.util.Map;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import web_delivery.formApi.dto.ImageItem;

@Service
public class HelloWorldServices {

    private final List<ImageItem> images = List.of(
        new ImageItem(1, "casco_diamante.png"),
        new ImageItem(2, "casco_oro.png"),
        new ImageItem(3, "casco_netherite1.png"),
        new ImageItem(4, "casco_hierro.png"),
        new ImageItem(5, "pechera_diamante.png"),
        new ImageItem(6, "pechera_oro.png"),
        new ImageItem(7, "pechera_netherite.png"),
        new ImageItem(8, "pechera_hierro.png"),
        new ImageItem(9, "pantalon_diamante.png"),
        new ImageItem(10, "pantalon_oro.png"),
        new ImageItem(11, "pantalon_netherite.png"),
        new ImageItem(12, "pantalon_hierro.png"),
        new ImageItem(13, "botas_diamante.png"),
        new ImageItem(14, "botas_oro.png"),
        new ImageItem(15, "botas_netherite.png"),
        new ImageItem(16, "botas_hierro.png")
    );


public Map<String, String> generateMessage(Integer cascoID, Integer pecheraID, Integer pantalonID, Integer botasID) {

    Map<String, String> result = new HashMap<>();

    if (cascoID != null) {
        result.put("casco", images.get(cascoID - 1).getImageUrl());
    }

    if (pecheraID != null) {
        result.put("pechera", images.get(pecheraID - 1).getImageUrl());
    }

    if (pantalonID != null) {
        result.put("pantalon", images.get(pantalonID - 1).getImageUrl());
    }

    if (botasID != null) {
        result.put("botas", images.get(botasID - 1).getImageUrl());
    }

    return result;
}
}