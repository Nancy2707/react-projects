import React from "react";
import "./App.css";
import questions from "./Components/Data";
import Question from "./Components/Questions";

const App = () => {
  return (
    <div className="container">
      <h1>FAQ's</h1>
      <section className="info">
        {questions.map((ques) => (
          <Question key={ques.id} title={ques.title} info={ques.info} />
        ))}
      </section>
    </div>
  );
}

export default App;

