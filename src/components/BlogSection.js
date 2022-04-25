import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export default function BlogSection()   {
    return  (
        <section >
            <div className="post-container">
                <div className="image-container" style= {{ backgroundImage: `url(${"https://user-images.githubusercontent.com/100476375/165063439-15aff5bf-1a4e-42af-a049-b453572ae145.png"})` }}></div>
                <div>
                    <div className="location-container">
                        <FontAwesomeIcon icon={faLocationDot} className="location-icon" />
                        <p className="location">JAPAN</p>
                        <a href="https://goo.gl/maps/GyFJ7qiBN7doaV8f9" className="map-url">View on Google Maps</a>
                    </div>
                    <h2 className="post-title">Mount Fuji</h2>
                    <h5 className="travel-date">12 Jan, 2021 - 24 Jan, 2021</h5>
                    <p className="description">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
                </div> 
            </div>
            <hr className="divider"/>
        </section>
    )
}