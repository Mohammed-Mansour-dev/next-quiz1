"use client"


import { useEffect, useState } from "react";
import MainPage from "./_pages/MainPage";


export default function Home() {

  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
// fetching the questions data




  useEffect( () => {
    // Fetching the data from the API
    const fetchData = async () => {
      try {
        const response = await fetch('https://644982a3e7eb3378ca4ba471.mockapi.io/questions');
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        setQuestions(data);  // Set the fetched data to state
        setLoading(false);    // Set loading to false once data is fetched
      } catch (error) {
        setError(error);      // Handle error if any occurs
        setLoading(false);    // Stop loading when an error occurs
      }
    };

    fetchData();  // Call the async function
  }, []);


  return (
    <div  className="w-full h-screen  justify-center flex items-center" >
      
<MainPage questionsData={questions} error={error} loading={loading} />
    </div>
  )
}
