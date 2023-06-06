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
    <Route path="/" element={<Homepage />} />

    <Route path="/specials" element={<Specials />} />

    <Route path="/customerssay" element={<CustomersSay />} />

    <Route path="/chicago" element={<Chicago />} />

    <Route path="/bookingpage" element={<BookingPage />} />

    <Route path="/confirmation" element={<Confirmation />} />

  </Routes>


    );
}
