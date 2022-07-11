package com.example.application.views.ShoppingCart;

import com.example.application.views.MainLayout;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.html.H3;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;





@PageTitle("Shopping Cart")//maybe make to name of web
@Route(value = "ShoppingCart", layout = MainLayout.class)
public class ShoppingCartView extends VerticalLayout{

    public ShoppingCartView(){
       H3 h1 = new H3("Shopping Cart");
       
       
        add(h1); 




    }
    




    
}
