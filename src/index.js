
// import _ from "lodash";
import {cube} from './math.js';
import './style.css';
import printMe from './print'

function component() {
    // const element = document.createElement('div');
    const element = document.createElement('pre');
    const btn = document.createElement('button');

    // element.innerHTML = _.join(['hello', 'webpack'], ' ');
    element.innerHTML = [
        'hello webpack',
        '5' + cube(5)
    ].join('\n\n');
    element.classList.add('test');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe.bind(null, 'test webpack hash  2222');

    element.appendChild(btn);
    return element;
}

let element = component();
document.body.appendChild(element);

if (module.hot) {
    module.hot.accept('./math.js', function () {
        console.log('accept printMe updating');
        document.body.removeChild(element);
        element = component();
        document.body.appendChild(element);
    })
}