package com.example.application.Data;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

public class DBAdmin {

    public static ArrayList<ArrayList<String>> searchUser() throws ClassNotFoundException {
        ArrayList<String> user = new ArrayList<String>();
        ArrayList<ArrayList<String>> userNumList = new ArrayList<>();
        String url = "jdbc:mysql://aa6sm8glmiegl4.cabpjb9qfuhk.us-west-1.rds.amazonaws.com/ebdb";
        String userName = "team42022";
        String password = "team4_2022";
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection connection = DriverManager.getConnection(url, userName, password);
            System.out.println("Connection is Successful to the database" + url);
            
            String first_name;
            String last_name;
            String username;
            String emailDB;
            String school;
            String contact;
            
                
            String q = "SELECT first_name, last_name, username, email, school, contact FROM RegisteredUser";
            try {
                Statement stmt = connection.createStatement();
                ResultSet rs = stmt.executeQuery(q);
                int count = 0;
                while (rs.next()) {
                    first_name = rs.getString("first_name");
                    last_name = rs.getString("last_name");
                    username = rs.getString("username");
                    emailDB = rs.getString("email");
                    school = rs.getString("school");
                    contact = rs.getString("contact");
                    
                    user.add(first_name);
                    user.add(last_name);
                    user.add(username);
                    user.add(emailDB);
                    user.add(school);
                    user.add(contact);

                    userNumList.add(user);
                    count++;
                      
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }  

        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }  
        return userNumList;
    }
    
}
