package com.example.application.Data;

import javax.validation.constraints.NotBlank;

import com.vaadin.flow.component.html.Image;

public class PostItemDetail {
    @NotBlank
   private String Title;

   @NotBlank
   private Image image;

   public String getTitle() {return Title;}

   public void setTitle(String firstName) {this.Title = Title;}

   public Image getImage() {return image;}

   public void setImage(String firstName) {this.image = image;}
    
}
