package com.example.application.views.PostItem;

import com.example.application.views.MainLayout;
import com.vaadin.flow.component.Text;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.button.ButtonVariant;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.html.Image;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.component.upload.Upload;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.StreamResource;

import ch.qos.logback.core.joran.conditional.Condition;

import java.io.*;
import java.util.logging.Level;
import java.util.logging.Logger;

@PageTitle("Post Item")
@Route(value = "postItem", layout = MainLayout.class)

public class PostItemView extends VerticalLayout{
    private File file;
    private String originalFileName;
    private String mimeType;
    private Button postButton;
    private TextField Title;
    private TextField url;
    private TextField condition;

    public PostItemView(){

            url = new TextField("url");
            url.setPlaceholder("Enter URL of Image");
            add(url);
        // Configure upload component
        
            Title = new TextField("Title");
            Title.setPlaceholder("Title");

            add(Title);

            condition = new TextField("Condition");
            condition.setPlaceholder("Condition");

            add(condition);

            postButton = new Button("Post");
            postButton.addThemeVariants(ButtonVariant.LUMO_PRIMARY);
            add(postButton);

            PostItemFormBinder postItemFormBinder= new PostItemFormBinder(this);
       postItemFormBinder.addBinderForPostItem();


    }
    
    public Button getPostButton() { return postButton; }


    
    
    /** Load a file from local filesystem.
     *
     */
    public InputStream loadFile() {
        try {
            return new FileInputStream(file);
        } catch (FileNotFoundException e) {
            Logger.getLogger(this.getClass().getName()).log(Level.WARNING, "Failed to create InputStream for: '" + this.file.getAbsolutePath(), e);
        }
        return null;
    }

    /** Receive a uploaded file to a file.
     */
    public OutputStream receiveUpload(String originalFileName, String MIMEType) {
        this.originalFileName = originalFileName;
        this.mimeType = MIMEType;
        try {
            // Create a temporary file for example, you can provide your file here.
            this.file = File.createTempFile("prefix-", "-suffix");
            file.deleteOnExit();
            return new FileOutputStream(file);
        } catch (FileNotFoundException e) {
            Logger.getLogger(this.getClass().getName()).log(Level.WARNING, "Failed to create InputStream for: '" + this.file.getAbsolutePath(), e);
        } catch (IOException e) {
            Logger.getLogger(this.getClass().getName()).log(Level.WARNING, "Failed to create InputStream for: '" + this.file.getAbsolutePath() + "'", e);
        }

        return null;
    }

}
