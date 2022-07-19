package com.example.application.views.Account;

import com.example.application.views.MainLayout;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.html.H2;
import com.vaadin.flow.component.html.Image;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextArea;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;


@PageTitle("Edit Account")
@Route(value = "editAccount", layout = MainLayout.class)
public class editAccountView extends VerticalLayout{
    

    public editAccountView(){

        HorizontalLayout hl = new HorizontalLayout();
        hl.addClassName("label-one");
        VerticalLayout vl = new VerticalLayout();   
        VerticalLayout vMain = new VerticalLayout();   
        String name = "Kelly Smith";

        H1 header = new H1(name);
        header.addClassName("name");
        

        Image img1 = new Image("images/icon.jpg", "placeholder icon");
        img1.setWidth("180px");
        img1.addClassName("pfp");

        Button edit = new Button("Edit");
        edit.addClassName("editAcc");

        Button recent = new Button("Recent");
        recent.addClassName("purchases");

        hl.add(img1,header,recent,edit);

        TextArea about = new TextArea("Change About Me");
        about.addClassName("about-me");

        TextArea contact = new TextArea("Change Contact Info");
        contact.addClassName("contact-me");

        TextField college = new TextField("Change College");

        Button submit = new Button("Submit");

        vl.add(about,contact,college,submit);

        vMain.add(hl,vl);
        add(vMain);



    }


}
