package com.example.application.views.home;

import com.example.application.views.MainLayout;
import com.vaadin.flow.component.Key;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.icon.VaadinIcon;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.FlexComponent;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.component.textfield.TextFieldVariant;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.router.RouteAlias;

@PageTitle("Home")
@Route(value = "home", layout = MainLayout.class)
@RouteAlias(value = "", layout = MainLayout.class)
public class HomeView extends HorizontalLayout {

    private TextField name;
    private Button sayHello;

    public HomeView() {
         //searchbar
         TextField searchBar = new TextField();
         searchBar.setPlaceholder("Search");
         searchBar.setPrefixComponent(VaadinIcon.SEARCH.create());
         searchBar.setClearButtonVisible(true);
         searchBar.setWidth("50em");
         //searchBar.addThemeVariants(TextFieldVariant.LUMO_ALIGN_CENTER);
         //searchBar.CENTER;
         //searchBar.set
 
         //zipcode searchbar
         TextField zipCode = new TextField();
         zipCode.setMinLength(5);
         zipCode.setMaxLength(5);
         zipCode.setPlaceholder("ZipCode");
         zipCode.getStyle().set("width", "6em");
        // zipCode.setLabel("Zip code");
         zipCode.setClearButtonVisible(true);
         
         HorizontalLayout hv = new HorizontalLayout(zipCode,searchBar);
         hv.setPadding(true);
         hv.setAlignItems(FlexComponent.Alignment.CENTER);

         add(hv);
    }

}
