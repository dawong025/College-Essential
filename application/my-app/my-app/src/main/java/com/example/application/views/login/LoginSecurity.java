package com.example.application.views.login;

import com.example.application.Data.DBlogin;

public class LoginSecurity {
    private Boolean flag;
    DBlogin db = new DBlogin();
    String userName;
    String passWord;

    public LoginSecurity(String userName, String passWord){
        
        this.userName = userName;
        this.passWord = passWord;

        if( userName.contains("@")){
            //is email
         flag = db.getEmailCred(userName,passWord);

        }else{
            //is username
         flag = db.getUserNameCred(userName,passWord);


        }
        
        
    }

    public Boolean getFlag(){
        return flag;
    }
    
}
