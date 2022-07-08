import Home from "./pages/homepage/Homepage";
import TopBar from "./components/topbar/Topbar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { Routes, Route} from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
// import Post from "./components/post/Post";


function App() {
  const { user } = useContext(Context);
  // user = true
  return (
<>
<TopBar />

    <Routes>
   
        <Route exact path="/" element={<Home />}/> 
        <Route path="/posts" element={<Home />}/>
        <Route exact path="/post/:id" element={<Single />}/>
        
        <Route path="/register" element={user ? <Home /> : <Register />}/>
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Register />}/>
        <Route path="/settings" element={user ? <Settings /> : <Register />}/>
        <Route path="/post/:postId" element= {<Single />} />
      
    </Routes>
    </>
  );
}

export default App;

