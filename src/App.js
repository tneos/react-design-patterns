import CurrentUserLoader from "./components/current-user-loader";
import DataSourceWithRender from "./components/data-source-with-render";
import ResourceLoader from "./components/resource-loader";
import UserLoader from "./components/user-loader";
import UserInfo from "./components/user-info";
import BookInfo from "./components/book-info";

function App() {
  return (
    <>
      <ResourceLoader resourceUrl={"/users/2"} resourceName={"user"}>
        <UserInfo />
      </ResourceLoader>

      <ResourceLoader resourceUrl={"/books/1"} resourceName={"book"}>
        <BookInfo />
      </ResourceLoader>
    </>
  );
}

export default App;
