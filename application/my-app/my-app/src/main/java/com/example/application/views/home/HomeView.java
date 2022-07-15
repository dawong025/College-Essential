package com.example.application.views.home;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import com.example.application.Data.DBHome;
import com.example.application.views.MainLayout;
import com.example.application.views.Items.ItemView;
import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.UI;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.button.ButtonVariant;
import com.vaadin.flow.component.dependency.CssImport;
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

@CssImport("./themes/myapp/Home.css")
@PageTitle("College Essentials Home")
@Route(value = "home", layout = MainLayout.class)
@RouteAlias(value = "", layout = MainLayout.class)
public class HomeView extends VerticalLayout {

    private Button search;
    private Button itemButton;
    TextField searchBar;
    Select<String> select;
    static HashMap<String, String> itemList = new HashMap<>();
    String searchedItem;
    List<Component> comps = new ArrayList<>();
    //ItemView itemView = new ItemView();
    HorizontalLayout hor = new HorizontalLayout();
    VerticalLayout vl = new VerticalLayout();
    private static String currTitle;

    // Liveshare test - Darren Wong
    public HomeView() {
        // searchbar
        // adds background image
        // this.getElement().getStyle().set( "background-image" , "url('cat.jpg')" );
        searchBar = new TextField();
        searchBar.setClassName("searchBar");
        searchBar.setPlaceholder("Search For Books, Furniture and More....");
        searchBar.setPrefixComponent(VaadinIcon.SEARCH.create());
        searchBar.setClearButtonVisible(true);
        searchBar.setWidth("40em");

        

        // dropdown menu
        select = new Select<>();
        select.setItems("All Catagory","Textbook", "School", "Supplies", "Furniture", "Lifestyle");
        select.setValue("All Catagory");
        select.setClassName("selector");

        search = new Button("Search");
        search.setClassName("searchButton");

        HorizontalLayout hv = new HorizontalLayout(searchBar, select,search);
        hv.setSpacing(false);
        setHorizontalComponentAlignment(Alignment.CENTER, hv);
        add(hv);

        Button marketPlaceButton = new Button("Market Place");
        marketPlaceButton.setClassName("marketPlaceButton");

        Button formButton = new Button("Form Place");
        formButton.setClassName("formButton");

        Button serviceButton = new Button("Service Listing");
        serviceButton.setClassName("serviceButton");

        HorizontalLayout buttonLayout = new HorizontalLayout();
        buttonLayout.add(marketPlaceButton,formButton,serviceButton);
        buttonLayout.setJustifyContentMode(JustifyContentMode.AROUND);
        buttonLayout.setClassName("buttonLayout");
        add(buttonLayout);
        comps.add(buttonLayout);

        
        

       
        
        

        ArrayList<Button> buttonList = new ArrayList<>();
        hor.setClassName("horItemLayout");
        vl.setClassName("vertItemLayout");
       
        getSearchButton().addClickListener(event -> {
            searchedItem = searchBar.getValue();
            String condition = select.getValue();

            // key is title, val is url
            DBHome db = new DBHome();
            itemList = db.searchHomeItem(searchedItem, condition);
         

            // removes components
            if (!comps.isEmpty()) {
                for (Component c : comps) {
                    remove(c);
                }
            }

            popPage();
            // gets button for specific item

        });

        itemList.clear();

    }

    public void popPage(){

        int count = 0;
            HorizontalLayout hor = new HorizontalLayout();
            VerticalLayout vl = new VerticalLayout();
        for (String key : itemList.keySet()) {

            if (count < 4) {
                Image image = new Image(itemList.get(key), key);
                image.setHeight("200px");
                image.setWidth("150px");
                vl.add(image);
                Button b = new Button(key, e -> {
                    currTitle = key;
                    this.getUI().ifPresent(ui -> ui.navigate("/itemView"));
                });
                b.addThemeVariants(ButtonVariant.LUMO_PRIMARY);
                vl.add(b);
                hor.add(vl);
                comps.add(hor);
                vl.setAlignItems(Alignment.CENTER);
                vl = new VerticalLayout();
            } else {
                hor.setPadding(true);
                hor.setSpacing(true);
                hor.setWidthFull();
                hor.setJustifyContentMode(JustifyContentMode.AROUND);
                add(hor);
                comps.add(hor);

                hor = new HorizontalLayout();

                count = 0;
            }
            count++;

        }
        hor.setWidthFull();
        hor.setJustifyContentMode(JustifyContentMode.AROUND);
        add(hor);


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
