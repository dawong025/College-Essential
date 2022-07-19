package com.example.application.views.Services;

import com.example.application.views.MainLayout;
import com.vaadin.flow.component.ClickNotifier;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.dependency.CssImport;
import com.vaadin.flow.component.formlayout.FormLayout;
import com.vaadin.flow.component.html.Div;
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

@CssImport("./themes/myapp/makeservicepost.css")
@PageTitle("Service Post")
@Route(value = "servicePost", layout = MainLayout.class)
public class ServicePost extends VerticalLayout{

    public ServicePost(){
        getElement().getClassList().add("make-forum-grid");
        setWidth("100%");

        //The title of the make a forum post page
        this.addClassName("forum-background");

        Div headerholder = new Div();
        headerholder.addClassName("header");
        H1 header = new H1("Make a new Post!");
        header.addClassName("header");


        Div titleholder = new Div();
        titleholder.addClassName("make-title");
        TextField title= new TextField("Title");
        title.addClassName("make-title");


        Div descriptionholder = new Div();
        descriptionholder.addClassName("make-description");
        TextArea description = new TextArea("Description");
        description.addClassName("make-description");
        description.setWidth("800px");
        description.setHeight("200px");

        Div submitholder = new Div();
        submitholder.addClassName("make-submit-button");
        Button submit = new Button("Submit", event->{
            //var fPost = new fPost();
            //binder.writeBeanIfValid(fPost);
            Notification.show("Service Listing was saved");
        });
        submit.addClassName("make-submit-button");

        //This should create a new post object which will later be stored on the database to be accessed later
        //Binder will make it so all inputs into the fields will alter the object properties
        // var binder = new Binder<>(fPost.class);
        // binder.bindInstanceFields(this);

        add(
            header,
            title,
            description,
            submit
        );
    }
}
