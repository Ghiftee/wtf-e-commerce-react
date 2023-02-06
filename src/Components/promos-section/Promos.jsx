import React from 'react'
import {useState} from 'react'
import { HiOutlineShoppingCart } from 'react-icons/hi';
import data, {mobileData, tabletData,laptopData,watchData} from './data'
import './promos.css'

const Promos = () => {
    const [promoData,setPromoData] = useState(data)
    const [active, setActive] = useState ('#')
    const changeRecom = () => {
        setPromoData(data)
        setActive('#')
    }
    const changeMobile = () =>{
        setPromoData(mobileData)
        setActive('#mobile')
    }
    const changeTablet = () =>{
        setPromoData(tabletData)
        setActive('#tablet')
        
    }
    const changeLaptop = () =>{
        setPromoData(laptopData)
        setActive('#laptop')
    }
    const changeWatch = () =>{
        setPromoData(watchData)
        setActive('#watch')
    }
  return (
    <div className='promos_container'>
        <div className="promos_inner_container">
            <h2>New Promos</h2>
            <div className="promos_cat">
                <ul className="promos_cat_item">
                    <li className={`promo_item ${active === '#'? 'active': ''}`} onClick={changeRecom}>
                        Recomendations
                    </li>
                    <li className={`promo_item ${active === '#mobile'? 'active': ''}`} onClick={changeMobile}>
                        Mobile
                    </li>
                    <li className={`promo_item ${active === '#tablet'? 'active': ''}`} onClick={changeTablet}>
                        Tablets
                    </li>
                    <li className={`promo_item ${active === '#laptop'? 'active': ''}`} onClick={changeLaptop}>
                        Laptop
                    </li>
                    <li className={`promo_item ${active === '#watch'? 'active': ''}`} onClick={changeWatch}>
                        Watches
                    </li>
                </ul>

            </div>
            <div className="promos_cat_display">
               {
                promoData.map(({id,image,label,series,price}) =>{
                return(
                    <div key={id} className="promos_card">
                    <div className="card-img">
                    <img src={image} alt={label} />
                    </div>
                    <div className="promo_card_body">
                    <div className="card_text">
                        <span className='label'>{label}</span>
                        <span>{series}</span>
                        <span>{price}</span>
                    </div>
                    <button className="promos_shopping_cart">
                    <HiOutlineShoppingCart/>
                    </button>
                    </div>
                </div>
                )
                })
               }
            </div>
            

        </div>

    </div>
  )
}

export default Promos