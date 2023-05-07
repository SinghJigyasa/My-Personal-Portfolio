
import { CardComp } from "./card";
import {ProjectCardData} from "../Data/data.js";

export function ProjectCardComp(){
    return(
        <div className="work-container">
            <h1 className="project-heading">
                Projects
            </h1>
            <div className="project-containerCard">
                <div className="project-card">
                   {ProjectCardData.map((val, ind)=>{
                    return(
                        <CardComp
                        key={ind}
                        imgsrc={val.imgsrc}
                        title={val.title}
                        text={val.text}
                        view={val.view}
                        />
                    )
                   })}
                </div>
            </div>

        </div>
    )
}