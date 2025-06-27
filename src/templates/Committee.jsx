import React from 'react'
import { PageTitle, PersonCard } from '../importer'

function Committee() {
  return (
    <div>
      <PageTitle pageNameColored={`Contact`} pageNameUncolored={'Us'} pageText={`For Any Related Queries`} />
      <PersonCard 
        speakers={[
          { name: "Dr. V.V.G. Mohan", role: "Organizing Chairman", image: "../assets/organisers/8.jpeg" },
          { name: "Dr. K. Seshagiri", role: "Organizing Secretary", image: "../assets/organisers/9.jpg" },
          { name: "Dr. S. Ramprasad", role: "Organizing Secretary", image: "../assets/organisers/10.jpeg" },
          { name: "Dr. J. Muni Sekhar", role: "Organizing Treasurer", image: "../assets/organisers/11.jpeg" },
          { name: "Dr. P. Sateesh Kumar", role: "Joint. Organizing Secretary", image: "../assets/organisers/7.jpeg" },
          { name: "Dr. V.V.G. Mohan", role: "Organizing Chairman", image: "../assets/organisers/8.jpeg" },
          { name: "Dr. K. Seshagiri", role: "Organizing Secretary", image: "../assets/organisers/9.jpg" },
          { name: "Dr. S. Ramprasad", role: "Organizing Secretary", image: "../assets/organisers/10.jpeg" },
        ]}
        subtitle='Members'
        unColorTitle='NNF India - '
        colorTitle='Office Bearers'
      />

      <PersonCard 
        speakers={[
          { name: "Dr. V.V.G. Mohan", role: "Organizing Chairman", image: "../assets/organisers/8.jpeg" },
          { name: "Dr. K. Seshagiri", role: "Organizing Secretary", image: "../assets/organisers/9.jpg" },
          { name: "Dr. S. Ramprasad", role: "Organizing Secretary", image: "../assets/organisers/10.jpeg" },
          { name: "Dr. J. Muni Sekhar", role: "Organizing Treasurer", image: "../assets/organisers/11.jpeg" },
          { name: "Dr. P. Sateesh Kumar", role: "Joint. Organizing Secretary", image: "../assets/organisers/7.jpeg" },
          { name: "Dr. V.V.G. Mohan", role: "Organizing Chairman", image: "../assets/organisers/8.jpeg" },
          { name: "Dr. K. Seshagiri", role: "Organizing Secretary", image: "../assets/organisers/9.jpg" },
          { name: "Dr. S. Ramprasad", role: "Organizing Secretary", image: "../assets/organisers/10.jpeg" },
          { name: "Dr. V.V.G. Mohan", role: "Organizing Chairman", image: "../assets/organisers/8.jpeg" },
          { name: "Dr. K. Seshagiri", role: "Organizing Secretary", image: "../assets/organisers/9.jpg" },
          { name: "Dr. S. Ramprasad", role: "Organizing Secretary", image: "../assets/organisers/10.jpeg" },
          { name: "Dr. V.V.G. Mohan", role: "Organizing Chairman", image: "../assets/organisers/8.jpeg" },
          { name: "Dr. K. Seshagiri", role: "Organizing Secretary", image: "../assets/organisers/9.jpg" },
          { name: "Dr. S. Ramprasad", role: "Organizing Secretary", image: "../assets/organisers/10.jpeg" },
        ]}
        subtitle='Members'
        unColorTitle='NNF India - '
        colorTitle='Executive Board Members'
      />

      <PersonCard 
        speakers={[
          { name: "Dr. V.V.G. Mohan", role: "Organizing Chairman", image: "../assets/organisers/8.jpeg" },
          { name: "Dr. K. Seshagiri", role: "Organizing Secretary", image: "../assets/organisers/9.jpg" },
          { name: "Dr. S. Ramprasad", role: "Organizing Secretary", image: "../assets/organisers/10.jpeg" },
          { name: "Dr. J. Muni Sekhar", role: "Organizing Treasurer", image: "../assets/organisers/11.jpeg" },
          { name: "Dr. P. Sateesh Kumar", role: "Joint. Organizing Secretary", image: "../assets/organisers/7.jpeg" },
        ]}
        colorTitle={`Organisers`}
        unColorTitle={`Our`}
        subtitle={`Angels`}
      />

    </div>
  )
}

export default Committee