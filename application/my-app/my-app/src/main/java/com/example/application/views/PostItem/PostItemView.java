package com.example.application.views.PostItem;

import com.example.application.views.MainLayout;
import com.vaadin.flow.component.Text;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.button.ButtonVariant;
import com.vaadin.flow.component.dependency.CssImport;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.html.H3;
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

@CssImport("./themes/myapp/Post.css")
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
                vert.setClassName("verticalLayout");

            H3 postTitle = new H3("Post Item Form");
            vert.add(postTitle);
            url = new TextField("Enter url of Image");
            url.setPlaceholder("Enter URL of Image Here...");
            url.setWidth("65%");
            vert.add(url);
        // Configure upload component
        
            Title = new TextField("Title Of Product");
            Title.setWidth("65%");
            Title.setPlaceholder("Enter Title Here...");

            vert.add(Title);
            HorizontalLayout h1 = new HorizontalLayout();
            //h1.setWidthFull();
            Select<String> condition = new Select<>();
            condition.setLabel("Select Condition of Item");
            condition.setItems("Select Condition","New","Used");
            condition.setValue("Select Condition");
            condition.setItemEnabledProvider(item -> !"Select Condition".equals(item));
            

           h1.add(condition);
            
            Select<String> select = new Select<>();
            select.setLabel("Select Catagory of Product");
            
            select.setItems(
                "Select Category","Textbook", "School", "Supplies", "Furniture", "Lifestyle");
                select.setValue("Select Category");
                
                select.setItemEnabledProvider(item -> !"Select Category".equals(item));
                h1.add(select);
            
            

            TextField price = new TextField("Enter Price For Sale");
            price.setValue("$0.00");
           // price.setWidth("60%");
            h1.add(price);
            vert.add(h1);

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
