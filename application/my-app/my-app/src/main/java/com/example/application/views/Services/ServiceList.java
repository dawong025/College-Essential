package com.example.application.views.Services;

import java.util.ArrayList;
import java.util.HashMap;

import com.example.application.views.MainLayout;
import com.example.application.views.Footer.FooterView;
import com.example.application.views.login.LoginView;

import com.vaadin.flow.component.ClickNotifier;
import com.vaadin.flow.component.UI;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.dependency.CssImport;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.html.NativeButton;
import com.vaadin.flow.component.icon.VaadinIcon;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.notification.NotificationVariant;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.select.Select;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;

@CssImport("./themes/myapp/servicelist.css")
@PageTitle("Service Listing")
@Route(value = "serviceList", layout = MainLayout.class)
public class ServiceList extends VerticalLayout{
    //Array list of posts to be added to the horizontal layout. Temporary, and should be deleted later
    ArrayList<HashMap<String, String>> post = new ArrayList<HashMap<String, String>>();

    public ServiceList(){
        this.addClassName("service-background");

        //Code for the search button
        Button search = new Button("Search");
        search.addClassName("forum-search-button");

        //Code for the new post button that routes you to a page where you can make a post
        Button newPost = new Button("Make a new post", e ->{
            if(LoginView.logStatus() == false){
                Notification notification =
                Notification.show("User not logged in!");
                notification.addThemeVariants(NotificationVariant.LUMO_ERROR);
            }else{

                this.getUI().ifPresent(ui -> ui.navigate("/servicePost")); 
            }


        });
        newPost.addClassName("forum-search-button");

        //Code for the text field
        TextField searchBar = new TextField();
        searchBar.addClassName("forum-search-bar");
        searchBar.setPlaceholder("Search for a service (Title, Description, User, School)");
        searchBar.setPrefixComponent(VaadinIcon.SEARCH.create());
        searchBar.setClearButtonVisible(true);
        searchBar.setWidth("50em");

        //This is a selection drop down bar. Dropdown is here as placeholder, and will not be changed till later.
        Select select = new Select<>();
        select.addClassName("forum-dropdown-bar");
        select.setItems("New", "Used",
                "All");
        select.setValue("All");


        //The horizontal layout with the text field, search button, and new post button
        HorizontalLayout hv = new HorizontalLayout(searchBar, search, select, newPost);
        hv.addClassName("forum-search-layout");
        setHorizontalComponentAlignment(Alignment.CENTER, hv);
        hv.setWidthFull();
        
        hv.setPadding(true);

        add(hv);

        search.addClickListener(event -> {
            //Should show a list of forum posts based on the input from the search bar
        });
        
        //Fake posts to be deleted later, code below this should be altered or deleted later
        HashMap<String, String> post1 = new HashMap<String, String>();
        post1.put("title", "CSC 648 TA");
        post1.put("school", "San Francisco State University");
        post1.put("user", "Brendan1");
        post1.put("account_route", "/Brendini1");
        post1.put("route", "/sPost1");
        post1.put("description", "I am in need of a teacher assistant for my class.");

        HashMap<String, String> post2 = new HashMap<String, String>();
        post2.put("title", "CSC 510 TA");
        post2.put("school", "San Francisco State University");
        post2.put("user", "Brendan2");
        post2.put("account_route", "/Brendini2");
        post2.put("route", "/sPost2");
        post2.put("description", "I am in need of a teacher assistant for my class.");

        post.add(post1);
        post.add(post2);

        int servicePostCounter = 1; //Keeps count of the service posts
        for(HashMap<String, String> i: post){
            HorizontalLayout hv1 = new HorizontalLayout();
            hv1.addClassName("service-post");
            hv1.setWidthFull();

            //Should at some point route to an url stored in the database
            Button title = new Button("(" + servicePostCounter + ")Title: " + i.get("title"), e ->{
                this.getUI().ifPresent(ui -> ui.navigate(i.get("route")));
            });
            title.addClassName("service-post-title");
            title.addClassName("service-post-title-hov");

            Button user = new Button("User: " + i.get("user"), e ->{
                this.getUI().ifPresent(ui -> ui.navigate(i.get("account_route")));
            });
            user.addClassName("service-post-user");
            user.addClassName("service-post-user-hov");

            Button school = new Button("School: " + i.get("school"), e ->{
                UI.getCurrent().getPage().executeJs("window.open('https://www.sfsu.edu/');");
            });
            school.addClassName("service-post-school");
            school.addClassName("service-post-school-hov");

            Button description = new Button(i.get("description"), e ->{
                this.getUI().ifPresent(ui -> ui.navigate(i.get("route")));
            });
            description.addClassName("service-post-description");
            description.addClassName("service-post-description-hov");

            hv1.add(title, user, school, description);
            add(hv1);

            servicePostCounter++;
        }
        FooterView footer = new FooterView();
           HorizontalLayout footerLay = new HorizontalLayout();
           footerLay.setClassName("FooterLayout");
           footerLay = footer.getFooter();
           add(footerLay);
        
    }

}
