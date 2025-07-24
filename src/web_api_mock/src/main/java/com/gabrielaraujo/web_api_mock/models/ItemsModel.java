package com.gabrielaraujo.web_api_mock.models;

import java.util.List;

public class ItemsModel {
    private List<ProductModel> items;

    public List<ProductModel> getItems() {
        return items;
    }

    public void setItems(List<ProductModel> items) {
        this.items = items;
    }
}
