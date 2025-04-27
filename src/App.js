import React, { useState } from 'react';
import GameGenresShowcase from './assets/imgs/about.jpg';
import game from './assets/imgs/game-2.png';
import founder from './assets/imgs/founder.png';
import plant from './assets/imgs/plant.png';
import ScrollableCards from './/card'
import TeamSection from './/TeamSection'
import logo from './assets/imgs/Logo.UDS.png';
import img from './assets/imgs/bg.png';
import emailjs from '@emailjs/browser';


const cards = [
  {
    title: "Game Dev",
    subtitle: "Mobile & PC Production",
    image: "https://placehold.co/400x250/1E90FF/FFFFFF?text=Game+Dev",
  },
  {
    title: "UI/UX",
    subtitle: "Experience & Interface Strategy",
    image: "https://placehold.co/400x250/20B2AA/FFFFFF?text=UI%2FUX",
  },
  {
    title: "Graphic Artistry",
    subtitle: "Visual Content Creation",
    image: "https://placehold.co/400x250/8A2BE2/FFFFFF?text=Graphic+Artistry",
  },
  {
    title: "Logo Creation",
    subtitle: "Brand Identity Emblems",
    image: "https://placehold.co/400x250/FF6347/FFFFFF?text=Logo+Creation",
  },
  {
    title: "Web Dev",
    subtitle: "Responsive Site Development",
    image: "https://placehold.co/400x250/4682B4/FFFFFF?text=Web+Dev",
  },
  {
    title: "Level Design",
    subtitle: "2D & 3D Environment Art",
    image: "https://placehold.co/400x250/32CD32/FFFFFF?text=Level+Design",
  },
];



const technologies = {
  'Game Designer': ['2D/3D Level Designers', '3D Modeling', 'Unity', '2D artist','Blender'],
  'Game Development': ['Unity', 'C#', 'Game Physics', 'Game AI'],
  'Graphical Design': ['Photoshop', 'Illustrator', 'Figma', 'Adobe XD','Canva','Substance painter','krita'],
  'Animation': ['3D Animation', '2D Animation', 'Maya', 'Blender'],
  'Frontend': ['HTML/CSS', 'Angular Js', 'React Js', 'Vue Js'],
  'Full Stack': ['MEAN', 'MERN', 'JavaScript', 'Python']
};

  
function App() {
  // for nav
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send('service_lybu9x9', 'template_t6ls9cs', {
      firstName,
      lastName,
      email,
      phone,
      message,
    }, 'EgINtQjSnE3YBJSdE')
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
      }, (error) => {
          console.log(error.text);
          alert('An error occurred, please try again.');
      });

    // clear form
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };
  const handleMobileLinkClick = () => {
    setMobileMenuOpen(false);
  };
//end 
  return (
    <>
      <header className="fixed top-0 z-50 w-full flex justify-center pointer-events-none">
        <div className="w-full max-w-7xl mx-4 mt-4 px-6 py-3 flex items-center justify-between pointer-events-auto">
          <div>

          </div>

          {/* Desktop Nav */}
          <nav className="rounded-full shadow-md bg-white px-6 py-3 hidden md:flex items-center space-x-6 font-medium text-gray-800">
            <a href="#home" className="hover:text-purple-600 transition">Home</a>
            <a href="#about" className="hover:text-purple-600 transition">Who We Are</a>
            <a href="#service" className="hover:text-purple-600 transition">What we Do</a>
            <a href="#Creations" className="hover:text-purple-600 transition">Our Creations</a>
            <a href="#career" className="hover:text-purple-600 transition">Career</a>
            <button onClick={() => setIsOpen(true)} className="hover:text-purple-600 transition">Contact</button>
          </nav>

          {/* Mobile Toggle */}
          <div className="rounded-full shadow-md bg-white px-6 py-3 md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="text-3xl focus:outline-none"
            >
              &#9776;
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-[90px] w-[90%] mx-auto left-0 right-0 bg-white shadow-md rounded-xl px-6 py-4 text-center z-40 pointer-events-auto">
            <a onClick={handleMobileLinkClick} href="#home" className="block py-2 text-gray-800 hover:text-purple-600">Home</a>
            <a onClick={handleMobileLinkClick} href="#about" className="block py-2 text-gray-800 hover:text-purple-600">Who We Are</a>
            <a onClick={handleMobileLinkClick} href="#service" className="block py-2 text-gray-800 hover:text-purple-600">What We Do</a>
            <a onClick={handleMobileLinkClick} href="#Creations" className="block py-2 text-gray-800 hover:text-purple-600">Our Creations</a>
            <a onClick={handleMobileLinkClick} href="#career" className="block py-2 text-gray-800 hover:text-purple-600">Career</a>
            <button onClick={() => setIsOpen(true)} className="hover:text-purple-600 transition">Contact</button>
          </div>
        )}
      </header>

      
      <section id="home"
        className="relative bg-black text-white min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-darkgray/60 z-0" />

        {/* Logo - stays at the top left */}
        <img
          src={logo}
          alt="Logo"
          className="w-28 md:w-36 h-auto absolute top-6 left-16 shadow-xl z-10"
        />

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16">
          {/* Text and CTA */}
          <div className="max-w-xl text-center lg:text-left space-y-6">
            <h1
              className="font-extrabold leading-tight drop-shadow-lg"
              style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)" }}
            >
              Serious fun for not-so serious people
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              We blend playfulness with purpose—enjoy powerful experiences without taking yourself too seriously.
            </p>
          </div>
        </div>
      </section>


      {/*  about section */}    
      <section id="about" className="relative bg-peach py-16 overflow-hidden">
        <center>
        <h1 className="text-5xl font-bold mb-5 text-darkgray">About</h1>

        </center>
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between relative z-10">
          {/* Illustration */}
          <div >
            <img
              src={GameGenresShowcase}
              alt="Website stress"
              className="w-full max-w-md mx-auto"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
              What if you could make <span className="rounded-full bg-yellow-300 px-3 py-1">one decision</span> to simplify everything?
            </h2>
            <p className="text-lg text-gray-700 mb-6 text-justify">
              UD Studios is a dynamic and fast-growing gaming startup driven by a passion for crafting immersive, high-quality experiences across mobile and PC platforms. Founded by a talented team of Game and Web developers, our mission is to create innovative gameplay that seamlessly blends storytelling, strategy, and fun. With a player-first mindset and a deep love for gaming, we're on a mission to shape the next generation of interactive entertainment—right here from Chennai.
            </p>

          </div>
        </div>
      </section>

        <section  id="service">
        <center>
          <h1 className="text-5xl font-bold text-darkgray">Service</h1>
        </center>
        </section>
      <ScrollableCards cards={cards} />  
      <section>
      
        <div id="Creations" className="container mx-auto bg-darkgray p-4">
          <div className="flex flex-wrap items-center mb-12">
            <div className="w-full md:w-1/2 p-4">
              <img src={game} alt="Scenic view of the mountains" className="w-full rounded-lg shadow-lg" />
            </div>
            <div className="w-full md:w-1/2 p-4 text-center md:text-left">
              <h2 className="text-2xl font-bold mb-4">Heading 1</h2>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center mb-12">
            <div className="w-full md:w-1/2 p-4 text-center md:text-right">
              <h2 className="text-2xl font-bold mb-4">Heading 2</h2>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <img src={game} alt="Scenic view of the mountains" className="w-full rounded-lg shadow-lg" />
            </div>
          </div>
          <div className="flex flex-wrap items-center mb-12">
            <div className="w-full md:w-1/2 p-4">
              <img src={game} alt="Scenic view of the mountains" className="w-full rounded-lg shadow-lg" />
            </div>
            <div className="w-full md:w-1/2 p-4 text-center md:text-left">
              <h2 className="text-2xl font-bold mb-4">Heading 3</h2>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center mb-12">
            <div className="w-full md:w-1/2 p-4 text-center md:text-right">
              <h2 className="text-2xl font-bold mb-4">Heading 4</h2>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <img src={game} alt="Scenic view of the mountains" className="w-full rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>
    
      {/* Creations */}
      <section >
        <div className="bg-darkgray py-16">
          <TeamSection></TeamSection>
          <div className="container mx-auto flex flex-col md:flex-row items-center">

            {/* Left side: Founder Image */}
            <div className="w-full md:w-1/2 p-4">
              <img
                src={founder}
                alt="Founder Portrait"
                className="rounded-lg object-cover w-full h-auto shadow-lg"
              />
            </div>

            {/* Right side: Text Card */}
            <div className="w-full md:w-1/2 p-4">
              <div className="bg-peach rounded-lg p-8 shadow-xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  A great game is <span className="bg-coral px-1">never finished</span>.
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Your game shouldn’t be a one-and-done release—it should be a living, breathing world that evolves alongside your players. In today’s fast-paced gaming landscape, launching a game is just the beginning. After contributing to the development of countless titles over the years, I’ve seen too many promising games lose momentum due to a lack of long-term vision and community engagement. That’s exactly why I founded UD Studios. Our mission is to craft experiences that not only make a powerful first impression but also deepen over time, fueled by feedback, content updates, and meaningful connections with the players who matter most. We don’t just ship games—we nurture them into enduring worlds.
                </p>

                <div className="mt-8">
                  <p className="text-sm text-gray-500">Vasanth, Founder</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* career */}
      <section id="career">
        <center>
          <h1 className="text-5xl font-bold text-darkgray">Career</h1>
        </center>
        <div className="bg-peach text-white px-8">
          <h2 className="text-4xl font-bold text-darkgray">Join With US</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(technologies).map(([category, items]) => (
              <div key={category} className="bg-gray-900 p-6 rounded-2xl shadow-lg">
                <h4 className="text-xl font-bold text-yellow-400 mb-4">{category}</h4>
                <ul className="list-disc list-inside space-y-2">
                  {items.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <h3 className="text-2xl font-semibold text-dark mb-4 text-center ">One team, one dream. Let’s build greatness together!</h3>
          <div className="text-center mb-8">
      <a
        href="https://forms.gle/EGY6k2GWqHEioeJ36"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-shadow shadow-md hover:shadow-lg"
      >
        Apply Now
      </a>
    </div>
        </div>
      </section>

      {/* footer */}
      <div className="flex flex-col md:flex-row w-full">
        {/* CTA Panel */}
        <section className="bg-red-600 text-white md:w-1/2 p-8 md:p-10 flex flex-col justify-between relative overflow-hidden">
          <div className="flex justify-between items-start">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                Ready To Move Forward?
              </h2>
              <p className="text-sm sm:text-base">
                Looking to kick off a project or have a conversation?<br />
                We’re here to listen.
              </p>
              <button
              onClick={() => setIsOpen(true)}
              className="mt-4 bg-black text-white px-6 py-3 rounded-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white"
            >
              Contact Us
            </button>
            </div>
            <img
              src={plant}
              alt="Decorative plant"
              className="w-16 sm:w-20 md:w-28 h-auto rounded-full shadow-lg"
            />
          </div>
          {/* Social Links */}

          <div className="col-span-1 sm:col-span-2 mt-4 sm:mt-0 flex flex-col sm:flex-row sm:justify-center items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <p className=" ">Follow Us</p>
            <div className="flex space-x-6">
              {/* Twitter */}
              <i className="fab fa-twitter fa-2x text-white transition-transform duration-200 ease-out hover:scale-110 hover:text-[#1769ff]"></i>

              {/* Facebook */}
              <i className="fab fa-facebook-f fa-2x text-white transition-transform duration-200 ease-out hover:scale-110 hover:text-[#1877f2]"></i>

              {/* Instagram */}
              <i className="fab fa-instagram fa-2x text-white transition-transform duration-200 ease-out hover:scale-110 hover:text-[#c13584]"></i>

              {/* LinkedIn */}
              <i className="fab fa-linkedin-in fa-2x text-white transition-transform duration-200 ease-out hover:scale-110 hover:text-[#0077b5]"></i>

              {/* YouTube */}
              <i className="fab fa-youtube fa-2x text-white transition-transform duration-200 ease-out hover:scale-110 hover:text-[#ff0000]"></i>

              {/* Reddit */}
              <i className="fab fa-reddit-alien fa-2x text-white transition-transform duration-200 ease-out hover:scale-110 hover:text-[#ff4500]"></i>

              {/* Discord */}
              <i className="fab fa-discord fa-2x text-white transition-transform duration-200 ease-out hover:scale-110 hover:text-[#7289da]"></i>
            </div>

          </div>
        </section>

        {/* Footer Panel */}
        <footer className="bg-gray-900 text-white md:w-1/2 p-8 md:p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Core Services */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-2 border-b-2 border-red-500 inline-block">
              Core Services
            </h3>
            <ul className="flex flex-wrap gap-3 mt-3 text-sm">
              {[
                "Game Development",
                "Branding & Logo Design",
                "Graphical Designing",
                "UI/UX Design",
                "Web Development",
              ].map((item) => (
                <li key={item} className="hover:text-red-500 transition-colors">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {/* Copyright */}
          <div className="col-span-1 sm:col-span-2 md:col-span-3 mt-6 text-xs text-gray-400 flex justify-center md:justify-start">
            © {new Date().getFullYear()} UD Studios™
          </div>
        </footer>
      </div>
      {isOpen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-auto">
    <div className="bg-gray-900 text-white rounded-2xl shadow-2xl w-full max-w-4xl mx-4 sm:mx-auto my-8 p-8 relative flex flex-col md:flex-row gap-8 max-h-[90vh] overflow-y-auto">

      {/* Close button */}
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-4 right-4 text-gray-400 hover:text-white focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Left: Contact Form */}
      <div className="flex-1">
        <h2 className="text-3xl font-bold mb-2">Let's Connect</h2>
        <p className="text-gray-400 text-sm mb-6">
          We'd love to hear from you! Fill out the form below and we'll get back to you shortly.
        </p>

        <form onSubmit={sendEmail} className="flex flex-col gap-4">
          <div className="flex gap-4">
            <input
              type="text" placeholder="First Name" required
              value={firstName} onChange={(e) => setFirstName(e.target.value)}
              className="flex-1 p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="text" placeholder="Last Name" required
              value={lastName} onChange={(e) => setLastName(e.target.value)}
              className="flex-1 p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <input
            type="email" placeholder="Email" required
            value={email} onChange={(e) => setEmail(e.target.value)}
            className="p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="tel" placeholder="Phone Number"
            value={phone} onChange={(e) => setPhone(e.target.value)}
            className="p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <textarea
            placeholder="Your Message" required
            value={message} onChange={(e) => setMessage(e.target.value)}
            className="p-3 bg-gray-800 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button type="submit" className="mt-4 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition-all">
            Send Message
          </button>
        </form>
      </div>

      {/* Right: Company Info */}
      <div className="flex-1 text-gray-300 space-y-6">
        <div>
          <h3 className="text-xl font-bold mb-2 border-b border-gray-600 pb-2">Company Information</h3>
          <p className="text-sm">
            <strong>Themesberg LLC</strong><br />
            Tax ID: USXXXXXX
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-2 border-b border-gray-600 pb-2">Address</h3>
          <p className="text-sm">
            SILVER LAKE, United States<br />
            1941 Late Avenue<br />
            Zip Code: 03875
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-2 border-b border-gray-600 pb-2">Call Us</h3>
          <p className="text-sm">
            Speak to our team anytime.<br />
            <a href="tel:+16467865060" className="text-red-400 underline hover:text-red-500">
              +1 (646) 786-5060
            </a>
          </p>
        </div>
      </div>

    </div>
  </div>
)}

  
    </>
  );
}

export default App;
