/* eslint-disable */
import { Link } from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar';

function Second (props) {
    const url = "http://localhost:8081/api/mbti";

    let Page_TOTAL = props.mbti_total;
    let prog_now = props.prog_now;
    let setProg_now = props.setProg_now;

    console.log(Page_TOTAL)

return (
    <div className="App">

<h1 class="mb-4 my-5 text-center">성혁's 초간단 MBTI</h1>

    <ProgressBar now={prog_now} style={{height : 10}}/>


    <div class="card text-center my-5 rounded-pill">
        <div class="card-body" >
            <h4 class="card-title">Q5</h4>
            <h2 class="card-text">점심시간인데 아무도 일어나지 않는 상황. 어떻게 해야할까?</h2>
        </div>
        <div class="container mb-4">
            <div class="row">
                { Page_TOTAL[4] !='I' ?
                    <label class="btn btn-secondary my-1">
                        <input onClick={ () => {
                            {Page_TOTAL.length == 4 && Page_TOTAL.push('I')}
                            {Page_TOTAL[4]=='E' && Page_TOTAL.splice(4,1,'I')}
                            console.log(Page_TOTAL)
                            {Page_TOTAL[3] == null && alert("해당 응답은 집계에 포함되지 않았습니다. 모든 문항에 순차적으로 답해주세요.")}
                            {setProg_now(42)}
                        }} type="radio" name="Q5"/>눈치를 보고 일단 가만히 있는다 
                    </label> :
                    <label class="btn btn-secondary my-1">
                        <input onClick={ () => {
                            {Page_TOTAL.length == 4 && Page_TOTAL.push('I')}
                            {Page_TOTAL[4]=='E' && Page_TOTAL.splice(4,1,'I')}
                            console.log(Page_TOTAL)
                        }} type="radio" name="Q5" defaultChecked /> 눈치를 보고 일단 가만히 있는다 
                    </label> }

                { Page_TOTAL[4] != "E" ?
                    <label class="btn btn-secondary">
                        <input onClick={() => {
                            {Page_TOTAL.length == 4 && Page_TOTAL.push("E")}
                            {Page_TOTAL[4]=='I' && Page_TOTAL.splice(4,1,"E")}
                            console.log(Page_TOTAL)
                            {Page_TOTAL[3] == null && alert("해당 응답은 집계에 포함되지 않았습니다. 모든 문항에 순차적으로 답해주세요.")}
                            {setProg_now(42)}
                        }} type="radio" name="Q5"/> 밥 안드시냐고 옆 사람에게 한번 물어본다
                    </label> :
                    <label class="btn btn-secondary">
                        <input onClick={() => {
                            {Page_TOTAL.length == 4 && Page_TOTAL.push("E")}
                            {Page_TOTAL[4]=='I' && Page_TOTAL.splice(4,1,"E")}
                            console.log(Page_TOTAL)
                        }} type="radio" name="Q5" defaultChecked/> 밥 안드시냐고 옆 사람에게 한번 물어본다
                    </label> }
            </div>
        </div>
    </div>

    <div class="card text-center my-5 rounded-pill">
        <div class="card-body">
            <h4 class="card-title">Q6</h4>
            <h2 class="card-text">내가 전혀 모르는 분야의 보고서를 받았다면?</h2>
        </div>
        <div class="container mb-4">
        <div class="row">
                { Page_TOTAL[5] !='S' ?
                    <label class="btn btn-secondary my-1">
                        <input onClick={ () => {
                            {Page_TOTAL.length == 5 && Page_TOTAL.push('S')}
                            {Page_TOTAL[5]=='N' && Page_TOTAL.splice(5,1,'S')}
                            console.log(Page_TOTAL)
                            {Page_TOTAL[4] == null && alert("해당 응답은 집계에 포함되지 않았습니다. 모든 문항에 순차적으로 답해주세요.")}
                            {setProg_now(50)}
                        }} type="radio" name="Q6"/> 꼼꼼하고 정확하게 읽는다 
                    </label> :
                    <label class="btn btn-secondary my-1">
                        <input onClick={ () => {
                            {Page_TOTAL.length == 5 && Page_TOTAL.push('S')}
                            {Page_TOTAL[5]=='N' && Page_TOTAL.splice(5,1,'S')}
                            console.log(Page_TOTAL)
                        }} type="radio" name="Q6" defaultChecked /> 꼼꼼하고 정확하게 읽는다 
                    </label> }

                { Page_TOTAL[5] != "N" ?
                    <label class="btn btn-secondary">
                        <input onClick={() => {
                            {Page_TOTAL.length == 5 && Page_TOTAL.push("N")}
                            {Page_TOTAL[5]=='S' && Page_TOTAL.splice(5,1,"N")}
                            console.log(Page_TOTAL)
                            {Page_TOTAL[4] == null && alert("해당 응답은 집계에 포함되지 않았습니다. 모든 문항에 순차적으로 답해주세요.")}
                            {setProg_now(50)}
                        }} type="radio" name="Q6"/> 전체 의미를 파악해본다
                    </label> :
                    <label class="btn btn-secondary">
                        <input onClick={() => {
                            {Page_TOTAL.length == 5 && Page_TOTAL.push("N")}
                            {Page_TOTAL[5]=='S' && Page_TOTAL.splice(5,1,"N")}
                            console.log(Page_TOTAL)
                        }} type="radio" name="Q6" defaultChecked/> 전체 의미를 파악해본다
                    </label> }
                </div>
            </div>
    </div>

    <div class="card text-center my-5 rounded-pill">
        <div class="card-body">
            <h4 class="card-title">Q7</h4>
            <h2 class="card-text">선배에게 물어보니 무조건 외우라는데, 나의 속마음은?</h2>
        </div>
        <div class="container mb-4">
        <div class="row">
                { Page_TOTAL[6] !='N' ?
                    <label class="btn btn-secondary my-1">
                        <input onClick={ () => {
                            {Page_TOTAL.length == 6 && Page_TOTAL.push('N')}
                            {Page_TOTAL[6]=='S' && Page_TOTAL.splice(6,1,'N')}
                            console.log(Page_TOTAL)
                            {Page_TOTAL[5] == null && alert("해당 응답은 집계에 포함되지 않았습니다. 모든 문항에 순차적으로 답해주세요.")}
                            {setProg_now(59)}
                        }} type="radio" name="Q7"/> 이해를 못하겠는데 어떻게 외우지? 
                    </label> :
                    <label class="btn btn-secondary my-1">
                        <input onClick={ () => {
                            {Page_TOTAL.length == 6 && Page_TOTAL.push('N')}
                            {Page_TOTAL[6]=='S' && Page_TOTAL.splice(6,1,'N')}
                            console.log(Page_TOTAL)
                        }} type="radio" name="Q7" defaultChecked /> 이해를 못하겠는데 어떻게 외우지? 
                    </label> }

                { Page_TOTAL[6] != "S" ?
                    <label class="btn btn-secondary">
                        <input onClick={() => {
                            {Page_TOTAL.length == 6 && Page_TOTAL.push("S")}
                            {Page_TOTAL[6]=='N' && Page_TOTAL.splice(6,1,"S")}
                            console.log(Page_TOTAL)
                            {Page_TOTAL[5] == null && alert("해당 응답은 집계에 포함되지 않았습니다. 모든 문항에 순차적으로 답해주세요.")}
                            {setProg_now(59)}
                        }} type="radio" name="Q7"/> 일단 외우라고하니 외워봐야지
                    </label> :
                    <label class="btn btn-secondary">
                        <input onClick={() => {
                            {Page_TOTAL.length == 6 && Page_TOTAL.push("S")}
                            {Page_TOTAL[6]=='N' && Page_TOTAL.splice(6,1,"S")}
                            console.log(Page_TOTAL)
                        }} type="radio" name="Q7" defaultChecked/> 일단 외우라고하니 외워봐야지
                    </label> }
            </div>
        </div>
    </div>

    <div class="card text-center my-5 rounded-pill">
        <div class="card-body">
            <h4 class="card-title">Q8</h4>
            <h2 class="card-text">회사에서 팀프로젝트의 구성원이 되었다. 나의 속마음은?</h2>
        </div>
        <div class="container mb-4">
        <div class="row">
                { Page_TOTAL[7] !='I' ?
                    <label class="btn btn-secondary my-1">
                        <input onClick={ () => {
                            {Page_TOTAL.length == 7 && Page_TOTAL.push('I')}
                            {Page_TOTAL[7]=='E' && Page_TOTAL.splice(7,1,'I')}
                            console.log(Page_TOTAL)
                            {Page_TOTAL[6] == null && alert("해당 응답은 집계에 포함되지 않았습니다. 모든 문항에 순차적으로 답해주세요.")}
                            {setProg_now(67)}
                        }} type="radio" name="Q8"/> 다른 사람과 일을 잘 할 수 있을까.. 
                    </label> :
                    <label class="btn btn-secondary my-1">
                        <input onClick={ () => {
                            {Page_TOTAL.length == 7 && Page_TOTAL.push('I')}
                            {Page_TOTAL[7]=='E' && Page_TOTAL.splice(7,1,'I')}
                            console.log(Page_TOTAL)
                        }} type="radio" name="Q8" defaultChecked /> 다른 사람과 일을 잘 할 수 있을까..
                    </label> }

                { Page_TOTAL[7] != "E" ?
                    <label class="btn btn-secondary">
                        <input onClick={() => {
                            {Page_TOTAL.length == 7 && Page_TOTAL.push("E")}
                            {Page_TOTAL[7]=='I' && Page_TOTAL.splice(7,1,"E")}
                            console.log(Page_TOTAL)
                            {Page_TOTAL[6] == null && alert("해당 응답은 집계에 포함되지 않았습니다. 모든 문항에 순차적으로 답해주세요.")}
                            {setProg_now(67)}
                        }} type="radio" name="Q8"/> 사람이 모이면 시너지가 날거야
                    </label> :
                    <label class="btn btn-secondary">
                        <input onClick={() => {
                            {Page_TOTAL.length == 7 && Page_TOTAL.push("E")}
                            {Page_TOTAL[7]=='I' && Page_TOTAL.splice(7,1,"E")}
                            console.log(Page_TOTAL)
                        }} type="radio" name="Q8" defaultChecked/> 사람이 모이면 시너지가 날거야
                    </label> }
            </div>
        </div>
    </div>



    <div class="container text-center my-5">
            <div class="row row-cols">
            <Link class="btn btn-primary col-4" to='/' onClick={() => {
                }
                } >이전</Link>
            <div class="col"></div>

            <Link class="btn btn-primary col-4" to='/last' onClick={(e) => {    
                {Page_TOTAL.length < 8 && 
                (alert("모든 문항을 입력하지 않았습니다."), e.preventDefault())}

                

                //unbind()
                //왜인지 서버 post요청은 onClick의 익명함수에 적용 X

            }}
            >다음</Link>
            </div>
        </div>
    </div>
    )
}

export default Second;