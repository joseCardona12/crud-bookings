import Auth from "../../../../../classes/Auth";
import { BookingManager } from "../../../../../classes/Booking";
import { NavigateTo } from "../../../../../Router";

export const controllerPrivate = () =>{
    const params = new URLSearchParams(window.location.search);
    const idBookingGetParams = params.get("id");
    const bookingManager = new BookingManager();

    const $nameStart = document.getElementById("nameStart");
    const $nameEnd = document.getElementById("nameEnd");
    const $startDate = document.getElementById("startDate");
    const $endDate = document.getElementById("endDate");
    const $quantityPeople = document.getElementById("quantityPeople");

    bookingManager.renderFormBooking( // Render data of form 
        idBookingGetParams,
        $nameStart,
        $nameEnd,
        $startDate,
        $endDate,
        $quantityPeople
    );
    const $formEditBooking = document.getElementById("formUpdateBooking");
    $formEditBooking.addEventListener("submit", (e)=>{
        e.preventDefault();
        bookingManager.updateBooking(
            idBookingGetParams,
            $nameStart,
            $nameEnd,
            $startDate,
            $endDate,
            $quantityPeople
        );
        NavigateTo("/home-dashboard-admin/bookings");

    })
}