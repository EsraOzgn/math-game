import './App.css';
import {useState} from 'react'

import { MainContext } from './context/MainContext';
import Main from './component/main';
import First from './component/first';


const Data = [
  {
    text: "3 x 4",
    options: [
      { id: 0, text: "22", isCorrect: false },
      { id: 1, text: "32", isCorrect: false },
      { id: 2, text: "12 ", isCorrect: true }
    ],
  },
  {
    text: "5 x 6",
    options: [
      { id: 0, text: "30", isCorrect: true },
      { id: 1, text: "42", isCorrect: false },
      { id: 2, text: "38", isCorrect: false }
    ],
  },
  {
    text: "7 x 4",
    options: [
      { id: 0, text: "28", isCorrect: true },
      { id: 1, text: "33 ", isCorrect: false },
      { id: 2, text: "42", isCorrect: false }
    ],
  },
  {
    text: "8 x 5",
    options: [
      { id: 0, text: "36", isCorrect: false },
      { id: 1, text: "40", isCorrect: true },
      { id: 2, text: "42", isCorrect: false }
    ],
  },
  {
    text: "8 x 3",
    options: [
      { id: 0, text: "18", isCorrect: false },
      { id: 1, text: "22", isCorrect: false },
      { id: 2, text: "24", isCorrect: true }
    ],
  },
  {
    text: "6 x 6",
    options: [
      { id: 0, text: "36", isCorrect: true },
      { id: 1, text: "42", isCorrect: false },
      { id: 2, text: "32", isCorrect: false }
    ],
  },
  {
    text: "9 x 7",
    options: [
      { id: 0, text: "63", isCorrect: true },
      { id: 1, text: "81", isCorrect: false },
      { id: 2, text: "72", isCorrect: false }
    ],
  },
  {
    text: "4 x 2",
    options: [
      { id: 0, text: "10", isCorrect: false },
      { id: 1, text: "8", isCorrect: true },
      { id: 2, text: "6", isCorrect: false }
    ],
  },
  {
    text: "3 x 6",
    options: [
      { id: 0, text: "32", isCorrect: false },
      { id: 1, text: "29", isCorrect: false },
      { id: 2, text: "18", isCorrect: true }
    ],
  },
  {
    text: "5 x 6",
    options: [
      { id: 0, text: "40", isCorrect: false },
      { id: 1, text: "30", isCorrect: true },
      { id: 2, text: "50", isCorrect: false }
    ],
  },
  ];



function App() {


  const [currentQuestion,setCurrentQuestion] = useState(0)
  const [score,setScore] = useState(0)
  const [start,setStart] = useState(true)
  const [truee, setTruee] = useState([true])
  const [final,setFinal] = useState(false)
  const [textt,setTextt] = useState([])



  const value = {
    currentQuestion,
    setCurrentQuestion,
    score,
    setScore,
    start,
    setStart,
    truee,
    setTruee,
    final,
    setFinal,
    textt,
    setTextt,
    Data
  }


  return (
    <MainContext.Provider value={value}>

    {start === true ?
     <First/> :
      <Main/>}

    </MainContext.Provider>
  );
}

export default App;