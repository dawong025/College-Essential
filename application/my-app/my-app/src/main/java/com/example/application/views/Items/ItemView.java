package com.example.application.views.Items;

import java.util.HashMap;

import com.example.application.Data.ItemDetails;
import com.example.application.views.MainLayout;
import com.example.application.views.home.HomeView;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.html.H3;
import com.vaadin.flow.component.html.Image;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;


@PageTitle("Item")
@Route(value = "itemView", layout = MainLayout.class)
public class ItemView extends VerticalLayout{
    private String itemName;
    private HashMap<String,String> items = new HashMap<>();
   // private ItemDetails itemDetail;
   // HomeView hv = new HomeView();


    public ItemView(){
       itemName = HomeView.getTitle();
       items = HomeView.getMap();
       H3 h3 = new H3(itemName);
       String url = items.get(itemName);
        //Image image = new Image(url,itemName);
    //    image.setHeight("200px");
    //     image.setWidth("150px");
       
       add(h3);
      //  itemName = hv.getTitle();
        System.out.println("Item is ="+itemName);
        
        

    }

    

    
    
}
