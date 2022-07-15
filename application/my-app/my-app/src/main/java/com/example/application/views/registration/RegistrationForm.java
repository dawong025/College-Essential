package com.example.application.views.registration;
import com.vaadin.flow.component.HasValueAndElement;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.button.ButtonVariant;
import com.vaadin.flow.component.checkbox.Checkbox;
import com.vaadin.flow.component.formlayout.FormLayout;
import com.vaadin.flow.component.html.H3;
import com.vaadin.flow.component.html.Span;
import com.vaadin.flow.component.select.Select;
import com.vaadin.flow.component.textfield.EmailField;
import com.vaadin.flow.component.textfield.IntegerField;
import com.vaadin.flow.component.textfield.PasswordField;
import com.vaadin.flow.component.textfield.TextField;
import java.util.stream.Stream;

import javax.swing.event.HyperlinkEvent;

import org.apache.poi.common.usermodel.Hyperlink;
import org.apache.poi.hslf.record.InteractiveInfoAtom.Link;

public class RegistrationForm extends FormLayout {

   private H3 title;

   private TextField firstName;
   private TextField lastName;
   private TextField school;

   private EmailField email;
   private TextField userName;
   private PasswordField password;
   private PasswordField passwordConfirm;

   private Checkbox allowMarketing;

   private Span errorMessageField;

   private Button submitButton;


   public RegistrationForm() {
       title = new H3("Signup form");
       firstName = new TextField("First name");
       lastName = new TextField("Last name");
       email = new EmailField("Email");
       school = new TextField("University");
       userName = new TextField("UserName");
       userName.setWidth("20em");
       
        Button terms = new Button("Terms & Services",e ->{
                this.getUI().ifPresent(ui -> ui.navigate("/termView"));
        });

        

       allowMarketing = new Checkbox("Agree To Terms & Services?");
       
       allowMarketing.getStyle().set("margin-top", "10px");

       password = new PasswordField("Password");
       passwordConfirm = new PasswordField("Confirm password");

       setRequiredIndicatorVisible(firstName, lastName, email, userName,password,
               passwordConfirm);

       errorMessageField = new Span();

       submitButton = new Button("Create Account");
       submitButton.addThemeVariants(ButtonVariant.LUMO_PRIMARY);

       add(title, firstName, lastName, userName,school,email, password,
               passwordConfirm, allowMarketing,terms, errorMessageField,
               submitButton);

       // Max width of the Form
       setMaxWidth("500px");

       // Allow the form layout to be responsive.
       // On device widths 0-490px we have one column.
       // Otherwise, we have two columns.
       setResponsiveSteps(
               new ResponsiveStep("0", 1, ResponsiveStep.LabelsPosition.TOP),
               new ResponsiveStep("490px", 2, ResponsiveStep.LabelsPosition.TOP));

       // These components always take full width
       setColspan(title, 2);
       setColspan(email, 2);
       setColspan(errorMessageField, 2);
       setColspan(submitButton, 2);
   }

   public PasswordField getPasswordField() { return password; }

   public PasswordField getPasswordConfirmField() { return passwordConfirm; }

   public Span getErrorMessageField() { return errorMessageField; }

   public Button getSubmitButton() { return submitButton; }

   private void setRequiredIndicatorVisible(HasValueAndElement<?, ?>... components) {
       Stream.of(components).forEach(comp -> comp.setRequiredIndicatorVisible(true));
   }

}