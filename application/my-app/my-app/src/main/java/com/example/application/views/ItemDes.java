package com.example.application.views;

import java.util.HashMap;

import org.apache.xmlbeans.impl.xb.xmlconfig.NamespaceList.Member2.Item;
import org.springframework.boot.autoconfigure.condition.ConditionMessage.ItemsBuilder;

import com.example.application.Data.HomeDetail;
import com.example.application.views.home.HomeView;
import com.vaadin.flow.component.html.H3;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;


@PageTitle("Home")
@Route(value = "item", layout = MainLayout.class)
public class ItemDes extends VerticalLayout{
    HomeView home = new HomeView();

    
    public ItemDes(){
        
        // H3 h3 = new H3(home.getButton().getText());
        // add(h3);
    
        System.out.println(home.getButton());
      
    }
    

}
