function AboutPage() {
  return (
    <>
      <div className="content">
        <div className="aim">
          <h1>Our Aim</h1>
          <p>
            Quiz Mine is a platform where you will find all the relevant MCQs
            for your subjects. We have made this website for the betterment of
            education in Pakistan. Using this website, you can ace your board
            exams and entrance tests.
          </p>
        </div>
        <div className="introduction">
          <h1>Our Founders</h1>
          <img src="/founders.jpg" className="founders" alt="" />
        </div>
        <div className="intro-cards-div">
          <div className="intro-card">
            <div className="intro-cad-image">
              <img src="/umar.JPG" alt="" srcset="" />
            </div>
            <div>
              <h2>Umar Mutaza</h2>
              <h4>L.L.B from G.C University Faisalabad</h4>
              <button>Connect with Him</button>
            </div>
          </div>
          <div className="intro-card">
            <div className="intro-cad-image">
              <img src="/manan.png" alt="" srcset="" />
            </div>
            <div>
              <h2>Manan Nasir</h2>
              <h4>Mechanical Engineering from PIEAS</h4>
              <button>Connect with Him</button>
            </div>
          </div>
          <div className="intro-card">
            <div className="intro-cad-image">
              <img src="/hamid.jpg" alt="" srcset="" />
            </div>
            <div>
              <h2>Hamid Ali</h2>
              <h4>Masters in English from G.C University Faisalabad</h4>
              <button>Connect with Him</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
