package com.example.application.Data;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import java.util.HashMap;

import com.vaadin.flow.component.charts.model.Items;
public class DBHome {

    
    public static HashMap<String,String> searchHomeItem(String Title, String selector) {
        HashMap<String, String> itemList = new HashMap<String,String>();
        String url = "jdbc:mysql://aa6sm8glmiegl4.cabpjb9qfuhk.us-west-1.rds.amazonaws.com/ebdb";
        String userName = "team42022";
        String password = "team4_2022";
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection connection = DriverManager.getConnection(url, userName, password);
            System.out.println("Connection is Successful to the database" + url);

            if(!selector.contains("All")){
                
                String q = "SELECT MarketplaceListing.title, Product.product_image, Product.product_condition FROM ProductListings"
               + " JOIN MarketplaceListing ON ProductListings.marketplace_listing_id = MarketplaceListing.marketplace_listing_id"
               +" JOIN Product ON ProductListings.product_id = Product.product_id"
               +" WHERE MarketplaceListing.title LIKE '%" +Title+ "%' AND Product.product_condition LIKE '%" +selector+ "%';";
            
                String nameItem;
                String imageURL;
                try (Statement stmt = connection.createStatement()) {
                    ResultSet rs = stmt.executeQuery(q);
                    while (rs.next()) {
                      nameItem = rs.getString("title");
                      imageURL = rs.getString("product_image");
                      System.out.println(nameItem + " " +imageURL+ " "+selector);
                        itemList.put(nameItem,imageURL);
                      
                    }
                  } catch (SQLException e) {
    
                  }  

            }else{
            String q = "SELECT MarketplaceListing.title, Product.product_image FROM ProductListings"
            +" JOIN MarketplaceListing ON ProductListings.marketplace_listing_id = MarketplaceListing.marketplace_listing_id"
           +" JOIN Product ON ProductListings.product_id = Product.product_id"
            + " WHERE MarketplaceListing.title LIKE '%" +Title + "%';";
            String nameItem;
            String imageURL;
            try (Statement stmt = connection.createStatement()) {
                ResultSet rs = stmt.executeQuery(q);
               
                while (rs.next()) {
                  nameItem = rs.getString("title");
                  imageURL = rs.getString("product_image");
                  
                    itemList.put(nameItem,imageURL);
                  
                }
              } catch (SQLException e) {

              }  
            }
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        return itemList;
    }
}
