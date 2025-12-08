import React, {useState, useEffect, createContext} from "react";
import axios from "axios";

const CurrentUserLoader = ({children}) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // IIFE that fetches current user
    (async () => {
      const response = await axios.get("/current-user");
      setCurrentUser(response.data);
    })();
  }, []);

  // Map children and attach user prop to them
  return (
    <>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {currentUser});
        }

        return child;
      })}
    </>
  );
};
export default CurrentUserLoader;
