import ContactCard from "../../components/Main/contactCard";
import Footer from "../../components/Footer/Footer";
import Map from "../../components/Main/Map";

import "./contactpage-style.css";
function Contact() {
  return (
    <>
      <div className="contact-page">
        <ContactCard />
        <Map />
      </div>
      <Footer style={{}} />
    </>
  );
}

export default Contact;
