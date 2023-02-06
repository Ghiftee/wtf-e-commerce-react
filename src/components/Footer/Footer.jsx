import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='e-commerce-footer'>
        <section className='footer-start'>
            <h1>EQUAL</h1>
            <p>Powered by Intellect <br/> Driven by Values</p>
            <div className='footer-icons'>
                <i class="fa-brands fa-twitter icons"></i>
                <i class="fa-brands fa-instagram icons"></i>
                <i class="fa-brands fa-linkedin icons"></i>
                <i class="fa-brands fa-facebook icons"></i>
            </div>
        </section>
        <section className='footer-info-section'>
            <div>
                <ul>
                    <li className='list-one'>Product & Service</li>
                    <li className='list-others'>Smartphone</li>
                    <li className='list-others'>Tablets</li>
                    <li className='list-others'>Audio Sound</li>
                    <li className='list-others'>Watches</li>
                    <li className='list-others'>Smart Switch</li>
                    <li className='list-others'>Tvs</li>
                    <li className='list-others'>Sound Devices</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className='list-one'>Shop</li>
                    <li className='list-others'>Offers</li>
                    <li className='list-others'>Equal Store</li>
                    <li className='list-others'>Where to Buy</li>
                    <li className='list-others'>Online Shop</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className='list-one'>Support</li>
                    <li className='list-others'>Email Support</li>
                    <li className='list-others'>WhatsApp</li>
                    <li className='list-others'>LiveChat</li>
                    <li className='list-others'>Phone Support</li>
                    <li className='list-others'>Community</li>
                    <li className='list-others'>Members</li>
                    <li className='list-others'>Service Location</li>
                </ul>
            </div>
        </section>
    </div>
  )
}

export default Footer