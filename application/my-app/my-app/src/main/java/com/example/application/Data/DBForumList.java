package com.example.application.Data;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.mysql.cj.xdevapi.Statement;

public class DBForumList {
    public static void searchHomeItem(String Title, String forumPost) throws ClassNotFoundException {
        String url = "jdbc:mysql://aa6sm8glmiegl4.cabpjb9qfuhk.us-west-1.rds.amazonaws.com/ebdb";
        String userName = "team42022";
        String password = "team4_2022";

        try{
            String forumTitle;
            String post;

            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection connection = DriverManager.getConnection(url, userName, password);
            System.out.println("Connection to the database" + url + "didn't go kaboom");
            Statement stmt = (Statement) connection.createStatement();

            String q = "SELECT * FROM ForumPost WHERE ForumPost.title = '%" +Title+ "%'" +
                        "SELECT * FROM ForumPost WHERE ForumPost.title = '%" +forumPost+ "%'"; //Enter a SQL query here to pull from a forum table to populate a grid later
            ResultSet rs = ((java.sql.Statement) stmt).executeQuery(q);
            forumTitle = rs.getString("title");
            post = rs.getString("description");

        }catch(SQLException e){
            
        }
        
    }
}
