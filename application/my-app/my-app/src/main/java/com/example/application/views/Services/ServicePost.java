package com.example.application.views.Services;

import com.example.application.views.MainLayout;
import com.example.application.views.Footer.FooterView;
import com.vaadin.flow.component.ClickNotifier;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.formlayout.FormLayout;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.icon.VaadinIcon;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.select.Select;
import com.vaadin.flow.component.textfield.TextArea;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.data.binder.Binder;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;

@PageTitle("Service Post")
@Route(value = "servicePost", layout = MainLayout.class)
public class ServicePost extends VerticalLayout{

    public ServicePost(){
        //The title of the make a forum post page
        add(new H1("Make a new Post!"));

        TextField title= new TextField("Title");
        TextField school= new TextField("School");
        TextArea description = new TextArea("Description");
        description.setWidth("800px");
        description.setHeight("200px");

        //This should create a new post object which will later be stored on the database to be accessed later
        //Binder will make it so all inputs into the fields will alter the object properties
        // var binder = new Binder<>(sPost.class);
        // binder.bindInstanceFields(this);

        add(
            title,
            school,
            description,
            new Button("Submit", event->{
                //var fPost = new fPost();
                //binder.writeBeanIfValid(fPost);
                Notification.show("Service Listing was saved");
            })
        );
        FooterView footer = new FooterView();
           HorizontalLayout footerLay = new HorizontalLayout();
           footerLay.setClassName("FooterLayout");
           footerLay = footer.getFooter();
           add(footerLay);
    }
}
