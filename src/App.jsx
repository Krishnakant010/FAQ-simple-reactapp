import { useState } from "react";
import "./App.css";
import data from "./data";
import SingleQuestion from "./SingleQuestion";
function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <div className="container">
      <h3> Questions and answers</h3>
      <section className="info">
        {questions.map((question) => (
          <SingleQuestion key={question.id} {...question} />
        ))}
      </section>
    </div>
  );
}

export default App;
