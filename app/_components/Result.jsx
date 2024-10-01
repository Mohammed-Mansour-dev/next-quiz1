/* eslint-disable react/prop-types */


const Result = ({initialState,questionsData ,onTryAgain }) => {

let score =initialState.score;
let questionsLength = questionsData.length ;

  return (
    <div className="flex flex-col items-center  " >

       <div className=" text-center   space-y-2 " > 
<h1 className="resultScore" >Total Questions : <span className="resultScoreNum" >{questionsLength}</span></h1>
<h1 className="resultScore" >Score : <span className="resultScoreNum" >{score} / <span>{questionsLength * 5}</span></span></h1>
<h1 className="resultScore" >Correct Answers :<span className="resultScoreNum" >{initialState.correct}</span> </h1>
<h1 className="resultScore" >Wrong Answers : <span className="resultScoreNum" >{initialState.incorrect}</span></h1>
</div>

<button onClick={onTryAgain} className="gradient text-white px-3 py-1 rounded-md mt-4 cursor-pointer hover:opacity-90 w-fit  " >Try Again</button>

    </div>
  )
}

export default Result
