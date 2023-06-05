import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";

function ContactCard() {
  return (
    <div className="contact-card">
      <div className="contact-info">
        <h1>Pretty Mansion</h1>
        <p>DN 79, Km. 32, 417331 Homorog, România </p>
        <div className="contact-mail-tel">
          <p>reservations@prettymansion.com</p>
          <p> +40 758 628 352</p>
        </div>
        <div className="contact-icons">
          <AiOutlineFacebook />
          <AiOutlineInstagram />
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
