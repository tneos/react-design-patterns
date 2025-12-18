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

// Retrieve data from local storage(key as argument)
const getDataFromLocalStorage = key => {
  return localStorage.getItem(key);
};

const Message = ({msg}) => {
  console.log(msg);
  const msgObj = JSON.parse(msg);
  const {email, lastName, location, name} = msgObj;

  return (
    <>
      <h1>User details</h1>
      <ul>
        <li>{email}</li>
        <li>{lastName}</li>
        <li>{location}</li>
        <li>{name}</li>
      </ul>
    </>
  );
};

function App() {
  return (
    <>
      <DataSource getData={() => getDataFromServer("users/2")} resourceName={"user"}>
        <UserInfo />
      </DataSource>
      <DataSource getData={() => getDataFromLocalStorage("user")} resourceName={"msg"}>
        <Message />
      </DataSource>
    </>
  );
}

export default App;
