import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  ///FetchData
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

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

    fetchData();
  }, []);

  //obsługa przycisku
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(true);
  };
  return (
    <AppContext.Provider value={{ quote, author, handleClick, isOpen }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
