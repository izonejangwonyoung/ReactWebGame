// import {useState} from "react";
// import {type} from "@testing-library/user-event/dist/type";
//
// function Gugudan() {
//
//     const [firstNumber, setfirstNumber] = useState();
//     const [secondNumber, setsecondNumber] = useState();
//     const [inputValue, setinputValue] = useState();
//     const [calcValue, setcalcValue] = useState();
// let a,b;
//     function HandleFirstNumber() {
//         a= Math.floor(Math.random() * 10) + 1;
//         setfirstNumber(a);
//     }
//
//     function HandleSecondNumber() {
//         b = Math.floor(Math.random() * 10) + 1;
//         setsecondNumber(b);
//     }
//
//     function HandleInputValue(e) {
//         let inputResult = e.target.value
//         setinputValue(inputResult);
//     }
//
//     function HandleCalcValue(a, b) {
//         let result = a * b;
//         setcalcValue(result);
//     }
//
//     return (<div>
//         <h4>구구단 게임</h4>
//         <button onClick={()=>{HandleFirstNumber(); HandleSecondNumber()}}>시작하기</button>
//         <h2>{firstNumber} X {secondNumber} 는?</h2>
//         <input type="text" onChange={HandleInputValue}/>
//         <button type="submit"> 제출</button>
//         <button onClick={HandleCalcValue}>계시ㅏㄴ한거나온다</button>
//     <div>{console.log(type(calcValue))}</div>
//     </div>)
// }
//
// export default Gugudan

import {useRef, useState} from "react";

function Gugudan() {

    const [firstNumber, setFirstNumber] = useState(randomNumber());
    const [secondNumber, setSecondNumber] = useState(randomNumber());
    const [result, setResult] = useState('');
    const [value, setValue] = useState('');
    const inputRef = useRef();

    function randomNumber() {
        return Math.ceil(Math.random() * 9)
    }

    const onSubmit = (e) => {
        alert("Woogae babo")
        e.preventDefault();
        if (parseInt(value) === firstNumber * secondNumber) {
            setResult('정답!')
            setValue();
            newQuiz();
            inputRef.current.focus();
        } else {
            setResult('아닌데')
            setValue();
            inputRef.current.focus();
        }
    }

    const userInput = (e) => {
        setValue(e.target.value);
    };
    const newQuiz = () => {
        setFirstNumber(randomNumber());
        setSecondNumber(randomNumber());
    };

    return(
        <div className="gugudan-container">
            <form onSubmit={onSubmit}>
                <h2 className="title">구구단 게임</h2>
                <p className="quiz-txt">
                    문제 : {firstNumber} × {secondNumber}
                </p>
                <input ref={inputRef} value={value} onChange={userInput} placeholder="정답을 입력하세요." type="number" />
                <button>확인</button>
                <p className="result"> {result}</p>
            </form>
        </div>

    )
}

export default Gugudan;