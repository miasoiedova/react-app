export function JobItem ({title, description, name, link}) {
    return (
         <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <h3>{name}</h3>
            <a href={link}>{name}</a>
         </div>   
    )
}