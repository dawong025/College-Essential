package com.example.application.views.PostItem;

import com.example.application.views.MainLayout;
import com.vaadin.flow.component.Text;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.button.ButtonVariant;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.html.Image;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.orderedlayout.FlexComponent.Alignment;
import com.vaadin.flow.component.select.Select;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.component.upload.Upload;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.StreamResource;
import com.vaadin.flow.theme.lumo.LumoUtility.Margin.Horizontal;

import ch.qos.logback.core.joran.conditional.Condition;

import java.io.*;
import java.util.logging.Level;
import java.util.logging.Logger;

@PageTitle("Post Item")
@Route(value = "postItem", layout = MainLayout.class)

public class PostItemView extends VerticalLayout{
    private File file;
    private String originalFileName;
    private String mimeType;
    private Button postButton;
    private TextField Title;
    private TextField url;
    private TextField condition;
    private VerticalLayout vert;

    public PostItemView(){
            vert = new VerticalLayout();
            url = new TextField("url");
            url.setPlaceholder("Enter URL of Image");
            vert.add(url);
        // Configure upload component
        
            Title = new TextField("Title");
            Title.setPlaceholder("Title");

            vert.add(Title);

            condition = new TextField("Condition");
            condition.setPlaceholder("Condition");

            vert.add(condition);
            
            Select<String> select = new Select<>();
            
            
            select.setItems(
                "Select Catagory","Textbook", "School", "Supplies", "Furniture", "Lifestyle");
                select.setValue("Select Catagory");
                vert.add(select);


            postButton = new Button("Post");
            postButton.addThemeVariants(ButtonVariant.LUMO_PRIMARY);
            vert.add(postButton);
            vert.setAlignItems(Alignment.CENTER);
           // h1.setAll
           add(vert);

            PostItemFormBinder postItemFormBinder= new PostItemFormBinder(this);
       postItemFormBinder.addBinderForPostItem();


    }
    
    public Button getPostButton() { return postButton; }


  
  

}
