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
import com.vaadin.flow.component.dependency.CssImport;

@CssImport("./themes/myapp/EditAccount.css")
@PageTitle("Edit Account")
@Route(value = "editAccount", layout = MainLayout.class)
public class editAccountView extends Div{
    

    public editAccountView(){

        getElement().getClassList().add("hello-grid-2");
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

        H1 editTitle = new H1("Edit Profile");
        editTitle.addClassName("edit-title");
        TextArea about = new TextArea("Change About Me");
        about.addClassName("about-me");

        TextArea contact = new TextArea("Change Contact Info");
        contact.addClassName("contact-me");

        TextField college = new TextField("Change College");

        Button cancel = new Button("Cancel", ev ->{
            this.getUI().ifPresent(ui -> ui.navigate("/Account"));
        });

        Button submit = new Button("Submit", ev ->{
            this.getUI().ifPresent(ui -> ui.navigate("/Account"));
        });

        HorizontalLayout buttons = new HorizontalLayout(cancel, submit);
        VerticalLayout v1 = new VerticalLayout(editTitle, about, contact, college, buttons);
        v1.addClassName("edit-label-two");
        v1.setAlignItems(Alignment.CENTER);

        // vMain.add(hl,vl);
        // add(vMain);

        add(h1);
        add(v1);


    }


}