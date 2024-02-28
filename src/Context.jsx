import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [showSentence, setShowSentence] = useState(false);

  const handleClick = () => {
    setShowSentence(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.quotable.io/random");
        setQuote(response.data.content);

        setAuthor(response.data.author);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    if (showSentence) {
      fetchData();
    }
  }, [showSentence]);

  return (
    <AppContext.Provider value={{ quote, author, handleClick, showSentence }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
