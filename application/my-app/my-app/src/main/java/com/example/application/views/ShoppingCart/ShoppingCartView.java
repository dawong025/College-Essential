package com.example.application.views.ShoppingCart;

import com.example.application.views.MainLayout;
import com.vaadin.flow.component.select.Select;
import com.vaadin.flow.component.textfield.TextArea;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.button.ButtonVariant;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.html.H3;
import com.vaadin.flow.component.html.Image;
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
           

            // // System.out.println(i.get("title"));
            // horizontal.add(i.get("title"));
            // horizontal.add(i.get("image"));
            // horizontal.add(i.get("price"));
            // horizontal.add(i.get("quantity"));

            // add(horizontal);

            horizontal.setWidthFull();

            String url = i.get("image");
            
            TextField title = new TextField("Name");
            Image image = new Image(url,"");
            image.setHeight("200px");
            image.setWidth("150px");
            // TextField image = new TextField();
            TextField quantity = new TextField("Quantity");
            TextField price = new TextField("Price");

            Button addToCart = new Button("Remove from Cart");
            addToCart.addThemeVariants(ButtonVariant.LUMO_PRIMARY);


            title.setValue(i.get("title"));
            title.setReadOnly(true);
            image.setTitle(i.get("image"));
            quantity.setValue(i.get("quantity"));
            price.setValue(i.get("price"));
            
            
            
            Button plusButton = new Button("+",e->{
                Integer val = Integer.parseInt("quantity") +1;
                quantity.setValue(val.toString());
            });
            plusButton.setWidth("10%");
            plusButton.addThemeVariants(ButtonVariant.LUMO_ICON);

            Button minusButton = new Button("-",e->{
                
                Integer val = Integer.parseInt("quantity");
                if (val != 0){
                    val--;
                }
                quantity.setValue(val.toString());
            });
            minusButton.setWidth("10%");
            minusButton.addThemeVariants(ButtonVariant.LUMO_ICON);


            HorizontalLayout hl = new HorizontalLayout();
            hl.add( plusButton,quantity, minusButton);
            hl.setSpacing(false);
            //hl.setJustifyContentMode(JustifyContentMode.EVENLY);
            hl.setAlignItems(Alignment.BASELINE);

            horizontal.add(title, image, hl, price, addToCart);
            horizontal.setJustifyContentMode(JustifyContentMode.START);

            add(horizontal);
        } 

        // Grid<HashMap<String, String>> grid = new Grid<>();


    }
    




    
}
