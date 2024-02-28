import { useGlobalContext } from "../Context";

const Button = () => {
  const { handleClick } = useGlobalContext();
  return (
    <div>
      <button className="btn" onClick={handleClick}>
        Your Quote Of The Day
      </button>
    </div>
  );
};

export default Button;
