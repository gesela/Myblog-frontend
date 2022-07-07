import Home from "./pages/homepage/Homepage";
import TopBar from "./components/topbar/Topbar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {BrowserRouter as router,Switch,Link, Routes, Route} from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import Post from "./components/post/Post";


function App() {
  // const { user ,setUser } = useContext(Context);
  const user = false
  return (
<>
<TopBar />
{/* <Home /> */}


    <Routes>
     {/* <Route element={ <TopBar /> } />
      {/* <Switch> */}
           */} */}
        <Route exact path="/" element={<Home />}/> 
        <Route exact path="/posts" element={<Home />}/>
        <Route exact path="/post/:id" element={<Single />}/>
        
        <Route path="/register" element={user ? <Home /> : <Register />}/>
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Register />}/>
        <Route path="/settings" element={user ? <Settings /> : <Register />}/>
        <Route path="/post/:postId" element= {<Single />} />
      {/* </Switch> */}
    </Routes>
    </>
  );
}

export default App;

// import Topbar from "./components/topbar/Topbar";
// import Homepage from "./pages/homepage/Homepage";
// import Login from "./pages/login/Login";
// import Register from "./pages/register/Register";
// import Settings from "./pages/settings/Settings";
// import Single from "./pages/single/Single";
// import Write from "./pages/write/Write";
// import { BrowserRouter as Router, Switch, Route,Routes } from "react-router-dom";

// function App() {
//   const currentUser = true;
//   return (
//      <Router>
//       {/* <Routes> */}
//       <Topbar />
//         <Route exact path="/">
//           <Homepage />
//         </Route>
//         <Route path="/posts">
//           <Homepage />
//         </Route>
//         <Route path="/register">
//           {currentUser ? <Homepage /> : <Register />}
//         </Route>
//         <Route path="/login">{currentUser ? <Homepage /> : <Login />}</Route>
//         <Route path="/post/:id">
//           <Single />
//         </Route>
//         <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>
//         <Route path="/settings">
//           {currentUser ? <Settings /> : <Login />}
//         </Route>
//       {/* </Routes> */}
//        </Router>
    
//   );
// }

// export default App;