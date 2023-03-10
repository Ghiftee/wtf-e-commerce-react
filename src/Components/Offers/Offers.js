import tablet from "./images/tablet-4.jpg"
import './Offers.css'

export default function Offers (){
    return (
        <div class="offers">
            <div className="offers-container">
                <div className="offers-section offers-section-1">
                    <div className="img-div">
                        <img src={tablet} className="image" alt="tablet">
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
                        <p className="offer-p">This extraordinary design was made possible thanks to the developer, the first system on a chip. Makes your device so thin and compact, it fits anywhere.</p>
                        <div className="buy-now-div">
                            <button>Buy Now</button>
                            <p>Learn More</p>
                        </div>
                    </div>
                    <div className="img-div">
                        <img src={tablet} className="image" alt="tablet">
                        </img>
                    </div>
                </div>
            </div>

        </div>
    )
}