// Модальное окно для всех лид-форм, данные могут меняться
const modalCta = new tingle.modal({
    cssClass: ["ctaTingle"],
    onOpen: function () {
        common.formsListener(".tingle-modal .leadData"); // прикручиваем прослушку submit'а текущей формы в модале
    }
});
let common = sendData(modalCta);

function Calculator(rootNode, price) {
    this.counted = (value) => {
        let v = Math.round(value);
        if (v>299) {
            qS(".calculatorCta .discountAlert").innerHTML = "Внимание! На объёмы от 300 кг возможны скидки! Оставляйте заявку!";
        } else {
            qS(".calculatorCta .discountAlert").innerHTML = "";
        };
        qS(`${rootNode} .counted`).innerHTML = `${v} кг`;
        let pattern = /(?=\B(?:\d{3})+(?!\d))/g;
        let calculated = v * price;
        qS(`${rootNode} .getPrice`).dataset.price = calculated.toString().replace(pattern, " ");
        //yId.reachGoal('calculated');
    };
    ( function() {
        fClick(`${rootNode} .getPrice`, (e) => {
            e.preventDefault();
            modalCta.setContent(qS(".calculatorCta").innerHTML);
            qS(".ctaTingle .calculatedPrice span").innerHTML = e.originalTarget.dataset.price;
            modalCta.open();
            //yId.reachGoal('calcPrice');
        });
    } )();
}

const calcAdmix    = new Calculator(".calcAdmix", 330),
      calcPenetron = new Calculator(".calcPenetron", 330);