import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { handleNext, selectActiveMcqOption, setAnswers, selectActiveMCQ, selectMcqs,selectAnswers  } from "../store/showMcqSlice";
import { handlePrevious } from "../store/showMcqSlice";
import { updateInformation } from "../store/showMcqSlice";
import { useSelector } from "react-redux";
import { selectSelectedInformation } from "../store/showMcqSlice";
import { selectUserId } from "../store/userSlice";
import { checkTest } from "../api/TestApi";
import toast from "react-hot-toast";
function ShowMCQs({}) {
  const dispatch = useDispatch();
  const activeMCQ = useSelector(selectActiveMCQ);
  const MCQs = useSelector(selectMcqs)
  const activeMcqOption = useSelector(selectActiveMcqOption);
  const navigate = useNavigate()
  const userId = useSelector(selectUserId)
  const selectedInformation = useSelector(selectSelectedInformation)

  
  
  const showResult = async () => {

    const selectedMcqs = selectedInformation.map((selectedMcq, index) => {
      return {
        id: selectedMcq.selectedIndex,
        correct_option: selectedMcq.selectedOption,
      }
    }
  )

    const data = {
      mcqs: selectedMcqs,
      user_id: userId
    }
    console.log("Calling Check Test")
    try {
      const response = await checkTest(data)
      if(response.ok){
        const { message, error_code, data} = await response.json();
        if(error_code === 0){
          const formattedAnswers = data
          dispatch(setAnswers(formattedAnswers))
        }
        navigate("/result")
      }
    } 
    catch (error) {
      toast.error(error.message)
    }
  }

  const callNext = () => {
    if (!activeMcqOption) {
      handleChange("");
    }
    if(activeMCQ == MCQs.length-1){
      showResult()
    }
    dispatch(handleNext());
  };
  const callPrevious = () => {
    if (!activeMcqOption) {
      handleChange("");
    }
    dispatch(handlePrevious());
  };
  const handleChange = (option) => {
    const selectedIndex = MCQs[activeMCQ].id;
    const mcqData = {
      selectedOption: option,
      selectedIndex,
    };
    dispatch(updateInformation(mcqData));
  };

  const getSelectedOption = (option) => {
    //Step 1: Get the selected Option from Redux
    // Step 2: Take option as input and returns true by checking if selected option is equal to  any input option
    if (option === activeMcqOption) {
      return true;
    }

    return false;
  };

  return (
    <div className="show-mcqs-container">
      <div className="show-mcqs">
        {MCQs.map((mcq, index) => {
          {
            if (index === activeMCQ) {
              return (
                <>
                  <h3>
                    Question#{index + 1} of {MCQs.length}
                  </h3>
                  <p className="statement">{mcq.statement}</p>
                  <div className="options-container">
                    <div className="single-option">
                      <input
                        type="radio"
                        name="option"
                        id="optionA"
                        value="A"
                        defaultChecked={getSelectedOption("A")}
                        onChange={(event) => handleChange(event.target.value)}
                      />
                      <label className="label-option" htmlFor="optionA">
                        A. {mcq.optionA}
                      </label>
                    </div>
                    <div className="single-option">
                      <input
                        type="radio"
                        name="option"
                        id="optionB"
                        value="B"
                        defaultChecked={getSelectedOption("B")}
                        onChange={(event) => handleChange(event.target.value)}
                      />
                      <label className="label-option" htmlFor="optionB">
                        B. {mcq.optionB}
                      </label>
                    </div>
                    <div className="single-option">
                      <input
                        type="radio"
                        name="option"
                        id="optionC"
                        value="C"
                        defaultChecked={getSelectedOption("C")}
                        onChange={(event) => handleChange(event.target.value)}
                      />
                      <label className="label-option" htmlFor="optionC">
                        C. {mcq.optionC}
                      </label>
                    </div>
                    <div className="single-option">
                      <input
                        type="radio"
                        name="option"
                        id="optionD"
                        value="D"
                        defaultChecked={getSelectedOption("D")}
                        onChange={(event) => handleChange(event.target.value)}
                      />
                      <label className="label-option" htmlFor="optionD">
                        D. {mcq.optionD}
                      </label>
                    </div>
                  </div>
                  <div className="mcqs-submit-buttons">
                    <button className="previous-button" onClick={callPrevious}>
                      Previous
                    </button>
                    <br />
                    <button className="next-button" onClick={callNext}>
                      Next
                    </button>
                  </div>
                </>
              );
            }
          }
        })}
      </div>
    </div>
  );
}

export default ShowMCQs;
