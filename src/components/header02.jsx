import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { trainImage } from '../assets/images';
import { logout } from '../store/Actions/authActions';
import { logoutEmailUser } from '../store/Actions/emailAction';
import { logoutMobileUser } from '../store/Actions/mobileOtpAction';
import { selectGoogleUser, selectGoogleUserName } from '../store/Selectors/authSelectors';
import { selectEmailUser, selectEmailUserName, statedata } from '../store/Selectors/emailSelector';
import { selectPhoneNumber } from '../store/Selectors/mobileSelector';
import AuthPopup from './auth/AuthPopup';

const Header02 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const emailUserName = useSelector(selectEmailUserName) || "Traveller";
  const googleUserName = useSelector(selectGoogleUserName);
  const emailuser = useSelector(selectEmailUser);
  const googleUser = useSelector(selectGoogleUser);
  const phoneNumber = useSelector(selectPhoneNumber);
  const [showAuthPopup, setShowAuthPopup] = useState(false);
  const stateData = useSelector(statedata);

  const isLoggedIn = Boolean(googleUser || phoneNumber || emailuser);

  const handleLogout = useCallback(async () => {
    try {
      await Promise.allSettled([
        dispatch(logout()),
        dispatch(logoutMobileUser(navigate)),
        dispatch(logoutEmailUser(navigate)),
      ]);

      ['authToken', 'googleUser', 'googleUserName'].forEach(key => {
        localStorage.removeItem(key);
      });

      navigate('/', { replace: true });
    } catch (error) {
      console.error("Logout failed:", error);
      window.location.href = '/';
    }
  }, [dispatch, navigate]);

  const navItems = [
    { to: "/", icon: "fa-solid fa-train", text: "Trains" },
    { to: "/home-flight", icon: "fa-solid fa-plane", text: "Flights" },
    { to: "/home-hotel", icon: "fa-solid fa-hotel", text: "Hotels" },
    { to: "/home-car", icon: "fa-solid fa-car", text: "Cabs" },
    { to: "/home-cruise", icon: "fa-solid fa-ship", text: "Cruises" },
    { to: "/home-bus", icon: "fa-solid fa-bus", text: "Buses" },
    { to: "/packages", icon: "fa-solid fa-suitcase-rolling", text: "Packages" },
  ];

  const userMenuItems = [
    { to: "/my-profile", text: "Profile" },
    { to: "/support", text: "Support" },
    { to: "/settings", text: "Settings" },
  ];

  const getUserDisplayName = () => {
    return `Hi, ${emailUserName}` || `Hi, ${googleUserName}` || 
           (phoneNumber && "Hi, Traveller") || 
           (emailuser && "Hi, Traveller");
  };

  return (
    <>
      <style>
        {`
          .nav-menu .active {
            color: #cd2c22;
            font-weight: bold;
          }
          .dropdown-item {
            padding: 10px 20px;
            transition: all 0.3s ease;
          }
          .dropdown-item:hover {
            color: #14728a;
            transform: scale(1.05);
          }
          .dropdown-item::after {
            content: "";
            position: absolute;
            width: 0;
            height: 2px;
            background-color: #cd2c22;
            left: 0;
            bottom: 0;
            transition: width 0.3s ease;
          }
          .dropdown-item:hover::after {
            width: 100%;
          }
          .dropdown-item:focus,
          .dropdown-item:active {
            background-color: #cd2c22 !important;
            color: inherit;
            outline: none;
          }

          @media (max-width: 768px) {
            .mobile_nav {
              width: 100%;
              display: flex;
              justify-content: flex-end;
            }

            .mobile_nav .nav-link {
              padding: 8px 10px;
              font-size: 14px;
            }

            .nav-menus-wrapper {
              display: none !important;
            }

            .horizontal-scroll-nav {
              margin-top:25px;
              margin-bottom:10px;
              overflow-x: auto !important;
              -webkit-overflow-scrolling: touch;
              scrollbar-width: none; /* Firefox */
            }
            .horizontal-scroll-nav ul {
              flex-wrap: nowrap !important;
              overflow-x: auto !important;
              scrollbar-width: none; /* Firefox */
            }
            .horizontal-scroll-nav::-webkit-scrollbar,
            .horizontal-scroll-nav ul::-webkit-scrollbar {
              display: none !important; /* Hide scrollbar for Chrome, Safari, Opera */
            }
            .horizontal-scroll-nav li {
              border: 1.5px solid #cd2c22 !important;
              border-radius: 8px;
              background: #fff;
            }
            .horizontal-scroll-nav li .fa-lg,
            .horizontal-scroll-nav li .nav-link {
              color: #cd2c22 !important;
            }
            .horizontal-scroll-nav li .nav-link.active {
              background: #cd2c22 !important;
              color: #fff !important;
              border-radius: 8px;
            }
            .horizontal-scroll-nav li .nav-link.active .fa-lg {
              color: #fff !important;
            }
          }

          .horizontal-scroll-nav {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            width: 100%;
          }
          .horizontal-scroll-nav ul {
            flex-wrap: nowrap !important;
          }
          .horizontal-scroll-nav::-webkit-scrollbar {
            display: none;
          }
          /* Add border for mobile nav-menu elements */
          @media (max-width: 768px) {
            .horizontal-scroll-nav li {
              border: 1.5px solid #cd2c22;
              border-radius: 8px;
              background: #fff;
            }
          }
          @media (min-width: 769px) {
            .horizontal-scroll-nav {
              display: none !important;
            }
          }
        `}
      </style>

      <div className="header header-light">
        <div className="container">
          <nav id="navigation" className="navigation navigation-landscape">
            <div className="nav-header">
              <NavLink to="/" className="nav-brand">
                <img src={trainImage} className="logo" alt="Logo" />
              </NavLink>
              <div className="nav-toggle" />

              {/* Mobile version right-end Sign In/Register */}
              {!isLoggedIn && (
                <div className="mobile_nav d-md-none">
                  <Link to="#" onClick={() => setShowAuthPopup(true)} className="bg-light-primary text-primary rounded nav-link">
                    <i className="fa-regular fa-circle-user fs-6" />
                  </Link>
                </div>
              )}
            </div>

            <div className="nav-menus-wrapper" style={{ transitionProperty: 'none' }}>
              <ul className="nav-menu">
                {navItems.map((item, index) => (
                  <li key={index} className="mt-3 ">
                    <NavLink to={item.to}>
                      <i className={`${item.icon} me-2 fa-lg`} />
                      {item.text}
                    </NavLink>
                  </li>
                ))}
              </ul>

              <ul className="nav-menu nav-menu-social align-to-right mt-3 ">
                {isLoggedIn ? (
                  <li className="nav-item dropdown">
                    <Link 
                      className="nav-link dropdown-toggle d-flex align-items-center" 
                      to="#" 
                      id="userDropdown" 
                      role="button" 
                      data-bs-toggle="dropdown" 
                      aria-expanded="false"
                    >
                      <i className="fa-regular fa-circle-user fs-5 me-2" />
                      <span>{getUserDisplayName()}</span>
                    </Link>
                    <ul className="dropdown-menu dropdown-menu-end shadow" aria-labelledby="userDropdown">
                      {userMenuItems.map((menuItem, index) => (
                        <li key={index}>
                          <Link className="dropdown-item" to={menuItem.to}>
                            {menuItem.text}
                          </Link>
                        </li>
                      ))}
                      <li><hr className="dropdown-divider" /></li>
                      <li>
                        <Link className="dropdown-item" to="#" onClick={handleLogout}>
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </li>
                ) : (
                  <li className="list-buttons d-none d-md-block">
                    <Link to="#" onClick={() => setShowAuthPopup(true)}>
                      <i className="fa-regular fa-circle-user fs-6 me-2" />
                      Sign In / Register
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </nav>
        </div>

        {/* New container for horizontal scrollable nav-menus */}
        <div className="container d-md-none mt-2">
          <div className="horizontal-scroll-nav">
            <ul className="d-flex flex-row gap-2 mb-0" style={{ overflowX: 'auto', whiteSpace: 'nowrap', padding: 0, listStyle: 'none' }}>
              {navItems.map((item, index) => (
                <li key={index} style={{ display: 'inline-block', flex: '0 0 auto' }}>
                  <NavLink
                    to={item.to}
                    style={{ display: 'inline-block', padding: '10px 16px' }}
                    className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                  >
                    <i className={`${item.icon} me-2 fa-lg`} />
                    {item.text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* End horizontal scrollable nav-menus */}
      </div>

      <AuthPopup 
        isOpen={showAuthPopup} 
        onClose={() => setShowAuthPopup(false)} 
      />
    </>
  );
};

export default React.memo(Header02);
