import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import AddHotel from "./components/AddService/AddHotel/AddHotel";
import AddService from "./components/AddService/AddService";
import AddTour from "./components/AddService/AddTour/AddTour";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Hotels from "./components/Hotels/Hotels";
import Login from "./components/Login/Login";
import MyOrder from "./components/MyOrder/MyOrder";
import NotFound from "./components/NotFound/NotFound";
import Tours from "./components/Tours/Tours";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/tour">
            <Tours></Tours>
          </Route>
          <Route path="/hotel">
            <Hotels></Hotels>
          </Route>
          <Route path="/order">
            <MyOrder></MyOrder>
          </Route>
          <Route path="/add">
            <AddService></AddService>
          </Route>
          <Route path="/addtour">
            <AddTour></AddTour>
          </Route>
          <Route path="/addhotel">
            <AddHotel></AddHotel>
          </Route>
          <Route path="/manageorder"></Route>
          <Route path="/order">
            <MyOrder></MyOrder>
          </Route>
          <Route path="/contact">
            <ContactUs></ContactUs>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>

        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
