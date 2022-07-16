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
import com.vaadin.flow.component.html.H3;
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
        //this.getElement().getStyle().set( "background-image" , "url('https://cdn.discordapp.com/attachments/982032674078216210/997652262996430868/unknown.png')" );
        this.addClassName("background-photo");
        searchBar = new TextField();
        searchBar.setClassName("searchBar");
        searchBar.setPlaceholder("Search For Books, Furniture and More....");
        searchBar.setPrefixComponent(VaadinIcon.SEARCH.create());
        searchBar.setClearButtonVisible(true);
        searchBar.setWidth("40em");

        

        // dropdown menu
        select = new Select<>();
        select.setItems("All Category","Textbook", "School", "Supplies", "Furniture", "Lifestyle");
        select.setValue("All Category");
        select.setClassName("selector");

        search = new Button("Search");
        search.setClassName("searchButton");


        HorizontalLayout hv = new HorizontalLayout(searchBar, select,search);
        hv.setSpacing(false);
        setHorizontalComponentAlignment(Alignment.CENTER, hv);
        add(hv);

        H3 descrip = new H3("Get Started By clicking one of the three button or searching for our products with the search bar");
        descrip.setClassName("description");
        add(descrip);

        Button marketPlaceButton = new Button("Marketplace",e->{
            //clears page and shows grid of everything
            if (!comps.isEmpty()) {
                for (Component c : comps) {
                    remove(c);
                }
            }
            DBHome db = new DBHome();
            itemList = db.searchHomeItem("", "All");
            popPage();

        });
        marketPlaceButton.setClassName("marketPlaceButton");
        marketPlaceButton.addThemeVariants(ButtonVariant.LUMO_LARGE);

        Button formButton = new Button("Forum Place", ev ->{
            this.getUI().ifPresent(ui -> ui.navigate("/forumList"));
        });
        formButton.setClassName("formButton");
        formButton.addThemeVariants(ButtonVariant.LUMO_LARGE);

        Button serviceButton = new Button("Service Listings" ,event ->{
            //add for service listing serviceList
            this.getUI().ifPresent(ui -> ui.navigate("/serviceList"));
        });
        serviceButton.setClassName("serviceButton");
        serviceButton.addThemeVariants(ButtonVariant.LUMO_LARGE);

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

        });

        itemList.clear();

    }

    public void popPage(){

        int count = 0;
            hor = new HorizontalLayout();
            
            vl = new VerticalLayout();
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
                b.setClassName("buttonItem");
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
