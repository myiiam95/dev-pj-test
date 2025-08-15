import Image from 'next/image';
import Link from 'next/link';

const ContentArea = () => (
    <div className="content-area">
        <SearchPanel />
        <HeroSection />
    </div>
);


const Sidebar = () => (
    <div className="sidebar">
        <div className="sidebar-header">
            <div className="main-bt">
                <Link href="/explore">
                    <Image
                        src="/images/icon-mainpage.png"
                        alt="main page"
                        width={34}
                        height={30}
                    />
                </Link>
            </div>
            <div className="sidebar-menu">
                <ul>
                    <li>
                        <img src="./images/icon-home.png" alt="" />
                        <span>Home</span>
                    </li>
                    <li className="acvtive">
                        <img src="./images/icon-a-search.png" alt="" />
                        <span>Explore</span>
                    </li>
                    <li>
                        <img src="./images/icon-heart.png" alt="" />
                        <span>Trips</span>
                    </li>
                    <li>
                        <img src="./images/icon-profile.png" alt="" />
                        <span>Profile</span>
                    </li>
                </ul>
            </div>
        </div>
        <div className="sidebar-nav">
            {/* <NavItem icon="🏡" label="Home" active />
            <NavItem icon="🔍" label="Explore" />
            <NavItem icon="✈️" label="Trips" />
            <NavItem icon="👤" label="Profile" /> */}
        </div>
    </div>
);

// const NavItem = ({ icon, label, active }) => (
//   <div className={`nav-item ${active ? 'active' : ''}`}>
//     <span className="nav-icon">{icon}</span>
//     <span className="nav-label">{label}</span>
//   </div>
// );


const SearchPanel = () => (
    <div className="search-panel">
        <div className="search-bar-top">
            <input type="text" placeholder="Search city , Country, Place for Travel advisory" />
        </div>
        <div className="search-section">
            <h1 className="main-color">What Are You Looking For?</h1>
            <div className="search-tabs">
                <ul>
                    {/* <li icon="🏨" label="Hotel" active></li>
            <Tab icon="✈️" label="Flight" />
            <Tab icon="🚗" label="Car" /> */}
                </ul>
            </div>
            <div className="search-form">
                <div className="form-group">
                    <input type="text" value="Pattaya" readOnly />
                </div>
                <div className="form-group date-group bg-seach">
                    <input type="text" value="Thu, 28 Jan 2021" readOnly />
                    <input type="text" value="Fri, 29 Jan 2021" readOnly />
                </div>
                <div className="form-group bg-seach">
                    <input type="text" value="2 adult, 1 children - 1 room" readOnly />
                </div>
                <button className="search-button">Search</button>
            </div>
        </div>
        <div className="recent-searches">
            <h3>Recent Searches</h3>
            <div className="hotel-list-box">
                <div className="hotel-img">
                    <img src="./images/hotel-1.png" alt="hotel"></img>
                </div>
                <div className="hotel-detail">
                    <h3 className="hotel-name">
                        Hotel JW Marriott
                    </h3>
                    {/* <div className="hotel-rating" style="--rating: 4;"></div> */}
                    <div className="hotel-rating-num">
                        <div className="badge-rating">★ <span>4.9</span></div>
                        <span className="total-review"><span>1366</span> Reviews</span>
                    </div>
                    <div className="hotel-amenities">
                        <span>Amenities</span>
                        <div className="hotel-amenities-list">
                            <ul>
                                <li className="parking-item">
                                    <img src="./images/icon-car.png" alt="" />
                                </li>
                                <li className="bath-item">
                                    <img src="./images/icon-bath.png" alt="" />
                                </li>
                                <li className="bar-item">
                                    <img src="./images/icon-drink.png" alt="" />
                                </li>
                                <li className="wifi-item">
                                    <img src="./images/icon-wifi.png" alt="" />
                                </li>
                                <li className="fitness-item">
                                    <img src="./images/icon-fitness.png" alt="" />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="hotel-price">
                        <span>1,000</span>/night
                    </div>
                </div>
                <button className="hotel-tab-booking">
                    <span>Book Now</span>
                </button>
            </div>
            {/* <RecentSearchItem
        image="./im" 
        name="Hotel JW Marriott"
        rating="5.0"
        reviews="2,204 Reviews"
        amenities="24h, wifi, pool"
        price="1,000/night"
      />
      <RecentSearchItem
        image="https://via.placeholder.com/100x100"
        name="Hotel JW Marriott"
        rating="5.0"
        reviews="2,204 Reviews"
        amenities="24h, wifi, pool"
        price="1,000/night"
      /> */}
        </div>
    </div>
);

// const Tab = ({ icon, label, active }) => (
//   <div className={`search-tab-item ${active ? 'active' : ''}`}>
//     <span className="tab-icon">{icon}</span>
//     <span className="tab-label">{label}</span>
//   </div>
// );

// const RecentSearchItem = ({ image, name, rating, reviews, amenities, price }) => (
//   <div className="recent-search-item">
//     <div className="item-info">
//       <img src={image} alt={name} className="item-image" />
//       <div className="item-details">
//         <div className="item-header">
//           <span className="item-name">{name}</span>
//           <div className="item-rating">
//             <span>⭐️</span>
//             <span className="rating-value">{rating}</span>
//             <span className="reviews">{reviews}</span>
//           </div>
//         </div>
//         <div className="item-amenities">
//           <span>{amenities}</span>
//         </div>
//         <div className="item-price">
//           <span>{price}</span>
//         </div>
//       </div>
//     </div>
//     <button className="book-now-button">Book Now</button>
//   </div>
// );

const HeroSection = () => (
    <div className="hero-section">
        <div className="hero-overlay">
            <div className="hero-content">
                <img src="./images/bg-home-img.png" alt="bg"></img>
                <div className="overlay-hero">
                    <img src="./images/bg-shadow-home.png" alt="bg"></img>
                    <div className="overlay-title">                    
                        <h1>Incredible India</h1>
                        <p>“For where thy treasure is,<br />here also will thy heart be.”</p>
                        <button className="take-tour-button">Take Tour</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);



const Explore = () => {
    return (
        <div className="main-container">
            <Sidebar />
            <ContentArea />
        </div>
    );
};

export default Explore;