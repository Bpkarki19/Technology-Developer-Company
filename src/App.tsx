import NavBar from "./components/navigationBar/NavBar";
import Gallery from "./components/Gallery/Gallery";
import AboutUs from "./components/AboutUs/aboutUs";
import LearnTechnology from "./components/Learn/learn";

import {Routes, Route } from "react-router-dom";
import Home from "./components/Home/home";

const NotFound = () => <h1>404! Page Not Found</h1>;

function App() {
  let navItems = [
    { text: "Home", path: "/" },
    { text: "Our products", path: "/products" },
    { text: "Learn", path: "/learn-technology" },
    { text: "About Us", path: "/about-us" },
  ];

  return (
    <>
      <NavBar items={navItems}></NavBar>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<Gallery/>}/>
          <Route path="/website" element={<AboutUs/>}/>
          <Route path="/learn-technology" element={<LearnTechnology/>}/>
          <Route path="/about-us" element={<AboutUs/>}/>



        </Routes>
       

      </main>
      
      
    </>
  );
}

export default App;
