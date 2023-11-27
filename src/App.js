import './App.css';
import { Route, Routes } from 'react-router-dom';
import ShippingComponent from './components/ShippingComponent/ShippingComponent';
import RegisterComponent from './components/RegisterComponent/RegisterComponent';
import FinalWishlistComponent from './components/FinalWishlistComponent/FinalWishlistComponent';
import LogoutComponent from './components/LogoutComponent/LogoutComponent';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import HomeComponent from './components/HomeComponent/HomeComponent';
import LoginComponent from './components/LoginComponent/LoginComponent';
import FinalCheckoutComponent from './components/FinalCheckoutComponent/FinalCheckoutComponent';
import OrderComponent from './components/OrderComponent/OrderComponent';
import DetailsDisplayComponent from './components/DetailsDisplayComponent/DetailsDisplayComponent';


function App() {
  return (
    <div className="App">
      <HeaderComponent />
        <Routes>
          <Route exact path='/details' element={<DetailsDisplayComponent />} />
          <Route exact path='/shipping' element={<ShippingComponent />} />
          <Route exact path='/wishlist' element={<FinalWishlistComponent />} />
          <Route exact path='/logout' element={<LogoutComponent />} />
          <Route exact path="/" element={<HomeComponent />} />
          <Route exact path="/login" element={<LoginComponent />} />
          <Route exact path='/register' element={<RegisterComponent />} />
          <Route exact path='/checkout' element={<FinalCheckoutComponent />} />
          <Route exact path="/order" element={<OrderComponent />} />

        </Routes>
    </div>
  );
}

export default App;
