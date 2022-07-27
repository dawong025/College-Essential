package com.example.application.views.login;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

import com.example.application.Data.DBlogin;

public class LoginSecurity {
    private Boolean flag;
    DBlogin db = new DBlogin();
    String userName;
    String passWord;

    public LoginSecurity(String userName, String passWord){
        
        this.userName = userName;
        this.passWord = passWord;
        passWord = HashPass(passWord);

        if( userName.contains("@")){
            //is email
         flag = db.getEmailCred(userName,passWord);

        }else{
            //is username
         flag = db.getUserNameCred(userName,passWord);


        }
        
        
    }
    // This is hashing the password 
    private String HashPass (String password)
    {
        String hashPass;
      try {
         MessageDigest md = MessageDigest.getInstance("MD5");
     md.update(password.getBytes());
     byte[] resultByteArray = md.digest();
     StringBuilder sd = new StringBuilder();
     for (byte b : resultByteArray)
     {
         System.out.println(sd.toString());
         sd.append(String.format("%02x",b));
     }
     System.out.println(sd.toString());
           hashPass =  sd.toString();
           return hashPass;
     } catch (NoSuchAlgorithmException e) {
         // TODO Auto-generated catch block
         e.printStackTrace();
     }
      return ""; 
    }
    public Boolean getFlag(){
        return flag;
    }
    
}
