package com.example.application.views.forum;

import com.example.application.views.MainLayout;
import com.vaadin.flow.component.button.Button;
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
    public ForumList(){
        TextField searchBar = new TextField();
        searchBar.setPlaceholder("Search");
        searchBar.setPrefixComponent(VaadinIcon.SEARCH.create());
        searchBar.setClearButtonVisible(true);
        searchBar.setWidth("50em");


        Button search = new Button("Search for a forum post");

        HorizontalLayout hv = new HorizontalLayout(searchBar, search);
        setHorizontalComponentAlignment(Alignment.CENTER, hv);
        hv.setPadding(true);

        add(hv);

        getSearchButton().addClickListener(event -> {
        }
    }
}