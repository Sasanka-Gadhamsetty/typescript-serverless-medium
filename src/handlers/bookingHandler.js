const { publishBookingNotification } = require("../services/bookingNotificationService");
const { publishBookingEvent } = require("../services/eventBridgeService");

exports.createBooking = async (event) => {
    debugger;
    console.log(event);
    const body = JSON.parse(event.body);

    const booking = {
        bookingId: Date.now().toString(),
        customerName: body.customerName,
        source: body.source,
        destination: body.destination
    };

    console.log("Booking Created", booking);

    await publishBookingNotification(booking);

    // await publishBookingEvent(booking);

    return {
        statusCode: 201,
        body: JSON.stringify({
            message: "Booking Created",
            booking
        })
    };

};