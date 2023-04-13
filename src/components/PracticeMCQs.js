import { useState } from "react";
import { classes } from "../data/Data";
import { subjects } from "../data/Data";
import { chapters } from "../data/Data";
import { GenerateTest } from "../api/TestApi";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setMcqs } from "../store/showMcqSlice";
import toast from "react-hot-toast";

function AddMCQsContent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [className, setClassName] = useState("");
  const [filteredObjects, setFilteredObjects] = useState([]);
  const [chapter, setChapter] = useState("");
  const [numberOfMcqs, setNumberOfMcqs] = useState("");
  const [subject, setSubject] = useState("");

  const showMCQs = async (e) => {
    e.preventDefault();
    const skill_id = filteredObjects.find((value, index) => {
      return value.chapter == chapter;
    });
    const data = {
      number_of_mcqs: parseInt(numberOfMcqs),
      skill_id: skill_id.id,
    };
    try {
      const response = await GenerateTest(data);
      if (response.ok) {
        const { message, error_code, data: mcqsData } = await response.json();
        if (error_code === 0) {
          // map
          // global state
          const formattedMCQs = mcqsData.map((mcqData, index) => {
            const parsedOptions = JSON.parse(mcqData.options);
            return {
              id: mcqData.id,
              statement: mcqData.statement,
              optionA: parsedOptions[0].value,
              optionB: parsedOptions[1].value,
              optionC: parsedOptions[2].value,
              optionD: parsedOptions[3].value,
            };
          });
          dispatch(setMcqs(formattedMCQs));
          navigate("/show");
          toast.success(message);
        } else {
          toast.error(message);
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="content">
      <div className="choose-test-upper">
        <div className="container1">
          <h2>Let's start a quick test</h2>
          <p>Fill the below requirements</p>
        </div>
      </div>
      <form className="practice-mcqs-content practice-container" onSubmit={showMCQs}>
        <select
          name="classes-dropdown"
          className="classes-dropdown"
          onChange={(e) => setClassName(e.target.value)}
          required
        >
          {classes.map((value, index) => {
            return <option value={value.class}>{value.class}</option>;
          })}
        </select>
        <select
          name="subjects-dropdown"
          className="subjects-dropdown"
          onChange={(e) => setSubject(e.target.value)}
          required
        >
          {subjects.map((subject, index) => {
            return <option value={subject.subject}>{subject.subject}</option>;
          })}
        </select>
        <label htmlFor="id-mcq">Select Chapter</label>
        <select
          name="chapters-dropdown"
          className="chapters-dropdown"
          onChange={(e) => setChapter(e.target.value)}
          required
        >
          {filteredObjects.map((singleObject, index) => {
            return (
              <option value={singleObject.chapter}>
                {singleObject.chapter}
              </option>
            );
          })}
        </select>
        <div className="number-of-mcqs-container">
          <label htmlFor="number-of-mcqs">Number of MCQs</label>
          <br />
          <input
            type="number"
            required
            id="number-of-mcqs"
            className="number-of-mcqs"
            onChange={(e) => setNumberOfMcqs(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" className="start-test">
            Start Test
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddMCQsContent;
