package com.example.application.views.forum;

import java.util.ArrayList;
import java.util.HashMap;

import com.example.application.views.MainLayout;
import com.vaadin.flow.component.ClickNotifier;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.dependency.CssImport;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.html.H2;
import com.vaadin.flow.component.html.NativeButton;
import com.vaadin.flow.component.icon.VaadinIcon;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.select.Select;
import com.vaadin.flow.component.textfield.TextArea;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;

@CssImport("./themes/myapp/forumpost.css")
@PageTitle("Forum Page")
@Route(value = "fPost1", layout = MainLayout.class)
public class fPost1 extends VerticalLayout{
    public fPost1(){
        this.addClassName("forum-background");

        HashMap<String, String> post1 = new HashMap<String, String>();
        post1.put("title", "Anime");
        post1.put("user", "Brendan1");
        post1.put("description", "I really like this one anime. AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH");

        H2 title = new H2(post1.get("title"));
        title.addClassName("title");

        TextField user = new TextField("");
        user.addClassName("user");
        user.setValue(post1.get("user"));
        user.setReadOnly(true);

        TextArea description = new TextArea("");
        description.setWidth("800px");
        description.setMinHeight("200px");
        description.setValue(post1.get("description"));
        description.setReadOnly(true);
        description.addClassName("description");

        add(
            title,
            user,
            description
        );
    }
}
