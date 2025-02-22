import Hero from "../components/Hero";
import NewPlant from "../components/NewPlant";
import IndoorCollection from "../components/IndoorCollection";
import House from "../components/House";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import LoadingOverlay from "../components/LoadingOverlay.jsx";
import {useEffect, useState} from "react";
import UserService from "../services/UserService.jsx";

export default function Main() {
    const [isLoading, setIsLoading] = useState(true);

    //check if server is up
    useEffect(() => {
        const cachedServerUp = sessionStorage.getItem("serverUp");
        if (cachedServerUp === "true") {
            setIsLoading(false);
        } else {
            UserService.getPublicContent()
                .then(response => {
                    if (response.status === 200) {
                        sessionStorage.setItem("serverUp", "true");
                    }
                })
                .catch(console.error)
                .finally(() => setIsLoading(false));
        }
    }, []);


  return (
    <>
      <LoadingOverlay externalLoading={isLoading} externalText={"Please wait, server is starting"}/>
      <Hero />
      <NewPlant />
      <IndoorCollection />
      <House />
      <AboutUs />
      <Footer />
    </>
  );
}
