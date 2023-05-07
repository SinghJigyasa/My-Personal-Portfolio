import { BackgroundComp } from "../Component/Background.Component/Background.comp";
import { FooterComp } from "../Component/Footer.Component/footer.comp";
import { NavBarComp } from "../Component/NavBar.Component/navbar";
import { ProjectCardComp } from "../Component/Project.Card.comp/Project.card";


export function Project(){
    return(
        <div>
            <NavBarComp/>
            <BackgroundComp heading="PROJECTS" text="Some of my most recent project"/>
            <ProjectCardComp/>
            <FooterComp/>
        </div>
    )
}