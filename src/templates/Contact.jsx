import { motion } from 'framer-motion'
import React from 'react'
import { PageTitle } from '../importer'

function Contact() {
  return (
    <div className=''>
      <PageTitle pageNameColored={`Contact`} pageNameUncolored={'Us'} pageText={`For Any Related Queries`  }/>
      <section className="bg-white py-12 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">Contact Us</h2>
        <p className="text-center text-gray-500 mb-12">We're here to assist you with any questions or concerns related to NEOCON 2025.</p>

        {/* Conference Secretariat */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          <div>
            <img src="src/assets/novotel.webp" alt="Novotel" className="rounded-lg shadow-md w-full h-auto" />
          </div>
          <div className="bg-blue-900 text-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Conference Secretariat</h3>
            <ul className="space-y-3">
              <li>
                <p className="font-semibold">Dr. VVG Mohan</p>
                <p className="text-sm">Organising Chairman</p>
              </li>
              <li>
                <p className="font-semibold">Dr. K. Seshagiri</p>
                <p className="text-sm">Organising Secretary</p>
              </li>
              <li>
                <p className="font-semibold">Dr. S. Ramprasad</p>
                <p className="text-sm">Organising Secretary</p>
              </li>
              <li className="flex items-center gap-2 mt-2">
                <i className="fa fa-phone"></i> <span>+91-88867 09408, +91-98856 62593</span>
              </li>
              <li className="flex items-center gap-2">
                <i class="fa-solid fa-envelope"></i> <span>neocon2025@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <i class="fa-solid fa-location-dot pt-1"></i>
                <span>Lotus Hospitals for Women and Children, Siripuram, Visakhapatnam - 530003, A.P</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Conference Organiser */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-[#DF2A1B] text-white rounded-xl p-6 mb-3 shadow-lg"
        >
          <h3 className=" font-semibold mb-4 text-2xl">Professional Conference Organiser - CHIME</h3>
          <img src="src/assets/chime-logo.png" alt="" className='mb-4 h-12 md:h-20' />
          <p className="mb-2 font-semibold text-amber-300 text-xl">Mr. Chander Mohan Thakur – General Manager</p>
          <p className="mb-4">
            <i className='fa fa-envelope'></i> chander@chime.travel
          </p>
          <p className="font-semibold mb-2 text-lg">For conference related queries, please contact:</p>
          <ul className="grid md:grid-cols-2 gap-4 text-sm">
            <li>
              <p className="font-bold text-amber-300 ">Mr. Shubhang Dwivedi</p>
              <p className='font-bold text-lg'>Project Manager & Trade In-Charge</p>
              <p><i class="fa-solid fa-envelope"></i> trade@neocon2025vizag.com</p>
              <p><i className="fa fa-phone"></i> +91 8188026735</p>
            </li>
            <li>
              <p className="font-bold text-amber-300 ">Mr. Vinay Chauhan</p>
              <p className='font-bold text-lg'>Registration In-Charge</p>
              <p><i class="fa-solid fa-envelope"></i> registration@neocon2025vizag.com</p>
              <p><i className="fa fa-phone"></i> +91 7018973432</p>
            </li>
            <li>
              <p className="font-bold text-amber-300 ">Mr. Prashant Kashyap</p>
              <p className='font-bold text-lg'>Scientific In-Charge</p>
              <p><i className="fa fa-phone"></i> +91 9811594794</p>
            </li>
            <li>
              <p className="font-bold text-amber-300 ">Mr. Abhishek Chauhan</p>
              <p className='font-bold text-lg'>Accommodation & Transport In-Charge</p>
              <p><i className='fa fa-envelope'></i> booking@chime.travel</p>
              <p><i className="fa fa-phone"></i> +91 8700714177</p>
            </li>
          </ul>
          <p className="mt-6 text-sm">Working Hours: <span className="font-medium text-yellow-200">10 a.m. to 6 p.m. (Mon–Fri)</span> with a lunch interval of 30 minutes</p>
        </motion.div>
      </div>
      </section>
      
      <div className=' w-[90%] max-w-5xl mx-auto py-6 px-3'>
        <p className='text-2xl text-center mb-6 py-2 font-semi text-white rounded-xl bg-blue-500'>See on Map</p>
        <iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Lotus%20Hospitals%20for%20Woman%20and%20Children%20Siripuram%20Visakhapatnam%20%20530003+(Lotus%20Hospitals%20for%20Woman%20and%20Children)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.mapsdirections.info/calcular-la-población-en-un-mapa">Mapa de población</a></iframe>
      </div>
    </div>
  )
}

export default Contact