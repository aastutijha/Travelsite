import {useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { supabase } from '../supabase/supabase';

const Home = () => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase.auth.getUser();
        if (data.user) {
          console.log("User details fetched:", data.user);
          setUserDetails(data.user);
        } else {
          console.log("No user found.");
          setUserDetails(null);
        }
      } catch (error) {
        console.error("Error fetching user details:", error.message);
        toast.error("Error fetching user details: " + error.message);
      }
    };

    fetchData();
  }, []);

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        throw error;
      }
      setUserDetails(null);
      toast.success("Logged out successfully");
    } catch (error) {
      toast.error("Error logging out: " + error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 rounded-lg shadow-lg p-10">
        <h3 className="text-2xl font-semibold mb-4">Welcome to Travelsite</h3>
        {userDetails ? (
          <>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={userDetails.user_metadata.avatar_url}
                alt=""
                style={{ borderRadius: "50%", width: "20%" }}
              />
              <h4 className="text-lg py-4 ml-2">Username: {userDetails.email}</h4>
            </div>
            <button className="btn btn-primary mt-4 ml-20" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <p className="text-lg mb-4">You are not logged in. Please Login</p>
            <div className="flex justify-between">
              <Link to="/register">
                <button className="btn btn-primary">Register</button>
              </Link>
              <Link to="/login">
                <button className="btn btn-primary">Login</button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
