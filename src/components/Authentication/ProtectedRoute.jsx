// // src/components/ProtectedRoute.js

// import {} from "react";
// import { Navigate } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";

// const ProtectedRoute = ({ children }) => {
//   const { currentUser } = useAuth();

//   if (!currentUser) {
//     return <Navigate to="/login" />;
//   }

//   return children;
// };

// export default ProtectedRoute;


import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated, element }) => {
  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
