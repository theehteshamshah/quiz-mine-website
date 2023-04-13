function CheckMarks() {
  return (
    <>
      <div className="check-marks">
        <div className="check-container">
          <div className="tick-mark"></div>
          <div>
            <p>Correct</p>
          </div>
        </div>
        <div className="check-container">
          <div className="cross"></div>
          <div>
            <p>Wrong</p>
          </div>
        </div>
        <div className="check-container">
          <div className="unattempted"></div>
          <div>
            <p>Unattempted</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckMarks;
