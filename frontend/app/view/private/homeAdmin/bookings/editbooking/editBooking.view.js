import { controllerPrivate } from "./editBooking.controller";

export const EditBookingView = () =>{
    const viewPrivate = 
    `<form action="form" id="formUpdateBooking">
        <h2 class="form-title">Update Booking</h2>
        <div class="form-nameStart">
            <label class="nameStart-label form-label" for="nameStart">Name Start:</label>
            <input class="nameStart-input form-control" id="nameStart" type="text" name="nameStart">
        </div>
        <div class="form-nameEnd">
            <label class="nameEnd-label form-label" for="nameEnd">Name End:</label>
            <input class="nameEnd-input form-control" id="nameEnd" type="text" name="nameEnd">
        </div>
        <div class="form-startDate">
            <label class="startDate-label form-label" for="startDate">Start Date:</label>
            <input class="startDate-input form-control" id="startDate" type="datetime-local" name="startDate">
        </div>
        <div class="form-endDate">
            <label class="endDate-label form-label" for="endDate">End Date:</label>
            <input class="endDate-input form-control" id="endDate" type="datetime-local">
        </div>
        <div class="form-quantityPeople">
            <label class="quantityPeople-label form-label" for="quantityPeople">Quantity People:</label>
            <input class="quantityPeople-input form-control" id="quantityPeople" type="number">
        </div>
        <input class="form-button btn btn-primary mt-2" type="submit" value="Update">
    </form>`;

    return{
        viewPrivate,
        controllerPrivate
    }
}