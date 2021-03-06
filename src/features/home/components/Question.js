import React,{useState, useEffect} from 'react';
import {CSSTransition} from "react-transition-group";

import FreeTextQuesion from './FreeTextQuestion';
import MultipleChoiceQuestion from './MultipleChoiceQuestion';
import '../../../resources/CSSTransition.css'

const Question = ({question,onSelectAnswer}) => {

    const[showTransition,setShowTransition] = useState(false);

    useEffect(()=>{
        setShowTransition(false);
        setTimeout(() => {
            if(question){
                setShowTransition(true);
            }
        },200)
        
        return ()=> {
            setShowTransition(false);

        }
    },[question]);

    const handleAnswer = (answer) => {
        onSelectAnswer(answer);

    }

    const  renderQuestion = () => {
        switch(question.question_type) {
            case 'multiple-choice':
                return <MultipleChoiceQuestion question={question} onSelectAnswer={(answer)=>handleAnswer(answer)} />

            case 'text':
                return <FreeTextQuesion question={question} onSelectAnswer={(answer)=>handleAnswer(answer)}/>
        }
    }

return (
    <div className='App-question'>
        <CSSTransition in={showTransition} timeout={300} classNames="example" unmountOnExit>
            <div>
            <div className='App-question-title' style={{margin:'5px',alignItems:'flex-start', textAlign:'left', marginBottom:'50px'}}>{question.headline}</div>
                {renderQuestion()}
            </div>
        
        </CSSTransition>
    </div>
)
}

export default Question;