 
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/farmersComponets/Home";
import Login from "./components/farmersComponets/Login" 
import Header from "./components/Header";
import Signup from "./components/farmersComponets/Signup";
import Mycontext from "./components/farmersComponets/Context";
import Info from "./components/farmersComponets/Info";
import Cropselldetails from "./components/farmersComponets/Cropselldetails";
import Dta_Cropgetall from "./components/farmersComponets/Dta_Cropgetall";
import GetCrop from "./components/farmersComponets/GetCrop";
import Alldata from "./components/farmersComponets/Alldata";
 import Loginbuyers from "./components/BuyersComponent/Loginbuyers";
 import Signupbuyers from "./components/BuyersComponent/Signupbuyers";
 import Buycropname_loaction from "./components/BuyersComponent/Buycropname_loaction";
 import Buyquantuiyname from "./components/BuyersComponent/Buyquantuiyname";
 import Buylocationquantity from "./components/BuyersComponent/Buylocationquantity";
 import ButcropOnly from "./components/BuyersComponent/ButcropOnly";
 import Buyersinfo from "./components/BuyersComponent/Buyersinfo";
function App() {
 const [fullName,SetFullname]=useState("");
    const [address,Setaddress]=useState("");
    const [phoneNumber,SetPhonenumber]=useState("");
    const [email,Setemail]=useState("");
    const [age,Setage]=useState("");
    const [password,setPassword]=useState("");

  return (
    <>
    <Mycontext.Provider value={{fullName,SetFullname,phoneNumber,SetPhonenumber,address,Setaddress,email,Setemail,password, setPassword,Setage,age}}> 
      <BrowserRouter>
<Header />
        <div>

          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/userinfo" element={<Info />} />
            <Route path="/addcrops" element={<Cropselldetails />} />
            <Route path="/sellingcrops" element={<Dta_Cropgetall />} />
            <Route path="/getcropdetails" element={<GetCrop />} />
            <Route path="/getalldata" element={<Alldata />} />
            <Route path="/loginbuyers" element={<Loginbuyers />} />
            <Route path="/signupbuyers" element={<Signupbuyers />} />
            <Route path="/buycropnamelocation" element={<Buycropname_loaction />} />
            <Route path="/buycropnamequantity" element={<Buyquantuiyname />} />
            <Route path="/buylocationquantity" element={<Buylocationquantity />} />
            <Route path="/buycroponly" element={<ButcropOnly />} />
            <Route path="/buyerinfo" element={<Buyersinfo/>} />
           
            
          
            


          </Routes>
        </div>
      </BrowserRouter>
      </Mycontext.Provider>
    </>
  )
}

export default App
