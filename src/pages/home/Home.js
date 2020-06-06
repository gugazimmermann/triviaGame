import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { QuestionsContext } from '../../context/Questions';
import styles from "./home.module.css";

const Home = () => {
  const questions = useContext(QuestionsContext);

  return (
    <div className={`${styles.home}`}>
      <h1 className={`center m-16 ${styles.h1}`}>
        Welcome to the Trivia Challenge
      </h1>
      <h2 className="center m-16 ">
        You will be presented with {questions ? questions.length : 'loading...'} True or False questions
      </h2>
      <h2 className="center m-16 ">Can you score 100%?</h2>
      <Link to="/quiz">
        <button className={`center p-8 m-16 ${styles.button}`}>BEGIN</button>
      </Link>
    </div>
  );
};

export default Home;
