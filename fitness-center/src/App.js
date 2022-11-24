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
function App() {
  return (
    <div className="App">
        <Header></Header>
        <Index></Index>
        {/*<Shop></Shop>*/}
        {/*<Team></Team>*/}
        {/*<About></About>*/}
        {/*<Blog></Blog>*/}
      {/*<Cart></Cart>*/}
      {/*  <Checkout></Checkout>*/}
{/*<Classes></Classes>*/}
{/*<Contact></Contact>*/}
{/*      <Price></Price>*/}
{/*      <Portfolio></Portfolio>*/}
{/*        <Wishlist></Wishlist>*/}
        <Footer></Footer>
    </div>
  );
}

export default App;
