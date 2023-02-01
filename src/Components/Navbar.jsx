import {FaSearch,FaShoppingBag,FaUserAlt, } from 'react-icons/fa'
const Navbar = () => {
    
    return (
            <div className="wrapper"> 
                <div className="logo">
                     Hypertext
                </div>
                <div className="navSection">
                    <ul>
                        <li>Product</li>
                        <li>Explore</li>
                        <li>Support</li>
                        <li>Business</li>
                    </ul>
                    

                </div>
                <div className="displayIcons">
                       <div className='search'> < FaSearch/></div>
                        <div className='shop'><FaShoppingBag /></div>
                        <FaUserAlt />
                       
                    </div>
            </div>
     );
}

export default Navbar;
