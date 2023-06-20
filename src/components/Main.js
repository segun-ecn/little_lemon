import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Specials from "./pages/Specials";
import CustomersSay from "./pages/CustomersSay";
import Chicago from "./pages/Chicago";
import BookingPage from './pages/BookingPage';
import Confirmation from "./pages/Confirmation";

export default function Main() {
return (

    <Routes>
      <Route path="/" element={<Homepage />} />  {/*Little Lemon Home Page */}

      <Route path="/specials" element={<Specials />} />   {/*Little Lemon Menu Page */}

      <Route path="/customerssay" element={<CustomersSay />} />  {/*Little Lemon Testimonial Page */}

      <Route path="/chicago" element={<Chicago />} />   {/*Little Lemon About Page */}

      <Route path="/bookingpage" element={<BookingPage />} />  {/*Little Lemon Reservation Page */}

      <Route path="/confirmation" element={<Confirmation />} />  {/*Little Lemon Confirmation Page */}

      <Route path="/order" element={<orderonline />} />  {/*Little Lemon Order Online Page */}

      <Route path="/login" element={<Confirmation />} />  {/*Little Lemon Login Page */}

  </Routes>


    );
}
