import React, { useState } from 'react';
import GameGenresShowcase from './assets/imgs/about.jpg';
import game from './assets/imgs/game-2.png';
import founder from './assets/imgs/founder.png';
import plant from './assets/imgs/plant.png';
import ScrollableCards from './/card'
import TeamSection from './/TeamSection'
import logo from './assets/imgs/Logo.UDS.jpg';

const cards = [
  {
    title: "5280Lend.com",
    subtitle: "Mortgage Broker",
    image: "https://via.placeholder.com/400x250/FF5733/fff?text=5280Lend.com",
  },
  {
    title: "Fortunato Management",
    subtitle: "Property Management Company",
    image: "https://via.placeholder.com/400x250/DDDDDD/000?text=Fortunato",
  },
  {
    title: "Spine Fitness Certification",
    subtitle: "Online Course for Personal Trainers",
    image: "https://via.placeholder.com/400x250/000000/fff?text=Spine+Fitness",
  },
  {
    title: "5280Lend.com",
    subtitle: "Mortgage Broker",
    image: "https://via.placeholder.com/400x250/FF5733/fff?text=5280Lend.com",
  },
  {
    title: "Fortunato Management",
    subtitle: "Property Management Company",
    image: "https://via.placeholder.com/400x250/DDDDDD/000?text=Fortunato",
  },
  {
    title: "Spine Fitness Certification",
    subtitle: "Online Course for Personal Trainers",
    image: "https://via.placeholder.com/400x250/000000/fff?text=Spine+Fitness",
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
            <a href="#Product" className="hover:text-purple-600 transition">Our Creations</a>
            <a href="#career" className="hover:text-purple-600 transition">Career</a>
            <a href="#contact" className="hover:text-purple-600 transition">Contact</a>
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
            <a onClick={handleMobileLinkClick} href="service" className="block py-2 text-gray-800 hover:text-purple-600">What We Do</a>
            <a onClick={handleMobileLinkClick} href="#Product" className="block py-2 text-gray-800 hover:text-purple-600">Our Creations</a>
            <a onClick={handleMobileLinkClick} href="#career" className="block py-2 text-gray-800 hover:text-purple-600">Career</a>
            <a onClick={handleMobileLinkClick} href="#contact" className="block py-2 text-gray-800 hover:text-purple-600">Contact</a>
          </div>
        )}
      </header>

      <section className="relative bg-black text-peach min-h-screen flex items-center justify-start overflow-hidden">
      <img
  src={logo}
  alt="Logo"
  className="w-[150px] h-auto absolute top-[25px] left-[35px] rounded-full"
/>
<div className="absolute inset-0 bg-darkgray opacity-60 z-0"></div>

<div className="relative z-10 text-left px-6 md:px-12">
  <h1 className="text-9xl md:text-9xl font-extrabold mb-4 drop-shadow-lg text-white font-display">
    Serious fun for not so
  </h1>
  <h1 className="text-7xl md:text-7xl font-extrabold mb-4 drop-shadow-lg text-white">
    Serious people
  </h1>
</div>

      </section>

      {/*  about section */}    
      
      <section className="relative bg-peach py-16 overflow-hidden">
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

        {/* Bottom Wavy Separator */}
        {/* <div className="absolute top-0 left-0 w-full">
          <svg className="w-full h-16" viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path
              fill="#366ce0"
              d="M0,96L48,85.3C96,75,192,53,288,53.3C384,53,480,75,576,74.7C672,75,768,53,864,37.3C960,21,1056,11,1152,16C1248,21,1344,43,1392,53.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
        </div> */}
      </section>

      {/* service section */}
      <ScrollableCards cards={cards} />        
   

    {/* z-pattern section */}
    <div className="container mx-auto bg-darkgray p-4">
      {/* Row 1 */}
      <div className="flex flex-wrap items-center mb-12">
        <div className="w-full md:w-1/2 p-4">
          <img src={game} alt="Scenic view of the mountains" className="w-full rounded-lg shadow-lg" />
        </div>
        <div className="w-full md:w-1/2 p-4 text-center md:text-left">
          <h2 className="text-2xl font-bold mb-4">Heading 1</h2>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>

      {/* Row 2 */}
      <div className="flex flex-wrap items-center mb-12">
        <div className="w-full md:w-1/2 p-4 text-center md:text-right">
          <h2 className="text-2xl font-bold mb-4">Heading 2</h2>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <img src={game} alt="Scenic view of the mountains" className="w-full rounded-lg shadow-lg" />
        </div>
      </div>

      {/* Row 3 */}
      <div className="flex flex-wrap items-center mb-12">
        <div className="w-full md:w-1/2 p-4">
          <img src={game} alt="Scenic view of the mountains" className="w-full rounded-lg shadow-lg" />
        </div>
        <div className="w-full md:w-1/2 p-4 text-center md:text-left">
          <h2 className="text-2xl font-bold mb-4">Heading 3</h2>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>

      {/* Row 4 */}
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
    {/* team section */}
    <TeamSection></TeamSection>

    <section className="bg-darkgray py-16">
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
    </section>


    <div className="bg-peach text-white min-h-screen p-8">
      <h2 className="text-4xl font-bold mb-4 text-darkgray">Join With US</h2>      
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
      <h3 className="text-2xl font-semibold text-darkgray mb-8 text-center">One team, one dream. Let’s build greatness together!</h3>    
    </div>

    {/* footer section */}
    <div class="flex flex-col md:flex-row">
   <div class="bg-red-600 text-white md:w-1/2 p-10 flex flex-col justify-between">
    <div>
      <h2 class="text-3xl md:text-4xl font-bold mb-4">Ready To Move Forward?</h2>
      <p class="mb-6">Looking to kick off a project or have a conversation? <br/> We’re here to listen.</p>
      <div class="flex flex-col sm:flex-row gap-4">
        <button class="bg-black text-white px-6 py-2 rounded">Contact Us</button>
      </div>
    </div>
    <div class="mt-10">
       <img src={plant} alt="Plant" class="w-20 md:w-28" />
    </div>
  </div>

   <div class="bg-gray-900 text-white md:w-1/2 p-10 grid grid-cols-2 md:grid-cols-3 gap-8">
    <div>
      <h3 class="text-lg font-semibold mb-2 border-b border-red-500 w-fit">Core Services</h3>
      <ul class="text-sm space-y-1">
        <li>Game Development</li>
        <li>Branding & Logo Design</li>
        <li>Graphical Designing</li>
        <li>UI/UX Design</li>
        <li>Web Development</li>
      </ul>
    </div>
    <div class="col-span-2 md:col-span-3 mt-4 flex flex-col md:flex-row justify-between items-start md:items-center">
      <div>
        <p class="text-sm">Follow Us</p>
        <div class="flex space-x-3 mt-2">
          <span>F</span>
          <span>I</span>
          <span>L</span>
          <span>X</span>
          <span>IN</span>
          <span>YT</span>
        </div>
      </div>
      
    </div>
    <div class="col-span-2 md:col-span-3 mt-4 text-xs text-gray-400 flex justify-between w-full">
      <span>©2024 UD Studios™</span>
    </div>
  </div>
</div>

    </>
  );
}

export default App;
