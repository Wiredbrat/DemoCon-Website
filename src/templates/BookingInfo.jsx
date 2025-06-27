import { Card } from "../importer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faClock,
  faEnvelope,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";

function BookingInfo() {
  const inclusions = [
    { text: "Well-appointed rooms" },
    {
      text: "Complimentary breakfast in a designated area in the hotel for in-house guests only",
    },
    { text: "Packaged drinking water (two bottles per room per day)" },
    {
      text: "Request for King/Twin bedded rooms will be accommodated as per availability at the time of check in",
    },
    {
      text: "Wired and wireless internet usage during the stay",
    },
  ];

  const terms = [
    { text: "Hotel Standard Check-in time: 14:00 Hrs", icon: "clock" },
    { text: "Hotel Standard Check-out time: 11:00 Hrs", icon: "clock" },
    {
      text: "Early check-in/Late check-out will only be given subject to availability and will be charged extra.",
    },
    {
      text: (
        <>
          <strong>For any hotel & travel related query please contact:</strong><br />
          Mr. Abhishek Chauhan / Mr. Atul Chauhan<br />
          <FontAwesomeIcon icon={faPhoneAlt} className="mr-1" />
          +91 87007 14177 / +91 70182 09442<br />
          <FontAwesomeIcon icon={faEnvelope} className="mr-1" />
          <a href="mailto:booking@chime.travel" className="underline text-blue-600">
            booking@chime.travel
          </a>
        </>
      ),
      icon: "email",
    },
  ];

  return (
    <div className="bg-gray-100 py-10 px-4 space-y-8 md:grid md:grid-cols-2 ">
      <Card title="Hotel Booking Inclusions" items={inclusions} />
      <Card title="Terms and Conditions" items={terms} iconType="clock" />
    </div>
  );
}

export default BookingInfo