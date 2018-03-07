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
        qS(`${rootNode} .counted`).innerHTML = `${Math.round(value)} кг`;
        let pattern = /(?=\B(?:\d{3})+(?!\d))/g;
        let calculated = Math.round(value) * price;
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