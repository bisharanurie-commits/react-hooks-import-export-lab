import { image, username } from "../data/user";

function About() {
  return (
    <div id="about">
      <h2>About</h2>
      <img src={image} alt={username} />
    </div>
  );
}

export default About;