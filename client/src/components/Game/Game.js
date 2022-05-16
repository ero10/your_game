import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addAnswer } from "../../redux/actions/answerAction";
import './game.css'

const Game = () => {
  const navigate = useNavigate();
  const id = useParams();
  const dispatch = useDispatch();
  const [questions, setQuestion] = useState({});
  const [ input, setInput ] = useState({});
  const inputHandler = (e) => {
  setInput((prev) => ({...prev, [e.target.name]: e.target.value}))
};

useEffect(() => {
  fetch('http://localhost:3001/question', {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({id})
  })
  .then((response) => response.json()).then((data) => setQuestion(data)) 
}, [])

const answerHandler = (e) => {
  if(input.answer.toLowerCase() === questions.answer.toLowerCase()){
    dispatch(addAnswer(id));
    alert('Отлично, сынок!');
    navigate (-1);
  } else {
    alert('Ну ты бобёр ^_^');
    navigate (-1);
  }
}
  return ( 
  <> <div className="container">
  <div className="card-body">
      <h5 className="card-title">{questions.text}</h5>
      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">Ваш ответ</span>
        <input onChange={inputHandler} autoComplete="off" name="answer" type="text" className="form-control"
               aria-label="Sizing example input"
               aria-describedby="inputGroup-sizing-default"/>
      </div>
      <div className="d-grid gap-2">
        <button onClick={answerHandler} id="next" className="btn btn-primary" type="button">Ответить</button>
      </div>
    </div>
  </div>
  </> );
}
 
export default Game;
