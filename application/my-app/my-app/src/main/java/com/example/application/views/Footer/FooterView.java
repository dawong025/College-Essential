package com.example.application.views.Footer;

import com.vaadin.flow.component.dependency.CssImport;
import com.vaadin.flow.component.html.H3;
import com.vaadin.flow.component.html.H6;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.orderedlayout.FlexComponent.JustifyContentMode;

public class FooterView{
    
    public FooterView(){
     
        

    }

    public HorizontalLayout getFooter(){
        HorizontalLayout footerLayout = new HorizontalLayout();
        VerticalLayout AboutUs = new VerticalLayout();
        H3 about = new H3("AboutUs");
        H6 ryan = new H6("Ryan");
        H6 darren = new H6("Darren");
        H6 brend = new H6("Brendan");
        H6 justin = new H6("Justin");
        H6 duncan = new H6("Duncan");
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
        return footerLayout;

    }


}
