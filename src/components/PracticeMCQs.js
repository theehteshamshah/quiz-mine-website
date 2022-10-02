import { useState } from "react";
import { classes } from "../data/Data";
import { subjects } from "../data/Data";
import { chapters } from "../data/Data";
import { Navigate,  useNavigate } from "react-router-dom"

function AddMCQsContent() {
    const [classId,setClassId]=useState(0)
    const [subjectId,setSubjectId]=useState(0)
    const [chapterIndex,setChapterIndex]=useState(0)
    const navigate = useNavigate()
    const chaptersObject = (event) =>{
        console.log(event.target.selectedIndex)
        console.log(subjects[event.target.selectedIndex]);
        setChapterIndex(event.target.selectedIndex)
    }
    const showMCQs = () =>{
        navigate("/show")
    }
  return (
    <>
      <div className="practice-mcqs-content">
        <select name="classes-dropdown" className="classes-dropdown">
          {classes.map((value, index) => {
            return (
            <option value={value.class}>{value.class}</option>
            );
            })}
        </select>
        <select name="subjects-dropdown" className="subjects-dropdown"   onChange={chaptersObject}>
            {
                subjects.map((subject,index)=>{
                    return(
                        <option
                         value={subject.subject}>{subject.subject}</option>
                    )
                })
            }
        </select>
        <select name="chapters-dropdown" className="chapters-dropdown">
            {

                subjects[chapterIndex].chapters.map((chapter,index)=>{
                    console.log("chapter",subjects[chapterIndex].chapters)
                    return(
                        <option value={chapter.id} >{chapter.topic}</option>
                    )
                })
            }
        </select>
       
        <div className="input-container">
            <label htmlFor="question">Question</label>
            <br />
            <input type="text"  id="question" />
            <span>
                <button onClick={showMCQs}>Done</button>
            </span>
        </div>

      </div>
    </>
  );
}

export default AddMCQsContent;
