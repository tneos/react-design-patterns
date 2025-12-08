import {useState, useEffect} from "react";
import axios from "axios";

const DataSourceWithRender = ({render}) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get("/current-user");
      setCurrentUser(response.data);
    })();
  }, []);

  // Map children and attach user prop to them
  return render(currentUser);
};
export default DataSourceWithRender;
