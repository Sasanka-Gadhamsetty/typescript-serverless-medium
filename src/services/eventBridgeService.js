const {
  EventBridgeClient,
  PutEventsCommand,
} = require("@aws-sdk/client-eventbridge");

const client = new EventBridgeClient({});

exports.publishBookingEvent = async (booking) => {
  await client.send(
    new PutEventsCommand({
      Entries: [
        {
          Source: "flight.booking",

          DetailType: "BookingCreated",

          Detail: JSON.stringify(booking),
        },
      ],
    }),
  );

  console.log("Event Published");
};
