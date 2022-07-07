package com.example.application.Data;

import javax.validation.constraints.NotBlank;

import com.vaadin.flow.component.html.Image;

public class PostItemDetail {
    @NotBlank
   private String Title;

   @NotBlank
   private String image;

   @NotBlank
   private String condition;

   public String getCodition(){
    return condition;
   }

   public void setCondition(String condition){
    this.condition = condition;
   }

   public String getTitle() {return Title;}

   public void setTitle(String firstName) {this.Title = Title;}

   public String getImage() {return image;}

   public void setImage(String firstName) {this.image = image;}
    
}
