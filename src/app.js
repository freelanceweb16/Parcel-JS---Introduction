import hello from './hello';
import infoHome from './infoHome';
import calculate from './calculator';

console.log('Hello world!');
console.log(hello());

document.body.innerHTML += infoHome('John', 30);


const result = () => {
   let resultProduct = calculate(2, 3, '*');
   resultProduct += calculate(5, 15, '/');
   resultProduct +=calculate(55, 6, '+');
   resultProduct +=calculate(8, 4, '-');
    return resultProduct;
};
document.body.innerHTML += result();
document.body.innerHTML += hello();



if (module.hot) {
    module.hot.accept(function() {
        console.log('Accepting the updated hello module!');
        window.location.reload();
    })
}