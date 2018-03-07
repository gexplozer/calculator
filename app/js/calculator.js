function Calculator(classNames) {
    this.counted = (value) => {
        qS(`${classNames} .counted`).innerHTML = `${Math.round(value)} кг`;
    };
    ( function() {
        fClick(`${classNames} .getPrice`, (e) => {
            e.preventDefault();
            console.log(e.originalTarget);
        });
    } )();
}

const calcAdmix = new Calculator(".calcAdmix");

