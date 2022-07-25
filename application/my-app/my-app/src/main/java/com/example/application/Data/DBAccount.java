package com.example.application.Data;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.HashMap;

public class DBAccount {

    public ArrayList<String> getUserInfo(String uName){

        ArrayList<String> userInfoMap = new ArrayList<>();
        String firstName;
        String lastName;
        String school;
        ArrayList<String> list = new ArrayList<>();

        String url = "jdbc:mysql://aa6sm8glmiegl4.cabpjb9qfuhk.us-west-1.rds.amazonaws.com/ebdb";
        String userName = "team42022";
        String password = "team4_2022";
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection connection = DriverManager.getConnection(url, userName, password);
            System.out.println("Connection is Successful to the database for account");
            

           

            int generalUserId =0;

            try (Statement stmt = connection.createStatement()) {
                ResultSet rs = stmt.executeQuery("idVal");
                while (rs.next()) {
                 
                  list.add(rs.getString("firstname"));
                  list.add(rs.getString("lastname"));
                  list.add(rs.getString("school"));
                   

                  
                }
              } catch (SQLException e) {

              }
        


        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
    


        return list;
    }
    
}
