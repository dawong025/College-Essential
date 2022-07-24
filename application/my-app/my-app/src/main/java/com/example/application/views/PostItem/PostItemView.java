package com.example.application.views.PostItem;

import com.example.application.Data.DBPostItem;
import com.example.application.Data.PostItemDetail;
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
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.notification.NotificationVariant;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.orderedlayout.FlexComponent.Alignment;
import com.vaadin.flow.component.select.Select;
import com.vaadin.flow.component.textfield.TextArea;
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
    private TextArea description;
    private Select<String> condition;
    private VerticalLayout vert;
    private TextField price;
    private Select<String> category;
    private PostItemDetail userBean = new PostItemDetail();

    public PostItemView(){
            
            vert = new VerticalLayout();
            vert.setClassName("vertLayout");
            HorizontalLayout h1 = new HorizontalLayout();
            h1.setClassName("h1Layout");

            H3 header = new H3("Sell Item Form");
            header.setClassName("Header");
            vert.add(header);
            url = new TextField("Enter URL of Image");
            url.setWidth("55%");
            url.setPlaceholder("Enter URL of Image here...");
            vert.add(url);
        // Configure upload component
        
            Title = new TextField("Title Of Post");
            Title.setWidth("55%");
            Title.setPlaceholder("Enter Title Here...");

            description = new TextArea("Describe the item");
            description.setWidth("55%");
            description.setPlaceholder("describe the item here...");

            vert.add(Title,description);

            condition = new Select<>();
            condition.setLabel("Select Condition of item");
            condition.setItems("New","Used");
            condition.setPlaceholder("Select Condition");

            h1.add(condition);
            
            category = new Select<>();
            category.setLabel("Select Category of item");
            
            category.setItems(
                "Textbook", "School Supplies", "Furniture", "Lifestyle", "Miscellaneous");
               category.setPlaceholder("Select Category");
                h1.add(category);

            price = new TextField("Enter Price");
            price.setPlaceholder("0.00");
            h1.add(price);
            vert.add(h1);


            postButton = new Button("Add To Market Place");
            postButton.addThemeVariants(ButtonVariant.LUMO_PRIMARY);
            postButton.setClassName("addToMarketPlaceButton");
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

           setRequiredIndicatorVisible(Title, url, condition, category,price, description);

           postButton.addClickListener(e->{
                DBPostItem db = new DBPostItem();
                //setItem();

                db.StorePostItem(Title.getValue(), url.getValue(), condition.getValue(), category.getValue(), price.getValue(), description.getValue());
                showSuccess(userBean);
                userBean = new PostItemDetail();
                this.getUI().ifPresent(ui ->
               ui.navigate("/home"));
           });

    //         PostItemFormBinder postItemFormBinder= new PostItemFormBinder(this);
    //    postItemFormBinder.addBinderForPostItem();


    }

    public void setItem(){
        userBean.setCategory(category.getValue());
        userBean.setCondition(condition.getValue());
        userBean.setDescription(description.getValue());
        userBean.setprice(price.getValue());
        userBean.setUrl(url.getValue());
    }
    
    public Button getPostButton() { return postButton; }


    private void setRequiredIndicatorVisible(HasValueAndElement<?, ?>... components) {
        Stream.of(components).forEach(comp -> comp.setRequiredIndicatorVisible(true));
    }

    private void showSuccess(PostItemDetail userBean) {
        Notification notification =
                Notification.show(Title.getValue() +" Was Succesfully added");
        notification.addThemeVariants(NotificationVariant.LUMO_SUCCESS);
        
 
        // Here you'd typically redirect the user to another view
    }
  

}
