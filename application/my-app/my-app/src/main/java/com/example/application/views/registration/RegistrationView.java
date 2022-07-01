package com.example.application.views.registration;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.Route;
import com.example.application.views.MainLayout;
import com.vaadin.flow.router.PageTitle;

@PageTitle("Registration")
@Route(value = "registration")

public class RegistrationView extends VerticalLayout {

   public RegistrationView() {
       RegistrationForm registrationForm = new RegistrationForm();
       // Center the RegistrationForm
       setHorizontalComponentAlignment(Alignment.CENTER, registrationForm);

       add(registrationForm);

       RegistrationFormBinder registrationFormBinder = new RegistrationFormBinder(registrationForm);
       registrationFormBinder.addBindingAndValidation();
   }
}