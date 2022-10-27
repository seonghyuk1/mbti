// post요청시 바로 받고 바로 주고 할 수 있지만 그러면 바로바로 처리되기때문에
// 한번에 모았다가 마지막 제출시에 줘서 계산을 할 수 있어야 서버에서 처리

const express = require('express');
const app = express();
const path = require('path')

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : true}));

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// 웹은 기본적으로 Origin이 다르면 막음/
let cors = require('cors');
app.use(cors());

app.use(express.static(path.join(__dirname, 'my-homework/build')));


app.listen(8081, function() {
    console.log("8081 포트에서 대기중.")
})

app.get('/', function (요청, 응답) { 
    응답.sendFile(path.join(__dirname, '/my-homework/build/index.html'));
    console.log(응답)
});

const mbtilist = []

app.post('/api/mbti', (요청, 응답) => {
    const { result } = 요청.body;
    console.log("서버로 들어온 답의 문항 " + 요청.body.result)
    mbtilist.push({
        result 
    });
    
    return 응답.send("성공!");   
})


app.get('/api/mbti', (요청, 응답) => {
    
    const ALL_Mbti = mbtilist[0].result

    let E_count = (ALL_Mbti.filter(item => item === 'E'))
    let N_count = (ALL_Mbti.filter(item => item === 'N'))
    let F_count = (ALL_Mbti.filter(item => item === 'F'))
    let J_count = (ALL_Mbti.filter(item => item === 'J'))

    let RESULT_MBTI = [];

    if (E_count.length >= 2) {
        // RESULT_MBTI.splice(0,1,'E')
        RESULT_MBTI.push("E")
    } else {
        // RESULT_MBTI.splice(0,1,'I')
        RESULT_MBTI.push("I")
    } 
    if (N_count.length >= 2) {
        // RESULT_MBTI.splice(1,1,'N')
        RESULT_MBTI.push("N")
    } else {
        // RESULT_MBTI.splice(1,1, 'S')
        RESULT_MBTI.push("S")
    }
    if (F_count.length >= 2) {
        // RESULT_MBTI.splice(2,1,'F')
        RESULT_MBTI.push("F")
    } else {
        // RESULT_MBTI.splice(2,1, 'T')
        RESULT_MBTI.push("T")
    }
    if (J_count.length >= 2) {
        // RESULT_MBTI.splice(3,1,'J')
        RESULT_MBTI.push("J")
    } else {
        // RESULT_MBTI.splice(3,1, 'P')
        RESULT_MBTI.push("P")
    }

    console.log("최종 결과 : " + RESULT_MBTI)
    응답.json(RESULT_MBTI);

})


app.get('*', function (요청, 응답) { 
    응답.sendFile(path.join(__dirname, '/my-homework/build/index.html'));
    // 응답.sendFile(path.join(__dirname, '/my-homework/src/App.js'));
});

