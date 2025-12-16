import React, {useState, useEffect} from "react";
import axios from "axios";

const ResourceLoader = ({resourceUrl, resourceName, children}) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    // IIFE that fetches user with specific id
    (async () => {
      const response = await axios.get(resourceUrl);
      console.log(response.data);
      setResource(response.data);
    })();
  }, [resourceUrl]);

  // Map children and attach user prop to them
  return (
    <>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {[resourceName]: resource});
        }

        return child;
      })}
    </>
  );
};
export default ResourceLoader;
