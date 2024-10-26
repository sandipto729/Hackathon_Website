// import React from 'react';
// import { Link } from 'react-router-dom';
// import styles from './Navbar.module.scss';
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { setUserDetails } from './../../store/userSlice';
// import { toast } from 'react-toastify';
// import SummaryApi from './../../common';

// const Navbar = () => {
//     const dispatch = useDispatch();

//     const user = useSelector(state => state?.user?.user);
//     const handlelogout=async()=>{
//         const response = await fetch(SummaryApi.UserLogout.url, {
//             method: SummaryApi.UserLogout.method,
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             credentials: 'include',
//         });

//         const result = await response.json();
//         if (result.success) {
//             toast.success(result.message);
//             dispatch(setUserDetails(null));
//         } else {
//             toast.error(result.message);
//         }
//     }
//     return (
//         <nav className={styles.navbar}>
//             <div className={styles.logo}>
//                 <Link to="/">
//                     <img src="https://www.cssnitdgp.in/static/media/CSS_logo2.6184c368729b4761509c.png" alt="Logo" className={styles.logoImg} />
//                 </Link>
//             </div>
//             <ul className={styles.navLinks}>
//                 <li><Link to="/about">About</Link></li>
//                 <li><Link to="/events">Events</Link></li>
//                 <li><Link to="/contact">Contact</Link></li>
//                 {
//                     user && user._id && <li onClick={handlelogout()}>Logout</li>
//                 }
//                 {(user && user._id) ? <li><Link to="/profile" className={styles.signupButton}>
//                     <img src={user?.photo} alt={user?.name} />

//                 </Link></li> : <li><Link to="/login" className={styles.signupButton}>Sign Up</Link></li>}
//             </ul>
//         </nav>
//     );
// };

// export default Navbar;


import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setUserDetails } from './../../store/userSlice';
import { toast } from 'react-toastify';
import SummaryApi from './../../common';

const Navbar = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state?.user?.user);

    const handleLogout = async () => {
        try {
            const response = await fetch(SummaryApi.UserLogout.url, {
                method: SummaryApi.UserLogout.method,
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            const result = await response.json();
            
            if (result.success) {
                toast.success(result.message);
                dispatch(setUserDetails(null));
            } else {
                toast.error(result.message);
            }
        } catch (error) {
            console.error("Logout failed:", error);
            toast.error("Failed to log out. Please try again later.");
        }
    };
    

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link to="/">
                    <img src="https://www.cssnitdgp.in/static/media/CSS_logo2.6184c368729b4761509c.png" alt="Logo" className={styles.logoImg} />
                </Link>
            </div>
            <ul className={styles.navLinks}>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/events">Events</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                {user && user._id ? (
                    <>
                        <li>
                            <button onClick={handleLogout} className={styles.logoutButton} style={{cursor: 'pointer'}}>Logout</button>
                        </li>
                        <li>
                            <Link to="/profile" className={styles.signupButton}>
                                <img src={user?.photo} alt={user?.name} />
                            </Link>
                        </li>
                    </>
                ) : (
                    <li>
                        <Link to="/login" className={styles.signupButton}>Sign Up</Link>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
