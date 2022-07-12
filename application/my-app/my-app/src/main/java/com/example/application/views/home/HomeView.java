package com.example.application.views.home;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.stream.Stream;

import org.atmosphere.interceptor.AtmosphereResourceStateRecovery.B;

//import java.awt.*;

import com.example.application.Data.DBHome;
import com.example.application.Data.HomeDetail;


import com.example.application.views.MainLayout;
import com.example.application.views.Items.ItemView;
import com.vaadin.flow.component.UI;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.button.ButtonVariant;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.html.Image;
import com.vaadin.flow.component.icon.VaadinIcon;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.orderedlayout.FlexComponent.Alignment;
import com.vaadin.flow.component.orderedlayout.FlexComponent.JustifyContentMode;
import com.vaadin.flow.component.select.Select;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.data.binder.ValidationException;
import com.vaadin.flow.function.ValueProvider;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.router.RouteAlias;
import java.awt.GridLayout;

@PageTitle("Home")
@Route(value = "home", layout = MainLayout.class)
@RouteAlias(value = "", layout = MainLayout.class)
public class HomeView extends VerticalLayout {

    private Button search;
    private Button itemButton;
    TextField searchBar;
    Select<String> select;
    static HashMap<String, String> itemList = new HashMap<>();
    String searchedItem;

    ItemView itemView = new ItemView();
    private static String currTitle;

    // Liveshare test - Darren Wong
    public HomeView() {
        // searchbar
        searchBar = new TextField();
        searchBar.setPlaceholder("Search");
        searchBar.setPrefixComponent(VaadinIcon.SEARCH.create());
        searchBar.setClearButtonVisible(true);
        searchBar.setWidth("50em");

        // zipcode searchbar
        // TextField zipCode = new TextField();
        // zipCode.setMinLength(5);
        // zipCode.setMaxLength(5);
        // zipCode.setPlaceholder("ZipCode");
        // zipCode.getStyle().set("width", "6em");
        // // zipCode.setLabel("Zip code");
        // zipCode.setClearButtonVisible(true);

        // dropdown menu
        select = new Select<>();
        // select.setLabel("Sort by");
        select.setItems("New", "Used",
                "All");
        select.setValue("All");

        search = new Button("Search");

        // add(select);

        HorizontalLayout hv = new HorizontalLayout(searchBar, search, select);
        setHorizontalComponentAlignment(Alignment.CENTER, hv);
        hv.setPadding(true);

        add(hv);

        // HomeBinder home = new HomeBinder(this);
        ArrayList<Button> buttonList = new ArrayList<>();

        getSearchButton().addClickListener(event -> {
            searchedItem = searchBar.getValue();
            String condition = select.getValue();

            DBHome db = new DBHome();

            // key is title, val is url
            Grid<HashMap<String, String>> grid = new Grid<>();

            itemList = db.searchHomeItem(searchedItem, condition);

            // creates new buttons for each entry and adds buttons to list
            int count = 0;
            HorizontalLayout hor = new HorizontalLayout();
            HorizontalLayout buttonsLays = new HorizontalLayout();
            VerticalLayout vl = new VerticalLayout();
            for (String key : itemList.keySet()) {

                if (count < 4) {
                    Image image = new Image(itemList.get(key), key);
                    image.setHeight("200px");
                    image.setWidth("150px");
                    vl.add(image);
                    Button b = new Button(key, e ->{
                        currTitle = key;
                        System.out.println("\n\nbutton is =" + key + "\n\n");
                        this.getUI().ifPresent(ui -> ui.navigate("/itemView"));
                    });
                    b.addThemeVariants(ButtonVariant.LUMO_PRIMARY);
                    buttonList.add(b);
                    vl.add(b);
                    hor.add(vl);
                    vl.setAlignItems(Alignment.CENTER);
                    vl = new VerticalLayout();
                } else {
                    hor.setPadding(true);
                    hor.setSpacing(true);
                    hor.setWidthFull();
                    hor.setJustifyContentMode(JustifyContentMode.AROUND);
                    add(hor);

                    hor = new HorizontalLayout();

                    count = 0;
                }
                count++;

            }
            hor.setWidthFull();
            hor.setJustifyContentMode(JustifyContentMode.AROUND);
            add(hor);
            // gets button for specific item

        });

        itemList.clear();

    }

    public static String getTitle() {
        return currTitle;
    }

    public static HashMap<String, String> getMap() {
        return itemList;
    }

    public TextField getSearch() {
        return searchBar;
    }

    public void setButton(Button title) {
        itemButton = title;
    }

    public Button getButton() {
        return itemButton;
    }

    public String getSelector() {
        return select.toString();
    }

    public Button getSearchButton() {
        return search;
    }

}
