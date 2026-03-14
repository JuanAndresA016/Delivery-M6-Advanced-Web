package web_delivery.formApi.dto;

public class ImageItem {

    private int id;
    private String imageUrl;

    public ImageItem(int id, String imageUrl) {
        this.id = id;
        this.imageUrl = imageUrl;
    }

    public int getId() {
        return id;
    }

    public String getImageUrl() {
        return imageUrl;
    }
}