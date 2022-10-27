/* eslint-disable */
import { Link } from "react-router-dom";
import axios from 'axios';
import ProgressBar from 'react-bootstrap/ProgressBar';

function Last (props) {
    const url = "http://localhost:8081/api/mbti";
    let Page_TOTAL = props.mbti_total;

    console.log(Page_TOTAL)    
        
    let my_mbti;
    let prog_now = props.prog_now;
    let setProg_now = props.setProg_now;

    async function SEARCH_RESULT() {
        if (Page_TOTAL.length == 12) 
        try { 
            await axios.post(url, {
                result : Page_TOTAL // url : localhost:8081
            })
            .then( (res) => {
                console.log('성공여부 : ' + res.data)
                axios.get(url)
                .then( (응답) => {
                    console.log(응답.data)
                    
                    //응답결과 문자열 치환
                    my_mbti = 응답.data.join("");
                    console.log(my_mbti)
                })
            })
            } catch (err) {
                console.log(err)
            }
        else
            alert("모든 문항에 검사를 완료 해주세요.")
        }

    return (
        <div className="App">

<h1 class="mb-4 my-5 text-center">성혁's 초간단 MBTI</h1>
        <ProgressBar now={prog_now} style={{height : 10}}/>
        <div class="card text-center my-5 rounded-pill">
            <div class="card-body" >
                <h4 class="card-title">Q9</h4>
                <h2 class="card-text">나의 의견이 팀원들과 다를 때는?</h2>
            </div>
            <div class="container mb-4">
                <div class="row">
                    { Page_TOTAL[8] !='T' ?
                        <label class="btn btn-secondary my-1">
                            <input onClick={ () => {
                                {Page_TOTAL.length == 8 && Page_TOTAL.push('T')}
                                {Page_TOTAL[8]=='F' && Page_TOTAL.splice(8,1,'T')}
                                console.log(Page_TOTAL)
                                {Page_TOTAL[7] == null && alert("해당 응답은 집계에 포함되지 않았습니다. 모든 문항에 순차적으로 답해주세요.")}
                                {setProg_now(75)}
                            }} type="radio" name="Q9"/> 내 생각과 논리를 증명해야해 
                        </label> :
                        <label class="btn btn-secondary my-1">
                            <input onClick={ () => {
                                {Page_TOTAL.length == 8 && Page_TOTAL.push('T')}
                                {Page_TOTAL[8]=='F' && Page_TOTAL.splice(8,1,'T')}
                                console.log(Page_TOTAL)
                            }} type="radio" name="Q9" defaultChecked /> 내 생각과 논리를 증명해야해 
                        </label> }

                    { Page_TOTAL[8] != "F" ?
                        <label class="btn btn-secondary">
                            <input onClick={() => {
                                {Page_TOTAL.length == 8 && Page_TOTAL.push("F")}
                                {Page_TOTAL[8]=='T' && Page_TOTAL.splice(8,1,"F")}
                                console.log(Page_TOTAL)
                                {Page_TOTAL[7] == null && alert("해당 응답은 집계에 포함되지 않았습니다. 모든 문항에 순차적으로 답해주세요.")}
                                {setProg_now(75)}
                            }} type="radio" name="Q9"/> 내 의견을 상대방이 기분 나쁘지 않게 전달해야해
                        </label> :
                        <label class="btn btn-secondary">
                            <input onClick={() => {
                                {Page_TOTAL.length == 8 && Page_TOTAL.push("F")}
                                {Page_TOTAL[8]=='T' && Page_TOTAL.splice(8,1,"F")}
                                console.log(Page_TOTAL)
                            }} type="radio" name="Q9" defaultChecked/> 내 의견을 상대방이 기분 나쁘지 않게 전달해야해
                        </label> }
                    </div>
            </div>
        </div>

        <div class="card text-center my-5 rounded-pill">
            <div class="card-body">
                <h4 class="card-title">Q10</h4>
                <h2 class="card-text">회사 동기가 선배에게 혼나고 있다.</h2>
            </div>
            <div class="container mb-4">
                <div class="row">
                        { Page_TOTAL[9] !='T' ?
                            <label class="btn btn-secondary my-1">
                                <input onClick={ () => {
                                    {Page_TOTAL.length == 9 && Page_TOTAL.push('T')}
                                    {Page_TOTAL[9]=='F' && Page_TOTAL.splice(9,1,'T')}
                                    console.log(Page_TOTAL)
                                    {Page_TOTAL[8] == null && alert("해당 응답은 집계에 포함되지 않았습니다. 모든 문항에 순차적으로 답해주세요.")}
                                    {setProg_now(83)}
                                }} type="radio" name="Q10"/> 더 혼나지 않게 좋은 정보들을 전달해준다.
                            </label> :
                            <label class="btn btn-secondary my-1">
                                <input onClick={ () => {
                                    {Page_TOTAL.length == 9 && Page_TOTAL.push('T')}
                                    {Page_TOTAL[9]=='F' && Page_TOTAL.splice(9,1,'T')}
                                    console.log(Page_TOTAL)
                                }} type="radio" name="Q10" defaultChecked /> 더 혼나지 않게 좋은 정보들을 전달해준다.
                            </label> }

                        { Page_TOTAL[9] != "F" ?
                            <label class="btn btn-secondary">
                                <input onClick={() => {
                                    {Page_TOTAL.length == 9 && Page_TOTAL.push("F")}
                                    {Page_TOTAL[9]=='T' && Page_TOTAL.splice(9,1,"F")}
                                    console.log(Page_TOTAL)
                                    {Page_TOTAL[8] == null && alert("해당 응답은 집계에 포함되지 않았습니다. 모든 문항에 순차적으로 답해주세요.")}
                                    {setProg_now(83)}
                                }} type="radio" name="Q10"/> 동료를 위로해준다
                            </label> :
                            <label class="btn btn-secondary">
                                <input onClick={() => {
                                    {Page_TOTAL.length == 9 && Page_TOTAL.push("F")}
                                    {Page_TOTAL[9]=='T' && Page_TOTAL.splice(9,1,"F")}
                                    console.log(Page_TOTAL)
                                }} type="radio" name="Q10" defaultChecked/> 동료를 위로해준다
                            </label> }
                    </div>
            </div>
        </div>

        <div class="card text-center my-5 rounded-pill">
            <div class="card-body">
                <h4 class="card-title">Q11</h4>
                <h2 class="card-text">처음본 선배가 사적인 이야기로 자꾸 말을 건다.</h2>
            </div>
            <div class="container mb-4">
            <div class="row">
                        { Page_TOTAL[10] !='E' ?
                            <label class="btn btn-secondary my-1">
                                <input onClick={ () => {
                                    {Page_TOTAL.length == 10 && Page_TOTAL.push('E')}
                                    {Page_TOTAL[10]=='I' && Page_TOTAL.splice(10,1,'E')}
                                    console.log(Page_TOTAL)
                                    {Page_TOTAL[9] == null && alert("해당 응답은 집계에 포함되지 않았습니다. 모든 문항에 순차적으로 답해주세요.")}
                                    {setProg_now(91)}
                                }} type="radio" name="Q11"/> 나도 궁금한 것을 이것저것 물어본다
                            </label> :
                            <label class="btn btn-secondary my-1">
                                <input onClick={ () => {
                                    {Page_TOTAL.length == 10 && Page_TOTAL.push('E')}
                                    {Page_TOTAL[10]=='I' && Page_TOTAL.splice(10,1,'E')}
                                    console.log(Page_TOTAL)
                                }} type="radio" name="Q11" defaultChecked /> 나도 궁금한 것을 이것저것 물어본다
                            </label> }

                        { Page_TOTAL[10] != "I" ?
                            <label class="btn btn-secondary">
                                <input onClick={() => {
                                    {Page_TOTAL.length == 10 && Page_TOTAL.push("I")}
                                    {Page_TOTAL[10]=='E' && Page_TOTAL.splice(10,1,"I")}
                                    console.log(Page_TOTAL)
                                    {Page_TOTAL[9] == null && alert("해당 응답은 집계에 포함되지 않았습니다. 모든 문항에 순차적으로 답해주세요.")}
                                    {setProg_now(91)}
                                }} type="radio" name="Q11"/> 대답은 하지만 사실 부담스럽다
                            </label> :
                            <label class="btn btn-secondary">
                                <input onClick={() => {
                                    {Page_TOTAL.length == 10 && Page_TOTAL.push("I")}
                                    {Page_TOTAL[10]=='T' && Page_TOTAL.splice(10,1,"I")}
                                    console.log(Page_TOTAL)
                                }} type="radio" name="Q11" defaultChecked/> 대답은 하지만 사실 부담스럽다
                            </label> }
                </div>
            </div>
        </div>

        <div class="card text-center my-5 rounded-pill">
            <div class="card-body">
                <h4 class="card-title">Q12</h4>
                <h2 class="card-text">퇴근하기전 나는?</h2>
            </div>
            <div class="container mb-4">
            <div class="row">
                        { Page_TOTAL[11] !='J' ?
                            <label class="btn btn-secondary my-1">
                                <input onClick={ () => {
                                    {Page_TOTAL.length == 11 && Page_TOTAL.push('J')}
                                    {Page_TOTAL[11]=='P' && Page_TOTAL.splice(11,1,'J')}
                                    console.log(Page_TOTAL)
                                    {Page_TOTAL[10] == null && alert("해당 응답은 집계에 포함되지 않았습니다. 모든 문항에 순차적으로 답해주세요.")}
                                    alert("검사가 끝났습니다! 검사완료 버튼을 눌러주세요")
                                    {setProg_now(100)}
                                }} type="radio" name="Q12"/> 내일 할일을 미리 정리해둔다
                            </label> :
                            <label class="btn btn-secondary my-1">
                                <input onClick={ () => {
                                    {Page_TOTAL.length == 11 && Page_TOTAL.push('J')}
                                    {Page_TOTAL[11]=='P' && Page_TOTAL.splice(11,1,'J')}
                                    console.log(Page_TOTAL)
                                    alert("검사가 끝났습니다! 검사완료 버튼을 눌러주세요")
                                }} type="radio" name="Q12" defaultChecked /> 내일 할일을 미리 정리해둔다
                            </label> }

                        { Page_TOTAL[11] != "P" ?
                            <label class="btn btn-secondary">
                                <input onClick={() => {
                                    {Page_TOTAL.length == 11 && Page_TOTAL.push("P")}
                                    {Page_TOTAL[11]=='J' && Page_TOTAL.splice(11,1,"P")}
                                    console.log(Page_TOTAL)
                                    {Page_TOTAL[10] == null && alert("모든 문항에 순차적으로 답해주세요.")}
                                    alert("검사가 끝났습니다! 검사완료 버튼을 눌러주세요")
                                    {setProg_now(100)}
                                }} type="radio" name="Q12"/> 자리만 정리하고 떠난다
                            </label> :
                            <label class="btn btn-secondary">
                                <input onClick={() => {
                                    {Page_TOTAL.length == 11 && Page_TOTAL.push("P")}
                                    {Page_TOTAL[11]=='J' && Page_TOTAL.splice(11,1,"P")}
                                    console.log(Page_TOTAL)
                                    alert("검사가 끝났습니다! 검사완료 버튼을 눌러주세요")
                                }} type="radio" name="Q12" defaultChecked/> 자리만 정리하고 떠난다
                        </label> }
                </div>
            </div>
        </div>

        <div class="container text-center my-5">
            <div class="row row-cols">
            <Link class="btn btn-primary col-4" to='/second'>이전</Link>
            <div class="col"></div>
            {Page_TOTAL.length != 12 ?
            <label class="btn btn-primary col-4">검사완료</label> :
            <label class="btn btn-primary col-4" onClick={SEARCH_RESULT}>검사완료</label>}
            {/* <label class="btn btn-primary col-4" onClick={SEARCH_RESULT}>검사완료</label> */}
            {console.log(props.mbti_total)}
            </div>
        </div>
        
    
        <div class='text-center'>
            <button class="btn btn-danger col-4" onClick={() => window.open(`https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-${my_mbti}`, '_blank')}>결과 보러가기</button>
        </div>
        </div>
    )
}

export default Last;