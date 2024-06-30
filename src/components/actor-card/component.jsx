import "./style.css"

export function ActorCard({actor}) {
    return (
        <div className="card">
            <img src={actor.photo} alt="" className="photo"/>
            <p className="name">{actor.name}</p>
        </div>
    )
}