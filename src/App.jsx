import { useGlobalContext } from "./Context";
import Button from "./components/Button";
import Sentence from "./components/Sentence";
function App() {
  const { showSentence } = useGlobalContext();

  return (
    <div className="container">
      {!showSentence && <Button />}
      {showSentence && <Sentence />}
    </div>
  );
}

export default App;
