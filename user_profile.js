//-------------------------------------------------------Main slider slide change----------------------------------------------------------------------------

let currentSlide = 0;

function showSlide(index) {

    if (currentSlide==1 && currentSlide2==3){
        setTimeout(function(){document.getElementById("step2input4").focus()},500);
    }else if (currentSlide==2 && currentSlide3==3){
        setTimeout(function(){document.getElementById("step3input4").focus()},500);
    }else if(currentSlide==1 && currentSlide2==0){
        setTimeout(function(){document.getElementById("step2input1").focus()},500);
    }else if(currentSlide==2 && currentSlide3==0){
        setTimeout(function(){document.getElementById("step3input1").focus()},500);
    }

    const slides = document.querySelector('.slides');
    
    const offset = -index * 100;
    slides.style.transform = `translateX(${offset}%)`;
    if (currentSlide==0){
        document.getElementById("mainslider").style.width="50%";
        document.getElementById("body").style.backgroundImage="url('assests/bg1.jpg')";
    }else if (currentSlide==3){
        document.getElementById("mainslider").style.width="40%";
        document.getElementById("body").style.backgroundImage="url('assests/bg3.jpg')";
    }else{
        document.getElementById("mainslider").style.width="55%";
        document.getElementById("body").style.backgroundImage="url('assests/bg2.jpg')";
    }
}

function changeSlide(direction) {
    if (direction==1){
        if (currentSlide < 3){
            currentSlide+=1;
            showSlide((currentSlide-1) + direction);
            
        }
    }
    else if (direction==-1){
        if (currentSlide>0){
            currentSlide-=1;
            showSlide((currentSlide+1) + direction);
            
        }
    }
}

//-------------------------------------------------Step one progress bars----------------------------------------------------------

var tp=0;
function handleInputEvent(key,a) {
    if (a==1){
        id = "progress-bar1"
    }else if (a==2){
        id = "progress-bar2"
    }else if (a==3){
        id = "progress-bar3"
    }else if (a==4){
        id = "progress-bar4"
    }else if (a==5){
        id = "progress-bar5"
    }

    if (document.getElementById(key).value.trim()!=""){
        document.getElementById(id).style.width = "100%"
    }else{
        document.getElementById(id).style.width = "0%"
    }

    tp = 0;
    if(document.getElementById("progress-bar1").offsetWidth=="50"){
        tp+=1;
    }
    if(document.getElementById("progress-bar2").offsetWidth=="50"){
        tp+=1;
    }
    if(document.getElementById("progress-bar3").offsetWidth=="50"){
        tp+=1;
    }
    if(document.getElementById("progress-bar4").offsetWidth=="50"){
        tp+=1;
    }
    if(document.getElementById("progress-bar5").offsetWidth=="50"){
        tp+=1;
    }
    document.getElementById("stepintext").innerHTML = tp + " of 5 (" +(tp*20) +"%)";
}

const idai = {"firstName":1, "lastName":2, "email":3, "password":4, "confirmPassword":5}

for (let key in idai){
    document.getElementById(key).addEventListener('input', function() {
        handleInputEvent(key,idai[key]);
        
    });
}

// ----------------------------------------------------step 1 press Enter Button function------------------------------------------------------------

var step1_filedslist = ["firstName","lastName","email","password","confirmPassword"];
for (i of step1_filedslist){
    document.getElementById(i).addEventListener("keypress",function(event){
        if (event.key==="Enter"){
            enter();
        }
    });
}


function enter(){
    if (document.getElementById("firstName").value==""){
        document.getElementById("firstName").focus();
    }else if (document.getElementById("lastName").value==""){
        document.getElementById("lastName").focus();
    }else if (document.getElementById("email").value==""){
        document.getElementById("email").focus();
    }else if (document.getElementById("password").value==""){
        document.getElementById("password").focus();
    }else if (document.getElementById("confirmPassword").value==""){
        document.getElementById("confirmPassword").focus();
    }else{
        if (currentSlide==0){
            step1continue();
        }
    }
}

// -------------------------------------------password & confirmpassword show / hide button functions-----------------------------------------------
function showpassword(){
    if (document.getElementById("password").type=="password"){
        document.getElementById("password").type = "text";
        document.getElementById("eye1").innerHTML = "Hide";
    }else{
        document.getElementById("password").type = "password";
        document.getElementById("eye1").innerHTML = "Show";
    }
    
}

function showconfirmpassword(){
    if (document.getElementById("confirmPassword").type=="password"){
        document.getElementById("confirmPassword").type = "text";
        document.getElementById("eye2").innerHTML = "Hide";
    }else{
        document.getElementById("confirmPassword").type = "password";
        document.getElementById("eye2").innerHTML = "Show";
    }
    
}

// ---------------------------------------------------step 1 continue button function--------------------------------------------------------------------------
function step1continue(){
    if (tp==5){
        if (document.getElementById("password").value.length>=8){
            if (document.getElementById("password").value==document.getElementById("confirmPassword").value){
                let ch=0;
                let emailValue = document.getElementById("email").value;
                for (let char of emailValue) { // "in" and "of" key words are different
                    if (char=="@"){
                        ch+=1;
                    }
                }
                if (ch!=1){
                    alert("Email is incorrect")
                }else{
                    changeSlide(1);
                }
            }else{
                alert("The passwords entered do not match. Please ensure both fields contain the same password and try again.")
            }
        }else{
            alert("Enter at least 8 characters for password")
        }
        
    }else{
        alert("Fill all the prompts, and try again")
    }
}


//---------------------------------Second slider slide changhe------------------------------------------------------------

let currentSlide2 = 0;

function showSlide2(index) {
    const inputlist = ["step2input1","step2input2","step2input3","step2input4"];
    
    if (currentSlide2==3){
        document.getElementById("step2next").onclick = function() {changeSlide(1)};
        setTimeout(function(){document.getElementById("step2input4").focus()},500);
    }else{
        document.getElementById("step2next").onclick = function() {changeSlide2(1)};
    }

    if (document.getElementById(inputlist[currentSlide2]).value==""){
        document.getElementById("step2next").innerHTML = "Skip"
    }else{
        document.getElementById("step2next").innerHTML = "Continue 🡲"
    }
    const slides = document.querySelector('.slides2');
    
    const offset = -index * 100;
    slides.style.transform = `translateX(${offset}%)`;

    if(currentSlide2==1){
        document.getElementById('step2back').style.display = 'block';
        setTimeout(function(){document.getElementById("step2input2").focus()},500);
    }
    if (currentSlide2==0){
        document.getElementById('step2back').style.display = 'none';
        setTimeout(function(){document.getElementById("step2input1").focus()},500);
    }

    if (currentSlide2==2){
        setTimeout(function(){document.getElementById("step2input3").focus()},500);
    }
}

function changeSlide2(direction) {
    if (direction==1){
        if (currentSlide2 < 3){
            currentSlide2+=1;
            showSlide2((currentSlide2-1) + direction);   
        }
    }
    else if (direction==-1){
        if (currentSlide2>0){
            currentSlide2-=1;
            showSlide2((currentSlide2+1) + direction);
            
        }
    }
}

//---------------------------------------Second step progress bars-------------------------------------------------------

var tp2=0;
function handleInputEvent2(key2,a) {
    
    if (a==1){
        id = "progress-bar6"
    }else if (a==2){
        id = "progress-bar7"
    }else if (a==3){
        id = "progress-bar8"
    }else if (a==4){
        id = "progress-bar9"
    }

    if (document.getElementById(key2).value.trim()!=""){
        document.getElementById("step2next").innerHTML = "Continue 🡲"
        document.getElementById(id).style.width = "100%"
    }else{
        document.getElementById("step2next").innerHTML = "Skip"
        document.getElementById(id).style.width = "0%"
    }

    tp2 = 0;
    if(document.getElementById("progress-bar6").offsetWidth=="50"){
        tp2+=1;
    }
    if(document.getElementById("progress-bar7").offsetWidth=="50"){
        tp2+=1;
    }
    if(document.getElementById("progress-bar8").offsetWidth=="50"){
        tp2+=1;
    }
    if(document.getElementById("progress-bar9").offsetWidth=="50"){
        tp2+=1;
    }
    document.getElementById("stepintext2").innerHTML = tp2 + " of 4 (" +(tp2*25) +"%)";
}


const idai2 = {"step2input1":1, "step2input2":2, "step2input3":3, "step2input4":4}

for (let key2 in idai2){
    document.getElementById(key2).addEventListener('input', function() {
        handleInputEvent2(key2, idai2[key2]);
    });
}

//-------------------------------------------------Third slider slide change--------------------------------------------

let currentSlide3 = 0;

function showSlide3(index) {
    const inputlist = ["step3input1","step3input2","step3input3","step3input4"];
    
    if (currentSlide3==3){
        document.getElementById("step3next").onclick = function() {summary()};
        setTimeout(function(){document.getElementById("step3input4").focus()},500);
    }else{
        document.getElementById("step3next").onclick = function() {changeSlide3(1)};
    }

    if (document.getElementById(inputlist[currentSlide3]).value==""){
        document.getElementById("step3next").innerHTML = "Skip"
    }else{
        document.getElementById("step3next").innerHTML = "Continue 🡲"
    }
    const slides = document.querySelector('.slides3');
    
    const offset = -index * 100;
    slides.style.transform = `translateX(${offset}%)`;

    if(currentSlide3==1){
        document.getElementById('step3back').style.display = 'block';
        setTimeout(function(){document.getElementById("step3input2").focus()},500);
    }
    if (currentSlide3==0){
        document.getElementById('step3back').style.display = 'none';
        setTimeout(function(){document.getElementById("step3input1").focus()},500);
    }

    if (currentSlide3==2){
        setTimeout(function(){document.getElementById("step3input3").focus()},500);
    }
}

function changeSlide3(direction) {
    if (direction==1){
        if (currentSlide3 < 3){
            currentSlide3+=1;
            showSlide3((currentSlide3-1) + direction);   
        }
    }
    else if (direction==-1){
        if (currentSlide3>0){
            currentSlide3-=1;
            showSlide3((currentSlide3+1) + direction);
            
        }
    }
}

//------------------------------------------------Third step progress bars---------------------------------------------------------

var tp3=0;
function handleInputEvent3(key3,a) {
    
    if (a==1){
        id = "progress-bar10"
    }else if (a==2){
        id = "progress-bar11"
    }else if (a==3){
        id = "progress-bar12"
    }else if (a==4){
        id = "progress-bar13"
    }

    if (document.getElementById(key3).value.trim()!=""){
        document.getElementById("step3next").innerHTML = "Continue 🡲"
        document.getElementById(id).style.width = "100%"
    }else{
        document.getElementById("step3next").innerHTML = "Skip"
        document.getElementById(id).style.width = "0%"
    }

    tp3 = 0;
    if(document.getElementById("progress-bar10").offsetWidth=="50"){
        tp3+=1;
    }
    if(document.getElementById("progress-bar11").offsetWidth=="50"){
        tp3+=1;
    }
    if(document.getElementById("progress-bar12").offsetWidth=="50"){
        tp3+=1;
    }
    if(document.getElementById("progress-bar13").offsetWidth=="50"){
        tp3+=1;
    }
    document.getElementById("stepintext3").innerHTML = tp3 + " of 4 (" +(tp3*25) +"%)";
}


const idai3 = {"step3input1":1, "step3input2":2, "step3input3":3, "step3input4":4}

for (let key3 in idai3){
    document.getElementById(key3).addEventListener('input', function() {
        handleInputEvent3(key3, idai3[key3]);
    });
}

// ---------------------------------------------------step 2 and step 3 press Enter Button function---------------------------------------------------------------------

var step2_filedslist = ["step2input1","step2input2","step2input3"];
for (i of step2_filedslist){
    document.getElementById(i).addEventListener("keypress",function(event){
        if (event.key==="Enter"){
            changeSlide2(1); 
        }
    });
}

document.getElementById("step2input4").addEventListener("keypress",function(event){
    if (event.key==="Enter"){
        if (currentSlide==1){
            step1continue();
        } 
    }
});   

var step2_filedslist = ["step3input1","step3input2","step3input3"];
for (i of step2_filedslist){
    document.getElementById(i).addEventListener("keypress",function(event){
        if (event.key==="Enter"){
            changeSlide3(1); 
        }
    });
}

document.getElementById("step3input4").addEventListener("keypress",function(event){
    if (event.key==="Enter"){
        if (currentSlide==2){
           summary();
        } 
    }
});


//------------------------------------------------------show sumary slide function------------------------------------------------------------------
function summary(){
    var FN = document.getElementById("firstName").value;
    var LN = document.getElementById("lastName").value;
    var EM = document.getElementById("email").value;
    var S2I1 = document.getElementById("step2input1").value;
    var S2I2 = document.getElementById("step2input2").value;
    var S2I3 = document.getElementById("step2input3").value;
    var S2I4 = document.getElementById("step2input4").value;
    var S3I1 = document.getElementById("step3input1").value;
    var S3I2 = document.getElementById("step3input2").value;
    var S3I3 = document.getElementById("step3input3").value;
    var S3I4 = document.getElementById("step3input4").value;

    if (FN==""){
        FN="Skipped";
    }if (LN==""){
        LN="Skipped";
    }if (EM==""){
        EM="Skipped";
    }if (S2I1==""){
        S2I1="Skipped";
    }if (S2I2==""){
        S2I2="Skipped";
    }if (S2I3==""){
        S2I3="Skipped";
    }if (S2I1==""){
        S2I4="Skipped";
    }if (S3I1==""){
        S3I1="Skipped";
    }if (S3I2==""){
        S3I2="Skipped";
    }if (S3I3==""){
        S3I3="Skipped";
    }if (S3I4==""){
        S3I4="Skipped";
    }

    data = "First Name: "+ "<b>"+FN+"</b>" + 
    "<br>Last Name: " +"<b>"+ LN +"</b>"+ 
    "<br>Email: " +"<b>"+ EM +"</b><hr>"+  
    "What part of your mission do you care about most: " +"<b>"+ S2I1 +"</b>"+ 
    "<br>What skill can you offer to support our cause: " +"<b>"+ S2I2 +"</b>"+ 
    "<br>Are you interested in volunteering: " +"<b>"+ S2I3 +"</b>"+ 
    "<br>What types of activities dou you enjoy that could help our cause: " +"<b>"+ S2I4+"</b><hr>"+  
    "What eco-friendly products do you like: " +"<b>"+ S3I1 +"</b>"+ 
    "<br>What inspired you to join our mission: " +"<b>"+ S3I2 +"</b>"+ 
    "<br>How can we make our website or services better: " +"<b>"+ S3I3 +"</b>"+ 
    "<br>Would you like to regularly receive updates and news from us: " +"<b>"+ S3I4+"</b>";
    document.getElementById("summarypara").innerHTML= data;
    changeSlide(1);
}

// -----------------------------------------------------show summary slide confirm button function-----------------------------------------------------
function confirm(){
    document.querySelector(".msg_box_container").style.display = "flex";
    document.querySelector(".EOC").disabled = true;
    document.getElementById("confirm").disabled = true;
    count();
    setTimeout(function(){window.location.replace("../Induwara/home.html");},5000);
}
var t =6;
function count(){
    setInterval(function(){
        t-=1;
        if (t==0){
            return;
        }else{
            document.getElementById("count_down").innerHTML = "Please wait " + t + " seconds";
        }
    },1000)
}