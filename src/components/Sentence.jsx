import { useGlobalContext } from "../Context";

const Sentence = () => {
  const { quote, author } = useGlobalContext();
  return (
    <div>
      <>
        <blockquote>{quote}</blockquote>
        <blockquote>{author}</blockquote>
      </>
    </div>
  );
};

export default Sentence;
