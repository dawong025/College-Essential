package com.example.application.views.Account;

import com.example.application.views.MainLayout;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.html.H2;
import com.vaadin.flow.component.html.Image;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.orderedlayout.FlexComponent.Alignment;
import com.vaadin.flow.component.textfield.TextArea;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.component.html.Div;

@PageTitle("Edit Account")
@Route(value = "editAccount", layout = MainLayout.class)
public class editAccountView extends Div{
    

    public editAccountView(){

        getElement().getClassList().add("hello-grid");
        setWidth("99%");

         /* Name Profile Grid Area */
         Div nametag = new Div();
         nametag.addClassName("label-one");
 
         Image img1 = new Image("images/icon.jpg", "placeholder icon");
         img1.setWidth("180px");
         img1.addClassName("pfp");
         H1 name = new H1("Kelly Smith");
         name.addClassName("name");

        HorizontalLayout h1 = new HorizontalLayout(img1, name);
        h1.addClassName("label-one");

        TextArea about = new TextArea("Change About Me");
        about.addClassName("about-me");

        TextArea contact = new TextArea("Change Contact Info");
        contact.addClassName("contact-me");

        TextField college = new TextField("Change College");

        Button submit = new Button("Submit", ev ->{
            this.getUI().ifPresent(ui -> ui.navigate("/Account"));
        });

        VerticalLayout v1 = new VerticalLayout(about, contact, college, submit);
        v1.addClassName("edit-profile");
        v1.setAlignItems(Alignment.CENTER);

        // vMain.add(hl,vl);
        // add(vMain);

        add(h1);
        add(v1);


    }


}