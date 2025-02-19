import Hero from "../components/Hero";
import NewPlant from "../components/NewPlant";
import IndoorCollection from "../components/IndoorCollection";
import House from "../components/House";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import LoadingOverlay from "../components/LoadingOverlay.jsx";

export default function Main() {
  return (
    <>
      <LoadingOverlay />
      <Hero />
      <NewPlant />
      <IndoorCollection />
      <House />
      <AboutUs />
      <Footer />
    </>
  );
}
