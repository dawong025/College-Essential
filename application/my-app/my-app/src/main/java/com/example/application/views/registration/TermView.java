package com.example.application.views.registration;

import java.io.File;
import java.io.FileNotFoundException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Scanner;

import com.example.application.views.MainLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextArea;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;

@PageTitle("Terms And Services")
@Route(value = "termView", layout = MainLayout.class)
public class TermView extends VerticalLayout{
    
    public TermView() throws FileNotFoundException{
        TextArea terms = new TextArea();
        terms.setValue("Do you agree to let us do what ever we want?");
        terms.setReadOnly(true);
        add(terms);
        //Path path = Paths.get("./src/main/java/com/example/application/views/registration/termsText.txt");
        Scanner input = new Scanner(new File("./views/registration/termsText.txt"));///src/main/java/com/example/application

        while (input.hasNextLine())
        {
        System.out.println(input.nextLine());
        }
    }


    
}
