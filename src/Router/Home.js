import { FooterComp } from "../Component/Footer.Component/footer.comp";
import { MainComp } from "../Component/Main.component/main.comp";
import { NavBarComp } from "../Component/NavBar.Component/navbar";
import { ProjectCardComp } from "../Component/Project.Card.comp/Project.card";


export function Home(){
    return(
        <div>
            <NavBarComp/>
            <MainComp/>
            <ProjectCardComp/>
            <FooterComp/>
        </div>
    )
}