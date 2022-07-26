package com.example.application.views.registration;
import com.example.application.Data.DBConnection;
import com.example.application.Data.UserDetails;
import com.vaadin.flow.component.HasValueAndElement;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.button.ButtonVariant;
import com.vaadin.flow.component.checkbox.Checkbox;
import com.vaadin.flow.component.dependency.CssImport;
import com.vaadin.flow.component.formlayout.FormLayout;
import com.vaadin.flow.component.html.H2;
import com.vaadin.flow.component.html.H3;
import com.vaadin.flow.component.html.Span;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.notification.NotificationVariant;
import com.vaadin.flow.component.select.Select;
import com.vaadin.flow.component.textfield.EmailField;
import com.vaadin.flow.component.textfield.IntegerField;
import com.vaadin.flow.component.textfield.PasswordField;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.theme.lumo.LumoUtility.Margin;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.stream.Stream;

import javax.swing.event.HyperlinkEvent;

import org.apache.poi.common.usermodel.Hyperlink;
import org.apache.poi.hslf.record.InteractiveInfoAtom.Link;

@PageTitle("Registration")
@Route(value = "registration")
@CssImport("./themes/myapp/Registration.css")
public class RegistrationForm extends FormLayout {

   private H2 title;

   private TextField firstName;
   private TextField lastName;
   private TextField school;

   private EmailField email;
   private TextField userName;
   private PasswordField password;
   private PasswordField passwordConfirm;
   private PasswordField passwordHashed;

   private Checkbox allowMarketing;

   private Span errorMessageField;

   private Button submitButton;
   private UserDetails userBean = new UserDetails();


   public RegistrationForm() {
       this.getStyle().set("margin", "auto");
       this.getStyle().set("margin-top", "100px");
       this.getStyle().set("border", "2px solid black");
       this.getStyle().set("padding-left", "150px");
       this.getStyle().set("padding-right", "150px");
       this.getStyle().set("padding-top", "50px");
       this.getStyle().set("padding-bottom", "80px");
       this.getStyle().set("background-color", "whitesmoke");

       title = new H2("Signup for College Essentials");
       title.addClassName("title-header");
       firstName = new TextField("First name");
       firstName.addClassName("first-name");
       lastName = new TextField("Last name");
       lastName.addClassName("last-name");
       email = new EmailField("Email");
       email.addClassName("email");
       school = new TextField("University");
       school.addClassName("school");
       userName = new TextField("Username");
       userName.addClassName("username");
       userName.setWidth("20em");
       
        Button terms = new Button("Terms & Services",e ->{
                this.getUI().ifPresent(ui -> ui.navigate("/termView"));
        });
        terms.addClassName("terms");

        

       allowMarketing = new Checkbox("Agree To Terms & Services?");
       
       allowMarketing.getStyle().set("margin-top", "10px");

       password = new PasswordField("Password");
       passwordConfirm = new PasswordField("Confirm password");

       setRequiredIndicatorVisible(firstName, lastName, email, userName,password,
               passwordConfirm);

       errorMessageField = new Span();

       submitButton = new Button("Create Account");
       submitButton.addClassName("submit-reg");

       add(title, firstName, lastName, userName,school, email, password,
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

//        RegistrationFormBinder registrationFormBinder = new RegistrationFormBinder(this);
//        registrationFormBinder.addBindingAndValidation();

       submitButton.addClickListener(ev ->{

        DBConnection db = new DBConnection();
        storeUserInfo();
        

        db.StoreRegUser(userBean.getFirstName(), userBean.getLastName(), userBean.getEmail(), userBean.getPassword(),userBean.getSchool(),userBean.getUserName());
        showSuccess(userBean);
        this.getUI().ifPresent(ui ->
               ui.navigate("/login"));

       });
       

   }
  /*  public PasswordField hasher (){
    try {
      MessageDigest md = MessageDigest.getInstance("MD5");
  md.update(password.getValue().getBytes());
  byte[] resultByteArray = md.digest();
  StringBuilder sd = new StringBuilder();
  for (byte b : resultByteArray)
  {
      sd.append(String.format("%02x",b));
  }
        return passwordHashed;
  } catch (NoSuchAlgorithmException e) {
      // TODO Auto-generated catch block
      e.printStackTrace();
  }
  return null;
  
}*/
   public PasswordField getPasswordField() { return password; }

   public PasswordField getPasswordConfirmField() { return passwordConfirm; }

   public Span getErrorMessageField() { return errorMessageField; }

   public Button getSubmitButton() { return submitButton; }

   private void setRequiredIndicatorVisible(HasValueAndElement<?, ?>... components) {
       Stream.of(components).forEach(comp -> comp.setRequiredIndicatorVisible(true));
   }

   private void storeUserInfo(){
        userBean.setFirstName(firstName.getValue());
        userBean.setLastName(lastName.getValue());
        userBean.setEmail(email.getValue());
        userBean.setPassword(password.getValue());
        userBean.setUserName(userName.getValue());
        userBean.setSchool(school.getValue());
   }

   private void showSuccess(UserDetails userBean) {
        Notification notification =
                Notification.show("Account Created, welcome " + userBean.getFirstName());
        notification.addThemeVariants(NotificationVariant.LUMO_SUCCESS);
        
 
        // Here you'd typically redirect the user to another view
    }

}