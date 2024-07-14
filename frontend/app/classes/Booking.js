import { decryptData } from "../helpers/encrypt";
import styles from "../view/private/homeUser/homeUser.styles.css"

export class Booking{
    constructor(idBooking, nameStart,nameEnd,startDate,endDate,quantityPeople,idUser){
        this.idBooking = idBooking;
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
        const idBooking = this.bookings.length + 1;
        const booking = new Booking(idBooking,nameStart,nameEnd,startDate,endDate,quantityPeople,decryptData(this.idUserGet))
        this.bookings.push(booking);
        this.saveBooking();
    }
    updateBooking(idBooking, nameStart, nameEnd, startDate, endDate, quantityPeople){
        this.bookings.find(booking=>{
            if(booking.idBooking === parseInt(idBooking)){
                booking.idBooking = parseInt(idBooking);
                booking.nameStart = nameStart.value;
                booking.nameEnd = nameEnd.value;
                booking.startDate = startDate.value;
                booking.endDate = endDate.value;
                booking.quantityPeople = quantityPeople.value;
            }
        })
        this.saveBooking(); // 
        console.log({message: "Updated Booking correctly"});    
    }
    deleteBooking(idBooking){
        try{
            this.bookings = this.bookings.filter(booking => booking.idBooking !== parseInt(idBooking));
            this.saveBooking();
            console.log({message: "Deleted booking correctly"});
        }catch(error){
            console.log(error);
        }
        
    }

    saveBooking(){
        localStorage.setItem("bookings", JSON.stringify(this.bookings));
    }

    filterBookingsForUser(){
        return this.bookings.filter(booking=>booking.idUser === decryptData(this.idUserGet));
    }

    renderBookings(contentBookings, filteredBookings, id_rol = "1"){
        // filteredBookings.forEach(booking=>idUserBookings = booking.id_user)
        contentBookings.innerHTML = 
        `
            ${filteredBookings.map(booking=>
                `
                    <article class="${styles["bookings-article"]} card">
                        <div class="${styles["article-header"]} card-header">Image...</div>
                        <div class="${styles["article-body"]} card-body">
                            ${id_rol === "1"
                            ?``
                            : `<div class=""${styles["body-content"]}">
                                    <h6 class="content-title">Id user:</h6>
                                    <p>${booking.idUser}</p>
                                </div>`}
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
                            ${id_rol === "1"
                            ?`<button class="btn btn-success w-100">
                                <i class="bi bi-search"></i> 
                                Show more
                            </button>`
                            : `<button class="btn btn-primary" data-name="update" data-idBooking="${booking.idBooking}"> 
                                <i class="bi bi-pencil"></i> 
                                Update
                            </button> 
                            <button class="btn btn-danger" data-name="delete" data-idBooking="${booking.idBooking}">
                                <i class="bi bi-trash3"></i> 
                                Delete
                            </button>`}       
                        </div>
                    </article>
                `
            ).join("")}
        
        `;   
    }
    renderFormBooking(idBooking, nameStart,nameEnd,startDate, endDate, quantityPeople){
        const foundBooking = this.bookings.find(booking=>booking.idBooking === parseInt(idBooking));
        nameStart.value = foundBooking.nameStart;
        nameEnd.value = foundBooking.nameEnd;
        startDate.value = foundBooking.startDate;
        endDate.value = foundBooking.endDate;
        quantityPeople.value = foundBooking.quantityPeople;
    }
}
