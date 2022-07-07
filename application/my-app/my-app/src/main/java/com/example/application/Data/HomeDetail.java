package com.example.application.Data;

import javax.validation.constraints.NotBlank;

public class HomeDetail {

    @NotBlank
    private String text;
    private String selector;

    public String getText(){return text;}
    public void setText(String text){this.text = text;}
    public String getSelector(){
        return selector;
    }
    public void setSelector(String selector){this.selector = selector;}
    
}
