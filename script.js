let route =
    [
        "Холодна Гора",
        "Вокзальна",
        "Центральний ринок",
        "Майдан Конституції",
        "Левада",
        "Спортивна",
        "Заводська",
        "Турбоатом",
        "Палац спорту",
        "Армійська",
        "Ім. О.С. Масельського",
        "Тракторний завод",
        "Індустріальна",
    ];


function schul() {
    // let arr = [].concat(route);

    let arr = [...route];
    while (arr.length > 0) {
        alert(arr.shift());
    }
    alert('Ви доїхали до школи!');
}

function home() {
    // let arr = [].concat(route);
    
    let arr = [...route];
    while (arr.length > 0) {
        alert(arr.pop());
    }
    alert('Ура! Вітаю вдома.');
}