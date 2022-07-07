package com.example.application.views.home;

import com.example.application.Data.HomeDetail;
import com.example.application.Data.PostItemDetail;
import com.example.application.views.MainLayout;
import com.vaadin.flow.component.Key;
import com.vaadin.flow.component.Text;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.icon.VaadinIcon;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.FlexComponent;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.select.Select;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.component.textfield.TextFieldVariant;
import com.vaadin.flow.function.ValueProvider;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.router.RouteAlias;

import com.vaadin.flow.component.grid.GridVariant;


@PageTitle("Home")
@Route(value = "home", layout = MainLayout.class)
@RouteAlias(value = "", layout = MainLayout.class)
public class HomeView extends VerticalLayout {

    private TextField name;
    private Button sayHello;
    TextField searchBar;
    Select<String> select;

    public HomeView() {
         //searchbar
         searchBar = new TextField();
         searchBar.setPlaceholder("Search");
         searchBar.setPrefixComponent(VaadinIcon.SEARCH.create());
         searchBar.setClearButtonVisible(true);
         searchBar.setWidth("50em");
    
 
         //zipcode searchbar
         TextField zipCode = new TextField();
         zipCode.setMinLength(5);
         zipCode.setMaxLength(5);
         zipCode.setPlaceholder("ZipCode");
         zipCode.getStyle().set("width", "6em");
        // zipCode.setLabel("Zip code");
         zipCode.setClearButtonVisible(true);

         //dropdown menu
        select = new Select<>();
         //select.setLabel("Sort by");
         select.setItems("New", "Used",
         "All");
        select.setValue("All");

         //add(select);
         
         HorizontalLayout hv = new HorizontalLayout(zipCode,searchBar,select);
         setHorizontalComponentAlignment(Alignment.CENTER, hv);
         hv.setPadding(true);
         

         add(hv);

         HomeBinder homeBinder= new HomeBinder(this);
      homeBinder.getItemsSearched();

      Grid<PostItemDetail> grid = new Grid<>(PostItemDetail.class, false);
       // grid.addColumn(createImageRenderer()).setHeader("Image");
               // .setAutoWidth(true).setFlexGrow(0);
        grid.addColumn(PostItemDetail::getUrl).setHeader("Image");
        grid.addColumn(PostItemDetail::getTitle).setHeader("image");
        grid.addColumn(PostItemDetail::getCondition).setHeader("image");

        grid.addThemeVariants(GridVariant.LUMO_COLUMN_BORDERS);

       // grid.setItems(UserDetails);
        add(grid);



    }

    public TextField getSearch(){
        return searchBar;
    }

    public Select<String> getSelector(){
        return select;
    }

    private ValueProvider<HomeDetail, ?> createImageRenderer() {
        /*return LitRenderer.<Person>of(
                "<vaadin-avatar img=\"${item.pictureUrl}\" name=\"${item.fullName}\" alt=\"User avatar\"></vaadin-avatar>")
                .withProperty("pictureUrl", Person::getPictureUrl); */
        return null;
    }

}
