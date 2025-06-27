import { motion } from "framer-motion";
import {BookingInfo, PageTitle, PricingCard} from "../importer"

const hotels = [
  {
    id: 1,
    name: "Novotel Visakhapatnam Varun Beach",
    stars: 5,
    images: ["src/assets/hotels/novotel1.jpg", "src/assets/hotels/novotel2.jpg"],
    distance: {
      venue: "0 Kms",
      airport: "13.6 Kms",
      railway: "4.7 Kms",
    },
    description:
      "A luxurious 5-star hotel along Beach Road, offering sea-facing rooms and modern amenities for business and leisure.",
  },
  {
    id: 2,
    name: "Welcomhotel By ITC Hotels, Devee Grand Bay, Visakhapatnam",
    stars: 4,
    images: ["src/assets/hotels/ITC1.jpg", "src/assets/hotels/ITC02.jpg"],
    distance: {
      venue: "230 M",
      airport: "13.4 Kms",
      railway: "4.1 Kms",
    },
    description:
      "Premium 5-star hotel offering elegant comfort and stunning Bay views. Central location ideal for tourism and business.",
  },
  {
    id: 3,
    name: "Hotel The Park, Visakhapatnam",
    stars: 4,
    images: ["src/assets/hotels/Hotel_The_Park01.jpg", "src/assets/hotels/Hotel_The_Park02.jpg"],
    distance: {
      venue: "430 M",
      airport: "15.2 Kms",
      railway: "6.2 Kms",
    },
    description:
      "Boutique beachfront hotel with lush tropical gardens, private beach access, and tranquil pool area.",
  },
  {
    id: 4,
    name: "Hotel Four Points by Sheraton, Visakhapatnam",
    stars: 4,
    images: ["src/assets/hotels/Sheraton01.jpg", "src/assets/hotels/Sheraton02.jpg"],
    distance: {
      venue: "1.2 Kms",
      airport: "12.7 Kms",
      railway: "2.8 Kms",
    },
    description:
      "Modern 4-star hotel in central Vizag, close to business hubs and RK Beach. Ideal for all travelers.",
  },
  {
    id: 5,
    name: "Dolphin Hotel, Visakhapatnam",
    stars: 4,
    images: ["src/assets/hotels/Dolphin03.jpg", "src/assets/hotels/Dolphin02.jpg"],
    distance: {
      venue: "2.6 Kms",
      airport: "15.5 Kms",
      railway: "2.4 Kms",
    },
    description:
      "4-star hotel in Dabagardens blending modern luxury with traditional hospitality. Great access to top attractions.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function HotelListPage() {
  return (
    <>
      <PageTitle pageText={`Places to Stay`} pageNameColored={`Accommodation`}  />
      <div className="max-w-6xl mx-auto pt-1 p-6 space-y-12">
        <motion.h1
          className="text-2xl md:text-4xl font-bold text-white text-center bg-blue-500 p-3 rounded-2xl"
          {...fadeUp}
        >
          Partner Hotels – <span className="text-gray-900">NEOCON</span> 2025
        </motion.h1>

        {hotels.map((hotel, index) => (
          <motion.div
            key={hotel.id}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-4 md:flex-row"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex gap-2 w-full md:w-1/2">
              {hotel.images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={hotel.name}
                  className="rounded-lg object-cover h-40 w-1/2 shadow-sm"
                />
              ))}
            </div>
            <div className="w-full md:w-1/2 space-y-3">
              <h2 className="text-xl font-semibold">{hotel.name}</h2>
              <p className="text-sm text-gray-600">{hotel.description}</p>
              <div className="flex gap-4 text-sm text-gray-700">
                <p className="flex items-center gap-1"> <i className="fa-solid fa-hotel text-blue-500"></i> {hotel.distance.venue}</p>
                <p className="flex items-center gap-1"> <i className="fa-solid fa-plane-departure text-blue-500"></i> {hotel.distance.airport}</p>
                <p className="flex items-center gap-1"> <i className="fa-solid fa-train-subway text-blue-500"></i> {hotel.distance.railway}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* <BookingInfo/> */}
      
      <div className="mb-6 bg-blue-50">
        <div className="overflow-hidden w-full gap-5 grid md:grid-cols-2 mx-auto px-2 py-6 lg:p-6 h-fit max-w-6xl">
        <PricingCard title="Hotel Booking Inclusion" price=" " description=" " 
        features={[
          'Well-appointed rooms',
           'Complimentary breakfast in a designated area in the hotel for in-house guests only',
           'Packaged drinking water (two bottles per room per day)',
           'Request for King/Twin bedded rooms will be accommodated as per availability at the time of check in',
           'Wired and wireless internet usage during the stay'
          ]}
        />

        <PricingCard title="Terms and Conditions" price=" " description=" " 
        features={[
           'Hotel Standard Check-in time: 14:00 Hrs',
           'Hotel Standard Check-out time: 11:00 Hrs',
           'Early check-in/Late check-out will only be given subject to availability and will be charged extra.',
           'For any hotel & travel related query please contact: Mr. Abhishek Chauhan/ Mr Atul Chauhan +91 87007 14177/ +91 70182 09442 booking@chime.travel'
          ]}
        />
      </div>
      </div>
      </>
  );
}