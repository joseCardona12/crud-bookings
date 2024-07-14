import { controllerPrivate } from "./bookings.controller";
import styles from "./bookings.styles.css";

export const BookingsView = () =>{
    const viewPrivate = 
    `<section class="${styles["section-bookings"]}">
        <form class="form-booking" id="formBooking">
            <h2 class="booking-title">Create Bookings</h2>
            <div class="booking-name-country-start">
                <label class="start-label form-label" for="name-country-start">Name country start:</label>
                <input class="start-input form-control" id="nameCountryStart" type="text" name="name-country-start">
            </div>
            <div class="booking-name-country-end">
                <label class="end-label form-label" for="name-country-end">Name country end:</label>
                <input class="end-input form-control" id="nameCountryEnd" type="text" name="name-country-end">
            </div>
            <div class="booking-start-date">
                <label class="date-label form-label" for="start-date">Date start:</label>
                <input class="date-input form-control" id="startDate" type="datetime-local" name="start-date">
            </div>
            <div class="booking-end-date">
                <label class="date-label form-label" for="end-date">Date end:</label>
                <input class="date-input form-control" id="endDate" type="datetime-local" name="end-date">
            </div>
            <div class="booking-quantity-people">
                <label class="people-label form-label" for="quantity-people">Quantity people:</label>
                <input class="people-input form-control" id="quantityPeople" type="number" name="quantity-people">
            </div>
            <input class="booking-button btn btn-primary mt-2" type="submit" value="Add">
        </form>
        <div class="${styles["bookings-title"]}">
            <h2 class="${styles["title"]}">Bookings</h2>
        </div>
        <div class="${styles["bookings-content"]}" id="contentBookings">
        
        </div>
    </section>`;

    return{
        viewPrivate,
        controllerPrivate
    }
}