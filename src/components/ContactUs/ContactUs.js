import Faq from "../Faq/Faq";
import classes from "./ContactUs.module.css";

const ContactUs = () => {
  return (
    <section id="contact" className={classes.contact}>
      <div className={classes.contactBox}>
        <div className={classes.contentBox}>

            <Faq />
          {/* <div className={classes.persons}>

            <div className={classes.personBox}>
              <h3 className={classes.personHeading}>Shamsudheen</h3>
              <div className={classes.details}>
                <p>
                  Chairman<br></br>Union KMCT
                </p>
                <a className={classes.anchor} href="tel:+917012824370">
                  +91 7012 824 370
                </a>
              </div>
            </div>

            <div className={classes.personBox}>
              <h3 className={classes.personHeading}>Sithara Beegam</h3>
              <div className={classes.details}>
                <p>
                  Vice Chairman<br></br>Union KMCT
                </p>
                <a className={classes.anchor} href="tel:+918592002134">
                  +91 8592 002 134
                </a>
              </div>
            </div>
          </div> */}

          <div className={classes.mapBox}>
            <iframe
              className={classes.map}
              title="Kmct Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.6631458656584!2d80.62040591486335!3d16.441925688651654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f0a2a7d81943%3A0x8ba5d78f65df94b8!2sK%20L%20Deemed%20To%20Be%20University!5e0!3m2!1sen!2sin!4v1663973454915!5m2!1sen!2sin"
              loading="lazy"
              style={{ border: 0 }}
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;
