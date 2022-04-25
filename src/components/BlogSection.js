import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function BlogSection(props)   {
    return  (
        <section >
            <div className="post-container">
                <div className="image-container" style= {{ backgroundImage: `url(${props.imageUrl})` }}></div>
                <div>
                    <div className="location-container">
                        <FontAwesomeIcon icon={faLocationDot} className="location-icon" />
                        <p className="location">{props.location.toUpperCase()}</p>
                        <a href={props.googleMapsUrl} className="map-url">View on Google Maps</a>
                    </div>
                    <h2 className="post-title">{props.title}</h2>
                    <h5 className="travel-date">{props.startDate} - {props.endDate}</h5>
                    <p className="description">{props.description}</p>
                </div> 
            </div>
            <hr className="divider"/>
        </section>
    )
}