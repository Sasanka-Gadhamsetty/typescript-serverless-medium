const { SNSClient, PublishCommand } = require("@aws-sdk/client-sns");

const client = new SNSClient({});

exports.publishBookingNotification = async (booking) => {
  const params = {
    TopicArn: process.env.BOOKING_TOPIC_ARN,

    Message: JSON.stringify(booking),

    Subject: "Booking Created",
  };

  await client.send(new PublishCommand(params));

  console.log("SNS Published");
};
