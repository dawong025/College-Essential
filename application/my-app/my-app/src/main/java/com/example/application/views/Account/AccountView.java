
package com.example.application.views.Account;

import com.example.application.views.MainLayout;
import com.microsoft.schemas.office.office.impl.HrpctAttributeImpl;
import com.vaadin.flow.component.select.Select;
import com.vaadin.flow.component.grid.Grid;

import com.vaadin.flow.component.dependency.StyleSheet;
import com.vaadin.flow.component.dependency.CssImport;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.html.H2;
import com.vaadin.flow.component.html.H3;
import com.vaadin.flow.component.html.Label;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.component.html.Image;
import com.vaadin.flow.component.html.*;

import java.util.ArrayList;
import java.util.HashMap;

@CssImport("./themes/myapp/hello-grid.css")
@PageTitle("My Account")
@Route(value = "Account", layout = MainLayout.class)
public class AccountView extends Div{
    public AccountView(){

        getElement().getClassList().add("hello-grid");
        setWidth("99%");

        Div nametag = new Div();
        nametag.addClassName("label-one");

        Image img1 = new Image("images/icon.jpg", "placeholder icon");
        img1.setWidth("180px");
        img1.addClassName("pfp");
        H1 name = new H1("Kelly Smith");
        name.addClassName("name");
        

        HorizontalLayout h1 = new HorizontalLayout(img1, name);
        h1.addClassName("label-one");

        Div contactDiv = new Div();
        H3 contact = new H3("Contact Me");
        contact.addClassName("contact-me");
        HorizontalLayout h2 = new HorizontalLayout(contact);
        h2.addClassName("label-two");
        contactDiv.addClassName("label-two");

        Div ratingsDiv = new Div();
        H3 ratings = new H3("Ratings");
        ratings.addClassName("ratings");

        H6 ratingAuthor1 = new H6 ("@Reviewer1");
        ratingAuthor1.addClassName("rating-author");
        Span datePosted1 = new Span ("12/17/2022");
        datePosted1.addClassName("date-posted");
        H6 commentText1 = new H6("Kelly sold me a great oak table at a great price! Would buy from her again");
        commentText1.addClassName("comment-text");
        VerticalLayout rating1 = new VerticalLayout(ratingAuthor1, datePosted1, commentText1);
        rating1.addClassName("single-rating");
        
        VerticalLayout h3 = new VerticalLayout(ratings, rating1);
        h3.addClassName("label-three");
        ratingsDiv.addClassName("label-three");
        rating1.addClassName("label-three");
   
        add(nametag);
        add(contactDiv);
        add(ratingsDiv);

        add(h1);
        add(h2);
        add(h3);
    }
}
