let round = prompt("คุณจะเล่นทั้งหมดกี่รอบ")
let sum_score = 0
for(var i = 1; i <= round; i++){
    let answer = prompt('"หัว" หรือ "ก้อย" ?')
    let random_answer = ""
    let result = ""
    if(Math.floor((Math.random()* 4) <2)){
        random_answer = "หัว"
    }
    else{
        random_answer = "ก้อย"
    }

    if(random_answer == answer){
        sum_score += 1
        result = "ตอบถูก!"
        alert("! ตอบถูก! ยินดีด้วย")
    }
    else{
        result = "ตอบผิดX"
        alert("X ตอบผิดX เสียใจด้วย")
    }
    
    document.getElementById("answer_list").innerHTML += "รอบที่ " + i +answer+ " คุณ" + result + "คำตอบคือ " + random_answer + "<br>" 
}

document.getElementById("score").innerHTML += "<h2>" + "คะแนนรวม " + sum_score + "</h2>"