import { decryptData } from "../helpers/encrypt";

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
    }

    createBooking(nameStart,nameEnd,startDate,endDate,quantityPeople){
        const idUser = localStorage.getItem("id_user");
        const booking = new Booking(nameStart,nameEnd,startDate,endDate,quantityPeople,decryptData(idUser))
        this.bookings.push(booking);
        this.saveBooking();
    }

    saveBooking(){
        localStorage.setItem("bookings", JSON.stringify(this.bookings));
    }

    renderBookings(contentBookings){
        contentBookings.innerHTML = 
        `
        ${this.bookings.map(booking=>
            `
            <article class="bookings-article">
                <div class="article-header">
                    .
                </div>
                <div class="article-body">
                    <h4 class="header-title">${booking.nameStart}</h4>
                </div>
            </article>
            
            `
        )}
        
        `;
    }
}
