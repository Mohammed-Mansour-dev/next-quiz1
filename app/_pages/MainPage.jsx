/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


"use client"
import {  useState } from "react";
import Result from "../_components/Result";
import TimeProgress from "../_components/TimeProgress";






const MainPage = ({questionsData,   error,  loading}) => {
    const data =questionsData;

const [currentIndex, setcurrentIndex] = useState(0);
const [active , setActive ] = useState(null);
const [answer, setAnswer] = useState(null);
const [openResult , setOpenResult ] = useState(false)
const currentData =questionsData[currentIndex]
const [inputAnswer , setInputAnswer ] = useState("")
// for time progress 
const [fill , setFill ] = useState(0)
const last =currentIndex === data.length -1 ;

//  result constants
const [initialState , setInitialState ] = useState({
    correct: 0,
    incorrect: 0,
    score: 0,
})


// click answers
const clickedButton =(i,item)=>{
setActive(i);

if(item === currentData.correctAnswer){
    setAnswer(true);
}else{
    setAnswer(false);
}}

// click Next button
const nextOnclick =()=>{
    // checking the answer
    setInputAnswer("")
    if(answer){
    setInitialState({...initialState, correct: initialState.correct + 1, score: initialState.score + 5})
   }else{
    setInitialState({...initialState, incorrect: initialState.incorrect + 1})

   }

setActive(null)
setAnswer(false)
 setFill(0)

// Checking the index
if(currentIndex < data.length -1){
    setcurrentIndex(currentIndex +1)
    
}else{
    setcurrentIndex(1)
 setOpenResult(true)
}}


// try again result onclick
const onTryAgain = ()=>{
    setInitialState({...initialState, correct: 0, incorrect: 0, score: 0})
    setOpenResult(false)
    setcurrentIndex(0)
}

// GET ANSWERS UI DEPENDS ON ANSWER TYPE


//  on input answer change 
const inputAnswerChange = (e)=>{
setActive(true)
setInputAnswer(e.target.value)

if(e.target.value.toLowerCase() === currentData.correctAnswer.toLowerCase() ){
    setAnswer(true)
}else{
    setAnswer(false)
}


}

const getAnswersUi =()=>{

if(currentData.type ==="FIB")
{
    // input answer ui
    return (
        <div className="flex flex-col gap-2" >
            <input value={inputAnswer} onChange={inputAnswerChange} type="text" className="w-full p-2 text-sm text-gray-700 border-2 border-gray-300 rounded-md" />
        </div>
    )
}


// choices answer ui
    return(
<ul>
    {
        currentData.choices.map((item ,i)=>(

<li onClick={()=> clickedButton(i,item)} key={i} className={`
    my-3 border border-gray-300  px-5 py-2 rounded-md hover:cursor-pointer transition-all hover:border-gray-600
    ${i == active && "bg-[#B9754A] text-white "}   `}  >
    {item}
</li>

        ))
    }
</ul>
    )
}




    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
  
 


    return (
    <div className="bg-white w-[80%] rounded-lg p-14 md:w-[60%] h-fit relative ">
{/* time progress */}
{ !openResult && <TimeProgress progressTime={20} fill={fill}
setFill={setFill}
nextOnclick={nextOnclick}   />}
   
   {
openResult ? (
   <Result onTryAgain={onTryAgain} initialState={initialState} questionsData={questionsData}  />
):(
      <div className="w-full" >
        {/*  Questions Number */}
        <div className="font-semibold" >
          <span className="text-2xl text-black/90 " >{currentIndex +1 } </span>
          <span className="text-sm text-gray-500 " > /{data.length }</span>
        </div>


{/* the question */}

<h1 className="text-xl py-4 font-normal " >{currentData.question}</h1>


{/* answers ui */}

{getAnswersUi()}

<footer className="flex justify-end " >
    <button
    className="gradient text-white disabled:opacity-70 hover:opacity-90 disabled:cursor-not-allowed py-2 px-3 rounded-xl capitalize mt-3  "
    disabled={active == null} 
    onClick={()=>{nextOnclick()}} >
        {last ? "finish" : "next"}</button>
</footer>


      </div>
)  }

    </div>
  );
};

export default MainPage;
