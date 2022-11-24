////가위바위보 게임


import {useEffect, useState} from "react";

function RPS() {
    let [count, setCount] = useState();
    let [winCount, setWinCount] = useState();
    let [userResult, setUserResult] = useState("111");
    let [comResult, setComResult] = useState("");
    let [gameResult, setGameResult] = useState();
    let [buttonState, setButtonState] = useState('게임 시작');
    let rps = ["rock", "scissor", "paper"];
    useEffect(() => {
        console.log(comResult)
    }, [comResult])
    useEffect(() => {
        console.log('useEffect called')
        },[userResult])
    const HandleButtonState = () => {
        if (buttonState == "게임 시작") {
            setButtonState("게임 종료")
        } else {
            setButtonState("게임 시작")
        }
    }
    const HandleComResult = () => {
        let value = rps[Math.floor(Math.random() * rps.length)];
        setComResult(value);
    }
    // useEffect(()=>{
    //     setComResult(value);
    // },[value])

    const HandleGameResult = () => {
        if (userResult === 'true') {
            return <div>너가 이김 ㅋㅋ</div>
        } else if (userResult === 'false') {
            return <div>너가 짐 ㅋㅋ ㅄ</div>
        } else if (userResult === 'nono') {
            return <div>비겼네~~~~ㅋㅋㄹㅃㅃ</div>
        }
    }
    const clickScissor = () => {
        setUserResult('scissor')
        if (comResult == "rock") {
            setUserResult(false)
        } else if (comResult == "paper") {
            setUserResult(true)
        } else {
            return null;
        }
    }
    const clickRock = () => {
        console.log(comResult)
        if (comResult == "scissor") {
            setUserResult("true")
        } else if (comResult == "paper") {
            setUserResult("false")
        } else {
            setUserResult("nono")
        }
    }
    const clickPaper = () => {
        if (comResult == "rock") {
            setUserResult(true)
        } else if (comResult == "scissor") {
            setUserResult(false)
        } else {
            return null;
        }
    }

    return (

        <div>
            <h4>가위바위보 게임</h4>
            <button onClick={HandleButtonState}>{buttonState}</button>
            <button onClick={
                HandleComResult
            }>GAME START
            </button>
            <br/>
            <button onClick={() => {
                clickScissor();
                HandleGameResult()
            }}>가위
            </button>
            <button onClick={() => {
                clickRock();
                HandleGameResult()
            }}>바위
            </button>
            <button onClick={() => {
                clickPaper();
                HandleGameResult()
            }}>보
            </button>

            <h2>사실 컴퓨터는 {comResult}를 냈지요</h2>

            <h2>결과는~~~~ {<HandleGameResult/>}</h2>
        </div>
    )
}

export default RPS;