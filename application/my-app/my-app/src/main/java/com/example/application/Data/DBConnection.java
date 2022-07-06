package com.example.application.Data;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

import org.springframework.boot.CommandLineRunner;
import org.springframework.jdbc.core.JdbcTemplate;

public class DBConnection implements CommandLineRunner{

    private JdbcTemplate jdbc;

    public static void StoreRegUser(String FirstName, String LastName, String Email, String Password) {
        
        String url = "jdbc:mysql://aa6sm8glmiegl4.cabpjb9qfuhk.us-west-1.rds.amazonaws.com/ebdb";
        String userName = "team42022";
        String password = "team4_2022";
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection connection = DriverManager.getConnection(url, userName, password);
            System.out.println("Connection is Successful to the database" + url);
        // String sql = "Insert into RegisteredUser(first_name, last_name, email, password) values(?,?, ?, '?')";
         
        // int result = jdbc.update(sql, user.getFirstName(), user.getLastName(), user.getEmail(), user.getPassword());
         
        // if (result > 0) {
        //     System.out.println("A new row has been inserted.");
        // }
            
            
            String query = "Insert into RegisteredUser(first_name, last_name, email, password) values('"+FirstName+"','"+LastName+"','"+Email+"','"+password+"')";
            
            Statement statement = connection.createStatement();
            statement.execute(query);
            
            statement.execute(query);


        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
    }

    @Override
    public void run(String... args) throws Exception {
        
        
    }

}