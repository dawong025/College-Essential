package com.example.application.views.PrivacyPolicies;
import com.example.application.views.MainLayout;
import com.vaadin.flow.component.html.H2;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextArea;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;


@PageTitle("Privacy Policies")
@Route(value = "PrivacyPolicies", layout = MainLayout.class)
public class PrivacyPolicies extends VerticalLayout{

    public PrivacyPolicies(){
        H2 header = new H2("Privacy Policies");

        TextArea policies = new TextArea("");
        policies.setValue("Here are some of the privacy policies.");
        policies.setReadOnly(true);
        policies.setWidth("500px");
        policies.setHeight("500px");
    

        VerticalLayout layout = new VerticalLayout();
        layout.add(header, policies);
        layout.setAlignItems(Alignment.CENTER);
        add(layout);



    }



}
    

