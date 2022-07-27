package com.example.application.views.login;

import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.html.H2;

import java.util.stream.Stream;

import javax.annotation.PostConstruct;

import org.apache.commons.math3.analysis.function.Add;

import com.example.application.views.home.HomeView;
import com.vaadin.flow.component.Composite;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.dependency.CssImport;
import com.vaadin.flow.component.login.LoginForm;
import com.vaadin.flow.component.login.LoginOverlay;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.notification.NotificationVariant;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.orderedlayout.FlexComponent.Alignment;
import com.vaadin.flow.component.orderedlayout.FlexLayout.FlexDirection;
import com.vaadin.flow.component.textfield.PasswordField;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.component.orderedlayout.FlexComponent;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.router.BeforeEnterEvent;
import com.vaadin.flow.router.BeforeEnterObserver;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.router.RouterLink;
import com.vaadin.flow.theme.lumo.LumoUtility.Margin.Horizontal;

import ch.qos.logback.core.status.Status;

import com.vaadin.flow.component.HasComponents;
import com.vaadin.flow.component.HasValueAndElement;

@Route("login") 
@PageTitle("Login | College Essentials")
@CssImport("./themes/myapp/login.css")
public class LoginView extends VerticalLayout implements BeforeEnterObserver {

	private final LoginForm login = new LoginForm(); 
    public static boolean status = false;
    private static TextField userName;
    private PasswordField passWord;



	public LoginView(){
        // LoginOverlay overlay = getContent();
        // overlay.setTitle("College Essentials");
        // overlay.setDescription("Sign up to post or buy");
        // overlay.setOpened(true);
        HorizontalLayout overlay = new HorizontalLayout();
        setClassName("HeaderLayoutLogin");
        VerticalLayout vLayout = new VerticalLayout();
        vLayout.setClassName("loginVertLayout");

        H2 header = new H2("Login To College Essentials");
        header.addClassName("loginHeader");
         userName = new TextField("Enter Username or Email");
        overlay.add(header);

        passWord = new PasswordField("Password");

        Button loginButton = new Button("Login");
        loginButton.setClassName("loginButton");

        Div forgot = new Div();
        forgot.add(new RouterLink("Forgot Password?", HomeView.class));

        vLayout.add(overlay,userName,passWord,loginButton,forgot);
        vLayout.setAlignItems(Alignment.CENTER);


        

        add(vLayout);
        loginButton.addClickListener(event ->{
            setRequiredIndicatorVisible(userName,passWord);
            
            
            Boolean loginSuccess = getloginFlag();

            if(loginSuccess == true){
                status = true;
                overlay.getUI().ifPresent(ui ->
                ui.navigate("/home"));  
                showSuccess();
            }else{
                System.err.println("wrong Password");
                showFail();
            }
            

            // if(userName.getValue().equals("admin")){
            //     overlay.getUI().ifPresent(ui ->
            //     ui.navigate("/Admin")); 
            // }else{
              
            //         overlay.getUI().ifPresent(ui ->
            //     ui.navigate("/home"));  
            // }
                

        });

		
	}

    public Boolean getloginFlag(){
        Boolean loginSuccess = false;
            
            //getPassword
            LoginSecurity loginCheck = new LoginSecurity(getUserName(),getPassWord());
            loginSuccess = loginCheck.getFlag();
            return loginSuccess;

    }

    public static boolean logStatus(){
        return status;

    }
    public static void logOut(){
        status = false;
    }

    public String getUserName(){
        return userName.getValue();
    }

    protected String getPassWord(){
        return passWord.getValue();
    }

    public static String getUser(){
        return userName.getValue();
    }

	@Override
	public void beforeEnter(BeforeEnterEvent beforeEnterEvent) {
		// inform the user about an authentication error
		if(beforeEnterEvent.getLocation()  
        .getQueryParameters()
        .getParameters()
        .containsKey("error")) {
            login.setError(true);
        }
	}

    private void setRequiredIndicatorVisible(HasValueAndElement<?, ?>... components) {
        Stream.of(components).forEach(comp -> comp.setRequiredIndicatorVisible(true));
    }

    private void showSuccess() {
        Notification notification =
                Notification.show("Successfully logged in, welcome back " + userName.getValue());
        notification.addThemeVariants(NotificationVariant.LUMO_SUCCESS);
        
 
        // Here you'd typically redirect the user to another view
    }

    private void showFail() {
        Notification notification =
                Notification.show("Wrong username/Email or wrong password was entered");
        notification.addThemeVariants(NotificationVariant.LUMO_ERROR);
        
 
        // Here you'd typically redirect the user to another view
    }

}