import React from 'react';


const Home = () => {
    return (
        <>
        <nav className="nav">
            <div className="wrapper container">
            <div className="logo"><a href="">Ozone Shoppy</a></div>
            <ul className="nav__list">
                <div className="top">
                <label htmlFor="" className="btn btn__close"><i className="ti-close" /></label>
                </div>
                <li><a href="#">Home</a></li>
                <li><a href="#">Products</a></li>
                <li>
                <a href="#" className="desktop__items">Shops <span><i className="ti-angle-down" /></span></a>
                <input type="checkbox" name="showMega" id="showMega" />
                <label htmlFor="showMega" className="mobile__items">
                    <span>Shops<i className="ti-angle-down" /></span>
                </label>
                <div className="mega__box">
                    <div className="content">
                    <div className="row">
                        <img src="https://www.changiairport.com/content/dam/cag/shop/world-class-shopping/shopping-directory-thumbnail.png" alt="" />
                    </div>
                    <div className="row">
                        {/* <header>Shops Layout</header> */}
                        <ul className="mega__links">
                        <li><a href="#">Electronica Category</a></li>
                        <li><a href="#">Fashion Category</a></li>
                        <li><a href="#">Compute Category</a></li>
                        <li><a href="#">Mobile Category</a></li>
                        <li><a href="#">Home Kitchen Category</a></li>
                        </ul>
                    </div>
                    <div className="row">
                        {/* <header>Filter Layout</header> */}
                        <ul className="mega__links">
                        <li><a href="#">By Sidebar</a></li>
                        <li><a href="#">Filter Default</a></li>
                        <li><a href="#">Filter Drawer</a></li>
                        <li><a href="#">Filter Dropdown</a></li>
                        </ul>
                    </div>
                    <div className="row">
                        {/* <header>Products Layout</header> */}
                        <ul className="mega__links">
                        <li><a href="#">Layout Zoom</a></li>
                        <li><a href="#">Layout Sticky</a></li>
                        <li><a href="#">Layout Flex</a></li>
                        <li><a href="#">Layout Scroll</a></li>
                        </ul>
                    </div>
                    </div>
                </div>
                </li>
                <li>
                <a href="#" className="desktop__items">Vendor <span><i className="ti-angle-down" /></span></a>
                <input type="checkbox" name="showDropdown1" id="showDropdown1" />
                <label htmlFor="showDropdown1" className="mobile__items">
                    <span>Vendor<i className="ti-angle-down" /></span>
                </label>
                <ul className="drop-menu1">
                    <li><a href="#">Vendor Store List</a></li>
                    <li><a href="#">Store Detail</a></li>
                    <li><a href="#" /></li>
                    <li><a href="#" /></li>
                    <li><a href="#" /></li>
                </ul>
                </li>
                <li>
                <a href="#" className="desktop__items">Help <span><i className="ti-angle-down" /></span></a>
                <input type="checkbox" name="showDropdown2" id="showDropdown2" />
                <label htmlFor="showDropdown2" className="mobile__items">
                    <span>Help<i className="ti-angle-down" /></span>
                </label>
                <ul className="drop-menu2">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Faq</a></li>
                    <li><a href="#">Feeds back</a></li>
                    <li><a href="#">Customer Service</a></li>
                </ul>
                </li>
                <li>
                <a href="#" className="desktop__items">Profile <span><i className="ti-angle-down" /></span></a>
                <input type="checkbox" name="showDropdown2" id="showDropdown3" />
                <label htmlFor="showDropdown3" className="mobile__items">
                    <span>Profile<i className="ti-angle-down" /></span>
                </label>
                <ul className="drop-menu3">
                    <li><a href="#">My Shop</a></li>
                    <li><a href="#">Notification</a></li>
                    <li><a href="#">Setting</a></li>
                    <li><a href="#">Signin</a></li>
                    <li><a href="#">Signup</a></li>
                </ul>
                </li>
                <li className="icons">
                <span>
                    <i className="ti-shopping-cart"><small className="count d-flex">0</small></i>
                </span>
                </li>
            </ul>
            <label htmlFor="" className="btn btn__open"><i className="ti-menu" /></label>
            </div>
        </nav>
        {/* Hero  */}
        <div className="hero">
            <div className="right">
                    <img src="https://cdni.iconscout.com/illustration/premium/thumb/girl-doing-online-shopping-on-mobile-2709762-2268087.png" alt="" />
            </div>
            <div className="left">
                <span>Exclusive Sales</span>
                <h1>UP TO 50% OFF ON SALES</h1>
                <small>Get all exclusive offers for theseasons</small>
                <a href="#">View Collection →</a>
            </div> 
        </div>
        {/* Promotion Section */}
        <section className="section promotion">
            <div className="title">
            <h2>Shop Collections</h2>
            <span>Select from the premium product and save plenty money</span>
            </div>
            <div className="promotion__layout container">
            <div className="promotion__items">
                <img src="https://res.cloudinary.com/swizce/image/upload/v1610533566/promo1_tv1xoe.jpg" alt="" />
                <div className="promotion__content">
                <h3>For Men</h3>
                <a href="#">Shop Now! →</a>
                </div>
            </div>
            <div className="promotion__items">
                <img src="https://res.cloudinary.com/swizce/image/upload/v1610533566/promo2_aj97nv.jpg" alt="" />
                <div className="promotion__content">
                <h3>Casual Shoes</h3>
                <a href="#">Shop Now! →</a>
                </div>
            </div>
            <div className="promotion__items">
                <img src="https://res.cloudinary.com/swizce/image/upload/v1610533564/promo3_ujnpmx.jpg" alt="" />
                <div className="promotion__content">
                <h3>For Women</h3>
                <a href="#">Shop Now! →</a>
                </div>
            </div>
            <div className="promotion__items">
                <img src="https://res.cloudinary.com/swizce/image/upload/v1610534027/promo4_cvpcvv.jpg" alt="" />
                <div className="promotion__content">
                <h3>Evo Belts</h3>
                <a href="#">Shop Now! →</a>
                </div>
            </div>
            <div className="promotion__items">
                <img src="https://res.cloudinary.com/swizce/image/upload/v1610533565/promo5_tdvs55.jpg" alt="" />
                <div className="promotion__content">
                <h3>Evo Tech</h3>
                <a href="#">Shop Now! →</a>
                </div>
            </div>
            <div className="promotion__items">
                <img src="https://res.cloudinary.com/swizce/image/upload/v1610533565/promo6_b3yk68.jpg" alt="" />
                <div className="promotion__content">
                <h3>Watches</h3>
                <a href="#">Shop Now! →</a>
                </div>
            </div>
            </div>
        </section>
        {/* Product Section */}
        <section className="section products">
            <div className="title">
            <h2>New Products</h2>
            <span>Select from the premiumproduct and save plenty money</span>
            </div>
            <div className="product__layouts">
            <div className="product">
                <div className="img__container">
                <img src="https://res.cloudinary.com/swizce/image/upload/v1610533570/product1_izeg8n.jpg" alt="" />
                <div className="addCart">
                    <i className="ti-shopping-cart" />
                </div>
                <ul className="side__icons">
                    <span><i className="ti-search" /></span>
                    <span><i className="ti-heart" /></span>
                    <span><i className="ti-layout-slider" /></span>
                </ul>
                </div>
                <div className="bottom">
                <a href="#">Bambi Print Mini Backpack</a>
                <div className="price">
                    <span>$150</span>
                </div>
                </div>
            </div>
            <div className="product">
                <div className="img__container">
                <img src="https://res.cloudinary.com/swizce/image/upload/v1610534026/product14_fxegrl.jpg" alt="" />
                <div className="addCart">
                    <i className="ti-shopping-cart" />
                </div>
                <ul className="side__icons">
                    <span><i className="ti-search" /></span>
                    <span><i className="ti-heart" /></span>
                    <span><i className="ti-layout-slider" /></span>
                </ul>
                </div>
                <div className="bottom">
                <a href="#">Bambi Print Mini Backpack</a>
                <div className="price">
                    <span>$150</span>
                </div>
                </div>
            </div>
            <div className="product">
                <div className="img__container">
                <img src="https://res.cloudinary.com/swizce/image/upload/v1610534027/product13_jeocrb.jpg" alt="" />
                <div className="addCart">
                    <i className="ti-shopping-cart" />
                </div>
                <ul className="side__icons">
                    <span><i className="ti-search" /></span>
                    <span><i className="ti-heart" /></span>
                    <span><i className="ti-layout-slider" /></span>
                </ul>
                </div>
                <div className="bottom">
                <a href="#">Bambi Print Mini Backpack</a>
                <div className="price">
                    <span>$150</span>
                </div>
                </div>
            </div>
            <div className="product">
                <div className="img__container">
                <img src="https://res.cloudinary.com/swizce/image/upload/v1610534026/product11_smupbk.jpg" alt="" />
                <div className="addCart">
                    <i className="ti-shopping-cart" />
                </div>
                <ul className="side__icons">
                    <span><i className="ti-search" /></span>
                    <span><i className="ti-heart" /></span>
                    <span><i className="ti-layout-slider" /></span>
                </ul>
                </div>
                <div className="bottom">
                <a href="#">Bambi Print Mini Backpack</a>
                <div className="price">
                    <span>$150</span>
                </div>
                </div>
            </div>
            <div className="product">
                <div className="img__container">
                <img src="https://res.cloudinary.com/swizce/image/upload/v1610534025/product5_hb1iim.jpg" alt="" />
                <div className="addCart">
                    <i className="ti-shopping-cart" />
                </div>
                <ul className="side__icons">
                    <span><i className="ti-search" /></span>
                    <span><i className="ti-heart" /></span>
                    <span><i className="ti-layout-slider" /></span>
                </ul>
                </div>
                <div className="bottom">
                <a href="#">Bambi Print Mini Backpack</a>
                <div className="price">
                    <span>$150</span>
                </div>
                </div>
            </div>
            <div className="product">
                <div className="img__container">
                <img src="https://res.cloudinary.com/swizce/image/upload/v1610534025/product4_rnvclc.jpg" alt="" />
                <div className="addCart">
                    <i className="ti-shopping-cart" />
                </div>
                <ul className="side__icons">
                    <span><i className="ti-search" /></span>
                    <span><i className="ti-heart" /></span>
                    <span><i className="ti-layout-slider" /></span>
                </ul>
                </div>
                <div className="bottom">
                <a href="#">Bambi Print Mini Backpack</a>
                <div className="price">
                    <span>$150</span>
                </div>
                </div>
            </div>
            <div className="product">
                <div className="img__container">
                <img src="https://res.cloudinary.com/swizce/image/upload/v1610534024/product6_ridrxd.jpg" alt="" />
                <div className="addCart">
                    <i className="ti-shopping-cart" />
                </div>
                <ul className="side__icons">
                    <span><i className="ti-search" /></span>
                    <span><i className="ti-heart" /></span>
                    <span><i className="ti-layout-slider" /></span>
                </ul>
                </div>
                <div className="bottom">
                <a href="#">Bambi Print Mini Backpack</a>
                <div className="price">
                    <span>$150</span>
                </div>
                </div>
            </div>
            <div className="product">
                <div className="img__container">
                <img src="https://res.cloudinary.com/swizce/image/upload/v1610533570/product7_jfkluc.jpg" alt="" />
                <div className="addCart">
                    <i className="ti-shopping-cart" />
                </div>
                <ul className="side__icons">
                    <span><i className="ti-search" /></span>
                    <span><i className="ti-heart" /></span>
                    <span><i className="ti-layout-slider" /></span>
                </ul>
                </div>
                <div className="bottom">
                <a href="#">Bambi Print Mini Backpack</a>
                <div className="price">
                    <span>$150</span>
                </div>
                </div>
            </div>
            <div className="product">
                <div className="img__container">
                <img src="https://res.cloudinary.com/swizce/image/upload/v1610534026/product10_nv4hj3.jpg" alt="" />
                <div className="addCart">
                    <i className="ti-shopping-cart" />
                </div>
                <ul className="side__icons">
                    <span><i className="ti-search" /></span>
                    <span><i className="ti-heart" /></span>
                    <span><i className="ti-layout-slider" /></span>
                </ul>
                </div>
                <div className="bottom">
                <a href="#">Bambi Print Mini Backpack</a>
                <div className="price">
                    <span>$150</span>
                </div>
                </div>
            </div>
            <div className="product">
                <div className="img__container">
                <img src="https://res.cloudinary.com/swizce/image/upload/v1610534026/product14_fxegrl.jpg" alt="" />
                <div className="addCart">
                    <i className="ti-shopping-cart" />
                </div>
                <ul className="side__icons">
                    <span><i className="ti-search" /></span>
                    <span><i className="ti-heart" /></span>
                    <span><i className="ti-layout-slider" /></span>
                </ul>
                </div>
                <div className="bottom">
                <a href="#">Bambi Print Mini Backpack</a>
                <div className="price">
                    <span>$150</span>
                </div>
                </div>
            </div>
            <div className="product">
                <div className="img__container">
                <img src="https://res.cloudinary.com/swizce/image/upload/v1610534025/product5_hb1iim.jpg" alt="" />
                <div className="addCart">
                    <i className="ti-shopping-cart" />
                </div>
                <ul className="side__icons">
                    <span><i className="ti-search" /></span>
                    <span><i className="ti-heart" /></span>
                    <span><i className="ti-layout-slider" /></span>
                </ul>
                </div>
                <div className="bottom">
                <a href="#">Bambi Print Mini Backpack</a>
                <div className="price">
                    <span>$150</span>
                </div>
                </div>
            </div>
            <div className="product">
                <div className="img__container">
                <img src="https://res.cloudinary.com/swizce/image/upload/v1610534024/product2_rnywnk.jpg" alt="" />
                <div className="addCart">
                    <i className="ti-shopping-cart" />
                </div>
                <ul className="side__icons">
                    <span><i className="ti-search" /></span>
                    <span><i className="ti-heart" /></span>
                    <span><i className="ti-layout-slider" /></span>
                </ul>
                </div>
                <div className="bottom">
                <a href="#">Bambi Print Mini Backpack</a>
                <div className="price">
                    <span>$150</span>
                </div>
                </div>
            </div>
            <div className="product">
                <div className="img__container">
                <img src="https://res.cloudinary.com/swizce/image/upload/v1610534026/product10_nv4hj3.jpg" alt="" />
                <div className="addCart">
                    <i className="ti-shopping-cart" />
                </div>
                <ul className="side__icons">
                    <span><i className="ti-search" /></span>
                    <span><i className="ti-heart" /></span>
                    <span><i className="ti-layout-slider" /></span>
                </ul>
                </div>
                <div className="bottom">
                <a href="#">Bambi Print Mini Backpack</a>
                <div className="price">
                    <span>$150</span>
                </div>
                </div>
            </div>
            <div className="product">
                <div className="img__container">
                <img src="https://res.cloudinary.com/swizce/image/upload/v1610534026/product12_aznyjk.jpg" alt="" />
                <div className="addCart">
                    <i className="ti-shopping-cart" />
                </div>
                <ul className="side__icons">
                    <span><i className="ti-search" /></span>
                    <span><i className="ti-heart" /></span>
                    <span><i className="ti-layout-slider" /></span>
                </ul>
                </div>
                <div className="bottom">
                <a href="#">Bambi Print Mini Backpack</a>
                <div className="price">
                    <span>$150</span>
                </div>
                </div>
            </div>
            </div>
        </section>
        {/* Advert Section */}
        <section className="section advert">
            <div className="advert__layouts">
            <div className="advert__items">
                <img src="https://res.cloudinary.com/swizce/image/upload/v1610533564/promo7_kijl3e.jpg" alt="" />
                <div className="content left">
                <span>Exclusive Sales</span>
                <h3>Spring Collection</h3>
                <a href="#">View Collection! →</a>
                </div>
            </div>
            <div className="advert__items">
                <img src="https://res.cloudinary.com/swizce/image/upload/v1610533566/promo8_zpzzsr.jpg" alt="" />
                <div className="content right">
                <span>New Trending</span>
                <h3>Designer Bags</h3>
                <a href="#">Shop Now! →</a>
                </div>
            </div>
            </div>
        </section>
        {/* Trending Product */}

        <section className="section products">
            <div className="title">
            <h2>New Trending</h2>
            <span>Select from the premiumproduct and save plenty money</span>
            </div>
            <div className="product__layouts">
            <div className="product">
                <div className="img__container">
                <img src="https://res.cloudinary.com/swizce/image/upload/v1610533570/product1_izeg8n.jpg" alt="" />
                <div className="addCart">
                    <i className="ti-shopping-cart" />
                </div>
                <ul className="side__icons">
                    <span><i className="ti-search" /></span>
                    <span><i className="ti-heart" /></span>
                    <span><i className="ti-layout-slider" /></span>
                </ul>
                </div>
                <div className="bottom">
                <a href="#">Bambi Print Mini Backpack</a>
                <div className="price">
                    <span>$150</span>
                </div>
                </div>
            </div>
            <div className="product">
                <div className="img__container">
                <img src="https://res.cloudinary.com/swizce/image/upload/v1610534026/product14_fxegrl.jpg" alt="" />
                <div className="addCart">
                    <i className="ti-shopping-cart" />
                </div>
                <ul className="side__icons">
                    <span><i className="ti-search" /></span>
                    <span><i className="ti-heart" /></span>
                    <span><i className="ti-layout-slider" /></span>
                </ul>
                </div>
                <div className="bottom">
                <a href="#">Bambi Print Mini Backpack</a>
                <div className="price">
                    <span>$150</span>
                </div>
                </div>
            </div>
            <div className="product">
                <div className="img__container">
                <img src="https://res.cloudinary.com/swizce/image/upload/v1610534027/product13_jeocrb.jpg" alt="" />
                <div className="addCart">
                    <i className="ti-shopping-cart" />
                </div>
                <ul className="side__icons">
                    <span><i className="ti-search" /></span>
                    <span><i className="ti-heart" /></span>
                    <span><i className="ti-layout-slider" /></span>
                </ul>
                </div>
                <div className="bottom">
                <a href="#">Bambi Print Mini Backpack</a>
                <div className="price">
                    <span>$150</span>
                </div>
                </div>
            </div>
            <div className="product">
                <div className="img__container">
                <img src="https://res.cloudinary.com/swizce/image/upload/v1610534026/product11_smupbk.jpg" alt="" />
                <div className="addCart">
                    <i className="ti-shopping-cart" />
                </div>
                <ul className="side__icons">
                    <span><i className="ti-search" /></span>
                    <span><i className="ti-heart" /></span>
                    <span><i className="ti-layout-slider" /></span>
                </ul>
                </div>
                <div className="bottom">
                <a href="#">Bambi Print Mini Backpack</a>
                <div className="price">
                    <span>$150</span>
                </div>
                </div>
            </div>
            <div className="product">
                <div className="img__container">
                <img src="https://res.cloudinary.com/swizce/image/upload/v1610534025/product5_hb1iim.jpg" alt="" />
                <div className="addCart">
                    <i className="ti-shopping-cart" />
                </div>
                <ul className="side__icons">
                    <span><i className="ti-search" /></span>
                    <span><i className="ti-heart" /></span>
                    <span><i className="ti-layout-slider" /></span>
                </ul>
                </div>
                <div className="bottom">
                <a href="#">Bambi Print Mini Backpack</a>
                <div className="price">
                    <span>$150</span>
                </div>
                </div>
            </div>
            <div className="product">
                <div className="img__container">
                <img src="https://res.cloudinary.com/swizce/image/upload/v1610534025/product4_rnvclc.jpg" alt="" />
                <div className="addCart">
                    <i className="ti-shopping-cart" />
                </div>
                <ul className="side__icons">
                    <span><i className="ti-search" /></span>
                    <span><i className="ti-heart" /></span>
                    <span><i className="ti-layout-slider" /></span>
                </ul>
                </div>
                <div className="bottom">
                <a href="#">Bambi Print Mini Backpack</a>
                <div className="price">
                    <span>$150</span>
                </div>
                </div>
            </div>
            <div className="product">
                <div className="img__container">
                <img src="https://res.cloudinary.com/swizce/image/upload/v1610534024/product6_ridrxd.jpg" alt="" />
                <div className="addCart">
                    <i className="ti-shopping-cart" />
                </div>
                <ul className="side__icons">
                    <span><i className="ti-search" /></span>
                    <span><i className="ti-heart" /></span>
                    <span><i className="ti-layout-slider" /></span>
                </ul>
                </div>
                <div className="bottom">
                <a href="#">Bambi Print Mini Backpack</a>
                <div className="price">
                    <span>$150</span>
                </div>
                </div>
            </div>
            <div className="product">
                <div className="img__container">
                <img src="https://res.cloudinary.com/swizce/image/upload/v1610533570/product7_jfkluc.jpg" alt="" />
                <div className="addCart">
                    <i className="ti-shopping-cart" />
                </div>
                <ul className="side__icons">
                    <span><i className="ti-search" /></span>
                    <span><i className="ti-heart" /></span>
                    <span><i className="ti-layout-slider" /></span>
                </ul>
                </div>
                <div className="bottom">
                <a href="#">Bambi Print Mini Backpack</a>
                <div className="price">
                    <span>$150</span>
                </div>
                </div>
            </div>
            <div className="product">
                <div className="img__container">
                <img src="https://res.cloudinary.com/swizce/image/upload/v1610534026/product10_nv4hj3.jpg" alt="" />
                <div className="addCart">
                    <i className="ti-shopping-cart" />
                </div>
                <ul className="side__icons">
                    <span><i className="ti-search" /></span>
                    <span><i className="ti-heart" /></span>
                    <span><i className="ti-layout-slider" /></span>
                </ul>
                </div>
                <div className="bottom">
                <a href="#">Bambi Print Mini Backpack</a>
                <div className="price">
                    <span>$150</span>
                </div>
                </div>
            </div>
            <div className="product">
                <div className="img__container">
                <img src="https://res.cloudinary.com/swizce/image/upload/v1610534026/product14_fxegrl.jpg" alt="" />
                <div className="addCart">
                    <i className="ti-shopping-cart" />
                </div>
                <ul className="side__icons">
                    <span><i className="ti-search" /></span>
                    <span><i className="ti-heart" /></span>
                    <span><i className="ti-layout-slider" /></span>
                </ul>
                </div>
                <div className="bottom">
                <a href="#">Bambi Print Mini Backpack</a>
                <div className="price">
                    <span>$150</span>
                </div>
                </div>
            </div>
            <div className="product">
                <div className="img__container">
                <img src="https://res.cloudinary.com/swizce/image/upload/v1610534025/product5_hb1iim.jpg" alt="" />
                <div className="addCart">
                    <i className="ti-shopping-cart" />
                </div>
                <ul className="side__icons">
                    <span><i className="ti-search" /></span>
                    <span><i className="ti-heart" /></span>
                    <span><i className="ti-layout-slider" /></span>
                </ul>
                </div>
                <div className="bottom">
                <a href="#">Bambi Print Mini Backpack</a>
                <div className="price">
                    <span>$150</span>
                </div>
                </div>
            </div>
            <div className="product">
                <div className="img__container">
                <img src="https://res.cloudinary.com/swizce/image/upload/v1610534024/product2_rnywnk.jpg" alt="" />
                <div className="addCart">
                    <i className="ti-shopping-cart" />
                </div>
                <ul className="side__icons">
                    <span><i className="ti-search" /></span>
                    <span><i className="ti-heart" /></span>
                    <span><i className="ti-layout-slider" /></span>
                </ul>
                </div>
                <div className="bottom">
                <a href="#">Bambi Print Mini Backpack</a>
                <div className="price">
                    <span>$150</span>
                </div>
                </div>
            </div>
            <div className="product">
                <div className="img__container">
                <img src="https://res.cloudinary.com/swizce/image/upload/v1610534026/product10_nv4hj3.jpg" alt="" />
                <div className="addCart">
                    <i className="ti-shopping-cart" />
                </div>
                <ul className="side__icons">
                    <span><i className="ti-search" /></span>
                    <span><i className="ti-heart" /></span>
                    <span><i className="ti-layout-slider" /></span>
                </ul>
                </div>
                <div className="bottom">
                <a href="#">Bambi Print Mini Backpack</a>
                <div className="price">
                    <span>$150</span>
                </div>
                </div>
            </div>
            <div className="product">
                <div className="img__container">
                <img src="https://res.cloudinary.com/swizce/image/upload/v1610534026/product12_aznyjk.jpg" alt="" />
                <div className="addCart">
                    <i className="ti-shopping-cart" />
                </div>
                <ul className="side__icons">
                    <span><i className="ti-search" /></span>
                    <span><i className="ti-heart" /></span>
                    <span><i className="ti-layout-slider" /></span>
                </ul>
                </div>
                <div className="bottom">
                <a href="#">Bambi Print Mini Backpack</a>
                <div className="price">
                    <span>$150</span>
                </div>
                </div>
            </div>
            </div>
        </section>
        {/* Branding Section */}
        <section className="section brands">
            <div className="title">
            <h2>Product Brands</h2>
            <span>Select from the premium product and save plenty money</span>
            </div>
            <div className="brand__layouts container">
            <div className="brand_logo">
                <img src="/assets/images/brand1.png" alt="" />
            </div>
            <div className="brand_logo">
                <img src="/assets/images/brand2.png" alt="" />
            </div>
            <div className="brand_logo">
                <img src="/assets/images/brand3.png" alt="" />
            </div>
            <div className="brand_logo">
                <img src="/assets/images/brand4.png" alt="" />
            </div>
            <div className="brand_logo">
                <img src="/assets/images/brand5.png" alt="" />
            </div>
            <div className="brand_logo">
                <img src="/assets/images/brand6.png" alt="" />
            </div>
            {/* <div class="brand_logo">
                <img src="/assets/images/brand7.png" alt=""="">
            </div> */}
            </div>
        </section>
        {/* Sponsor Section */}
        <section className="section sponsor">
            <div className="title">
            <h2>Our Partner</h2>
            <span>Select from the premium product and save plenty money</span>
            </div>
            <div className="sponsor__layouts container">
            <div className="brand_logo">
                <img src="/assets/images/brand1.png" alt="" />
            </div>
            <div className="brand_logo">
                <img src="/assets/images/brand2.png" alt="" />
            </div>
            <div className="brand_logo">
                <img src="/assets/images/brand3.png" alt="" />
            </div>
            <div className="brand_logo">
                <img src="/assets/images/brand4.png" alt="" />
            </div>
            <div className="brand_logo">
                <img src="/assets/images/brand5.png" alt="" />
            </div>
            <div className="brand_logo">
                <img src="/assets/images/brand6.png" alt="" />
            </div>
            </div>
        </section>
        {/* footer section */}
        <footer id="footer" className="section footer">
            <div className="container">
            <div className="footer-container">
                <div className="footer-center">
                <h3>EXTRAS</h3>
                <a href="#">Brands</a>
                <a href="#">Gift Certificates</a>
                <a href="#">Affiliate</a>
                <a href="#">Specials</a>
                <a href="#">Site Map</a>
                </div>
                <div className="footer-center">
                <h3>INFORMATION</h3>
                <a href="#">About Us</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms &amp; Conditions</a>
                <a href="#">Contact Us</a>
                <a href="#">Site Map</a>
                </div>
                <div className="footer-center">
                <h3>MY ACCOUNT</h3>
                <a href="#">My Account</a>
                <a href="#">Order History</a>
                <a href="#">Wish List</a>
                <a href="#">Newsletter</a>
                <a href="#">Returns</a>
                </div>
                <div className="footer-center">
                <h3>CONTACT US</h3>
                <div>
                    <span>
                    <i className="ti-location-pin" />
                    </span>
                    42 House, Dreammy str, Dreamville, LA
                </div>
                <div>
                    <span>
                    <i className="ti-email" />
                    </span>
                    rixnickl2@gmail.com
                </div>
                <div>
                    <span>
                    <i className="ti-mobile" />
                    </span>
                    (+856)-202-8222-732
                </div>
                <div>
                    <p>Copyright &copy; 2020 <script>document.write(new Date().getFullYear())</script> BL Tech All Rights Reserved</p>
                </div>
                <div className="payment-methods">
                    <img src="https://uploads-ssl.webflow.com/5acf7e4b5aaf36eb81b35d97/5cb884b654c541baccac1de9_Logos-01.png" alt="" />
                </div>
                </div>
            </div>
            </div>
        </footer>

        </>
    )
}

export default Home

