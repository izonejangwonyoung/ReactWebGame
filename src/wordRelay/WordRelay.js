import {useState} from "react";

function WordRelay() {
    const [inputValue, setinputValue] = useState('');
    const [resultValue, setresultValue] = useState('');
    let [usedValue, setusedValue] = useState('엔믹스');

    function handleInputValue(e) {
        setinputValue(e.target.value)  ////input 창 입력 값 대입
    }

    function handleUsedValue() {
        let copy = inputValue;
        setusedValue(copy);
    }


    function handleResultValue() {
        if (inputValue.slice(0,1) === usedValue.slice(-1)) {
            setresultValue('true')
        } else {
            setresultValue('false')
        }
    }


    return (

        <div>
            <h2>재미있는 끝말잇기</h2>
            <h3>{usedValue}</h3>
            <input onChange={handleInputValue} type="text" placeholder="그 다음 들어갈 말은~??"/>
            <button onClick={() => {
                handleUsedValue()
                handleResultValue()
            }}>제출!
            </button>
            <p>{inputValue}</p>
            <p>입력한 글자의 마지막 글자:{usedValue.slice(-1)}</p>
            <p>방금 적은 글자의 첫 글자:{inputValue.slice(0,1)}</p>
            <p>{resultValue}</p>
        </div>

    )
}

export default WordRelay;