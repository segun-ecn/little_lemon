import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Specials from "./pages/Specials";
import CustomersSay from "./pages/CustomersSay";
import Chicago from "./pages/Chicago";
import BookingPage from './pages/BookingPage';


export default function Main() {
return (

    <Routes>
    <Route path="/" element={<Homepage />} />

    <Route path="/Specials" element={<Specials />} />

    <Route path="/customerssay" element={<CustomersSay />} />

    <Route path="/chicago" element={<Chicago />} />

    <Route path="/bookingpage" element={<BookingPage />} />

  </Routes>


    );
}
