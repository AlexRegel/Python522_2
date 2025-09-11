// DZ_57 (index_dz_57_js_12.html)

// Задание: создать конструктор, который будет создавать объект 
// со свойстввками name, age и job, и методом who:
// Учесть необходимую корректировку и добавления окончания ("ом")


function User(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;  // Преобразуем с конкатенацией и коррекцией ввода:
    this.jobCapLet = this.job.charAt(0).toUpperCase() + this.job.slice(1).toLowerCase() + "ом";
    
    this.who = function(){
        document.writeln("Я " + `<b>${this.name}</b>` + " мне " + `<b>${this.age}</b>` 
            + " лет. Я работаю " + `<b>${this.jobCapLet}</b>` + ". <br>");
    }
}

let dmitriy = new User("Дмитрий", 26, "ДизАЙнер");
let stanislav = new User("Станислав", 29, "пРОГраммист");
let sergey = new User("Сергей", 35, "МЕНЕДЖЕР");

dmitriy.who();
stanislav.who();
sergey.who();
