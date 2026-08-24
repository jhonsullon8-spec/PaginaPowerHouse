import Mission from "./sections/Mission/Mission";
import Experience from "./sections/Experience/Experience";
import Pastors from "./sections/Pastors/Pastors";
import Ministries from "./sections/Ministries/Ministries";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Mission />
        <Experience />
        <Pastors />
        <Ministries />
      </main>
    </>
  );
}

export default App;