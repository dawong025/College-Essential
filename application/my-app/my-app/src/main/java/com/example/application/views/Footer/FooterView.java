package com.example.application.views.Footer;

import com.example.application.views.aboutus.AboutUsView;
import com.example.application.views.aboutus.BrendanView;
import com.example.application.views.aboutus.DarrenView;
import com.example.application.views.aboutus.DuncanView;
import com.example.application.views.aboutus.JustinView;
import com.example.application.views.aboutus.RyanView;
import com.vaadin.flow.component.dependency.CssImport;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.html.H3;
import com.vaadin.flow.component.html.H6;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.orderedlayout.FlexComponent.JustifyContentMode;
import com.vaadin.flow.router.RouterLink;

public class FooterView{
    
    public FooterView(){
     
        

    }

    public HorizontalLayout getFooter(){
        HorizontalLayout footerLayout = new HorizontalLayout();
        VerticalLayout AboutUs = new VerticalLayout();
        // H3 about = new H3("AboutUs");
        // 
        Div about = new Div();
        about.add(new RouterLink("About Us", AboutUsView.class));
        //about.getUI().ifPresent(ui -> ui.navigate("/aboutuss"));
        //H6 ryan = new H6("Ryan");
        Div ryan = new Div();
        ryan.add(new RouterLink("Ryan", RyanView.class));
        //H6 darren = new H6("Darren");
        Div darren = new Div();
        darren.add(new RouterLink("Darren", DarrenView.class));
        //H6 brend = new H6("Brendan");
        Div brend = new Div();
        brend.add(new RouterLink("Brendan", BrendanView.class));
        //H6 justin = new H6("Justin");
        Div justin = new Div();
        justin.add(new RouterLink("Justin", JustinView.class));
        //H6 duncan = new H6("Duncan");
        Div duncan = new Div();
        duncan.add(new RouterLink("Duncan", DuncanView.class));
        AboutUs.add(about,ryan,darren,brend,justin,duncan);

        VerticalLayout contactUs = new VerticalLayout();
        H3 contact = new H3("Contact Us");
        H6 email = new H6("CollegeEssentialsHelp@CollegeEssentials.com");
        H6 number = new H6("415-000-0000");
        H6 addy = new H6("1600 Hollow way, SF, 94132");
        H6 country = new H6("Unided States");
        contactUs.add(contact,email,number,addy,country);

        VerticalLayout adds = new VerticalLayout();
        H3 Adver = new H3("Adveritments");
        H6 add2 = new H6("Apply for an Ad");
        H6 add3 = new H6("AD Status");
        adds.add(Adver,add2,add3);

        VerticalLayout privacy = new VerticalLayout();
        H3 priv = new H3("Privacy Policies");
        privacy.add(priv);
        footerLayout.add(AboutUs,contactUs,adds,privacy);
        footerLayout.setClassName("FooterLayout");
        footerLayout.setJustifyContentMode(JustifyContentMode.AROUND);
        return footerLayout;

    }


}
