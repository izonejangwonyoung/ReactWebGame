import {useState} from "react";

function BullsAndCows() {
    let [count, setCount] = useState();
    let [inputValue, setinputValue] = useState();
    let [baseValue, setbaseValue] = useState();
    let [result, setResult] = useState([]);
    let [outCount, setoutCount] = useState(0);
    let [ballCount, setballCount] = useState(0);
    let [strikeCount, setstrikeCount] = useState(0);
    let [total, setTotal] = useState([])
    const HandleSetCount = () => {
        setCount(count + 1);
    }
    const HandleSetInput = (e) => {
        setinputValue(e.target.value)
    }

    const HandeSetResult = () => {
        let input = [...inputValue]  ///숫자들이 하나씩 배열에 들어가있는 상태임. input=["1","2","3","4"]
        let original = [...baseValue]
        let temp1 = [];
        let outCount = 0;
        let strikeCount = 0;
        let ballCount = 0;
        if (JSON.stringify(input) === JSON.stringify(original)) {
            alert("홈런이므로 게임을 종료합니다.");
            // eslint-disable-next-line no-restricted-globals
            history.go(0)
        }
        for (let p = 0; p < 4; p++) {
            for (let i = 0; i < 4; i++) {
                if (input.includes(original[i], -100)==true) {
                    if (input[i] == original[i]) {
                        strikeCount = strikeCount + 1
                        console.log('strike')
                    } else {
                        ballCount = ballCount + 1
                        console.log('ball')
                    }
                } else {
                    outCount = outCount + 1
                    console.log('out')
                }
            }

        }
        setballCount(ballCount/4)
        setstrikeCount(strikeCount/4)
        setoutCount(outCount/4)
    }
    // console.log(input.every(item=> original.includes(item)))

    //     input.map((a, i) => {
    //             for (let p = 0; p < 4; p++) {
    //                 console.log("작은놈: " + p)
    //                 if (input[i] !== original[p]) {             ///이 배열에 같은 숫자가 있는지 하나씩 체크해서
    //                     temp1.push('out');////아웃이라는 뜻
    //                     console.log("큰놈: " + i)
    //                 } else {
    //                     temp1.push('nonOut');
    //                     console.log("i: " + i)
    //                 }
    //             }
    //             console.log(temp1)
    //             if (temp1.includes('nonOut') === true) {     ///////  temp1 배열에 true면 아웃카운트 하나 늘려줌
    //                 outStatus = outStatus
    //             } else {
    //                 outStatus = outStatus + 1;
    //             }
    //             temp1 = [];
    //         }
    //     )
    //     setOutCount(outStatus)
    //     setCount(count + 1)
    //     console.log(original)
    //     console.log(input)
    // }

    const HandleSetBaseValue = () => {
        let temp = Math.random() * 10000;
        temp = Math.floor(temp)
        setbaseValue(String(temp).padStart(4, 0))
        console.log(baseValue)
    }  ////숫자 범위는 0~9999 이고, 원본 값이 4자리로 도출되지 않더라도 padstart 활용하여 남는 자리를 0으로 채워 총 4자리가 되도록 fix함

    return (
        <div>
            <h4>숫자 야구</h4>

            <input type="text" onChange={HandleSetInput}/>
            <button onClick={() => {
                HandeSetResult()
            }}>도전@!
            </button>
            <button onClick={HandleSetBaseValue}>게임 시작</button>
            <h4>{inputValue}:inputvalue</h4>
            <h4>{outCount}:outcount</h4>
            <h4>{baseValue}:basevalue</h4>
            <h4>strike: {strikeCount}</h4>
            <h4>ball: {ballCount}</h4>
            <h4>out: {outCount}</h4>
            <h4>{count} count</h4>
        </div>
    )
}

export default BullsAndCows;

