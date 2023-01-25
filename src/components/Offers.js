import tablet from "./images/tablet-4.jpg"
import "../index.css"


export default function Offers (){
    return (
        <div class="offers">
            <div className="offers-container">
                <div className="offers-section offers-section-1">
                    <div className="img-div">
                        <img src={tablet} className="image">
                        </img>
                    </div>
                    <div>
                        <button className="offer-btn">We offer</button>
                        <h3 className="offer-h3">Awesome In Any Space. Perfectly Blend In Your Life.</h3>
                        <p className="offer-p">Designed to take full advantage of next-level performance and special technologies such as the advanced image signal processor and integrated memory architecture.</p>
                        <div className="buy-now-div">
                            <button>Buy Now</button>
                            <p>Learn More</p>
                        </div>
                    </div>
                </div>
                <div className="offers-section offers-section-2">
                    <div>
                        <button className="offer-btn">We offer</button>
                        <h3 className="offer-h3">Awesome In Any Space. Perfectly Blend In Your Life.</h3>
                        <p className="offer-p">Designed to take full advantage of next-level performance and special technologies such as the advanced image signal processor and integrated memory architecture.</p>
                        <div className="buy-now-div">
                            <button>Buy Now</button>
                            <p>Learn More</p>
                        </div>
                    </div>
                    <div className="img-div">
                        <img src={tablet} className="image">
                        </img>
                    </div>
                </div>
            </div>

        </div>
    )
}