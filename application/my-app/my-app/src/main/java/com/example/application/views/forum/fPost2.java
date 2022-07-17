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

@PageTitle("Forum Page")
@Route(value = "fPost2", layout = MainLayout.class)
public class fPost2 extends VerticalLayout{
    public fPost2(){
        this.addClassName("forum-background");
        HashMap<String, String> post2 = new HashMap<String, String>();
        post2.put("title", "Website");
        post2.put("user", "Brendan2");
        post2.put("description", "This is a website. AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH");

        H2 title = new H2(post2.get("title"));
        
        TextField user = new TextField("User");
        user.setValue(post2.get("user"));
        user.setReadOnly(true);

        TextArea description = new TextArea("Description");
        description.setWidth("800px");
        description.setMinHeight("200px");
        description.setValue(post2.get("description"));
        description.setReadOnly(true);

        add(
            title,
            user,
            description
        );
    }
}
