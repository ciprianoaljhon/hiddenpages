import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Auth from "./pages/Auth";
import Home from "./pages/Home/Home.jsx";
import Collections from "./pages/Collections/Collections.jsx";
import Community from "./pages/Community";
import LandingPage from "./pages/LandingPage/LandingPage";
import { AuthProvider } from "./hooks/AuthTypeContext";
import Footer from "./components/Footer.jsx";
import { LoggedInProvider } from "./hooks/LoggedInContext.jsx";
import BookInfo from "./pages/Collections/BookInfo.jsx";
import DataProvider from "./hooks/DataProvider.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import { ToastContainer } from "react-toastify";
import CheckoutPage from "./pages/Cart/CheckoutPage.jsx";
import { CartProvider } from "./hooks/useCart.jsx";
import { PopupProvider } from "./hooks/PopupContext.jsx";
import PaymentPopup from "./components/PaymentPopup.jsx";
import OrderHistory from "./pages/Orders/OrderHistory.jsx";
function App() {
  return (
    <DataProvider>
      <PopupProvider>
        <LoggedInProvider>
          <AuthProvider>
            <CartProvider>
              <PaymentPopup></PaymentPopup>
              <Router>
                <Header></Header>
                <Routes>
                  <Route path="/" element={<LandingPage />}></Route>
                  <Route path="/auth" element={<Auth />}></Route>
                  <Route path="/home" element={<Home />}></Route>
                  <Route
                    exact
                    path="/collections"
                    element={<Collections />}
                  ></Route>
                  <Route path="/checkout" element={<CheckoutPage />}></Route>
                  <Route
                    path="/checkout/:purchase"
                    element={<CheckoutPage />}
                  ></Route>
                  <Route path="/orders" element={<OrderHistory />}></Route>
                  <Route
                    path="/collections/:bookID"
                    element={<BookInfo />}
                  ></Route>
                  <Route path="/community" element={<Community />}></Route>
                  <Route path="/cart/" element={<Cart></Cart>}></Route>
                  <Route path="/profile/" element={<Profile></Profile>}></Route>
                  <Route path="*">Page Not Found</Route>
                </Routes>
                <Footer></Footer>
              </Router>
            </CartProvider>
          </AuthProvider>
        </LoggedInProvider>
      </PopupProvider>
      <ToastContainer />
    </DataProvider>
  );
}

export default App;
