package com.example.application.Data;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;


import org.springframework.boot.CommandLineRunner;
import org.springframework.jdbc.core.JdbcTemplate;

import com.vaadin.flow.component.charts.model.Title;
import com.vaadin.flow.component.html.Image;
public class DBPostItem {
    


    public static void StorePostItem(String Title, String image, String condition) {
        
        String url = "jdbc:mysql://aa6sm8glmiegl4.cabpjb9qfuhk.us-west-1.rds.amazonaws.com/ebdb";
        String userName = "team42022";
        String password = "team4_2022";
        System.out.println("\n\n\n\n\n" + Title + " " + image +" "+ condition+"\n\n\n\n");

        int productID = 0;
        int marketPlaceID = 0;

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection connection = DriverManager.getConnection(url, userName, password);
            System.out.println("Connection is Successful to the database" + url);
            
            /* Insert into the product table */
            String query = "INSERT INTO Product (product_image, product_condition) VALUES ('"+image+"','"+condition+"' );";
            
            Statement statement = connection.createStatement();
            statement.execute(query);

            /* Get the ID of the newly added product */
            query = "SELECT product_id FROM Product ORDER BY product_id DESC LIMIT 1;";
            
            try (Statement stmt = connection.createStatement()) {
                ResultSet rs = stmt.executeQuery(query);
                while (rs.next()) {
                  productID = rs.getInt("product_id");
                  //System.out.println(generalUserId);
                }
              } catch (SQLException e) {

            }
        /* Insert into the marketplace listing table */
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
             connection = DriverManager.getConnection(url, userName, password);
            System.out.println("Connection is Successful to the database" + url);
            
            
             query = "Insert into MarketplaceListing(title, seller_id) values('"+Title+"',2)";
            
             statement = connection.createStatement();
            statement.execute(query);
        

        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        /* Get the marketplace listing id of the newly added listing */
        query = "SELECT marketplace_listing_id FROM MarketplaceListing ORDER BY marketplace_listing_id DESC LIMIT 1;";
           
        try (Statement stmt = connection.createStatement()) {
            ResultSet rs = stmt.executeQuery(query);
            while (rs.next()) {
              marketPlaceID = rs.getInt("marketplace_listing_id");
              //System.out.println(generalUserId);
            }
          } catch (SQLException e) {

          }
        /* Insert into the associative table ProductListings */
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
             connection = DriverManager.getConnection(url, userName, password);
            System.out.println("Connection is Successful to the database" + url);
            
             query = "INSERT INTO ProductListings (marketplace_listing_id, product_id) VALUES ('"+marketPlaceID+"', '"+productID+"');";
            
             statement = connection.createStatement();
            statement.execute(query);
        
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
    } catch (ClassNotFoundException e) {
        e.printStackTrace();
    } catch (SQLException throwables) {
        throwables.printStackTrace();
    }
    }
}
