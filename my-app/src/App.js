import './App.css';
import { ImageComponent } from "./components/ImageComponent.js";

function App() {
  return (
    <div className="main">
      <div className="info">
      <ImageComponent imageSrc={require("./components/photo.jpg")} imageAlt="Alternative text" />
        <h2>
          Contact
        </h2>
        <div>
          <div>
            <h3>Address</h3>
            <p>Kharkiv, Ukraine</p>
          </div>
          <div>
            <h3>Phone</h3>
            <p>+380669913416</p>
          </div>
          <div>
            <h3>Email</h3>
            <a href="mailto: a.myasoedova@icloud.com">a.myasoedova@icloud.com</a>
          </div>
          <div>
            <h3>LinkedIn</h3>
            <a href="https://www.linkedin.com/in/anastasiia-miasoiedova-485b6a20a/?trk=nav_responsive_tab_profile_pic">https://www.linkedin.com/in/Miasoiedova/</a>
          </div>
        </div>
      </div>
      <div className="jobs">
        <h2>Work Experience</h2>
        <div>
          <p><span>Name of employer:</span><a href="https://abinbevefes.com.ua/">AbInbevEfes</a> <br />
            <span>Dates of employment:</span>04/2021 - present<br />
            <span>Job title:</span>Financial specialist<br />
            <span>Project/Role description:</span>Working with different types of accounting documents. Asssesing and solving the most crucial problems. Working with annual reports.
          </p>
          <p><span>Name of employer:</span> <a href="https://privatbank.ua/">PrivatBank</a> <br />
            <span>Dates of employment:</span>08/2020 - 02/2021<br />
            <span>Job title:</span>Sales Manager <br />
            <span>Project/Role description:</span>Working with new clients of the bank. Promote banking products.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
