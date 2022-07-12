package com.example.application.Data;

import java.util.HashMap;

import com.example.application.views.Items.ItemView;
import com.vaadin.flow.component.button.Button;

public class ItemDetails{
    public static  String itemNameItem;
    private static HashMap<String, String> itemList;

    public ItemDetails(){

    }


    public void setItemName(String name){
        itemNameItem = name;
    }

    public static String getCurTitle(){
        return itemNameItem;
    }


    
}
