package com.example.application.views.login;

import com.vaadin.flow.component.html.H1;

import org.apache.commons.math3.analysis.function.Add;

import com.vaadin.flow.component.Composite;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.login.LoginForm;
import com.vaadin.flow.component.login.LoginOverlay;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.orderedlayout.FlexLayout.FlexDirection;
import com.vaadin.flow.component.orderedlayout.FlexComponent;

import com.vaadin.flow.router.BeforeEnterEvent;
import com.vaadin.flow.router.BeforeEnterObserver;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;

import ch.qos.logback.core.status.Status;

import com.vaadin.flow.component.HasComponents;

@Route("login") 
@PageTitle("Login | Vaadin CRM")

public class LoginView extends Composite<LoginOverlay> implements BeforeEnterObserver {

	private final LoginForm login = new LoginForm(); 
    public static boolean status = false;

	public LoginView(){
        LoginOverlay overlay = getContent();
        overlay.setTitle("College Essentials");
        overlay.setDescription("Sign up to post or buy");
        overlay.setOpened(true);
        

        overlay.addLoginListener(event ->{
            if("user".equals(event.getUsername())){
                
            }else if("admin".equals(event.getUsername())){

            }else{
                status = true;
                    overlay.getUI().ifPresent(ui ->
                ui.navigate("/home"));
                
                
            }
        });

		
	}

    public static boolean logStatus(){
        return status;

    }

    public static void logOut(){
        status = false;
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
}