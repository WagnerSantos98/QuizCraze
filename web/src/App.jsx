//import { useContext, useEffect } from 'react';
//import { QuizContext } from './context/quiz';

//import Welcome from './components/Welcome';

import Success from './assets/img/success.svg';

import './assets/css/style.css'

function App(){
    //const [quizState, dispatch] = useContext(QuizContext);

    return(
        <div className="App">
            <h1>Quiz Craze</h1>
            <img src={Success} alt="Sucesso"/>
        </div>
    );
}

export default App;