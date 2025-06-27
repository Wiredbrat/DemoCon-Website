import React from 'react'
import { PageTitle } from '../importer'
import { motion } from 'framer-motion'

function Venue() {
  return (
    <div>
      <PageTitle pageText={`Know More About`} pageNameColored={`Venue`} />
      <div className="max-w-6xl mx-auto px-4 py-1 overflow-hidden">
        <h1 className="bg-blue-500 p-3 rounded-2xl text-xl md:text-2xl font-bold text-center mb-6 text-[#ffffffe1]">
          Novotel Visakhapatnam Varun Beach!
        </h1>
        <p className='mb-4'>Welcome to <b>Novotel Visakhapatnam Varun Beach,</b> your 5-star beachfront escape overlooking the stunning Bay of Bengal. Experience luxury, comfort, and hospitality in a contemporary setting designed for both business and leisure.</p>

        {/* Hero Image */}
        <motion.img
          src="src/assets/hotels/novotel1.jpg"
          alt="Vizag Sea View"
          className="rounded-2xl mb-6 w-full object-cover h-80"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
        <div className="mb-6">
          
          <p>Wake up to panoramic ocean views from every room, take a refreshing dip in the <b>infinity pool</b>, and enjoy a lavish Indian and Western breakfast buffet. With close proximity to the <b>city railway station, Rushikonda Beach, Vizag Port, major hospitals,</b> and just steps away from the <b>Submarine Museum,</b> the hotel is perfectly positioned in the heart of the city’s business and tourist hubs.</p>
          <br />
          <p>Part of a larger lifestyle complex featuring an INOX multiplex, mall, and nightclub, Novotel offers unmatched convenience and connectivity.</p>
        </div>

        <div>
          <p className='font-bold text-2xl py-2'>
            Conferences / Events & Celebrations by the Sea:
          </p>
          <p>
            With 12 versatile sea-facing venues, the hotel can host everything from corporate conventions and board meetings to grand weddings and intimate gatherings—accommodating up to 1,550 guests.
          </p>
        </div>
        <div className='grid md:grid-cols-2 py-5 lg:p-5 gap-3'>
          <div>

            <motion.img
              src="src/assets/hotels/novotel-pool.png"
              alt="Vizag Sea View"
              className="rounded-2xl mb-3 w-full object-cover md:h-80 hover:scale-[1.01] duration-300"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />
            <p className=' bg-blue-100 mb-2 text-center font-semibold text-gray-800 text-xl rounded-2xl py-1 hover:text-red-500 duration-200'>Novotel Pool Deck</p>
            <p className='text-sm'> Breathtaking Bay views, ideal for cocktail parties and intimate receptions under the stars.</p>
          </div>

          <div>
            <motion.img
              src="src/assets/hotels/novotel-lawn.png"
              alt="Vizag Sea View"
              className="rounded-2xl mb-3 w-full object-cover md:h-80 hover:scale-[1.01] duration-300"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />
            <p className=' bg-blue-100 mb-2 text-center font-semibold text-gray-800 text-xl rounded-2xl py-1 hover:text-red-500 duration-200'>Novotel Terrace Lawns</p>
            <p className='text-sm'>An enchanting venue beside the infinity pool, perfect for stylish evening gatherings.</p>
          </div>
        </div>
        <div>
          <motion.img
              src="src/assets/hotels/novotel-hall.jpg"
              alt="Vizag Sea View"
              className="rounded-2xl my-3 w-full object-cover md:h-80 "
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />
          <p className='mb-12'>
            <b>V-Convention</b>, one of the largest Convention Centre in the country facilitates "Auto Expos" and "Vehicle Launches". The 11,200 sft magnificently designed column-free hall besides giving you the luxury of space also has highly sophisticated and modern equipment to back it. V-Convention can be divided into 3 halls to suit your needs. Our 2 unique outdoor venues - one by the scenic Pool Deck and the other on the Terrace, takes parties to new heights.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Venue