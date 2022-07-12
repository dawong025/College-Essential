package com.example.application.views.ShoppingCart;

import com.example.application.views.MainLayout;
import com.vaadin.flow.component.select.Select;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.html.H3;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;

import java.util.ArrayList;
import java.util.HashMap;





@PageTitle("Shopping Cart")//maybe make to name of web
@Route(value = "ShoppingCart", layout = MainLayout.class)


public class ShoppingCartView extends VerticalLayout{

    String title;
    String image;
    String price;
    String quantity;

    public ShoppingCartView(){
        H3 h1 = new H3("Shopping Cart");
       
    
        add(h1); 

        ArrayList<HashMap<String, String>> cart = new ArrayList<HashMap<String, String>>(); 

        // mock data delete later
        HashMap<String, String> item1 = new HashMap<String, String>();
        item1.put("title", "pencil");
        item1.put("image", "url");
        item1.put("price", "10");
        item1.put("quantity", "1");

        HashMap<String, String> item2 = new HashMap<String, String>();
        item2.put("title", "paper");
        item2.put("image", "url");
        item2.put("price", "5");
        item2.put("quantity", "3");

        cart.add(item1);
        cart.add(item2);
        // System.out.println("items added to cart");


        // System.out.println("Starting to iterate");
        for (HashMap<String, String> i: cart){
            HorizontalLayout horizontal = new HorizontalLayout();
           
            // System.out.println(i.get("title"));
            horizontal.add(i.get("title"));
            horizontal.add(i.get("image"));
            horizontal.add(i.get("price"));
            horizontal.add(i.get("quantity"));

            add(horizontal);
        } 

        // Grid<HashMap<String, String>> grid = new Grid<>();


    }
    




    
}
