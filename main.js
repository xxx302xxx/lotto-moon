
// document.write("<span class='num1'>" + lotto[0] + "</span>");
// document.write("<span class='num2'>" + lotto[1] + "</span>");
// document.write("<span class='num3'>" + lotto[3] + "</span>");
// document.write("<span class='num4'>" + lotto[2] + "</span>");
// document.write("<span class='num5'>" + lotto[4] + "</span>");
// document.write("<span class='num6'>" + lotto[5] + "</span>");

const rollDice = function() {
    let lotto = [];
    while (lotto.length < 6 ) {                       // 로또 변수lotto안에 6개가 채워질때까지(조건) 반복한다.
        let num = parseInt(Math.random() * 45 + 1);   // 1 ~ 45 까지의 랜덤한 자연수를 변수num에 담는다.
        if (lotto.indexOf(num) == -1) {               // ".indexOf(값)"은 값이 있다면 위치 인덱스가 나오고 없으면 -1
            lotto.push(num);                          // 배결안에 값이 없으면 num을 푸쉬 한다.
        };                                            // = 은 값을 넣는다는 의미, ==는 같은지 비교한다 라는 의미
    };

    lotto.sort((a,b)=>a-b);                           // 오름차순
    console.log(lotto);

    let number1 = document.querySelector('.num1');
    let number2 = document.querySelector('.num2');
    let number3 = document.querySelector('.num3');
    let number4 = document.querySelector('.num4');
    let number5 = document.querySelector('.num5');
    let number6 = document.querySelector('.num6');
    number1.innerHTML=lotto[0];
    number2.innerHTML=lotto[1];
    number3.innerHTML=lotto[2];
    number4.innerHTML=lotto[3];
    number5.innerHTML=lotto[4];
    number6.innerHTML=lotto[5];
};

let btn = document.querySelector('span.here');
let goos = document.querySelectorAll('.goo');
let moon = document.querySelector('.container');
let again = document.querySelector('.again');

btn.addEventListener('click', function(){
    btn.style.display = 'none';
    moon.style.display = 'block';
    rollDice();
//    goos.forEach(function(goo){
//        goo.style.display = 'block';
    //});
});


again.addEventListener('click', function(ev){
    ev.preventDefault();
    moon.style.display = 'block';
    rollDice();
});


let reload = document.querySelector('h1.title'); 

reload.addEventListener('click', function(){
    window.location.reload();
});