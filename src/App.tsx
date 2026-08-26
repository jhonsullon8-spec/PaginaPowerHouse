import Mission from "./sections/Mission/Mission";
import Experience from "./sections/Experience/Experience";
import Pastors from "./sections/Pastors/Pastors";
import Ministries from "./sections/Ministries/Ministries";
import MapLocation from "./sections/MapLocation/MapLocation";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/footer";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";


function App() {
  return (
    <>
      <Navbar />
      <main>
        <Mission />
        <Experience />
        <Pastors />
        <Ministries />
        <MapLocation />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;