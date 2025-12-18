import CurrentUserLoader from "./components/current-user-loader";
import DataSourceWithRender from "./components/data-source-with-render";
import ResourceLoader from "./components/resource-loader";
import DataSource from "./components/data-source";
import UserLoader from "./components/user-loader";
import UserInfo from "./components/user-info";
import BookInfo from "./components/book-info";
import axios from "axios";

// Define function that fetches data and is passed as prop
const getDataFromServer = async url => {
  const response = await axios.get(url);

  return response.data;
};

function App() {
  return (
    <>
      <DataSource getData={() => getDataFromServer("/users/2")} resourceName={"user"}>
        <UserInfo />
      </DataSource>
    </>
  );
}

export default App;
