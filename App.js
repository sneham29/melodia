// client/src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";
import Header from "./components/common/header/Header";
import Footer from "./components/common/footer/Footer";
import About from "./components/about/About";
import Pricing from "./components/pricing/Pricing";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import CourseHome from "./components/allcourse/CourseHome";
import Login from "./components/login/Login";
import Event from "./components/events/Event";
import Register from "./components/register/Register";
import Team from "./components/team/Team";
import Checkout from "./components/checkout/Checkout";
import EnrollNow from "./components/enrollnow/EnrollNow";
import ProfilePage from "./components/profile/ProfilePage";
import Certificate from "./components/getcertificate/Getcertificate";
import EditProfile from "./components/profile/EditProfile";
import StaffProfile from "./components/staff/StaffProfile";
import Admin from "./components/admin/Admin";
import AdminDashboard from "./components/admin/AdminDashboard";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route>
          <AppContent />
        </Route>
      </Switch>
    </Router>
  );
};

const AppContent = () => {
  const location = useLocation();
  const excludeHeaderFooterPaths = ["/", "/register"];

  return (
    <React.Fragment>
      {!excludeHeaderFooterPaths.includes(location.pathname) && <Header />}
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/courses" component={CourseHome} />
        <Route exact path="/events" component={Event} />
        <Route exact path="/pricing" component={Pricing} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/enrollnow" component={EnrollNow} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/profile/edit" component={EditProfile} />
        <Route exact path="/certificate" component={Certificate} />
        <Route exact path="/staff" component={StaffProfile} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/admin-dash" component={AdminDashboard} />
     
      </Switch>
      {!excludeHeaderFooterPaths.includes(location.pathname) && <Footer />}
    </React.Fragment>
  );
};

export default App;
