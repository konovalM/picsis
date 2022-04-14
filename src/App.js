import './App.css';
import Header from "./components/Header";
import We from "./components/We";
import Recommends from "./components/Recommends";
import Promotions from "./components/Promotions";
import Reviews from "./components/Reviews";
import Delivery from "./components/Delivery";
import Footer from "./components/Footer";

function App() {
  return (
   <div>
       <Header/>
       <We/>
       <Recommends/>
       <Promotions/>
       <Reviews/>
       <Delivery/>
       <Footer/>
   </div>
  );
}

export default App;
