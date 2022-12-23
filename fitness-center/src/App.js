import {BrowserRouter, Routes, Route} from "react-router-dom";
import Index from "./Components/Index";
import Shop from "./Components/Shop/shopfitness.js";
import Team from "./Components/Team/team.js";
import About from "./Components/About/about.js";
 import Contact from "./Components/Contact/js/contact.js";
import Price from "./Components/Price/price.js";
import Header from "./Components/Header/header.js";
import Footer from "./Components/Footer/footer.js";
import BmiResult from "./Components/Index/bmiResult/bmiResult.js";
import Cart from "./Components/Cart/cart.js";
import Checkout from "./Components/Checkout/checkout.js";
import Checkbox from "./Components/Chat/ChatBox.js"
import AdminPage from "./Components/Chat/pages/AdminPage.js";
// import Error404 from "./Components/Error/error.js


function App() {

    return  (
        <BrowserRouter>
            <Header/>
              <Routes>
                   <Route path="/" element={<Index/>} />
                   <Route path="/about" element={<About/>} />
                   <Route path="/team" element={<Team/>} />
                   <Route path="/shop" element={<Shop/>} />
                   <Route path="/price" element={<Price/>} />
                   <Route path="/contact" element={<Contact/>} />
                   <Route path="/bmiResult" element={<BmiResult/>} />
                   <Route path="/cart" element={<Cart/>} />
                   <Route path="/checkout" element={<Checkout/>} />
                   <Route path="/admin" element={<AdminPage />}/>
              </Routes>
            <Footer/>
    </BrowserRouter>

  );
}

export default App;