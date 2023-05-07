import { BackgroundComp } from "../Component/Background.Component/Background.comp";
import { ContactComp } from "../Component/Contact.comp/contact.comp";
import { FooterComp } from "../Component/Footer.Component/footer.comp";
import { NavBarComp } from "../Component/NavBar.Component/navbar";


export function Contact(){
    return(
        <div>
           <NavBarComp/>
           <BackgroundComp heading="CONTACT" text="Let's Have a chat"/>
           <ContactComp/>
           <FooterComp/> 
        </div>
    )
}