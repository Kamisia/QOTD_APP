import { useGlobalContext } from "../Context";

const Button = () => {
  const { handleClick, isOpen } = useGlobalContext;
  return (
    <div>
      <button onClick={handleClick} className="btn">
        Your Quote Of The Day
      </button>
    </div>
  );
};

export default Button;
