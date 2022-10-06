import { MCQs } from "../data/Data";
import { useState } from "react";

function ShowMCQs({ }) {
  const[ activeMCQ, setActiveMCQ] = useState(0);
  const [buttonChecked , setButtonChecked] = useState([])
  const handleNext = () => {
    if(activeMCQ < MCQs.length-1){
      for (let i= 0; i< MCQs.length; i++) {
        setActiveMCQ(activeMCQ+1)
      }
    }
    else{
      alert("Last MCQ")
    }
    
  }
  const handlePrevious = () =>{
    if(activeMCQ >= 0){
      for(let j=0; j<MCQs.length;j++){
        setActiveMCQ(activeMCQ-1)
      }
    }
    else{
      setActiveMCQ(0)
    }
  }
  const handleChange = (event) =>{
    event.preventDefault()
    setButtonChecked({
      ...buttonChecked,
      choosen : event.target.value
    })

    setButtonChecked(event.target.value)
    console.log(buttonChecked)


  }
  return (
    <div className="show-mcqs">
      {MCQs.map((mcq, index) => {
        {
          if(index === activeMCQ){
            return ( 
              <>
                <h3>
                  Question#{index+1} of {MCQs.length}
                </h3>
                <p className="statement">{mcq.statement}</p>
                <div className="options-container">
                  <div className="single-option">
                    <input
                      type="radio"
                      name="option"
                      id="optionA"
                      value= {mcq.optionA}
                      onChange= {handleChange}
                    />
                    <label className="label-option" htmlFor="optionA">A. {mcq.optionA}</label>
                  </div>
                  <div className="single-option">
                    <input
                      type="radio"
                      name="option"
                      id="optionB"
                      value= {mcq.optionB}
                      onChange= {handleChange}
                    />
                    <label className="label-option" htmlFor="optionB">B. {mcq.optionB}</label>
                  </div>
                  <div className="single-option">
                    <input
                      type="radio"
                      name="option"
                      id="optionC"
                      value= {mcq.optionC}
                      onChange= {handleChange}
                    />
                    <label className="label-option" htmlFor="optionC">C. {mcq.optionC}</label>
                  </div>
                  <div className="single-option">
                    <input
                      type="radio"
                      name="option"
                      id="optionD"
                      value= {mcq.optionD}
                      onChange= {handleChange}
                    />
                    <label className="label-option" htmlFor="optionD">D. {mcq.optionD}</label>
                  </div>
                </div>
                <div className="mcqs-submit-buttons">
                  <button className="previous-button" onClick={handlePrevious}>Previous</button>
                  <br />
                  <button className="next-button" onClick={handleNext}>
                    Next
                  </button>
                </div>
              </>
            );
          }
        }
       
      })}
    </div>
  );
}

export default ShowMCQs;
