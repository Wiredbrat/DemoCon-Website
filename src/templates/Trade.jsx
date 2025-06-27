import React from 'react'
import { Message, PageTitle, PersonCard } from '../importer'

function Trade() {
  const trade = `Dear Esteemed Trade Partner,

Greetings and a warm welcome to NEOCON 2025 in Vizag!

On behalf of the Organizing Committee, it is our privilege to extend a cordial invitation to your esteemed organization for the 44th Annual Convention of the National Neonatology Forum – NEOCON 2025, scheduled to be held from December 11th to 14th, 2025 , at the Novotel Visakhapatnam Varun Beach, Visakhapatnam, Andhra Pradesh.

This year, the conference will revolve around the theme: “Neonatal Care – Evidence to Excellence”

The National Neonatology Forum (NNF) has emerged as the largest scientific body in India dedicated to the advancement of newborn care. NEOCON is the flagship annual event of the NNF and holds immense academic and networking significance for neonatologists, pediatricians, and allied professionals across the country.

We are honored to host NEOCON 2025 in the serene and vibrant city of Visakhapatnam and are committed to making it a landmark event in neonatal care.

As a valued trade partner, your company has played a pivotal role in supporting the academic initiatives of the NNF, particularly through your consistent involvement in previous NEOCON events. We sincerely appreciate your continued support and invite you to actively participate as a major sponsor and exhibitor at NEOCON 2025.

The concurrent Trade Exhibition offers a dynamic platform for showcasing your innovations, engaging with key opinion leaders, and connecting with a targeted audience of healthcare professionals. A wide range of sponsorship opportunities have been curated to enhance your brand visibility and maximize your engagement at the conference. Detailed sponsorship options and benefits will be shared separately for your review.

The Organizing Committee is working tirelessly to ensure an impactful and seamless experience for all our partners. Your presence will undoubtedly elevate the quality and success of NEOCON 2025.

For any query kindly feel free to write us at trade@neocon2025vizag.com with cc to neocon2025@gmail.com

We look forward to your enthusiastic participation and support.

Thanks with regards,`

  return (
    <>
      <PageTitle pageText={`Trade`} pageNameColored={`Trade`} />
      <div className="max-w-6xl mx-auto px-4 py-1 overflow-hidden -mt-16">
      <Message message={trade} colorTitle={'Message to'} nonColorTitle={'Trade Partners'} />
      </div>
      <PersonCard/>
    </>
  )
}

export default Trade