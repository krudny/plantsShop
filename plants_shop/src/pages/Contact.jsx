import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "../styles/contact.css";
import LoadingOverlay from "../components/LoadingOverlay.jsx";

export default function Contact() {
  return (
    <>
      <LoadingOverlay />

      <div className="contact--container">
        <Nav />
        <img className="img1" src="contact2.webp" />
        <img className="img2" src="contact2.webp" />

        <div className="contact--wrapper">
          <div className="contact-text">
            <p className="contact-1">How to reach us?</p>
            <p className="contact-2">You can leave your mail here</p>
          </div>
          <div className="form-box flex">
            <form className="form flex">
              <input
                type="text"
                className="input"
                id="name"
                placeholder="Your name"
                autoComplete="off"
              />
              <input
                type="text"
                className="input"
                id="email"
                placeholder="Your email"
                autoComplete="off"
              />
              <input
                type="text"
                className="input"
                id="text"
                placeholder="What are we going to talk about?"
                autoComplete="off"
              />
              <button className="add--cart" type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
