import { useState } from "react";

import "./App.css";
import List from "./components/List";

function App() {
  const [jobs, setJobs] = useState([
    { id: 1, title: "Teacher", price: 2000 },
    { id: 2, title: "Painter", price: 4000 },
    { id: 3, title: "Memer", price: 10000 },
  ]);

  return (
    <div className="App">
      <header>
        <h1>Job Board</h1>
      </header>
      <main>
        <div>
          <ul className="job-list">
            {jobs.map((jobs) => (
             <List jobs={jobs}/>
            ))}
          </ul>
        </div>
      </main>
      <footer>
        <form action="" onSubmit={(event) => {
              event.preventDefault();
              let jobTitle = event.target.job.value
              let salary = event.target.salary.value
              setJobs(jobTitle,salary)
            }}>
          <label htmlFor="">
            Add a profession
            <input type="text" name="job" />
          </label>
          <label htmlFor="">
            Add a salary
            <input type="text" name="salary" />
          </label>
          <button>Submit</button>
        </form>
      </footer>
    </div>
  );
}

export default App;
