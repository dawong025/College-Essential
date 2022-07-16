package com.example.application.views.forum;

import java.util.ArrayList;
import java.util.HashMap;

import com.example.application.views.MainLayout;
import com.vaadin.flow.component.ClickNotifier;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.dependency.CssImport;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.html.NativeButton;
import com.vaadin.flow.component.icon.VaadinIcon;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.select.Select;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;

@CssImport("./themes/myapp/forumlist.css")
@PageTitle("Forum List")
@Route(value = "forumList", layout = MainLayout.class)
public class ForumList extends VerticalLayout {
    //Array list of posts to be added to the horizontal layout. Temporary, and should be deleted later
    ArrayList<HashMap<String, String>> post = new ArrayList<HashMap<String, String>>();
    
    //Code for the search button
    Button search = new Button("Search");

    //Code for the new post button that routes you to a page where you can make a post
    Button newPost = new Button("Make a new post", e ->{
        this.getUI().ifPresent(ui -> ui.navigate("/forumPost"));
    });

    public ForumList(){

        //Code for the text field
        TextField searchBar = new TextField();
        searchBar.setPlaceholder("Search for a forum post (Title, Description, User)");
        searchBar.setPrefixComponent(VaadinIcon.SEARCH.create());
        searchBar.setClearButtonVisible(true);
        searchBar.setWidth("50em");

        //This is a selection drop down bar. Dropdown is here as placeholder, and will not be changed till later.
        Select select = new Select<>();
        select.setItems("New", "Used",
                "All");
        select.setValue("All");


        //The horizontal layout with the text field, search button, and new post button
        HorizontalLayout hv = new HorizontalLayout(searchBar, search, select, newPost);
        setHorizontalComponentAlignment(Alignment.CENTER, hv);
        hv.setWidthFull();
        
        hv.setPadding(true);

        add(hv);

        getSearchButton().addClickListener(event -> {
            //Should show a list of forum posts based on the input from the search bar
        });
        
        //Fake posts to be deleted later, code below this should be altered or deleted later
        HashMap<String, String> post1 = new HashMap<String, String>();
        post1.put("title", "Anime");
        post1.put("user", "Brendan1");
        post1.put("description", "I really like this one anime. AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH");

        HashMap<String, String> post2 = new HashMap<String, String>();
        post2.put("title", "Website");
        post2.put("user", "Brendan2");
        post2.put("description", "This is a website. AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH");

        post.add(post1);
        post.add(post2);

        
        for(HashMap<String, String> i: post){
            HorizontalLayout hv1 = new HorizontalLayout();
            hv1.setWidthFull();

            //Should at some point route to an url stored in the database
            Button title = new Button(i.get("title"), e ->{
                this.getUI().ifPresent(ui -> ui.navigate("/forumPost"));
            });
            title.addClassName("forum-post-title");
            title.addClassName("forum-post-title-hov");

            Button user = new Button(i.get("user"), e ->{
                this.getUI().ifPresent(ui -> ui.navigate("/Account"));
            });
            user.addClassName("forum-post-user");
            user.addClassName("forum-post-user-hov");

            Button description = new Button(i.get("description"), e ->{
                this.getUI().ifPresent(ui -> ui.navigate("/forumPost"));
            });
            description.addClassName("forum-post-description");
            description.addClassName("forum-post-description-hov");

            hv1.add(title, user, description);
            add(hv1);
        }
        
    }

    public Button getSearchButton() {
        return search;
    }
}