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
import TourBooking from "./components/MyOrder/Booking/TourBooking";
import HotelBooking from "./components/MyOrder/Booking/HotelBooking";
import MyOrder from "./components/MyOrder/MyOrder";
import NotFound from "./components/NotFound/NotFound";
import Tours from "./components/Tours/Tours";
import ManageAllOrders from "./components/ManageAllOrders/ManageAllOrders";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
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
            <PrivateRoute path="/order">
              <MyOrder></MyOrder>
            </PrivateRoute>
            <PrivateRoute path="/tourbooking/:tourId">
              <TourBooking></TourBooking>
            </PrivateRoute>
            <PrivateRoute path="/hotelbooking/:hotelId">
              <HotelBooking></HotelBooking>
            </PrivateRoute>
            <PrivateRoute path="/add">
              <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute path="/addtour">
              <AddTour></AddTour>
            </PrivateRoute>
            <PrivateRoute path="/addhotel">
              <AddHotel></AddHotel>
            </PrivateRoute>
            <PrivateRoute path="/manageorder">
              <ManageAllOrders></ManageAllOrders>
            </PrivateRoute>
            <PrivateRoute path="/order">
              <MyOrder></MyOrder>
            </PrivateRoute>
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
      </AuthProvider>
    </div>
  );
}

export default App;
