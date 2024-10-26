import { useEffect } from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './Layouts/Navbar/Navbar';
import Footer from './Layouts/Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { setUserDetails } from './store/userSlice';
import SummaryApi from './common';


function App() {
  const dispatch = useDispatch();

  const fetchUser = async () => { 
    try {
      const response = await fetch(SummaryApi.UserFetch.url, {
        method: SummaryApi.UserFetch.method,
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });
      const result = await response.json();
      // console.log(result);
      if (result.success) {
        dispatch(setUserDetails(result.data));
        
      }
    } catch (err) {
      toast.error('Error while fetching user details'); 
    }
  };

  useEffect(() => {
    fetchUser(); 
  }, []); 

  return (
    <>
      <ToastContainer />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
