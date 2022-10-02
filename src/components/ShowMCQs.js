import { MCQs } from "../data/Data";

function ShowMCQs() {
  return (
    <div className="show-mcqs">
      {MCQs.map((mcq, index) => {
        return (
          <>
            <h3>Question#{mcq.id}</h3>
            <p>{mcq.statement}</p>

            <input type="radio" name="option" id="optionA" value="optionA" />
            <label htmlFor="optionA">{mcq.optionA}</label>
            <br />
            <input type="radio" name="option" id="optionB" value="optionB" />
            <label htmlFor="optionB">{mcq.optionB}</label>
            <br />
            <input type="radio" name="option" id="optionC" value="optionC" />
            <label htmlFor="optionC">{mcq.optionA}</label>
            <br />
            <input type="radio" name="option" id="optionD" value="optionD" />
            <label htmlFor="optionD">{mcq.optionA}</label>
            <br />
          </>
        );
      })}
    </div>
  );
}

export default ShowMCQs;
