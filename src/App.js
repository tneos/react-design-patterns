import CurrentUserLoader from "./components/current-user-loader";
import DataSourceWithRender from "./components/data-source-with-render";
import UserLoader from "./components/user-loader";
import UserInfo from "./components/user-info";

function App() {
  return (
    <>
      {/* <DataSourceWithRender
        render={resource => <UserInfo user={resource} />}
      ></DataSourceWithRender> */}
      <UserLoader userId={"3"}>
        <UserInfo />
      </UserLoader>
    </>
  );
}

export default App;
