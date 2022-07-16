package com.example.application.views.checkout;

import com.example.application.views.MainLayout;
import com.vaadin.flow.component.select.Select;
import com.vaadin.flow.component.textfield.TextArea;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.component.Text;
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

@PageTitle("checkout")//maybe make to name of web
@Route(value = "checkout", layout = MainLayout.class)

public class checkout extends HorizontalLayout{

    String title;
    String image;
    String price;
    String quantity;

    public checkout(){
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
            this.getUI().ifPresent(ui -> ui.navigate("/checkout"));
        });
        checkout.addThemeVariants(ButtonVariant.LUMO_PRIMARY);

       // Horizontal layout for shopping cart items
        shoppingCartItems.add(h1);
        for (HashMap<String, String> i: cart){
            HorizontalLayout horizontalSC = new HorizontalLayout();
           


            horizontalSC.setWidthFull();

            String cartUrl = i.get("image");
            
            TextArea title = new TextArea("Name");

            Image image = new Image(cartUrl,"");
            image.setHeight("150px");
            image.setWidth("150px");

            TextArea quantity = new TextArea("Quantity");

            TextArea price = new TextArea("Price");

            Button removeFromCart = new Button("Remove from Cart");
            removeFromCart.addThemeVariants(ButtonVariant.LUMO_PRIMARY);


            title.setValue(i.get("title"));
            title.setReadOnly(true);
            image.setTitle(i.get("image"));
            quantity.setValue(i.get("quantity"));
            quantity.setReadOnly(true);
            price.setValue(i.get("price"));
            price.setReadOnly(true);
            

            horizontalSC.addClassName("shoppingCartLayout");
            horizontalSC.add(image, title, quantity, price);
            horizontalSC.setJustifyContentMode(JustifyContentMode.START);
            horizontalSC.setAlignItems(Alignment.CENTER);

            shoppingCartItems.add(horizontalSC);

        }

        //return to cart button
        Button returnToCart = new Button("Return To Cart", e ->{
            this.getUI().ifPresent(ui -> ui.navigate("/ShoppingCart"));
        });
        returnToCart.addThemeVariants(ButtonVariant.LUMO_PRIMARY);

        shoppingCartItems.add(returnToCart);
        add(shoppingCartItems);


        //Vertical layout for payment items
        VerticalLayout payment = new VerticalLayout();

        H3 paymentHeader = new H3("Payment");
        paymentHeader.addClassName("h3");
        payment.add(paymentHeader);

        for (HashMap<String,String> i:cart){

            TextArea title = new TextArea("title");
            title.setValue(i.get("title"));
            title.setReadOnly(true);

            TextArea price = new TextArea("Price");
            price.setValue(i.get("price"));
            price.setReadOnly(true);

            HorizontalLayout priceList = new HorizontalLayout();
            priceList.add(title, price);

            payment.add(priceList);

        }

        TextArea totalPrice = new TextArea("Total Price");
        totalPrice.setValue("this is the total");

        payment.add(totalPrice);


        add(payment);

        //Vertical layout for user information
        VerticalLayout userInfo = new VerticalLayout();
        H3 h3 = new H3("Reveiw your order");
        h3.addClassName("h3");




        //shipping address layout 
        HorizontalLayout shippingAddressLayout = new HorizontalLayout();
        TextArea shippingAddress = new TextArea("Shipping Address:");
        shippingAddress.setValue("this is someone's shipping address");
        shippingAddress.setReadOnly(true);
        Button changeShippingAddress = new Button("change");
        shippingAddressLayout.add(shippingAddress,changeShippingAddress);





        //paymentMethodLayout horizontal layout
        HorizontalLayout paymentMethodLayout = new HorizontalLayout();
        TextArea paymentMethod = new TextArea("Payment Method:");
        paymentMethod.setValue("This is someone's payment method.");
        paymentMethod.setReadOnly(true);

        Button changePayment = new Button("change");
        paymentMethodLayout.add(paymentMethod, changePayment);
        paymentMethodLayout.setAlignItems(Alignment.BASELINE);





        //billingAddressLayout
        HorizontalLayout billingAddressLayout = new HorizontalLayout();
        TextArea billingAddress = new TextArea("Billing address:");
        // if billing address == shipping address
        // setValue = "same as shipping address"
        billingAddress.setValue("this is someone's shipping address");
        billingAddress.setReadOnly(true);

        Button changeBillingAddress = new Button("change");
        billingAddressLayout.add(billingAddress, changeBillingAddress);
        billingAddressLayout.setAlignItems(Alignment.BASELINE);

        //Place your order button
        Button placeYourOrder = new Button("Place Your Order");
        placeYourOrder.addThemeVariants(ButtonVariant.LUMO_ICON);




        //add all to vertical layout
        userInfo.add(h3, shippingAddress, paymentMethodLayout, billingAddressLayout, placeYourOrder);
        add(userInfo);

        



        // VerticalLayout recentlyAdded = new VerticalLayout();

        // H3 header2 = new H3("Recently Viewed");
        // header2.addClassName("h3");
        // recentlyAdded.add(header2);

        // for (HashMap<String, String> i: cart)
        // {

        //     String recentUrl = ("image");

        //     VerticalLayout recentlyAddedItem = new VerticalLayout();


        //     TextArea recentlyViewed = new TextArea();
        //     recentlyViewed.setValue(i.get("title"));
        //     recentlyViewed.setReadOnly(true);
        //     recentlyViewed.setWidth("150px");
        //     recentlyViewed.setHeight("100px");

        //     Image recentImage = new Image(recentUrl,"");
        //     recentImage.setHeight("200px");
        //     recentImage.setWidth("150px");
        //     recentlyAddedItem.addClassName("verticalLayout");
        //     recentlyAddedItem.add(recentlyViewed, recentImage);
        //     recentlyAddedItem.setAlignItems(Alignment.CENTER);
        //     recentlyAdded.add(recentlyAddedItem);


        // }

        // add(recentlyAdded);


        } 


    }