import { useState } from "react";
import { Tweet } from "./componentes/Tweet";

function App() {
  const [tweets, setTweets] = useState<string[]>([
    "Tweet 1",
    "Tweet 2",
    "Tweet 3",
    "Tweet 4",
  ]);
  function createTweet() {
    setTweets([...tweets, "Tweet" + tweets.length]);
  }

  return (
    <div>
      {tweets.map((tweet) => {
        return <Tweet text={tweet} />;
      })}

      <button onClick={createTweet}>Adicionar Tweet</button>
    </div>
  );
}

export default App;
