import Image from 'next/image';
import Sidebar from './sidebar';


const ListsHotel = () => (
    <div className="listhotel-section">        
        <div className="search-bar-top">
            <div className="perv-bt">
                <img src="./images/icon-prev.png" alt="" />
            </div>
            <input type="text" placeholder="Search city , Country, Place for Travel advisory" />
        </div>
        <div className="listhotel-overlay">
            <div className="listhotel-content">
                <div className="listhotel-box">
                    <img src="./images/nobu-hotel-chicago.png" alt="bg"></img>
                    <div className="overlay-title">
                        <h1>Incredible India</h1>
                        <p>“For where thy treasure is,<br />here also will thy heart be.”</p>
                        <button className="take-tour-button">Take Tour</button>
                    </div>
                </div>
                <div className="listhotel-box">
                    <img src="./images/nobu-hotel-chicago.png" alt="bg"></img>
                    <div className="overlay-title">
                        <h1>Incredible India</h1>
                        <p>“For where thy treasure is,<br />here also will thy heart be.”</p>
                        <button className="take-tour-button">Take Tour</button>
                    </div>
                </div>
                <div className="listhotel-box">
                    <img src="./images/nobu-hotel-chicago.png" alt="bg"></img>
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

const Recommended = () => (
    <div className="recommend-section">
        <div className="recommend-overlay">
            <div className="recommend-content">
                <h3>Recomanded</h3>
                <div className="recommend-box">
                    <div className="overlay-title">
                        <img src="./images/nobu-hotel-chicago.png" alt="bg"></img>
                        <h1>Incredible India</h1>
                        <p>“For where thy treasure is,<br />here also will thy heart be.”</p>
                        <button className="take-tour-button">Take Tour</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);


// const SearchHotel = () => (
//     <div className="content-area">
//         <ListsHotel />
//         <Recommended />
//     </div>
// );

const Hotels = () => {
    return (
        <div className="main-container">
            <Sidebar />
            {/* <SearchHotel /> */}
            <ListsHotel />
            <Recommended />
        </div>
    );
};

export default Hotels;
