interface ICard {
    name: string,
    role: string,
    Avatar: any
};

function Card(props: ICard) {

    // let avatar:any =(props.Avatar!==undefined)? <img src={props.Avatar} alt={props.name} className="avatar" />: undefined
  
    //     if (props.Avatar!==undefined) {
    //            avatar=<img src={props.Avatar} alt={props.name} className="avatar" />
    //     }
    //     else {
    //         avatar = undefined
    //     }
    return (
        <div className="map1">
            {(props.Avatar !== undefined) && <img src={props.Avatar} alt={props.name} className="avatar" /> }
            <h2>{props.name}</h2>
            <h4>{props.role}</h4>
        </div>
    )
}

export { Card }