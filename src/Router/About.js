import { FooterComp } from "../Component/Footer.Component/footer.comp";
import { NavBarComp } from "../Component/NavBar.Component/navbar";
import { BackgroundComp } from "../Component/Background.Component/Background.comp";
import { AboutComp } from "../Component/About.compo/about.comp";

export function About(){
    return(
        <div>
          <NavBarComp/>
          <BackgroundComp heading="ABOUT" text="I am Front-End Developer."/>
          <AboutComp/>
          <FooterComp/>  
        </div>
    )
}