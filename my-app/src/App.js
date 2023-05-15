import './App.css';
import { ImageComponent } from "./components/ImageComponent.js";

import { useState } from "react";

import { Counter } from "./components/Counter";
import { JobList } from "./components/JobList";
import { JobForm } from "./components/JobForm";

import GithubRepos from './components/Repos';

function App() {

  const [jobs, setJobs] = useState( [
    {
      id: 1,
      title: "AbInbevEfes",
      description: "Working with different types of accounting documents. Asssesing and solving the most crucial problems. Working with annual reports.",
      name: "Specialist of financial reporting",
      link: "https://abinbevefes.com.ua/"
    },
    {
      id: 2,
      title: "PrivatBank",
      description: "Working with new clients of the bank. Promote banking products.",
      name: "Sales Manager",
      link: "https://privatbank.ua/"
    },
  ]);
  
  const addJob = (job) => {
    setJobs([...jobs, job]);
  };

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
        <h1>Work Experience</h1>
        <div>
          <JobList jobs={jobs}/>
        </div>
        <div>
          <JobForm onAddJob={addJob} />
        </div>
      </div>
      <div>
        <GithubRepos/>
      </div>
    </div>
  );
}

export default App;
