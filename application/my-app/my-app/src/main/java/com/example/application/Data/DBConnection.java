package com.example.application.Data;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

public class DBConnection {
    public static void main(String args[]) {
        String url = "jdbc:mysql://aa6sm8glmiegl4.cabpjb9qfuhk.us-west-1.rds.amazonaws.com/ebdb";
        String user = "team42022";
        String password = "team4_2022";
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection connection = DriverManager.getConnection(url, user, password);
            System.out.println("Connection is Successful to the database" + url);
            String query = "Insert into RegisteredUser(first_name, last_name, email, password) values('Phil', 'Doctor', 'drphil@gmail.com', 'solveissues')";
            Statement statement = connection.createStatement();
            statement.execute(query);


        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
    }

}