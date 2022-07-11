package com.example.application.Data;

import java.util.HashMap;

import com.vaadin.flow.component.button.Button;

public class ItemDetails {
    private String itemName;
    private HashMap<String, String> itemList;
    private Button curButton;

    public void ItemDetails(){
        


    }

    public void setItemName(String name){
        itemName = name;
    }

    public String getcCurTitle(){
        return itemName;
    }


    
}
