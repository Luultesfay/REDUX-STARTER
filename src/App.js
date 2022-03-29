import { Fragment } from "react";
import Counter from "./components/Counter";
import Headers from "../src/components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import { useSelector } from "react-redux";

/**
 * Redux install

Here we install redux and also second package 
Called react-redux 

npm install redux  react-redux

The reason is redux is not limited to react only so in order to make-work with  react we specify the package  'react-redux'
note:'react-redux'   is a package which makes connecting react applications to Redux stores and reducers ends on very simple.
for example, make it very simple to subscribe components to the Redux store. npm install redux  react-redux      


*/

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <Fragment>
      <Headers />

      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
