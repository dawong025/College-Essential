package com.example.application.Data;

import javax.validation.constraints.NotBlank;

import com.vaadin.flow.component.html.Image;

public class PostItemDetail {
    @NotBlank
   private String Title;

   @NotBlank
   private String url;

   @NotBlank
   private String condition;

   @NotBlank
   private String price;

   @NotBlank
   private String category;//make getter and setters

   

   public String getCondition(){
    return condition;
   }

   public void setCondition(String condition){
    this.condition = condition;
   }

   public String getTitle() {return Title;}

   public void setTitle(String Title) {this.Title = Title;}

   public String getUrl() {return url;}

   public void setUrl(String url) {this.url = url;}
   public String getCategory(){return category;}
   public void setCategory(String category){
    this.category = category;
   }
}
