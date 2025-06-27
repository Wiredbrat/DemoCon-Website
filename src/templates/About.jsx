import React from 'react'
import { AnimatedCard, PageTitle } from '../importer'
import { motion } from 'framer-motion'

function About() {
  return (
    <div >
      <PageTitle pageText={`Know More About`} pageNameColored={`National Neonatology Forum`} pageNameUncolored={`(NNF)`} />
      <div className='max-w-6xl mx-auto px-4 py-1 overflow-hidden'>
        <motion.img
          src="/assets/about.jpg"
          alt="Vizag Sea View"
          className="rounded-2xl mb-6 w-full object-cover bg-center h-80"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='pb-4 flex flex-col gap-4'
          viewport={{ once: true }}
        >
          <p>
            National Neonatology Forum (NNF) is a strong and large body of around 9000 Neonatologists across India and abroad. NNF has been actively involved in advocacy, policy making, research and ensuring quality health care to newborn for the last 4 decades.
          </p>
          <p>
          The National Neonatology Forum came into existence in 1980 through the initiative of a handful of leading paediatricians working in the field of neonatology with the following objectives:
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={` rounded-2xl flex flex-col md:flex-row items-center gap-6 mb-16 lg:bg-amber-50`}
        >
          <img
            src={`/assets/logo2.png`}
            alt={``}
            className="object-contain w-full md:w-fit rounded-xl shadow-md h-56 md:h-80"
          />
          <div className="w-full md:w-[75%] md:pe-5">
            <h3 className="text-2xl font-bold mb-4">Objectives:</h3>
            <div className="text-gray-700 space-y-2 ps-4 ">
              <li>To encourage and advance the knowledge, study and practice of the science of neonatology in the country.</li>
              <li>To draw out recommendations for neonatal care at different levels.</li>
              <li>To establish liaison with other professionals concerned with neonatal care.</li>
              <li>To develop neonatal component of the curriculum for medical as well as nursing teaching.</li>
              <li>To organize conferences, trainings, workshops etc.</li>
              <li>To promote neonatal care in the country.</li>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='pb-4'
          viewport={{ once: true }}
        >
          <p>NNF prepared the first set of recommendations on neonatal care in India in 1980. In 1982, a task force on Minimum Perinatal Care with participation of NNF and the government of India envisaged that 'level 1 care will be imparted through the trained TBAs and female health workers in the community’. In years that followed, several members of NNF experimented with community-based projects on newborn care; training of TBAs, health workers and nurses; small hospital newborn care models; utilization of workers of the Integrated Child Development services for newborn care; and simplifying the technology of newborn care to suit the low resource settings.
          <br/>
          <br/>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='pb-4 flex flex-col md:flex-row gap-4 '
        >
          <img 
            src={`/assets/about3.jpg`}
            alt={``}
            className="object-cover md:order-2 w-full md:w-fit rounded-xl shadow-md h-64 md:h-[400px]"
          />
          <p>
            In 1992 NNF recommended that Essential Newborn Care (ENC) got included as one of the components of child survival strategy (along with immunization, management of diarrhea and pneumonia and vitamin A prophylaxis ) for the first time. NNF assisted the government in developing the ENC package (consisting of neonatal resuscitation, prevention of hypothermia and infection, exclusive breastfeeding and referral of sick newborns).
            <br/>
            <br/>
            NNF was called upon to assist the government in operationalizing essential newborn care package in district, sub-district and first level referral units in the country. In 1994-95, NNF contributed to the development of Teaching Aids on Newborn Care .
            <br />
            <br />
            By early nineties, NNF had succeeded in putting newborn health firmly on the national agenda through sustained advocacy and track record. Country wide Neonatal Resuscitation programme were launched by creating five regional hubs after TOT at Manipal Hospital during Annual Convention of NNF in 1989 , and gradually this got into pre-service education of UGs & Nursing graduates .
          </p>
        </motion.div>

         <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='mb-16'
        >
          <h2 className='text-2xl font-bold pb-3'>Few of achievements are listed below:</h2>
          <p className='font-semibold pb-3'>
            NNF is working closely with UNICEF for improving Neonatal care in India. Many projects including FBNC training, accreditation and mentoring has been done with help of UNICEF.
          </p>
          <ol className='list-decimal ps-6 flex flex-col gap-3'>
            <li>
              NNF is providing technical and academic support to resuscitation program for last 8 years. Hundreds of Advance NRP programs have been contacted by NNF in these years. NNF has also published NR India guidelines for Neonatal Resuscitation.
            </li>
            <li>
              For standardization of facility level care NNF started accreditation of Level 2 and 3 NICUs across India in both Govt and Private sector by developing guidelines and laying structure & system for accreditation .
            </li>
            <li>
              NNF started fellowship for Doctors & Nurses and conducts exit exams for. Hundreds of doctors and nurses have passed these examinations and rendering neonatal services across India and abroad.
            </li>
            <li>
              In September 2014, India newborn Action Plan (INAP) was launched along with GOI and partners ,to which NNF gave technical inputs.
            </li>
            <li>
              NNF State branches are actively helping state government to launch programmes for newborn and by organizing CMEs, Conferences and Workshops to promote neonatal care in India.
            </li>
            <li>
              NNF is working closely with UNICEF for improving Neonatal care in India. Many projects including FBNC Training, Accreditation and Mentoring have been done with the help of UNICEF.
            </li>
            <li>
              NNF has signed MOUs with state governments like Haryana and Madhya Pradesh and support state governments FBNC training, mentoring visits, KMC workshop, establishment of SNCU etc.
            </li>
            <li>
              Recently NNF has started it's Perinatology and Neonatal Nursing chapter and is working in close coordination with Gynaecologists and Nurses.
            </li>
            <li>
              NNF has spread it's wings beyond India and started it's Overseas branch at Dubai in March 2019.
            </li>
          </ol>
          <p className='pt-3 font-semibold'>
            NNF has also been publishing Journal of Neonatology for last several years.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default About