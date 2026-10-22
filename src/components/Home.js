import { username, city } from "../data/user";

function Home() {
  return (
    <div id="home">
      <h1>
        Hello, my name is {username}!
      </h1>
      <h2>I live in {city}.</h2>
    </div>
  );
}

export default Home;