package com.example.application.views.ShoppingCart;

import com.example.application.views.MainLayout;
import com.vaadin.flow.component.select.Select;
import com.vaadin.flow.component.textfield.TextArea;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.button.ButtonVariant;
import com.vaadin.flow.component.dependency.CssImport;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.html.H3;
import com.vaadin.flow.component.html.Image;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.theme.lumo.LumoUtility.Margin.Horizontal;
import com.vaadin.flow.component.dependency.StyleSheet;


import java.util.ArrayList;
import java.util.HashMap;



@CssImport("./themes/myapp/shopping-cart.css")

@PageTitle("Shopping Cart")//maybe make to name of web
@Route(value = "ShoppingCart", layout = MainLayout.class)

public class ShoppingCartView extends HorizontalLayout{

    String title;
    String image;
    String price;
    String quantity;

    public ShoppingCartView(){
        // todo make bigger and underline
        // H3 h1 = new H3("Shopping Cart");
       
    
        // add(h1); 

        ArrayList<HashMap<String, String>> cart = new ArrayList<HashMap<String, String>>(); 

        // mock data delete later
        HashMap<String, String> item1 = new HashMap<String, String>();
        item1.put("title", "really long string of text");
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

        VerticalLayout shoppingCartItems = new VerticalLayout();
        H3 h1 = new H3("Shopping Cart");
        h1.addClassName("h3");

        Button checkout = new Button("checkout", e ->{
            this.getUI().ifPresent(ui -> ui.navigate("/checkoutPage"));
        });
        checkout.addThemeVariants(ButtonVariant.LUMO_PRIMARY);

       
        shoppingCartItems.add(h1);
        for (HashMap<String, String> i: cart){
            HorizontalLayout horizontalSC = new HorizontalLayout();
           


            horizontalSC.setWidthFull();

            String cartUrl = i.get("image");
            
            TextArea title = new TextArea("Name");

            Image image = new Image(cartUrl,"");
            image.setHeight("150px");
            image.setWidth("150px");
            // TextField image = new TextField();
            TextField quantity = new TextField("Quantity");
            quantity.setWidth("50%");
            quantity.setHeight("50%");

            TextField price = new TextField("Price");
            price.setWidth("50%");
            price.setHeight("50%");

            Button removeFromCart = new Button("Remove from Cart");
            removeFromCart.addThemeVariants(ButtonVariant.LUMO_PRIMARY);


            title.setValue(i.get("title"));
            title.setReadOnly(true);
            image.setTitle(i.get("image"));
            quantity.setValue(i.get("quantity"));
            price.setValue(i.get("price"));
            price.setReadOnly(true);
            
            
            // layout for the quanitity and buttons
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

            HorizontalLayout quantLayout = new HorizontalLayout();
            quantLayout.add(minusButton, quantity, plusButton);
            quantLayout.setSpacing(false);
            quantLayout.setAlignItems(Alignment.BASELINE);


            // layout helps align removeFromCart
            HorizontalLayout priceLayout = new HorizontalLayout();
            priceLayout.add(price, removeFromCart);
            priceLayout.setSpacing(true);
            priceLayout.setAlignItems(Alignment.BASELINE);

            horizontalSC.addClassName("shoppingCartLayout");
            horizontalSC.add(image, title, quantLayout, priceLayout);
            horizontalSC.setJustifyContentMode(JustifyContentMode.START);
            horizontalSC.setAlignItems(Alignment.CENTER);

            shoppingCartItems.add(horizontalSC);

        }

        shoppingCartItems.add(checkout);
        add(shoppingCartItems);
        



        VerticalLayout recentlyAdded = new VerticalLayout();

        H3 header2 = new H3("Recently Viewed");
        header2.addClassName("h3");
        recentlyAdded.add(header2);

        for (HashMap<String, String> i: cart)
        {

            String recentUrl = ("image");

            VerticalLayout recentlyAddedItem = new VerticalLayout();


            TextArea recentlyViewed = new TextArea();
            recentlyViewed.setValue(i.get("title"));
            recentlyViewed.setReadOnly(true);
            recentlyViewed.setWidth("150px");
            recentlyViewed.setHeight("100px");

            Image recentImage = new Image(recentUrl,"");
            recentImage.setHeight("200px");
            recentImage.setWidth("150px");
            recentlyAddedItem.addClassName("verticalLayout");
            recentlyAddedItem.add(recentlyViewed, recentImage);
            recentlyAddedItem.setAlignItems(Alignment.CENTER);
            recentlyAdded.add(recentlyAddedItem);


        }

        add(recentlyAdded);


        } 


    }
    
