package com.example.application.views.forum;

import com.example.application.views.MainLayout;
import com.vaadin.flow.component.ClickNotifier;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.html.NativeButton;
import com.vaadin.flow.component.icon.VaadinIcon;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.select.Select;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;


@PageTitle("Forum List")
@Route(value = "forumList", layout = MainLayout.class)
public class ForumList extends VerticalLayout {
    Button search = new Button("Search");
    Button newPost = new Button("Make a new post", e ->{
        this.getUI().ifPresent(ui -> ui.navigate("/forumPost"));
    });

    public ForumList(){
        TextField searchBar = new TextField();
        searchBar.setPlaceholder("Search for a forum post (Title, Description, User)");
        searchBar.setPrefixComponent(VaadinIcon.SEARCH.create());
        searchBar.setClearButtonVisible(true);
        searchBar.setWidth("50em");


        HorizontalLayout hv = new HorizontalLayout(searchBar, search, newPost);
        setHorizontalComponentAlignment(Alignment.CENTER, hv);
        hv.setPadding(true);

        add(hv);

        getSearchButton().addClickListener(event -> {
        });
        
        
    }

    public Button getSearchButton() {
        return search;
    }
}