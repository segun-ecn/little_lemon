import Heading from "../sections/reservePages/Heading";
import BookingForm from "./forms/BookingForm";
import { useReducer } from "react";
import { fetchAPI } from "./forms/bookingsAPI";
export default function BookingPage() {
  function updateTimes(date) {
    return fetchAPI(date);
  }

  const output = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, output);

  return (
    <>
      <Heading />
      <BookingForm availableTimes={availableTimes} updateTimes={dispatch} />
    </>
  );
}
