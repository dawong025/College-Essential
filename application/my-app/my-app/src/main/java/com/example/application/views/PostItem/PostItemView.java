package com.example.application.views.PostItem;

import com.example.application.views.MainLayout;
import com.example.application.views.Footer.FooterView;
import com.vaadin.flow.component.HasValueAndElement;
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
import java.util.stream.Stream;


@CssImport("./themes/myapp/Post.css")
@PageTitle("Post Item")
@Route(value = "postItem", layout = MainLayout.class)

public class PostItemView extends VerticalLayout{
    private Button postButton;
    private TextField Title;
    private TextField url;
    private Select<String> condition;
    private VerticalLayout vert;
    private TextField price;
    private Select<String> catagory;

    public PostItemView(){
            
            vert = new VerticalLayout();
            vert.setClassName("verticalLayout");
            HorizontalLayout h1 = new HorizontalLayout();
            h1.setClassName("h1Layout");

            H3 header = new H3("Sell Item Form");
            vert.add(header);
            url = new TextField("Enter URL of Image");
            url.setWidth("55%");
            url.setPlaceholder("Enter URL of Image here...");
            vert.add(url);
        // Configure upload component
        
            Title = new TextField("Title Of Post");
            Title.setWidth("55%");
            Title.setPlaceholder("Enter Title Here...");

            vert.add(Title);

            condition = new Select<>();
            condition.setLabel("Select Condition of item");
            condition.setItems("New","Used");
            condition.setPlaceholder("Select Condition");

            h1.add(condition);
            
            catagory = new Select<>();
            catagory.setLabel("Select Category of item");
            
            catagory.setItems(
                "Textbook", "School Supplies", "Furniture", "Lifestyle", "Miscellaneous");
               catagory.setPlaceholder("Select Category");
                h1.add(catagory);

            price = new TextField("Enter Price");
            price.setPlaceholder("0.00");
            h1.add(price);
            vert.add(h1);


            postButton = new Button("Post");
            postButton.addThemeVariants(ButtonVariant.LUMO_PRIMARY);
            vert.add(postButton);
            vert.setAlignItems(Alignment.CENTER);
           // h1.setAll
           add(vert);
            Div cdcd = new Div();
           FooterView footer = new FooterView();
           HorizontalLayout footerLay = new HorizontalLayout();
           footerLay.setClassName("FooterLayout");
           footerLay = footer.getFooter();
           add(footerLay);

           setRequiredIndicatorVisible(Title, url, condition, catagory,price);

            PostItemFormBinder postItemFormBinder= new PostItemFormBinder(this);
       postItemFormBinder.addBinderForPostItem();


    }
    
    public Button getPostButton() { return postButton; }


    private void setRequiredIndicatorVisible(HasValueAndElement<?, ?>... components) {
        Stream.of(components).forEach(comp -> comp.setRequiredIndicatorVisible(true));
    }
  

}
