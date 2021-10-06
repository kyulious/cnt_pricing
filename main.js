const one = document.getElementById("one");
const two = document.getElementById("two");
const year = document.getElementById("year");
const detail1 = document.getElementById("detail1");
const detail2 = document.getElementById('detail2');
const price = document.getElementById("price");
const box1 = document.getElementById("box1");
const radio1 = document.getElementById("radio1");
const radio2 = document.getElementById("radio2");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const box7 = document.getElementById("box7");
const box6 = document.getElementById("box6");
const box5 = document.getElementById("box5");
const btn5 = document.getElementById("btn5");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const title2 = document.getElementById("title2");

const toggle = document.getElementById("checkbox");
const change1 = document.getElementById('change1');
const change2 = document.getElementById('change2');
const change3 = document.getElementById('change3');
const change4 = document.getElementById('change4');
const change5 = document.getElementById('change5');

// 상단 
one.addEventListener("mouseover", function(){
    detail1.style.display="inline";
    price.style.position="relative";
    price.style.left="-91px";
})
one.addEventListener("mouseout", function(){
    detail1.style.display="none";
    price.style.left="0px";
})
two.addEventListener("mouseover", function(){
    detail2.style.display="inline";
    price.style.position="relative";
    price.style.left="-91px";
})
two.addEventListener("mouseout", function(){
    detail2.style.display="none";
    price.style.left="0px";
})

// 무료플랜
box1.addEventListener("click", function(){
    box1.style.backgroundColor="#fff";
    box1.style.border="1px solid grey";
    box1.style.color="#111";
    title2.style.color="rgb(177, 177, 177)";
    radio2.checked=false;
    radio1.checked=true;
    box2.style.backgroundColor="rgb(250, 250, 250)";
    box2.style.color="rgb(177, 177, 177)";
    box5.style.backgroundColor="rgb(250, 250, 250)";
    box5.style.border="1px solid rgb(177, 177, 177)";
    btn5.style.backgroundColor="rgb(250, 250, 250)";
    btn5.style.color="rgb(127, 84, 207)";
    btn5.style.border="1px solid rgb(206, 206, 206)";
    btn5.value="선택하기";
    box3.style.backgroundColor="rgb(250, 250, 250)";
    box3.style.border="1px solid rgb(177, 177, 177)";
    btn3.style.backgroundColor="rgb(250, 250, 250)";
    btn3.style.color="rgb(127, 84, 207)";
    btn3.style.border="1px solid rgb(206, 206, 206)";
    btn3.value="선택하기";
    box4.style.backgroundColor="rgb(250, 250, 250)";
    box4.style.border="1px solid rgb(177, 177, 177)";
    btn4.style.backgroundColor="rgb(250, 250, 250)";
    btn4.style.color="rgb(127, 84, 207)";
    btn4.style.border="1px solid rgb(206, 206, 206)";
    btn4.value="선택하기";
    box6.style.backgroundColor="rgb(250, 250, 250)";
    box6.style.border="1px solid rgb(177, 177, 177)";
    btn6.style.backgroundColor="rgb(250, 250, 250)";
    btn6.style.color="rgb(127, 84, 207)";
    btn6.style.border="1px solid rgb(206, 206, 206)";
    btn6.value="선택하기";
    box7.style.backgroundColor="rgb(250, 250, 250)";
    box7.style.border="1px solid rgb(177, 177, 177)";
    btn7.style.backgroundColor="rgb(250, 250, 250)";
    btn7.style.color="rgb(127, 84, 207)";
    btn7.style.border="1px solid rgb(206, 206, 206)";
    btn7.value="선택하기";
})

box2.addEventListener("click", function(){
    box2.style.backgroundColor="#fff";
    box2.style.border="1px solid rgb(211, 211, 211)";
    box2.style.color="#111";
    title2.style.color="rgb(114, 114, 114";
    //box5.style.backgroundColor="rgb(214, 219, 255)";
    //box5.style.border="1px solid rgb(84, 96, 207)";
    //btn5.style.backgroundColor="rgb(104, 115, 218)";
    //btn5.style.color="#fff";
    //btn5.style.border="1px solid rgb(84, 96, 207)";
    box1.style.backgroundColor=" rgb(250, 250, 250)";
    box1.style.border="1px solid rgb(247, 247, 247)";
    box1.style.color="grey";
    radio2.checked=true;
    radio1.checked=false;
})

// 토글
toggle.addEventListener("click", function(){
    if(toggle.checked == true){
        year.style.color="grey";
        change1.innerText="33,300원";
        change2.innerText="55,600원";
        change3.innerText="77,800원";
        change4.innerText="166,700원";
        change5.innerText="222,200원";
    } else {
        year.style.color="rgb(1, 63, 32)";
        change1.innerText="3만원";
        change2.innerText="5만원";
        change3.innerText="7만원";
        change4.innerText="15만원";
        change5.innerText="20만원";
    }
})


// 유료플랜 박스 별 이벤트
box3.addEventListener("click", function(){
    if(radio1.checked == false){
        box3.style.color="#111";
        btn3.style.color="#fff";
        btn3.style.backgroundColor="rgb(104, 115, 218)";
        btn3.style.border="1px solid rgb(84, 96, 207)";
        box3.style.backgroundColor="rgb(214, 219, 255)";
        box3.style.border="1px solid rgb(84, 96, 207)";
        btn3.value="선택됨";

        //나머지
        box4.style.backgroundColor="#fff";
        box4.style.border="1px solid rgb(177, 177, 177)";
        box4.style.color="rgb(177, 177, 177)";
        btn4.style.border="1px solid rgb(206, 206, 206)";
        btn4.style.backgroundColor="#fff";
        btn4.style.color="rgb(127, 84, 207)";
        btn4.value="선택하기";

        box5.style.backgroundColor="#fff";
        box5.style.border="1px solid rgb(177, 177, 177)";
        box5.style.color="rgb(177, 177, 177)";
        btn5.style.border="1px solid rgb(206, 206, 206)";
        btn5.style.backgroundColor="#fff";
        btn5.style.color="rgb(127, 84, 207)";
        btn5.value="선택하기";

        box6.style.backgroundColor="#fff";
        box6.style.border="1px solid rgb(177, 177, 177)";
        box6.style.color="rgb(177, 177, 177)";
        btn6.style.border="1px solid rgb(206, 206, 206)";
        btn6.style.backgroundColor="#fff";
        btn6.style.color="rgb(127, 84, 207)";
        btn6.value="선택하기";

        box7.style.backgroundColor="#fff";
        box7.style.border="1px solid rgb(177, 177, 177)";
        box7.style.color="rgb(177, 177, 177)";
        btn7.style.border="1px solid rgb(206, 206, 206)";
        btn7.style.backgroundColor="#fff";
        btn7.style.color="rgb(127, 84, 207)";
        btn7.value="선택하기";
    }
    
})

box4.addEventListener("click", function(){
    if(radio1.checked == false){
        box4.style.color="#111";
        btn4.style.color="#fff";
        btn4.style.backgroundColor="rgb(104, 115, 218)";
        btn4.style.border="1px solid rgb(84, 96, 207)";
        box4.style.backgroundColor="rgb(214, 219, 255)";
        box4.style.border="1px solid rgb(84, 96, 207)";
        btn4.value="선택됨";

        //나머지
        box3.style.backgroundColor="#fff";
        box3.style.border="1px solid rgb(177, 177, 177)";
        box3.style.color="rgb(177, 177, 177)";
        btn3.style.border="1px solid rgb(206, 206, 206)";
        btn3.style.backgroundColor="#fff";
        btn3.style.color="rgb(127, 84, 207)";
        btn3.value="선택하기";

        box5.style.backgroundColor="#fff";
        box5.style.border="1px solid rgb(177, 177, 177)";
        box5.style.color="rgb(177, 177, 177)";
        btn5.style.border="1px solid rgb(206, 206, 206)";
        btn5.style.backgroundColor="#fff";
        btn5.style.color="rgb(127, 84, 207)";
        btn5.value="선택하기";

        box6.style.backgroundColor="#fff";
        box6.style.border="1px solid rgb(177, 177, 177)";
        box6.style.color="rgb(177, 177, 177)";
        btn6.style.border="1px solid rgb(206, 206, 206)";
        btn6.style.backgroundColor="#fff";
        btn6.style.color="rgb(127, 84, 207)";
        btn6.value="선택하기";

        box7.style.backgroundColor="#fff";
        box7.style.border="1px solid rgb(177, 177, 177)";
        box7.style.color="rgb(177, 177, 177)";
        btn7.style.border="1px solid rgb(206, 206, 206)";
        btn7.style.backgroundColor="#fff";
        btn7.style.color="rgb(127, 84, 207)";
        btn7.value="선택하기";
    }
    
})

box5.addEventListener("click", function(){
    if(radio1.checked == false){
        box5.style.color="#111";
        btn5.style.color="#fff";
        btn5.style.backgroundColor="rgb(104, 115, 218)";
        btn5.style.border="1px solid rgb(84, 96, 207)";
        box5.style.backgroundColor="rgb(214, 219, 255)";
        box5.style.border="1px solid rgb(84, 96, 207)";
        btn5.value="선택됨";

        //나머지
        box4.style.backgroundColor="#fff";
        box4.style.border="1px solid rgb(177, 177, 177)";
        box4.style.color="rgb(177, 177, 177)";
        btn4.style.border="1px solid rgb(206, 206, 206)";
        btn4.style.backgroundColor="#fff";
        btn4.style.color="rgb(127, 84, 207)";
        btn4.value="선택하기";

        box3.style.backgroundColor="#fff";
        box3.style.border="1px solid rgb(177, 177, 177)";
        box3.style.color="rgb(177, 177, 177)";
        btn3.style.border="1px solid rgb(206, 206, 206)";
        btn3.style.backgroundColor="#fff";
        btn3.style.color="rgb(127, 84, 207)";
        btn3.value="선택하기";

        box6.style.backgroundColor="#fff";
        box6.style.border="1px solid rgb(177, 177, 177)";
        box6.style.color="rgb(177, 177, 177)";
        btn6.style.border="1px solid rgb(206, 206, 206)";
        btn6.style.backgroundColor="#fff";
        btn6.style.color="rgb(127, 84, 207)";
        btn6.value="선택하기";

        box7.style.backgroundColor="#fff";
        box7.style.border="1px solid rgb(177, 177, 177)";
        box7.style.color="rgb(177, 177, 177)";
        btn7.style.border="1px solid rgb(206, 206, 206)";
        btn7.style.backgroundColor="#fff";
        btn7.style.color="rgb(127, 84, 207)";
        btn7.value="선택하기";
    }
    
})

box6.addEventListener("click", function(){
    if(radio1.checked == false){
        box6.style.color="#111";
        btn6.style.color="#fff";
        btn6.style.backgroundColor="rgb(104, 115, 218)";
        btn6.style.border="1px solid rgb(84, 96, 207)";
        box6.style.backgroundColor="rgb(214, 219, 255)";
        box6.style.border="1px solid rgb(84, 96, 207)";
        btn6.value="선택됨";

        //나머지
        box4.style.backgroundColor="#fff";
        box4.style.border="1px solid rgb(177, 177, 177)";
        box4.style.color="rgb(177, 177, 177)";
        btn4.style.border="1px solid rgb(206, 206, 206)";
        btn4.style.backgroundColor="#fff";
        btn4.style.color="rgb(127, 84, 207)";
        btn4.value="선택하기";

        box5.style.backgroundColor="#fff";
        box5.style.border="1px solid rgb(177, 177, 177)";
        box5.style.color="rgb(177, 177, 177)";
        btn5.style.border="1px solid rgb(206, 206, 206)";
        btn5.style.backgroundColor="#fff";
        btn5.style.color="rgb(127, 84, 207)";
        btn5.value="선택하기";

        box3.style.backgroundColor="#fff";
        box3.style.border="1px solid rgb(177, 177, 177)";
        box3.style.color="rgb(177, 177, 177)";
        btn3.style.border="1px solid rgb(206, 206, 206)";
        btn3.style.backgroundColor="#fff";
        btn3.style.color="rgb(127, 84, 207)";
        btn3.value="선택하기";

        box7.style.backgroundColor="#fff";
        box7.style.border="1px solid rgb(177, 177, 177)";
        box7.style.color="rgb(177, 177, 177)";
        btn7.style.border="1px solid rgb(206, 206, 206)";
        btn7.style.backgroundColor="#fff";
        btn7.style.color="rgb(127, 84, 207)";
        btn7.value="선택하기";
    }
    
})

box7.addEventListener("click", function(){
    if(radio1.checked == false){
        box7.style.color="#111";
        btn7.style.color="#fff";
        btn7.style.backgroundColor="rgb(104, 115, 218)";
        btn7.style.border="1px solid rgb(84, 96, 207)";
        box7.style.backgroundColor="rgb(214, 219, 255)";
        box7.style.border="1px solid rgb(84, 96, 207)";
        btn7.value="선택됨";

        //나머지
        box4.style.backgroundColor="#fff";
        box4.style.border="1px solid rgb(177, 177, 177)";
        box4.style.color="rgb(177, 177, 177)";
        btn4.style.border="1px solid rgb(206, 206, 206)";
        btn4.style.backgroundColor="#fff";
        btn4.style.color="rgb(127, 84, 207)";
        btn4.value="선택하기";

        box5.style.backgroundColor="#fff";
        box5.style.border="1px solid rgb(177, 177, 177)";
        box5.style.color="rgb(177, 177, 177)";
        btn5.style.border="1px solid rgb(206, 206, 206)";
        btn5.style.backgroundColor="#fff";
        btn5.style.color="rgb(127, 84, 207)";
        btn5.value="선택하기";

        box6.style.backgroundColor="#fff";
        box6.style.border="1px solid rgb(177, 177, 177)";
        box6.style.color="rgb(177, 177, 177)";
        btn6.style.border="1px solid rgb(206, 206, 206)";
        btn6.style.backgroundColor="#fff";
        btn6.style.color="rgb(127, 84, 207)";
        btn6.value="선택하기";

        box3.style.backgroundColor="#fff";
        box3.style.border="1px solid rgb(177, 177, 177)";
        box3.style.color="rgb(177, 177, 177)";
        btn3.style.border="1px solid rgb(206, 206, 206)";
        btn3.style.backgroundColor="#fff";
        btn3.style.color="rgb(127, 84, 207)";
        btn3.value="선택하기";
    }
    
})
