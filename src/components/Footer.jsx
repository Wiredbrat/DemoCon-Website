import { Link } from "react-router"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold mb-4">
              NEO<span className="text-red-400">CON</span><span className="text-gray-300">2025</span>
            </div>
            <p className="text-gray-400 mb-3">
               NEOCON is a leading platform for neonatal care professionals to collaborate, exchange ideas, and explore advancements in neonatology. We aim to foster innovation and build connections that enhance the quality of care for newborns worldwide. 
            </p>
            <h4 className="font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="transition-colors">
                <i className="fa-brands fa-x-twitter text-gray-400 hover:text-white text-2xl"></i>
              </a>
              <a href="#" className="transition-colors">
                <i className="fa-brands fa-linkedin text-gray-400 hover:text-white text-2xl"></i>
              </a>
              <a href="#" className=" transition-colors">
                <i className="fa-brands fa-youtube text-gray-400 hover:text-white text-2xl"></i>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about-nnf" className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/events" className="hover:text-white transition-colors">Events</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/speakers" className="hover:text-white transition-colors">Speakers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Get in Touch</h4>
            <p className=" text-gray-400">
              <span className="inline-block pb-2">Lotus Hospitals for Women and Children, Siripuram, Visakhapatnam - 530003</span><br />
              <b>Dr. VVG Mohan</b>
              <span className="text-sm"> (Organising Chairman)</span>
              <br /> 
              <b>Dr. K. Seshagiri</b>
              <span className="text-sm"> (Organising Secratory)</span>
              <br /> 
              <b>Dr. S. Ramprasad</b>
              <span className="inline-block text-sm pb-2"> (Organising Secretary)</span>
              <br /> 
              <i className="fa-solid fa-phone text-red-400 text-sm"></i> <a href="tel:+918886709408" className="text-blue-400">+91-88867 09408</a>, <a href="tel:+919885662593" className="text-blue-400">+91-98856 62593</a><br />
              <a href="mailto:neocon2025@gmail.com" className="text-blue-400"><i className="fa-solid fa-envelope text-red-400 text-sm"></i> neocon2025@gmail.com</a>
            </p>
          </div>
          <div>
           <p className="font-semibold mb-2">Professional Conference Manager</p>
           <div className="text-gray-400">
            <p>
              For any queries, please contact:
            </p>
            <a href="mailto:chander@chime.travel" className="text-blue-400">
              chander@chime.travel
            </a>
           </div>
            <Link to={`https://chime.travel/`}>
              <img src="../assets/chime-logo.png" alt="chime logo" className="h-12 md:h-16 mt-4" />
            </Link>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Quark Conference. All rights reserved.</p>
        </div>
      </div>
    </footer>
)}

export default Footer