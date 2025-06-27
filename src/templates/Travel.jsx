import { AnimatedCard, PageTitle } from "../importer"

function Travel() {
  return(
    <>
      <PageTitle pageText={`Tour and Travel`} pageNameColored={`Places to`} pageNameUncolored={`Visit`} />
      <div className="max-w-6xl mx-auto px-4 py-1 overflow-hidden">
      <AnimatedCard
        title={'INS Kurusura Submarine Museum'}
        content={ 
          <p>
            Anchored on the sands of RK Beach in Visakhapatnam, the <b>INS Kurusura Submarine Museum</b> offers a rare glimpse into life beneath the waves. This decommissioned submarine, turned museum, was India's fifth submarine and played a vital role in naval defense for over three decades. Visitors can walk through the narrow passages and see original equipment, control rooms, and living quarters used by naval officers. A must-visit for history buffs, students, and anyone curious about naval warfare, it delivers a unique and immersive maritime experience.
          </p>
        }
        reverse
        image={'/assets/3.png'}
      />

      <AnimatedCard
        title={'Varaha Lakshmi Narasimha Temple (Simhachalam)'}
        content={ 
          <p>
            Perched atop lush Simhachalam Hill, about <b>20 km</b> from Visakhapatnam, the <b>Varaha Lakshmi Narasimha Temple</b> is a revered 11th-century shrine dedicated to Lord Narasimha, an incarnation of Vishnu. Blending Chola and Kalinga architecture with intricate carvings, the temple exudes a sacred atmosphere. The idol, covered in sandalwood paste year-round to resemble a Shiva lingam, is revealed only once annually. Rich in spiritual significance and architectural beauty, the temple offers a deeply peaceful and divine experience.
          </p>
        }
        
        image={'/assets/1.png'}
      />

      <AnimatedCard
        title={'Rama Krishna Beach (RK Beach)'}
        content={ 
          <p>
            Located in the heart of Visakhapatnam, <b>Rama Krishna Beach</b>, popularly known as RK Beach, is a lively coastal stretch that blends natural beauty with urban charm. Perfect for morning walks, family outings, and evening leisure, the beach is dotted with food stalls, sculptures, and open spaces. Nearby attractions like the INS Kurusura Submarine Museum, TU 142 Aircraft Museum, and the War Memorial make it a cultural hotspot. With golden sands, gentle waves, and a vibrant promenade, RK Beach is the soul of Vizag’s seaside experience.
          </p>
        }
        reverse
        image={'/assets/2.png'}
      />


      <AnimatedCard
        title={'Dolphin’s Nose'}
        content={ 
          <p>
            Rising 358 meters above sea level, <b>Dolphin’s Nose</b> is a majestic rocky headland located about <b>10 km</b> from Visakhapatnam city. Shaped like a dolphin’s snout, this natural wonder offers sweeping panoramic views of the coastline, the bustling Vizag Port, and the serene Bay of Bengal. Home to an old British-era lighthouse, the viewpoint is a favorite for photographers, nature lovers, and history enthusiasts. With its unique geological formation and strategic location, Dolphin’s Nose is both a scenic marvel and a symbol of Vizag’s maritime heritage.
          </p>
        }
        
        image={'/assets/13.png'}
      />

      <AnimatedCard
        title={'TU 142 Aircraft Museum'}
        content={ 
          <p>
           Located right beside RK Beach, the <b>TU 142 Aircraft Museum</b> showcases the legendary Indian Navy reconnaissance aircraft that served the nation for 29 years. This Soviet-era aircraft, known for its size, speed, and surveillance capability, is now open to the public with interactive exhibits, audio-visual galleries, and aviation displays. Visitors can walk around and inside the aircraft to experience its powerful presence up close. A perfect spot for aviation enthusiasts, students, and curious minds, the museum offers a rare glimpse into India’s airborne naval legacy.
           </p>
        }
        reverse
        image={'/assets/14.png'}
      />

      <AnimatedCard
        title={'Tenneti Park'}
        content={ 
          <p>
            Located about <b>6 km from the center of Visakhapatnam, Tenneti Park</b> is one of the oldest and most scenic sea-facing parks in the city. Perched on a cliff along the coast near Kailasagiri, the park offers spectacular views of the Bay of Bengal and passing ships. With lush green lawns, walking paths, children’s play areas, and a grounded aircraft display, it’s a peaceful retreat for families, couples, and nature lovers. The stunning sunrise and sunset views make Tenneti Park a favorite photo spot and a must-visit for those seeking tranquility by the sea.
          </p>
        }
        
        image={'/assets/12.png'}
      />

      <AnimatedCard
        title={'Kailasagiri Park'}
        content={ 
          <p>
            Set atop a scenic hill overlooking the Bay of Bengal, <b>Kailasagiri Park</b> is one of Visakhapatnam’s most iconic green spaces. Spread across lush landscapes, the park features beautifully manicured gardens, panoramic viewpoints, and the famous <b>40-ft statues of Lord Shiva and Parvati</b>. Visitors can enjoy a <b>ropeway ride, toy train,</b>, and <b>viewing decks</b> that offer breathtaking city and ocean vistas. Ideal for family outings, leisurely walks, and sunset photography, Kailasagiri Park blends nature, spirituality, and recreation into a peaceful hilltop retreat.
          </p>
        }
        reverse
        image={'/assets/10.png'}
      />

      <AnimatedCard
        title={'Bavikonda Buddhist Complex'}
        content={ 
          <p>
            Located about <b>16 km from Visakhapatnam</b>, the <b>Bavikonda Buddhist Complex</b> is an ancient hilltop monastery site dating back to the 3rd century BCE. The name "Bavikonda" means "Hill of Wells," referring to the many rock-cut cisterns found here that once stored rainwater for monks. The complex features stupas, viharas, chaityas, and relic chambers that reflect the prominence of early Hinayana Buddhism in the region. Surrounded by serene landscapes and ocean views, Bavikonda offers a peaceful, spiritually rich experience for history lovers, pilgrims, and those seeking quiet reflection.
          </p>
        }
        
        image={'/assets/9.png'}
      />

      <AnimatedCard
        title={'Kali Temple'}
        content={ 
          <p>
           Situated approximately <b>6 km from Visakhapatnam city center</b>, the <b>Kali Temple</b> is a revered Hindu shrine dedicated to Goddess Kali, symbolizing strength and protection. Nestled amidst tranquil surroundings, the temple attracts devotees throughout the year, especially during festive occasions like Navratri and Kali Puja. Known for its vibrant rituals and spiritual atmosphere, the Kali Temple offers visitors a chance to experience local religious traditions and seek blessings in a peaceful setting.
          </p>
        }
        reverse
        image={'/assets/8.png'}
      />

      <AnimatedCard
        title={'Indira Gandhi Zoological Park'}
        content={ 
          <p>
            Located about <b>7 km from Visakhapatnam city center</b>, the <b>Indira Gandhi Zoological Park</b> is one of the largest and most well-maintained zoos in Andhra Pradesh. Spanning over 625 acres of lush forestland, the park is home to a diverse collection of animals including tigers, lions, elephants, reptiles, and various bird species. With naturalistic enclosures, walking trails, and a serene lake, the zoo offers an educational and enjoyable experience for families, nature lovers, and wildlife enthusiasts. It’s a perfect spot for a day out to connect with nature and observe wildlife up close.
          </p>
        }
        
        image={'/assets/15.png'}
      />

      <AnimatedCard
        title={'Borra Caves'}
        content={ 
          <p>
            Hidden deep in the Ananthagiri Hills, around <b>90 km from Visakhapatnam</b>, <b>Borra Caves</b> are a stunning natural wonder formed from karstic limestone. These million-year-old caves are famous for their breathtaking stalactite and stalagmite formations, mystical rock shapes, and naturally formed Shiva lingam. Illuminated pathways reveal the dramatic beauty inside. Surrounded by lush forests and hilly terrain, Borra is a must-visit for nature enthusiasts, photographers, and adventure seekers alike.
          </p>
        }
        reverse
        image={'/assets/6.png'}
      />

      <AnimatedCard
        title={'Araku Valley'}
        content={ 
          <p>
            Nestled in the Eastern Ghats, about <b>120 km from Visakhapatnam, Araku Valley</b> is a serene hill station known for its scenic beauty, tribal heritage, and aromatic coffee. The Vistadome train from Vizag, passing through 58 tunnels and 84 bridges, offers a breathtaking journey. Popular for its tribal museum, caves, trekking trails, and natural charm, Araku is perfect for a peaceful and adventurous getaway.
          </p>
        }
        
        image={'/assets/7.png'}
      />

      <AnimatedCard
        title={'Bojjana Konda'}
        content={ 
          <p>
            Located approximately <b>40 km from Visakhapatnam in Sankaram village, Bojjana Konda</b> is a remarkable archaeological site that dates back to the 3rd century BCE. It features a series of ancient rock-cut Buddhist stupas, chaityas, and monastic cells carved into a hill. Once a flourishing center for Hinayana, Mahayana, and Vajrayana Buddhism, the site exudes spiritual significance and historical depth. Surrounded by greenery and rural landscapes, Bojjana Konda offers a peaceful escape and a rare glimpse into early Buddhist culture in South India — ideal for history buffs and heritage explorers.
          </p>
        }
        reverse
        image={'/assets/16.png'}
      />

      <AnimatedCard
        title={'Katiki Falls'}
        content={ 
          <p>
            Located around <b>90 km from Visakhapatnam</b> and just a short distance from Borra Caves, <b>Katiki Falls</b> is a captivating natural waterfall nestled deep within the lush forests of the Eastern Ghats. Cascading from a height of about 100 feet, the falls are fed by the Gosthani River and surrounded by rich greenery and rugged terrain. Reaching the falls involves a short trek through scenic trails, making it a favorite for nature lovers, trekkers, and adventure seekers. The sound of gushing water and the untouched beauty of the landscape make Katiki Falls a refreshing retreat into nature’s lap.
          </p>
        }
        
        image={'/assets/17.png'}
      />

      <AnimatedCard
        title={'Annavaram'}
        content={ 
          <p>
            Located about <b>110 km from Vizag</b> on the Chennai highway, the <b>Sri Satyanarayana Swamy Temple at Annavaram</b> is one of India’s most visited temples. The name "Annavaram" means <b>“place where wanted boons are granted”</b>. The temple is renowned for the Sri Satyanarayana Vratam, believed to bring prosperity and fulfill desires. As per legend, Lord Vishnu told Narada that performing the Vratam frees one from miseries. Thousands perform it here regularly, and the temple is also a popular marriage venue.
          </p>
        }
        reverse
        image={'/assets/11.png'}
      />
      </div>
    </>
  )
}

export default Travel