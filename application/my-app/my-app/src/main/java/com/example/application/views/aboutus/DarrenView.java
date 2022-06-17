package com.example.application.views.aboutus;

import com.example.application.views.MainLayout;
import com.vaadin.flow.component.html.H2;
import com.vaadin.flow.component.html.Image;
import com.vaadin.flow.component.html.Paragraph;
import com.vaadin.flow.component.html.NativeButton;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.theme.lumo.LumoUtility.Margin.Vertical;

@PageTitle("Meet Darren")
@Route(value = "aboutdarren", layout = MainLayout.class)
public class DarrenView extends VerticalLayout {

    public DarrenView() {
        add(new H2("Hello, my name is Darren Wong, and I'm a CS major hopefully graduating in the fall. I'm from SF "));
    }

}

