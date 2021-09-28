var Target = document.getElementById("current");
        function clock() {
            var time = new Date();

            var year = time.getFullYear();
            var month = time.getMonth();
            var date = time.getDate();
            var day = time.getDay();
            var week = ['일', '월', '화', '수', '목', '금', '토'];

            var hours = time.getHours();
            var minutes = time.getMinutes();
            var seconds = time.getSeconds();

            Target.innerText = 
            `${year}년 ${month + 1}월 ${date}일 ${week[day]}요일 ` +
            `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
                
        }
        clock();
        setInterval(clock, 1000); // 1초마다 실행

var listBox = document.getElementById("ListBox");

function save(){

    
    var toDotext = document.getElementById("toDotext");
    var Info = toDotext.value;


    var new_ListInfoBox = document.createElement("div");
    var new_left_div = document.createElement("div");
    var new_right_div = document.createElement("div");
    var new_img = document.createElement("img");
    var new_p = document.createElement("p");

    new_ListInfoBox.setAttribute("class", "ListInfoBox");
    new_left_div.setAttribute("class", "ListInfoImgBox");
    new_right_div.setAttribute("class", "ListInfoTxtBox");
    new_img.setAttribute("src", "./check-mark.png");
    new_img.setAttribute("id", "checkImg");
    new_img.setAttribute("onclick", "checkDo(this)");
    new_img.setAttribute("class", "checkImgOpacity");
    new_p.setAttribute("id","ListInfoTxt");

    new_p.innerHTML = Info;

    new_left_div.appendChild(new_img);
    new_right_div.appendChild(new_p);

    new_ListInfoBox.appendChild(new_left_div);
    new_ListInfoBox.appendChild(new_right_div);

    listBox.appendChild(new_ListInfoBox);

    var newList = new toDoListInfo(Info, new_ListInfoBox);
    toDoListInfoArr.push(newList);
    //console.log(toDoListInfoArr)

    toDotext.value= null;
}

var cntList = 0;
var toDoListInfoArr = [];

var toDoListInfo = function(text, infoDiv){
    this.index = cntList++;
    this.check = false;
    this.text = text;
    this.infoDiv = infoDiv;
}

function checkDo(obj_img){
    
    var OpacityClass = obj_img.getAttribute("class");
    var ListBox = obj_img.parentElement.parentElement;

    if(OpacityClass == "checkImgOpacity"){ //체크 on
        obj_img.setAttribute("class", "");

        for(var value of toDoListInfoArr){

            if(value.infoDiv == ListBox){

                value.check = true;

            }
        }
        //console.log(toDoListInfoArr);


    }
    else{ //체크 off
        obj_img.setAttribute("class", "checkImgOpacity");

        for(var value of toDoListInfoArr){

            if(value.infoDiv == ListBox){

                value.check = false;

            }
        }
        //console.log(toDoListInfoArr);
    }
    
    
    console.log(toDoListInfoArr);
}

function removeList(){

    for(var i=0;i<toDoListInfoArr.length;i++){
        if(toDoListInfoArr[i].check==true){
            listBox.removeChild(toDoListInfoArr[i].infoDiv);
            toDoListInfoArr.splice(i,1);
            i--;
        }
    }
    
    console.log(toDoListInfoArr);
}

