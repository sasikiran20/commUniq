import classes from "./About.module.css";

const About = () => {
  return (
    <section id="about" className={classes.aboutSec}>
      <div className={classes.about}>
        <div className={classes.details}>
          <h3 className={classes.heading}>About</h3>
          <h2 className={classes.heading1}>CommUniq</h2>
          <p className={classes.para}>
          D3 is our annual fest , Our department conducts annual fest with the combination of " Fun and Knowledge". The fest aims to combine learning and entertainment to provide an unforgettable experience for everyone involvedThe festival is divided into two parts. The knowledge-centric part & The fun-centric part which will consist of various workshops, seminars, and talks on topics and containing on-spot events and fun games.
          </p>

          <p className={classes.para}>
          This year "COMMUNIQ" is our fest theme and it will be held on the 28th & 29th of March in the department premises. "COMMUNIQ - Human centric and Community Development" theme suggests a festival that is focused on promoting community building and human well-being. The festival may provide a platform for attendees to build relationships, share ideas, and learn from each other, creating a sense of community and collaboration within the department. The festival may also explore human-centered design, promoting the development of solutions that prioritize human needs and experiences.
          </p>
        </div>

        <div className={classes.composition}>
          <img
            className={classes.images}
            src="assets/About/ellipse.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default About;
