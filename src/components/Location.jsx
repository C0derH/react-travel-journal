export default function Location(props){
    
    const {item} = props
    return(
        <section className="container location">
            <img className="location-img" src={item.imageUrl}/>
            <div className="location-info">
                <div className="location-info-top">
                    <i className="fa-solid fa-location-dot fa-2xs"></i>
                    <span className="location-info-country">{item.location}</span>
                    <a href={item.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h2>{item.title}</h2>
                <p className="location-info-date">{item.startDate}-{item.endDate}</p>
                <p className="location-info-description">{item.description}</p>
            </div>
        </section>
    )
}

