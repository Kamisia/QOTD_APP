import { useGlobalContext } from "../Context";

const Sentence = () => {
  const { quote, author } = useGlobalContext();
  if (quote == "") {
    return <span className="loader"></span>;
  }
  return (
    <div className="sentence-container">
      <h1 className="quote">&bdquo;{quote}&rdquo;</h1>
      <h3 className="author">~{author}</h3>
    </div>
  );
};

export default Sentence;
