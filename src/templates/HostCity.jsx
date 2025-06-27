import React from 'react'
import { PageTitle, AnimatedCard  } from '../importer'
import { motion } from 'framer-motion'


function HostCity() {
  return (
    <div>
      <PageTitle pageText={`Know More About`} pageNameColored={`Visakhapatnam`} pageNameUncolored={`(Vizag)`} />
      <div className="max-w-6xl mx-auto px-4 py-1 overflow-hidden">
        <h1 className="bg-blue-500 p-3 rounded-2xl text-xl md:text-2xl font-bold text-center mb-8 text-white">
          Visakhapatnam – The City of Destiny also known as The Jewel of the East Coast!
        </h1>

        {/* Hero Image */}
        <motion.img
          src="/assets/vizag1.jpg"
          alt="Vizag Sea View"
          className="rounded-2xl mb-6 w-full object-cover h-80"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
        <div className="mb-12 ">
          <p>Visakhapatnam, fondly called Vizag, is Andhra Pradesh’s largest and most dynamic city, renowned for its coastal charm, cultural richness, and fast-paced industrial growth. Nicknamed the City of Destiny, Vizag is rapidly emerging as one of Asia’s most promising urban centers. Nestled along the Bay of Bengal and named after Vaisakha (or Kartikeya, the Lord of Valour), the city is framed by rolling hills, serene beaches, and the iconic Dolphin’s Nose rock formation—offering a perfect blend of heritage, spirituality, and natural beauty.</p>
        </div>
        <div className="space-y-20">
          <AnimatedCard
            title="Cultural & Spiritual Highlights"
            image="/assets/vizag3.jpg"
            content={
              <>
                <p><strong>Ross Hill:</strong> A unique spiritual landmark representing Hindu, Muslim, and Christian faiths.</p>
                <p><strong>Kailasagiri:</strong> A scenic hill park with panoramic sea views and giant illuminated Shiva-Parvati statues.</p>
                <p><strong>Padmanabham & Appikonda:</strong> Ancient temples and hilltop shrines.</p>
                <p><strong>Ramakrishna Mission:</strong> A peaceful retreat blending social and cultural services.</p>
              </>
            }
          />

          <AnimatedCard
            title="Beaches & Leisure"
            image="/assets/vizag4.jpg"
            reverse
            content={
              <>
                <p><strong>Ramakrishna, Yarada, Rushikonda, Bheemili Beaches:</strong> Perfect for swimming, water sports, and sunsets.</p>
                <p><strong>Tenneti & Central Parks:</strong> Family parks with musical fountains and scenic views.</p>
                <p><strong>Lumbini & VUDA Park:</strong> Recreational areas with boating, skating, and musical events.</p>
              </>
            }
          />

          <AnimatedCard
            title="Heritage & History"
            image="/assets/vizag5.jpg"
            content={
              <>
                <p><strong>Submarine Museum (INS Kursura):</strong> Asia’s first submarine museum.</p>
                <p><strong>Victory at Sea War Memorial:</strong> A tribute to India’s 1971 naval triumph.</p>
                <p><strong>Kurupam Tomb & Dutch-Era Bheemunipatnam:</strong> Echoes of colonial heritage.</p>
              </>
            }
          />

          <AnimatedCard
            title="Eco & Adventure Tourism"
            image="/assets/vizag6.jpg"
            reverse
            content={
              <>
                <p><strong>Mudasarlova:</strong> A peaceful lake park.</p>
                <p><strong>Totlakonda & Bavikonda:</strong> Buddhist sites with stupas and relics.</p>
                <p><strong>Erramatti Dibbalu:</strong> Famous red sand dunes and film location.</p>
              </>
            }
          />

          <AnimatedCard
            title="Industry & Infrastructure"
            image="/assets/vizag7.jpg"
            content={
              <>
                <p><strong>INS Kursura:</strong> A major tourism magnet.</p>
                <p><strong>Hindustan Shipyard, HPCL, Coromandel:</strong> Industrial backbones of Vizag.</p>
                <p><strong>Andhra University:</strong> A leading academic institution in South India.</p>
              </>
            }
          />

          <AnimatedCard
            title="Weather in December"
            image="/assets/vizag8.jpg"
            reverse
            content={
              <>
                <p><strong>A Perfect Winter Getaway!</strong></p>
                <p>December brings cool, pleasant weather to Visakhapatnam, making it an ideal time for tourists. With temperatures ranging from 19.6°C to 26.6°C, the climate is perfect for sightseeing, beach visits, and outdoor activities. The low humidity and refreshing sea breeze enhance the city's natural charm.</p>
                <p>This festive season, explore Vizag’s scenic beauty, vibrant culture, and serene coastline—December is truly the best time to experience the City of Destiny at its finest.</p>
              </>
            }
          />
        </div>
        
        <div className="mb-16 flex flex-col gap-4">
          <p>
            A picturesque destination, Vizag is adorned with beautiful parks, beaches, and temples that showcase its heritage and natural beauty. Visitors can explore scenic spots like R.K. Beach, Kailasagiri, and the lush Araku Valley. The Simhachalam Temple, a renowned pilgrimage site, stands as a testament to Vizag’s spiritual and architectural heritage. For nature lovers, Dolphin’s Nose and Borra Caves offer awe-inspiring views and natural wonders.
          </p>
          <p>
          In addition to its scenic charm, Vizag is quickly modernizing as part of India’s Smart Cities Mission, with investments in infrastructure, digital initiatives, and public amenities. The city offers a high standard of living and numerous recreational options, from bustling markets and upscale shopping malls to waterfront promenades.
          </p>
          <p>
          Whether you are drawn by Vizag’s natural beauty, industrial prowess, or rich history, the city promises an unforgettable experience. Hosting the <b>44th NEOCON 2025 Conference in Vizag</b> highlights the city’s growth, global significance, and dedication to building a thriving, inclusive future."
          </p>
        </div>
      </div>
    </div>
  )
}

export default HostCity