var quiz = [

    qOne = {
        q: "Who isnt part of the Tribunal?",
        a:  "Neravar",
        b:  "Vivic",
        c:  "Alemexia",
        d:  "Sotha Sil",
        ca: "Neravar"
    },

    qTwo = {
        q: "Which daedric prince is known as the Mad God?",
        a: "Molag Bal",
        b: "Sheograth",
        c: "Azura",
        d: "Boethiah",
        ca: "Sheograth"
    },

    qThree = {
        q: "Who were the ancestors of the Dunmer?",
        a: "Altmer",
        b: "Ayleid",
        c: "Chimer",
        d: "Maormer",
        ca: "Chimer"
    },

    qFour = {
        q: "What is the name of Morrowinds secret society of assasins?",
        a: "Dark Brotherhood",
        b: "Comonna Tong",
        c: "Morag Tong",
        d: "Shadow Scales",
        ca: "Morag Tong"
    },

    qFive = {
        q: "The Dunmer enslaved which of the following races?",
        a:  "Khajiit",
        b:  "Bosmer",
        c:  "Falmer",
        d:  "Orc",
        ca: "Khajiit"
    }

];

var questionIndex = 0;
var value = 0;
function startQuiz(){
   
    $("#start").attr("onclick", "");
    $("#aOne").val("1"); 
    
    $("#aTwo, #aThree, #aFour").css('visibility', 'visible');
     
    var questionIndex = 0;
    

    function newQuestion(){

        if (questionIndex <= (quiz.length - 1)){
           
            $("#Question").html(quiz[questionIndex].q);
            $("#aOne").html(quiz[questionIndex].a); 
            $("#aTwo").html(quiz[questionIndex].b);
            $("#aThree").html(quiz[questionIndex].c);
            $("#aFour").html(quiz[questionIndex].d);

        }

        else{
            $("#Question").html("Game Over!");
        }
    }

newQuestion();

    $("button").on("click", function(){
        value = $(this).val();
        
        switch(value){
            case "1": 
                alert(quiz[questionIndex].a)
                break;
            case "2":
                alert(quiz[questionIndex].b)
                break;
            case "3":
                alert(quiz[questionIndex].c)
                break;
            case "4":
                alert(quiz[questionIndex].d)
                break;
        };

    });

}




  
  


