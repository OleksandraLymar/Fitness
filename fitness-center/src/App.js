import {BrowserRouter, Routes, Route} from "react-router-dom";
import Index from "./Components/Index";

import Team from "./Components/Team/team.js";
import About from "./Components/About/about.js";
import Contact from "./Components/Contact/js/contact.js";
import Price from "./Components/Price/price.js";
import Header from "./Components/Header/header.js";
import Footer from "./Components/Footer/footer.js";
import BmiResult from "./Components/Index/bmiResult/bmiResult.js";
import AdminPage from "./Components/Chat/pages/AdminPage.js";
import ShopFitness from "./Components/Shop/shopFitness.js";
 import Error404 from "./Components/Error/error.js";


function App() {

    return  (
        <BrowserRouter>
            <Header/>
              <Routes>
                   <Route path="/" element={<Index/>} />
                   <Route path="/about" element={<About/>} />
                   <Route path="/team" element={<Team/>} />
                   <Route path="/price" element={<Price/>} />
                   <Route path="/contact" element={<Contact/>} />
                   <Route path="/bmiResult" element={<BmiResult/>} />
                   <Route path="/admin" element={<AdminPage />}/>
                   <Route path="/shopFitness" element={<ShopFitness />}/>
                  <Route path="*" exact element={<Error404 />} />
              </Routes>
            <Footer/>
    </BrowserRouter>

  );
}

export default App;