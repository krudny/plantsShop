import Hero from "../components/Hero";
import NewPlant from "../components/NewPlant";
import IndoorCollection from "../components/IndoorCollection";
import House from "../components/House";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import LoadingOverlay from "../components/LoadingOverlay.jsx";
import {useEffect} from "react";
import UserService from "../services/UserService.jsx";

export default function Main() {
    // tests if server is up
    useEffect(() => {
        UserService.getPublicContent();
    }, [])

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
