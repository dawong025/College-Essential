package com.example.application.views.home;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.apache.xmlbeans.impl.common.ValidatorListener.Event;

import com.example.application.Data.DBHome;
import com.example.application.Data.HomeDetail;
import com.vaadin.flow.component.map.Map;
import com.vaadin.flow.data.binder.BeanValidationBinder;
import com.vaadin.flow.server.startup.VaadinInitializerException;
import java.util.HashMap;

public class HomeBinder {
    HomeView homeView;
    HashMap<String,String> itemList = new HashMap<String,String>();

    public HomeBinder(HomeView homeView){
        this.homeView = homeView;
    }

    public HashMap<String,String> getItemsSearched(){
        BeanValidationBinder<HomeDetail> binder = new BeanValidationBinder<>(HomeDetail.class);
        binder.bindInstanceFields(homeView);

        homeView.getSearch().addAttachListener( event ->{
            DBHome db = new DBHome();
            HomeDetail userBean = new HomeDetail();
           itemList = db.searchHomeItem(userBean.getText(),userBean.getSelector());
            

        });
        return itemList;
    }
    
}
