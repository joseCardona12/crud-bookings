import Auth from "../../../../classes/Auth";
import {BookingManager} from "../../../../classes/Booking"; 
import RegularUser from "../../../../classes/RegularUser";
import { NavigateTo } from "../../../../Router";
import styles from "./bookings.styles.css"


export const controllerPrivate = () =>{
    const $contentBookings = document.getElementById("contentBookings");
    const $formAddBooking = document.getElementById("formBooking");
    const id_rol = localStorage.getItem("id_rol");
    const booking = new BookingManager();
    booking.renderBookings($contentBookings, booking.bookings, id_rol);

    //Get html elements 
    const $buttonCards = document.querySelectorAll(`.${styles["article-footer"]} button`)
    $buttonCards.forEach(button=>{
        button.addEventListener("click", ()=>{
            const $dataNameButton = button.getAttribute("data-name");
            const idBookingGet = button.getAttribute("data-idBooking");
            if($dataNameButton === "update"){
                NavigateTo(`/home-dashboard-admin/bookings/editBooking?id=${idBookingGet}`);
                return;
            }
            if($dataNameButton === "delete"){
                const confirmDelete = confirm("Do you want delete this booking?");
                if(!confirmDelete){
                    return;
                }
                booking.deleteBooking(idBookingGet);
                NavigateTo("/home-dashboard-admin/bookings")
            }
        })
    })
    $formAddBooking.addEventListener("submit", (e)=>{
        e.preventDefault();
        const $namestart = document.getElementById("nameCountryStart")
        const $nameEnd = document.getElementById("nameCountryEnd")
        const $startDate = document.getElementById("startDate")
        const $endDate = document.getElementById("endDate")
        const $quantityPeople = document.getElementById("quantityPeople");

        const formVerify = Auth.verifyForm();
        if(!formVerify){
            console.log({message: "Fill all fields. Please"});
            return;
        }
        booking.createBooking(
            $namestart.value,
            $nameEnd.value,
            $startDate.value,
            $endDate.value,
            $quantityPeople.value
        )
        NavigateTo("/home-dashboard-admin/bookings");
    })
}