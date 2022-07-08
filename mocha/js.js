"use strick";
// function min(a, b) {
//     if (a > b) { return b; } else { return a; }
// }

// console.log(min(5, 3));

// function pow(a, b) {
//     if (a > 0 && b > 0) {
//         return a ** b;
//     }
// }
// console.log(pow(0, 3));


// let ask = (question, yes, no) => (confirm(question)) ? yes() : no();


// ask(
//     "Ви згодні?",
//     () => alert("Ви погодились."),

//     () => alert("Ви скасували виконання.")
// );

function pow(x, n) {
    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}

let x = prompt("x?", ''),
    n = prompt("n?", '');


if (n <= 0) {
    alert(`Power ${n} is not supported,
    please enter an integer number greater than zero`);
} else {
    alert(pow(x, n));
}


describe("pow", function () {

    function makeTest(x) {
        let expected = x * x * x;
        it(`${x} піднесене до степеня 3 дорівнює ${expected}`, function () {
            assert.equal(pow(x, 3), expected);
        });
    }

    for (let x = 1; x <= 5; x++) {
        makeTest(x);
    }

    it("для недійсних n результатом є NaN", function () {
        assert.isNaN(pow(2, -1));
    });

    it("для не цілих n результатом є NaN", function () {
        assert.isNaN(pow(2, 1.5));
    });
});