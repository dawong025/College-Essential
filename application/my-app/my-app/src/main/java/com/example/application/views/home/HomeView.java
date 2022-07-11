package com.example.application.views.home;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.stream.Stream;

//import java.awt.*;


import com.example.application.Data.DBHome;
import com.example.application.Data.HomeDetail;
import com.example.application.Data.ItemDetails;

import com.example.application.views.MainLayout;
import com.vaadin.flow.component.UI;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.html.Image;
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
    private Button itemButton;
    TextField searchBar;
    Select<String> select;
    HashMap<String, String> itemList = new HashMap<>();
    String searchedItem;
    ItemDetails itemDetails = new ItemDetails();


    //Liveshare test - Darren Wong
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

        //HomeBinder home = new HomeBinder(this);
        ArrayList<Button> buttonList = new ArrayList<>();

        getSearchButton().addClickListener(event -> {
            searchedItem = searchBar.getValue();
            String condition = select.getValue();
           

            DBHome db = new DBHome();
            
            // key is title, val is url
            Grid<HashMap<String, String>> grid = new Grid<>();
            
            
            itemList = db.searchHomeItem(searchedItem, condition);
            
            //Button b = new Button();
            for (String key : itemList.keySet()) {
               // System.out.println(itemList.keySet());
                Button b = new Button(key);
                grid.addComponentColumn(v -> {
                    Image image = new Image(itemList.get(key), key);
                    image.setHeight("200px");
                    image.setWidth("150px");
                    return image;
                }).setHeader(b);
                buttonList.add(b);
                
            }
            //gets button for specific item
            for(int i =0; i < buttonList.size(); i++){
                Button b = buttonList.get(i);
                b.addClickListener(e ->{
                    itemDetails.setItemName(b.getText());
                    System.out.println("\n\nbutton is =" + b.getText() + "\n\n");
                    this.getUI().ifPresent(ui ->
                    ui.navigate("/item"));
                });
            }
            

            grid.setItems(itemList);

            add(grid);
            
            

        });

        

        itemList.clear();
    

        // UI.getCurrent().getPage().reload();

    }

    public TextField getSearch() {
        return searchBar;
    }

    public void setButton(Button title){
        itemButton = title;
    }

    public Button getButton(){
        return itemButton;
    }

    public String getSelector() {
        return select.toString();
    }

    public Button getSearchButton() {
        return search;
    }

}
