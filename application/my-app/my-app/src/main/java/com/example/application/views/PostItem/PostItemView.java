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

import java.io.*;
import java.util.logging.Level;
import java.util.logging.Logger;

@PageTitle("Post Item")
@Route(value = "postItem", layout = MainLayout.class)

public class PostItemView extends VerticalLayout{
    private File file;
    private String originalFileName;
    private String mimeType;

    public PostItemView(){

        Upload upload = new Upload(this::receiveUpload);
        Div output = new Div(new Text("(no image file uploaded yet)"));
        add(upload, output);

        // Configure upload component
        upload.setAcceptedFileTypes("image/jpeg", "image/png", "image/gif","image/pdf");
        upload.addSucceededListener(event -> {
            output.removeAll();
            output.add(new Text("Uploaded: "+originalFileName+" to "+ file.getAbsolutePath()+ "Type: "+mimeType));
            output.add(new Image(new StreamResource(this.originalFileName,this::loadFile),"Uploaded image"));
        });
        upload.addFailedListener(event -> {
            output.removeAll();
            output.add(new Text("Upload failed: " + event.getReason()));
        });
            TextField itemName = new TextField("Title");
            itemName.setPlaceholder("Title");

            add(itemName);

            Button Post = new Button("Post");
            Post.addThemeVariants(ButtonVariant.LUMO_PRIMARY);
            add(Post);


    }
    

    
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
