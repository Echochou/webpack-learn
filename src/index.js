
import _ from "lodash";
import './style.css';
import Icon from './timg.jpeg';
function component() {
    const element = document.createElement('div');
    element.innerHTML = _.join(['hello', 'webpack'], ' ');
    element.classList.add('test');
    const img = new Image();
    img.src = Icon;
    element.appendChild(img);
    return element;
}

document.body.appendChild(component());