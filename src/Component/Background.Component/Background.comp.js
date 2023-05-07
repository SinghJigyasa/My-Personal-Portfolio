import "./Background.comp.css";


export function BackgroundComp(props){
    return(
        <div className="img-top">
            <div className="content1-img">
                <h1>{props.heading}</h1>
                <p>{props.text}</p>
            </div>

        </div>
    )
}