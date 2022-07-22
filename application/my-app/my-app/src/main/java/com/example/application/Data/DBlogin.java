package com.example.application.Data;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import javax.validation.constraints.Pattern.Flag;

import com.example.application.views.login.LoginSecurity;

public class DBlogin {
    String url = "jdbc:mysql://aa6sm8glmiegl4.cabpjb9qfuhk.us-west-1.rds.amazonaws.com/ebdb";
    String userName = "team42022";
    String password = "team4_2022";

    public DBlogin(){
        System.out.println("hi");

    }

    public Boolean getEmailCred(String email, String pass){
        boolean flag = false;
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection connection = DriverManager.getConnection(url, userName, password);
            System.out.println("Connection is Successful to the database for Login" + url);


            String sqlEmail = "SELECT RegisteredUser.email FROM RegisteredUser"
            + " WHERE RegisteredUser.email LIKE '%" +email+"%';";
     
            String sqlPassWord = "SELECT RegisteredUser.password FROM RegisteredUser"
            + " WHERE RegisteredUser.email LIKE '%" +email+"%';";
            String tempEmail = "";
            try (Statement stmt = connection.createStatement()) {
                ResultSet rs = stmt.executeQuery(sqlEmail);
                while (rs.next()) {

                  tempEmail = rs.getString("email");
                  
                }
            } catch (SQLException e) {
    
            } 

            if(tempEmail.length() > 0){
                 String tempPass = "";
            try (Statement stmt = connection.createStatement()) {
                ResultSet rs = stmt.executeQuery(sqlPassWord);
                while (rs.next()) {

                  tempPass = rs.getString("password");
                  
                }
            } catch (SQLException e) {
    
            } 
            if(!tempPass.isEmpty()){
                if(pass.equals(tempPass)){
                  flag = true;  
                }
                
            }
            }
           



        }catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }


        return flag;
    }

    public Boolean getUserNameCred(String uName, String pass){



        return false;
    }
    
}
