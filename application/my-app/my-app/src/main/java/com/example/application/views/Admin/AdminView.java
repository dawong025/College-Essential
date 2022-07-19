package com.example.application.views.Admin;

import javax.annotation.security.RolesAllowed;

import com.example.application.views.MainLayout;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.theme.lumo.LumoUtility.Margin.Horizontal;


@Route(value = "Admin", layout = MainLayout.class)
// @RolesAllowed("ADMIN")

public class AdminView extends VerticalLayout{
    

    public AdminView(){
    
        H1 header = new H1("Admin View");
         add(header);
        TextField userName = new TextField("userName");
            userName.setValue("UserName");
            userName.setReadOnly(true);
        TextField numbOfPosts =new TextField("Number Of Post");
            numbOfPosts.setValue("0");
            numbOfPosts.setReadOnly(true);
        TextField email = new TextField("user@gmail.com");
            email.setValue("Email");
            email.setReadOnly(true);
        TextField FirstName = new TextField("first");
            FirstName.setValue("First");
            FirstName.setReadOnly(true);
        TextField lastName = new TextField("last");
            lastName.setValue("last");
            lastName.setReadOnly(true);

         HorizontalLayout row = new HorizontalLayout();
         VerticalLayout layout = new VerticalLayout();

         
          
            row.add(FirstName,lastName,email,userName,numbOfPosts);
            add(row);
            add(row);
            add(row);
            add(row);
            add(row);

         

         //add(layout);
            
    
    }

}
