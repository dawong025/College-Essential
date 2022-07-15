
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

        /* Name Profile Grid Area */
        Div nametag = new Div();
        nametag.addClassName("label-one");

        Image img1 = new Image("images/icon.jpg", "placeholder icon");
        img1.setWidth("180px");
        img1.addClassName("pfp");
        H1 name = new H1("Kelly Smith");
        name.addClassName("name");
        

        HorizontalLayout h1 = new HorizontalLayout(img1, name);
        h1.addClassName("label-one");

        /* Contact Grid Area */
        Div contactDiv = new Div();
        H3 contact = new H3("Contact Me");
        contact.addClassName("contact-me");
        HorizontalLayout h2 = new HorizontalLayout(contact);
        h2.addClassName("label-two");
        contactDiv.addClassName("label-two");

        /* Ratings Grid Area */
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

        H6 ratingAuthor2 = new H6 ("@Reviewer2");
        ratingAuthor2.addClassName("rating-author");
        Span datePosted2 = new Span ("12/17/2022");
        datePosted2.addClassName("date-posted");
        H6 commentText2 = new H6("Kelly sold me a pair of Sony Headphones");
        commentText2.addClassName("comment-text");
        VerticalLayout rating2 = new VerticalLayout(ratingAuthor2, datePosted2, commentText2);
        rating2.addClassName("single-rating");

        H6 ratingAuthor3 = new H6 ("@Reviewer3");
        ratingAuthor3.addClassName("rating-author");
        Span datePosted3 = new Span ("12/17/2022");
        datePosted3.addClassName("date-posted");
        H6 commentText3 = new H6("Kelly sold me a nice couch from IKEA");
        commentText3.addClassName("comment-text");
        VerticalLayout rating3 = new VerticalLayout(ratingAuthor3, datePosted3, commentText3);
        rating3.addClassName("single-rating");
        
        VerticalLayout h3 = new VerticalLayout(ratings, rating1, rating2, rating3);
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
