import React, {useState, useEffect, createContext} from "react";
import axios from "axios";

const UserLoader = ({userId, children}) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // IIFE that fetches user with specific id
    (async () => {
      const response = await axios.get(`/users/${userId}`);
      setUser(response.data);
    })();
  }, [userId]);

  console.log(user);

  // Map children and attach user prop to them
  return (
    <>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {user});
        }

        return child;
      })}
    </>
  );
};
export default UserLoader;
