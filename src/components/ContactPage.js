import { classes } from "../data/Data";
function ContactPage() {
  return (
    <>
      <div className="content">
        <h1 className="contact-page-h1">Have Some Questions</h1>
        <div className="contact-page">
        <div className="left-div">
            <img src="/message.png" alt="" srcset="" />
        </div>
        <div className="right-div">
          <form className="input-field form-container contact-page">
            <div className="input-section">
              <label htmlFor="first-name">First Name</label>
              <input
                type="text"
                placeholder="First Name"
                id="first-name"
                className="first-name"
                name="first-name"
              />
            </div>
            <div className="input-section">
              <label htmlFor="last-name">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                id="last-name"
                className="last-name"
                name="last-name"
              />
            </div>
            <div className="input-section">
              <label htmlFor="email">Email</label>
              <input
                className="input-email"
                type="email"
                id="email"
                name="email"
                placeholder="anserson123@gmail.com"
                required
              />
            </div>
            <div className="input-section">
              <label htmlFor="dropdown-register-classes">Class</label>
              <select
                id="dropdown-register-classes"
                name="dropdown-register-classes"
                className="dropdown-register-classes"
                required
              >
                {classes.map((value, index) => {
                  return <option value={value.class}>{value.class}</option>;
                })}
              </select>
            </div>
            <div className="input-section">
              <label htmlFor="question">Your Question</label>
              <textarea
                name="question"
                id="question"
                cols="60"
                rows="5"
              ></textarea>
            </div>

            <div className="bottom-container">
              <button className="button-send-message" type="submit">
                Send Message
              </button>
            </div>
          </form>
        </div>
        </div>
        
      </div>
    </>
  );
}

export default ContactPage;
