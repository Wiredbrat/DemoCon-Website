import React from 'react'
import Hero from '../components/Hero'
import { MarqueeCards, Timer, VideoCard, PersonCard, Message, EventCard } from '../importer'

function Home() {
  const welcomeMessage = `Dear Esteemed Friends and Colleagues,

It gives us immense pleasure to extend a warm and heartfelt invitation to NEOCON 2025 Vizag – the 44th Annual Conference of the National Neonatology Forum. The event will be held in the picturesque coastal city of Visakhapatnam, Andhra Pradesh, from 11th to 14th December 2025.

The theme for this year’s conference is: “Neonatal Care – Evidence to Excellence”

This prestigious gathering promises an enriching academic experience, bringing together Neonatologists, Pediatricians, Healthcare Professionals, and Researchers from across the country. With a comprehensive blend of foundational knowledge and the latest advancements in neonatal care, NEOCON 2025 will offer a dynamic platform for learning, collaboration, and inspiration.

Nestled in the heart of Andhra Pradesh, Visakhapatnam—affectionately known as the City of Destiny—is a harmonious blend of natural beauty, cultural heritage, and modern development. Bordered by the serene Bay of Bengal on one side and the majestic eastern Ghats on the other, Vizag boasts picturesque beaches such as Ramakrishna Beach, Rushikonda Beach, and the tranquil Yarada Beach — perfect for a peaceful evening stroll.

The city is also home to scenic spots like Kailasagiri Hill Park, the iconic INS Kursura Submarine Museum, and the lush greenery of the Indira Gandhi Zoological Park. For those seeking a deeper connection with nature and spirituality, nearby destinations such as Araku Valley, Borra Caves, Annavaram, and the ancient Simhachalam Temple offer unforgettable excursions.

Whether you're an adventurer, a seeker of serenity, or simply looking to unwind, Vizag and its surroundings provide the perfect backdrop for both academic excellence and rejuvenation.

We look forward to welcoming you, along with your family and colleagues, to be a part of this memorable event. Join us in December 2025 for a truly captivating, insightful, and inspiring experience by the coast.

Save the date – and see you in Vizag for NEOCON 2025!

Warm regards,`;

  return (
    <>
      <Hero/>
      <div className='relative mt-[80px] z-[2000] bg-transparent'>
        <Timer/>
      </div>
        <Message message={welcomeMessage} colorTitle={`Welcome`} nonColorTitle={`Message`}/>
      <div className='max-w-7xl mx-auto overflow-hidden'>
        <MarqueeCards/>
      </div>
        <PersonCard 
          speakers={[
            { name: "Dr. V.V.G. Mohan", role: "Organizing Chairman", image: "src/assets/organisers/8.jpeg" },
            { name: "Dr. K. Seshagiri", role: "Organizing Secretary", image: "src/assets/organisers/9.jpg" },
            { name: "Dr. S. Ramprasad", role: "Organizing Secretary", image: "src/assets/organisers/10.jpeg" },
            { name: "Dr. J. Muni Sekhar", role: "Organizing Treasurer", image: "src/assets/organisers/11.jpeg" },
            { name: "Dr. P. Sateesh Kumar", role: "Joint. Organizing Secretary", image: "src/assets/organisers/7.jpeg" },
          ]}
          colorTitle={`Organisers`}
          unColorTitle={`Our`}
          subtitle={`Angels`}
        />
        <VideoCard/>
        <PersonCard
          speakers={[
            { name: "Prof. Satyan Lakshminrusimha", role: "USA", image: "src/assets/organisers/1.jpg" },
            { name: "Prof. Corrado Moretti", role: "Italy - President(UENPS)", image: "src/assets/organisers/2.jpg" },
            { name: "Prof. Joseph Neu", role: "USA", image: "src/assets/organisers/3.jpg" },
            { name: "Prof. Peter Davis", role: "Australia", image: "src/assets/organisers/4.jpeg" },
            { name: "Prof. V. Samuel Rajadurai", role: "Singapore", image: "src/assets/organisers/5.jpeg" },
          ]}
          unColorTitle ={`International`} 
          colorTitle={`Faculties`}
          subtitle={`Speakers`}
        />
      <div className='max-w-7xl mx-auto overflow-hidden'>
        <EventCard/>
      </div>
    </>
  )
}

export default Home