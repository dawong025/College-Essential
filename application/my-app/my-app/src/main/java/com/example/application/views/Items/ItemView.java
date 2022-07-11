package com.example.application.views.Items;

import java.util.HashMap;

import com.example.application.Data.ItemDetails;
import com.example.application.views.MainLayout;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;


@PageTitle("Item")
@Route(value = "item", layout = MainLayout.class)
public class ItemView {
    private String itemName;
    private HashMap<String,String> items = new HashMap<>();
    private ItemDetails itemDetail = new ItemDetails();

    public ItemView(){
        itemName = itemDetail.getCurTitle();
        System.out.println(itemDetail);

    }
    
}
