import Auth from "../../../classes/Auth";
import { BookingManager } from "../../../classes/Booking";
import { NavigateTo } from "../../../Router";
export const controllerPrivate = () =>{
    const $formBooking = document.getElementById("formBooking");
    const $contentBookings = document.getElementById("contentBookings");
    const bookingManager = new BookingManager();
    $formBooking.addEventListener("submit", (e)=>{
        e.preventDefault();
        const $nameCountryStart = document.getElementById("nameCountryStart");
        const $nameCountryEnd = document.getElementById("nameCountryEnd");
        const $startDate = document.getElementById("startDate");
        const $endDate = document.getElementById("endDate");
        const $quantityPeople = document.getElementById("quantityPeople");

        const formVerify = Auth.verifyForm($nameCountryStart.value, $nameCountryEnd.value, $startDate.value,
                                            $endDate.value,$quantityPeople.value
        );
        if(!formVerify){
            console.log({message: "Plase, fill all fields"});
            return;
        }
        
        bookingManager.createBooking($nameCountryStart.value, $nameCountryEnd.value, 
                                    $startDate.value, $endDate.value, $quantityPeople.value) 
        if(localStorage.getItem("id_rol") === "1"){
            NavigateTo("/home-dashboard-user");
            return;
        }
    });
    const bookingForUserFilter = bookingManager.filterBookingsForUser();
    bookingManager.renderBookings($contentBookings, bookingForUserFilter); // Render bookings on the page

    
}