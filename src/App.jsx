import "./App.css";
import Header from "./component/header/header";
import About from "./component/about/about";
import Contact from "./component/contact/contact";
import Footer from "./component/footer/Footer";
import Nav from "./component/nav/nav";
import Portofolio from "./component/portofolio/portofolio";
function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Portofolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
