import Header from "./components/Navbar/Header";
import Footer from "./components/Footer";
import {Home} from "./components/Home";

export default function App() {
  return (
    <>
      <div>
        <Header/>
        <Home />
        <Footer/>
      </div>
    </> 
  )
}