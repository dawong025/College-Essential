package com.example.application.views.Items;

import java.util.HashMap;

import com.example.application.views.MainLayout;
import com.example.application.views.home.HomeView;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.button.ButtonVariant;
import com.vaadin.flow.component.html.H3;
import com.vaadin.flow.component.html.Image;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.notification.NotificationVariant;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextArea;
import com.vaadin.flow.component.textfield.TextField;
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
        VerticalLayout vl = new VerticalLayout();
        setSizeFull();
       itemName = HomeView.getTitle();
       items = HomeView.getMap();
       H3 h3 = new H3(itemName);
       vl.add(h3);
       String url = items.get(itemName);
       if(url != null){
        Image image = new Image(url,"");

        image.setHeight("200px");
        image.setWidth("150px");
        vl.add(image);
       }

       TextArea ta = new TextArea("Description");//maybe remove title because its not center
       ta.setValue("This is where we will put the description of the item");
       ta.setReadOnly(true);
       vl.add(ta);
       TextField price = new TextField("Price");
       price.setValue("$00.00");
       price.setReadOnly(true);
       vl.add(price);






       Button addToCart = new Button("Add to Cart",event ->{
        //add to db of cart
        this.getUI().ifPresent(ui -> ui.navigate("/home"));
        showSuccess();

       });
       addToCart.addThemeVariants(ButtonVariant.LUMO_PRIMARY);
       vl.add(addToCart);
        vl.setAlignItems(Alignment.CENTER);
        add(vl);
       
       
      //  itemName = hv.getTitle();
        System.out.println("Item is ="+itemName);
        
        

    }

    
    private void showSuccess() {
      Notification notification =
              Notification.show("Item Was Success Fully added to Shopping cart");
      notification.addThemeVariants(NotificationVariant.LUMO_SUCCESS);
      

      // Here you'd typically redirect the user to another view
  }

    
    
}
