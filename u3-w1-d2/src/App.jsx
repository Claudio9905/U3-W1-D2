import "./App.css";
import CustomNavbar from "./components/CustomNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {
  return (
    <>
      <header>
        <CustomNavbar tema="dark" />
      </header>
      <Main />
      <Footer />
    </>
  );
}

export default App;
