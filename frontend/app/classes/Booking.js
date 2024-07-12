import { decryptData } from "../helpers/encrypt";
import styles from "../view/private/homeUser/homeUser.styles.css"

export class Booking{
    constructor(nameStart,nameEnd,startDate,endDate,quantityPeople,idUser){
        this.nameStart = nameStart;
        this.nameEnd = nameEnd;
        this.startDate = startDate;
        this.endDate = endDate;
        this.quantityPeople = quantityPeople;
        this.idUser = idUser;
    }
}

export class BookingManager{
    constructor(){
        this.bookings = JSON.parse(localStorage.getItem("bookings")) || [];
        this.idUserGet = localStorage.getItem("id_user");
    }

    createBooking(nameStart,nameEnd,startDate,endDate,quantityPeople){
        const booking = new Booking(nameStart,nameEnd,startDate,endDate,quantityPeople,decryptData(this.idUserGet))
        this.bookings.push(booking);
        this.saveBooking();
    }

    saveBooking(){
        localStorage.setItem("bookings", JSON.stringify(this.bookings));
    }

    filterBookingsForUser(){
        return this.bookings.filter(booking=>booking.idUser === decryptData(this.idUserGet));
    }

    renderBookings(contentBookings, filteredBookings){
        contentBookings.innerHTML = 
        `
            ${filteredBookings.map(booking=>
                `
                    <article class="${styles["bookings-article"]} card">
                        <div class="${styles["article-header"]} card-header">Image...</div>
                        <div class="${styles["article-body"]} card-body">
                            <div class="${styles["body-content"]}">
                                <h6 class="content-title">Name start:</h6>
                                <p>${booking.nameStart}</p>
                            </div>
                            <div class="${styles["body-content"]}">
                                <h6 class="content-title">Name end:</h6>
                                <p>${booking.nameEnd}</p>
                            </div>
                            <div class="${styles["body-content"]}">
                                <h6 class="content-title">Start date:</h6>
                                <p>${booking.startDate}</p>
                            </div>
                            <div class="${styles["body-content"]}">
                                <h6 class="content-title">End date:</h6>
                                <p>${booking.endDate}</p>
                            </div>
                            <div class="${styles["body-content"]}">
                                <h6 class="content-title">Quantity people:</h6>
                                <p>${booking.quantityPeople}</p>
                            </div>
                        </div>
                        <div class="${styles["article-footer"]} card-footer">
                            <button class="btn btn-success w-100"><i class="bi bi-search"></i> Show more</button>
                        </div>
                    </article>
                `
            ).join("")}
        
        `;   
    }
}
