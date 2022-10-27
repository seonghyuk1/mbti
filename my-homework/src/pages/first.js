/* eslint-disable */
import { Link } from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar';

function First (props) {
    const url = "http://localhost:8081/api/mbti";

    let Page_TOTAL = props.mbti_total;

    console.log(Page_TOTAL)

    let prog_now = props.prog_now;
    let setProg_now = props.setProg_now;

return (
    <div className="App">
        
    <h1 class="mb-4 my-5 text-center">성혁's 초간단 MBTI</h1>

    <ProgressBar now={prog_now} style={{height : 10}}/>


    <div class="card text-center my-3 rounded-pill">
        <div class="card-body" >
            <h4 class="card-title">Q1</h4>
            <h2 class="card-text">회사에 입사할 때 내가 들어가고 싶은 팀은?</h2>
        </div>
        
        <div class="container mb-3">
            <div class="row">
            {/* 상태관리 - 리스트에 저장 값에 따라*/}
                { Page_TOTAL[0] !='T' ?
                    <label class="btn btn-secondary my-1">
                        <input onClick={ () => {
                            {Page_TOTAL.length == 0 && Page_TOTAL.push("T")}
                            {Page_TOTAL[0]=='F' && Page_TOTAL.splice(0,1,"T")}
                            console.log(Page_TOTAL)
                            {setProg_now(8)}
                            
                        }} type="radio" name="Q1"/> 좋은 성과를 내는 팀 
                    </label> :
                    <label class="btn btn-secondary my-1">
                        <input onClick={ () => {
                            {Page_TOTAL.length == 0 && Page_TOTAL.push("T")}
                            {Page_TOTAL[0]=='F' && Page_TOTAL.splice(0,1,"T")}
                            console.log(Page_TOTAL)
                        }} type="radio" name="Q1" defaultChecked /> 좋은 성과를 내는 팀 
                    </label> }

                { Page_TOTAL[0] != "F" ?
                    <label class="btn btn-secondary">
                        <input onClick={() => {
                            {Page_TOTAL.length == 0 && Page_TOTAL.push("F")}
                            {Page_TOTAL[0]=='T' && Page_TOTAL.splice(0,1,"F")}
                            console.log(Page_TOTAL)
                            {setProg_now(8)}
                        }} type="radio" name="Q1"/> 좋은 사람들이 모인 팀
                    </label> :
                    <label class="btn btn-secondary">
                        <input onClick={() => {
                            {Page_TOTAL.length == 0 && Page_TOTAL.push("F")}
                            {Page_TOTAL[0]=='T' && Page_TOTAL.splice(0,1,"F")}
                            console.log(Page_TOTAL)
                        }} type="radio" name="Q1" defaultChecked/> 좋은 사람들이 모인 팀
                    </label> }
            </div>
        </div>
    </div>

    <div class="card text-center my-3 rounded-pill">
        <div class="card-body">
            <h4 class="card-title">Q2</h4>
            <h2 class="card-text">첫 출근 날, 무슨 옷을 입을까?</h2>
        </div>
        <div class="container mb-3">
            <div class="row">

                { Page_TOTAL[1] !='J' ? 
                    <label class="btn btn-secondary my-1">
                        <input onClick={ () => {
                            {Page_TOTAL.length == 1 && Page_TOTAL.push("J")}
                            {Page_TOTAL[1]=='P' && Page_TOTAL.splice(1,1,"J")}
                            console.log(Page_TOTAL)
                            {Page_TOTAL[0] == null && alert("해당 응답은 집계에 포함되지 않았습니다. 모든 문항에 순차적으로 답해주세요.")}
                            {setProg_now(17)}
                        }} type="radio" name="Q2"/> 이미 전날 골라둔 옷으로
                    </label> :

                    <label class="btn btn-secondary my-1">
                        <input onClick={ () => {
                            {Page_TOTAL.length == 1 && Page_TOTAL.push("J")}
                            {Page_TOTAL[1]=='P' && Page_TOTAL.splice(1,1,"J")}
                            console.log(Page_TOTAL)
                            
                        }} type="radio" name="Q2" defaultChecked/> 이미 전날 골라둔 옷으로
                    </label> 
                }


            { Page_TOTAL[1] != "P" ? 
                    <label class="btn btn-secondary">
                        <input onClick={() => {
                                    {Page_TOTAL.length == 1 && Page_TOTAL.push("P")}
                                    {Page_TOTAL[1]=='J' && Page_TOTAL.splice(1,1,"P")}
                                    console.log(Page_TOTAL)
                                    {Page_TOTAL[0] == null && alert("해당 응답은 집계에 포함되지 않았습니다. 모든 문항에 순차적으로 답해주세요.")}
                                    {setProg_now(17)}
                                }} type="radio" name="Q2" id="option4"/> 오늘 가장 끌리는 옷으로
                    </label> :
                    <label class="btn btn-secondary">
                        <input onClick={() => {
                                {Page_TOTAL.length == 1 && Page_TOTAL.push("P")}
                                {Page_TOTAL[1]=='J' && Page_TOTAL.splice(1,1,"P")}
                                console.log(Page_TOTAL)
                        }} type="radio" name="Q2" id="option4" defaultChecked/> 오늘 가장 끌리는 옷으로
                    </label>
            }
                </div>
            </div>
        </div>

    <div class="card text-center my-5 rounded-pill">
        <div class="card-body">
            <h4 class="card-title">Q3</h4>
            <h2 class="card-text">회사에서 첫 과제가 주어진다면 어떤 과제를 하고 싶습니까?</h2>
        </div>
        <div class="container mb-4">
        <div class="row">
                { Page_TOTAL[2] !='S' ? 
                    <label class="btn btn-secondary my-1">
                        <input onClick={ () => {
                            {Page_TOTAL.length == 2 && Page_TOTAL.push("S")}
                            {Page_TOTAL[2]=='N' && Page_TOTAL.splice(2,1,"S")}
                            console.log(Page_TOTAL)
                            {Page_TOTAL[1] == null && alert("해당 응답은 집계에 포함되지 않았습니다. 모든 문항에 순차적으로 답해주세요.")}
                            {setProg_now(25)}
                        }} type="radio" name="Q3" /> 확실한 가이드라인이 있는 과제
                    </label> :
                    <label class="btn btn-secondary my-1">
                        <input onClick={ () => {
                            {Page_TOTAL.length == 2 && Page_TOTAL.push("S")}
                            {Page_TOTAL[2]=='N' && Page_TOTAL.splice(2,1,"S")}
                            console.log(Page_TOTAL)
                        }} type="radio" name="Q3"  defaultChecked/> 확실한 가이드라인이 있는 과제
                    </label> 
                }

                
                { Page_TOTAL[2] !='N' ? 
                    <label class="btn btn-secondary my-1">
                        <input onClick={ () => {
                            {Page_TOTAL.length == 2 && Page_TOTAL.push("N")}
                            {Page_TOTAL[2]=='S' && Page_TOTAL.splice(2,1,"N")}
                            console.log(Page_TOTAL)
                            {Page_TOTAL[1] == null && alert("해당 응답은 집계에 포함되지 않았습니다. 모든 문항에 순차적으로 답해주세요.")}
                            {setProg_now(25)}
                        }} type="radio" name="Q3"/> 자유롭게 내 생각을 펼칠 수 있는 과제
                    </label> :
                    <label class="btn btn-secondary my-1">
                        <input onClick={ () => {
                            {Page_TOTAL.length == 2 && Page_TOTAL.push("N")}
                            {Page_TOTAL[2]=='S' && Page_TOTAL.splice(2,1,"N")}
                            console.log(Page_TOTAL)
                        }} type="radio" name="Q3"  defaultChecked/> 자유롭게 내 생각을 펼칠 수 있는 과제
                    </label> 
                }
            </div>
        </div>
    </div>

    <div class="card text-center my-5 rounded-pill">
        <div class="card-body">
            <h4 class="card-title">Q4</h4>
            <h2 class="card-text">일을 시작할 때 가장 먼저 할 일은?</h2>
        </div>
        <div class="container mb-4">
        <div class="row">   
                { Page_TOTAL[3] !='J' ? 
                    <label class="btn btn-secondary my-1">
                        <input onClick={ () => {
                            {Page_TOTAL.length == 3 && Page_TOTAL.push("J")}
                            {Page_TOTAL[3]=='P' && Page_TOTAL.splice(3,1,"J")}
                            console.log(Page_TOTAL)
                            {Page_TOTAL[2] == null && alert("해당 응답은 집계에 포함되지 않았습니다. 모든 문항에 순차적으로 답해주세요.")}
                            {setProg_now(33)}
                        }} type="radio" name="Q4" /> 기한에 맞추기 위한 스케줄링
                    </label> :
                    <label class="btn btn-secondary my-1">
                        <input onClick={ () => {
                            {Page_TOTAL.length == 3 && Page_TOTAL.push("J")}
                            {Page_TOTAL[3]=='P' && Page_TOTAL.splice(3,1,"J")}
                            console.log(Page_TOTAL)
                        }} type="radio" name="Q4"  defaultChecked/> 기한에 맞추기 위한 스케줄링
                    </label> 
                }

                { Page_TOTAL[3] !='P' ? 
                    <label class="btn btn-secondary my-1">
                        <input onClick={ () => {
                            {Page_TOTAL.length == 3 && Page_TOTAL.push("P")}
                            {Page_TOTAL[3]=='J' && Page_TOTAL.splice(3,1,"P")}
                            console.log(Page_TOTAL)
                            {Page_TOTAL[2] == null && alert("해당 응답은 집계에 포함되지 않았습니다. 모든 문항에 순차적으로 답해주세요.")}
                            {setProg_now(33)}
                        }} type="radio" name="Q4" /> 감을 잡기 위한 자료조사
                    </label> :
                    <label class="btn btn-secondary my-1">
                        <input onClick={ () => {
                            {Page_TOTAL.length == 3 && Page_TOTAL.push("P")}
                            {Page_TOTAL[3]=='J' && Page_TOTAL.splice(3,1,"P")}
                            console.log(Page_TOTAL)
                        }} type="radio" name="Q4"  defaultChecked/> 감을 잡기 위한 자료조사
                    </label> 
                }
            </div>
        </div>
    </div>



    <div class="container text-center my-5">
            <div class="row row-cols">
            <button class="btn btn-primary col-4" disabled >이전</button>
            <div class="col"></div>

            <Link class="btn btn-primary col-4" to='/second' onClick={(e) => {    
                {Page_TOTAL.length < 4 && 
                (alert("모든 문항을 입력하지 않았습니다."), e.preventDefault())}
            }}
            >다음</Link>
            </div>
        </div>
    </div>
    )
}

export default First;














