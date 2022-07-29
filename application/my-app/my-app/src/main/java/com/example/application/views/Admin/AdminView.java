package com.example.application.views.Admin;

import java.util.ArrayList;

import javax.annotation.security.RolesAllowed;

import com.example.application.Data.DBAdmin;
import com.example.application.views.MainLayout;
import com.vaadin.flow.component.Text;
import com.vaadin.flow.component.UI;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.theme.lumo.LumoUtility.Margin.Horizontal;

@PageTitle("Admin View")
@Route(value = "Admin", layout = MainLayout.class)
// @RolesAllowed("ADMIN")

public class AdminView extends VerticalLayout{
    

    public AdminView() throws ClassNotFoundException{
    
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
         row.setSpacing(false);
         VerticalLayout layout = new VerticalLayout();

         row.add(FirstName, lastName, userName, email );
         add(row);

         
         ArrayList<ArrayList<String>> users = DBAdmin.searchUser();


         for(int i =0; i < users.size(); i++){
            for(int j =0; j <users.get(i).size(); j+=4){
                row = new HorizontalLayout();
          String first =  users.get(i).get(0);
          String last = users.get(i).get(1);
          String username = users.get(i).get(2);
          String userEmail = users.get(i).get(3);
        
          TextField firstNam = new TextField();
          firstNam.setValue(first);
          firstNam.setReadOnly(true);
          
          TextField lastNam = new TextField();
          lastNam.setValue(last);
          lastNam.setReadOnly(true);
          TextField userNam = new TextField();
          userNam.setValue(username);
          userNam.setReadOnly(true);
          TextField usernemail = new TextField();
          usernemail.setValue(userEmail);
          usernemail.setReadOnly(true);

          Button delete = new Button("Delete",e->{
            DBAdmin.deleteUser(username);
            UI.getCurrent().getPage().reload();

          });
          HorizontalLayout b = new HorizontalLayout();
          b.setSpacing(true);
          b.add(delete);
          row.add(firstNam, lastNam, userNam, usernemail,b);
          row.setSpacing(false);
          add(row);
            }
            

         }
          
          

         

         //add(layout);
            
    
    }

}
