package com.example.application.views.PostItem;

import javax.validation.constraints.Null;

import com.example.application.Data.DBPostItem;
import com.example.application.Data.PostItemDetail;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.notification.NotificationVariant;
import com.vaadin.flow.data.binder.BeanValidationBinder;
import com.vaadin.flow.data.binder.ValidationException;

public class PostItemFormBinder {
    PostItemView postItem;

    public PostItemFormBinder(PostItemView postItem){
        this.postItem = postItem;
    }


    public void addBinderForPostItem(){
        BeanValidationBinder<PostItemDetail> binder = new BeanValidationBinder<>(PostItemDetail.class);
        binder.bindInstanceFields(postItem);

        postItem.getPostButton().addClickListener(event ->{
            try {
                // Create empty bean to store the details into

                
                DBPostItem db = new DBPostItem();
                
                PostItemDetail userBean = new PostItemDetail();
 
                // Run validators and write the values to the bean
                binder.writeBean(userBean);
                db.StorePostItem(userBean.getTitle(), userBean.getImage());
                 postItem.getUI().ifPresent(ui ->
                ui.navigate("/home"));
                // Typically, you would here call backend to store the bean
 
                // Show success message if everything went well
                showSuccess(userBean);
            } catch (ValidationException exception) {
                // validation errors are already visible for each field,
                // and bean-level errors are shown in the status label.
                // We could show additional messages here if we want, do logging, etc.
            }
        });
    }



    private void showSuccess(PostItemDetail userBean) {
        Notification notification =
                Notification.show("Post Was Succesful");
        notification.addThemeVariants(NotificationVariant.LUMO_SUCCESS);
        
 
        // Here you'd typically redirect the user to another view
    }



}
