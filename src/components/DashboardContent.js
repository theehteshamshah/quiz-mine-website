import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import CheckMarks from "./CheckMarks"; 
import { classes } from "../data/Data";
import { subjects } from "../data/Data";
import { getAllSkills } from "../api/SkillApi";
import { GenerateTest } from "../api/TestApi";
import { Navigate, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { setMcqs } from "../store/showMcqSlice";
import { useDispatch } from "react-redux";

function DashboardContent() {
  const dispatch = useDispatch();
  const [classId, setClassId] = useState(0);
  const [subjectId, setSubjectId] = useState(0);

  const [chapterIndex, setChapterIndex] = useState(0);
  const navigate = useNavigate();
  const [className, setClassName] = useState("");
  const [subject, setSubject] = useState("");
  const [chapter, setChapter] = useState("");
  const [numberOfMcqs, setNumberOfMcqs] = useState("");
  const [wholeData, setWholeData] = useState([]);
  const [filteredObjects, setFilteredObjects] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      console.log("Calling Get All Skills");
      try {
        const response = await getAllSkills();
        if (response.ok) {
          const data = await response.json();
          setWholeData(data);
        }
      } catch (error) {
        toast.error(error.message);
      }
    };
    fetchSkills();
  }, []);

  useEffect(() => {
    const filteredChapters = wholeData.filter((value, index) => {
      return value.class == className && value.subject == subject;
    });
    setFilteredObjects(filteredChapters);
    if (filteredChapters.length > 0) {
      setChapter(filteredChapters[0].chapter);
    }
  }, [className, subject]);

  const chaptersObject = (event) => {
    console.log(event.target.selectedIndex);
    console.log(subjects[event.target.selectedIndex]);
    setChapterIndex(event.target.selectedIndex);
  };
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
      <h1>Dashboard</h1>
      <div className="class-name">
        <h2>10th Class</h2>
        <p>
          Your currently active class is: 10th class. Do you want to{" "}
          <NavLink to="/settings">Switch Class</NavLink>
        </p>
      </div>
      <div className="dashboard-parts">
        <div className="short-analytics">
          <h3>Overall Performance</h3>

          <h4>Your Progress</h4>
          <div className="progress-div">
            <h4>Lessons</h4>
            <p>17 completed out of 180</p>
          </div>
        </div>
        <div className="choose-test">
          <div className="choose-test-upper">
            <div className="container1">
              <h2>Let's start a quick test</h2>
              <p>Fill the below requirements</p>
            </div>
          </div>
          <form className="practice-mcqs-content" onSubmit={showMCQs}>
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
                return (
                  <option value={subject.subject}>{subject.subject}</option>
                );
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
      </div>
    </div>
  );
}

export default DashboardContent;
