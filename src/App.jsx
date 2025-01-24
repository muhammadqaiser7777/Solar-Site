import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <NavBar />

      <div id="home">
        <Hero />
      </div>

      {/* About Us Section */}
      <div id="about" className="min-h-screen bg-green-100 p-8">
        <h1 className="text-4xl font-bold">About Us Section</h1>
        <p className="mt-4">
          This is the About Us section where you can provide details about your
          company, team, or mission.
        </p>
        <p className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
          quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
        </p>
      </div>

      {/* Services Section */}
      <div id="services" className="min-h-screen bg-blue-100 p-8">
        <h1 className="text-4xl font-bold">Services Section</h1>
        <p className="mt-4">These are the services we offer:</p>
        <ul className="mt-4 list-disc list-inside">
          <li>Service 1: Description</li>
          <li>Service 2: Description</li>
          <li>Service 3: Description</li>
        </ul>
      </div>
      <Footer />
    </>
  );
}

export default App;
