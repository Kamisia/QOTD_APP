import { useGlobalContext } from "../Context";

const Button = () => {
  const { setShowSentence } = useGlobalContext();
  return (
    <div>
      <button className="btn" onClick={() => setShowSentence(true)}>
        Your Quote Of The Day
      </button>
    </div>
  );
};

export default Button;
