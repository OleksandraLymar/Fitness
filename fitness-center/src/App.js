import styles from './App.css';
import {BrowserRouter, Routes, Route, useLocation} from "react-router-dom";
 import { useTransition, animated } from 'react-spring';
 import Index from "./Components/Index";
import Shop from "./Components/Shop/shop.js";
import Team from "./Components/Team/team.js";
import About from "./Components/About/about.js";
import Blog from "./Components/Blog/blog.js";
import Cart from "./Components/Cart/cart.js";
import Checkout from "./Components/Checkout/checkout.js";
import Classes from "./Components/Classes/classes.js";
 import Contact from "./Components/Contact/js/contact.js";

import Price from "./Components/Price/price.js";
import Portfolio from "./Components/Portfolio/portfolio.js";
import Wishlist from "./Components/Wishlist/wishlist.js";
import Header from "./Components/Header/header.js";
import Footer from "./Components/Footer/footer.js";
// import Error404 from "./Components/Error/error.js


function App() {

    // let location  = useLocation();
    // const transitions = useTransition(items, {
    //     enter: item => [
    //         { opacity: item.opacity, height: item.height },
    //         { life: '100%' },
    //     ],
    //     leave: item => async (next, cancel) => {
    //         await next({ life: '0%' })
    //         await next({ opacity: 0 })
    //         await next({ height: 0 })
    //     },
    //     from: { life: '0%', opacity: 0, height: 0 },
    // })

    return  (
        <BrowserRouter>
            <Header></Header>

            <Shop/>
              {/*<Routes>*/}
              {/*     <Route path="/" element={<Index></Index>} />*/}
              {/*     <Route path="/about" element={<About></About>} />*/}
              {/*     <Route path="/shop" element={<Shop></Shop>} />*/}
              {/*     <Route path="/portfolio" element={<Portfolio></Portfolio>} />*/}
              {/*     <Route path="/price" element={<Price></Price>} />*/}
              {/*</Routes>*/}
            <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;