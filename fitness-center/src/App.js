import './App.css';
import Index from "./Components/Index";
import Shop from "./Components/Shop/shop.js";
import Team from "./Components/Team/team.js";
import About from "./Components/About/about.js";
import Blog from "./Components/Blog/blog.js";
import Cart from "./Components/Cart/cart.js";
import Checkout from "./Components/Checkout/checkout.js";
import Classes from "./Components/Classes/classes.js";
import Contact from "./Components/Contact/contact.js";
import Price from "./Components/Price/price.js";
import Portfolio from "./Components/Portfolio/portfolio.js";
import Wishlist from "./Components/Wishlist/wishlist.js";
import Header from "./Components/Header/header.js";
import Footer from "./Components/Footer/footer.js";
import Error404 from "./Components/Error/error.js";

import React, { useContext } from 'react'
import { BrowserRouter as Router, Switch, Route,__RouterContext } from 'react-router-dom'
import { animated, useTransition } from 'react-spring'
function useRouter() {
    return useContext(__RouterContext)
}
const Main = () => {
    const { location } = useRouter()
    const transitions = useTransition(location, location => location.key, {
        from: {
            opacity: 0,
            position: 'absolute',
            width: '100%',
            transform: `translate3d(100%, 0, 0)`
        },
        enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
        leave: {
            opacity: 0,
            transform: `translate3d(-50%, 0, 0)`
        }
    })

    return transitions.map(({ item, props: transition, key }) => (
        <animated.div key={key} style={transition}>
            <Switch location={item}>
                <Route exact path="/" component={Index} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/shop" component={Shop} />
            </Switch>
        </animated.div>
    )
/*//       <BrowserRouter>*/
/*//           <Header></Header>*/
//           {/*<Routes>*/}
//           {/*    <Route path="/" exact element={<Index />} />*/}
//           {/*    <Route path="/about" exact element={<About />} />*/}
//           {/*    <Route path="/pages/team" exact element={<Team />} />*/}
//           {/*    <Route path="/shop" exact element={<Shop />} />*/}
//           {/*    <Route path="/portfolio" exact element={<Portfolio />} />*/}
//           {/*    <Route path="/blog" exact element={<Blog />} />*/}
//           {/*    <Route path="*" exact element={<Error404 />} />*/}
//           {/*</Routes>*/}
//         {/*<Index></Index>*/}
//         {/*<Shop></Shop>*/}
//         {/*<Team></Team>*/}
//         {/*<About></About>*/}
//         {/*<Blog></Blog>*/}
//       {/*<Cart></Cart>*/}
//       {/*  <Checkout></Checkout>*/}
// {/*<Classes></Classes>*/}
// {/*<Contact></Contact>*/}
// {/*      <Price></Price>*/}
// {/*      <Portfolio></Portfolio>*/}
// {/*        <Wishlist></Wishlist>*/}
// {/*        <Footer></Footer>*/}
/*//       </BrowserRouter>*/
  );
}

export default App;
