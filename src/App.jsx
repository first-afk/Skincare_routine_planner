// import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import question from "./js/data";
import cartItems from "./js/cart";
import About from "./components/About";
import Carosel from "./components/Carosel";
import { CartProvider } from "./context/CartContext";
import Footer from "./components/Footer";

function App() {
  return (
    <CartProvider>
      <div>
        <nav className="nav-light h-5 bg-slate-50 fixed top-0 left-0 right-0 z-99"></nav>
      </div>
      <Header />
      <About productItems={cartItems} />
      <div className=" bg-amber-50">
      <Form questions={question}/>
      <Carosel />
      <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
