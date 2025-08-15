import Image from 'next/image';
import Link from 'next/link'

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
                    <li>
                        <img src="./images/icon-home.png" alt="" />
                        <span>Home</span>
                    </li>
                    <li>
                        <img src="./images/icon-home.png" alt="" />
                        <span>Home</span>
                    </li>
                    <li>
                        <img src="./images/icon-home.png" alt="" />
                        <span>Home</span>
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
