import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import Quiz from "../assets/img/quiz.svg";

import '../assets/css/style.css'

const Welcome = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    return(
        <div id="welcome">
            <h2>Seja Bem-Vindo</h2>
            <p>Clique no botão abaixo para começar!</p>
            <button onClick={() => dispatch({ type: "CHANGE_STAGE" })}>Iniciar</button>
            <img src={Quiz} alt="Quiz"/>
        </div>
    );
};

export default Welcome;