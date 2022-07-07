package com.example.application.views.home;

import java.util.HashMap;
import java.util.stream.Stream;

import com.example.application.Data.DBHome;
import com.example.application.Data.HomeDetail;
import com.example.application.views.MainLayout;

import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.icon.VaadinIcon;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
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

    private TextField name;
    private Button search;
    TextField searchBar;
    Select<String> select;
    HashMap<String, String> itemList = new HashMap<>();
    String searchedItem;

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

        HomeBinder home = new HomeBinder(this);
        getSearchButton().addClickListener(event -> {
            searchedItem = searchBar.getValue();
            System.out.println("item searched =" + searchedItem);
            // Create empty bean to store the details into

            DBHome db = new DBHome();
            //key is title, val is url
            itemList = db.searchHomeItem(searchedItem, "All");
            System.out.println(itemList.size());

            Grid<HashMap<String, String>> grid = new Grid<>();
            grid.setItems(itemList);
            grid.addColumn(itemList -> itemList.keySet()).setHeader("key");
            grid.addColumn(itemList -> itemList.values()).setHeader("value");
            // grid.addColumn(grid -> grid.get(key)).setHeader("Title");
            // Grid<String> grid = new Grid<>(String.class);
            // System.out.println("Grid printted successfully");
            // for (String key: itemList.keySet()) {
            //     // System.out.println("item list: " + itemList);
            //     // System.out.println("key : " + key);
            //     // System.out.println("value : " + itemList.get(key));
            //     grid.addColumn(itemList -> itemList.get(key)).setHeader(key);
            //     //grid.addColumn(key).setHeader("Title");
            
            // }
            add(grid);

            //List<Person> people = DataService.getPeople();
            //grid.setItems(itemList);

        });

    }

    public TextField getSearch() {
        return searchBar;
    }

    public Select<String> getSelector() {
        return select;
    }

    public Button getSearchButton() {
        return search;
    }

    private ValueProvider<HomeDetail, ?> createImageRenderer() {
        /*
         * return LitRenderer.<Person>of(
         * "<vaadin-avatar img=\"${item.pictureUrl}\" name=\"${item.fullName}\" alt=\"User avatar\"></vaadin-avatar>"
         * )
         * .withProperty("pictureUrl", Person::getPictureUrl);
         */
        return null;
    }

}
