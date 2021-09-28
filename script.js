var result = 0;
var level = 0;
var allLevel = "";
var answerTrue = 0;
var answerFalse = 0;
function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function ShowAll () {
    $(".task").css("display","block");
    $(".container").css("height","260px");
    if (allLevel == "all") {
        $(".task-level").html("Тренировка всей таблицы умножения сразу");
        console.log("Правильных ответов: " + answerTrue + ". Ошибок допущено: " + answerFalse + ".");
    } else {
        $(".task-level").html("Тренировка таблицы умножения на " + level);
    }
    
    // Определяем случайное число для второго множителя
    oneNumber = getRandomInRange(1,10);
    // Определяем чередование множителей
    count = getRandomInRange(1,2);
    // Если выбрана вся таблица, то и значение переменной level будет случайным
    if(allLevel == "all") {
        level = getRandomInRange(1,10);
    }
    // Определяемся с видом задачи
    if (count == 1) {
        task = oneNumber + " * " + level;
    } else if (count == 2) {
        task = level + " * " + oneNumber;
    }
    $(".task-example").html(task);
    // Правильный ответ передается за пределы функции.
    result = oneNumber * level;
    // Определяем варианты ответов
    oneAnswer = getRandomInRange(level,level*10);
    twoAnswer = getRandomInRange(level,level*10);
    threeAnswer = getRandomInRange(level,level*10);
    fourAnswer = getRandomInRange(level,level*10);
    // Проверка на одинаковые варианты ответов
    if(oneAnswer == twoAnswer || oneAnswer == threeAnswer || oneAnswer == fourAnswer || twoAnswer == threeAnswer || twoAnswer == fourAnswer || threeAnswer == fourAnswer) {
        oneAnswer = getRandomInRange(level,level*10);
        twoAnswer = getRandomInRange(level,level*10);
        threeAnswer = getRandomInRange(level,level*10);
        fourAnswer = getRandomInRange(level,level*10);
    }
    $(".answer1").html(oneAnswer);
    $(".answer2").html(twoAnswer);
    $(".answer3").html(threeAnswer);
    $(".answer4").html(fourAnswer);
    // Готовим место для правильного ответа
    count2 = getRandomInRange(1,4);
    countAnswer = ".answer" + count2;
    // Прикрепляем правильный ответ в случайное место
    $(countAnswer).html(result);
}
// Выбор уровня сложности
$(".l2").click(function(){
    allLevel = "";
    level = 2;
    ShowAll ();

});
$(".l3").click(function(){
    allLevel = "";
    level = 3;
    ShowAll ();
});
$(".l4").click(function(){
    allLevel = "";
    level = 4;
    ShowAll ();
});
$(".l5").click(function(){
    allLevel = "";
    level = 5;
    ShowAll ();
});
$(".l6").click(function(){
    allLevel = "";
    level = 6;
    ShowAll ();
});
$(".l7").click(function(){
    allLevel = "";
    level = 7;
    ShowAll ();
});
$(".l8").click(function(){
    allLevel = "";
    level = 8;
    ShowAll ();
});
$(".l9").click(function(){
    allLevel = "";
    level = 9;
    ShowAll ();
});
$(".l-all").click(function(){
    allLevel = "all";
    ShowAll ();
});

// Обработка выбора ответа, сверка с правильным ответом
$(".answer1").click(function(){
    value = Number($(this).html());
    if (value == result) {
        $(".result").css("display", "block").css("color", "DarkGreen").html("Верно!");
        answerTrue++;
        ShowAll ();
    } else if (value != result) {
        $(".result").css("display", "block").css("color", "DarkRed").html("Неправильно!");
        answerFalse++;
        ShowAll ();
    };
});
$(".answer2").click(function(){
    value = Number($(this).html());
    if (value == result) {
        $(".result").css("display", "block").css("color", "DarkGreen").html("Верно!");
        answerTrue++;
        ShowAll ();
    } else if (value != result) {
        $(".result").css("display", "block").css("color", "DarkRed").html("Неправильно!");
        answerFalse++;
        ShowAll ();
    };
});
$(".answer3").click(function(){
    value = Number($(this).html());
    if (value == result) {
        $(".result").css("display", "block").css("color", "DarkGreen").html("Верно!");
        answerTrue++;
        ShowAll ();
    } else if (value != result) {
        $(".result").css("display", "block").css("color", "DarkRed").html("Неправильно!");
        answerFalse++;
        ShowAll ();
    };
});
$(".answer4").click(function(){
    value = Number($(this).html());
    if (value == result) {
        $(".result").css("display", "block").css("color", "DarkGreen").html("Верно!");
        answerTrue++;
        ShowAll ();
    } else if (value != result) {
        $(".result").css("display", "block").css("color", "DarkRed").html("Неправильно!");
        answerFalse++;
        ShowAll ();
    };
});

