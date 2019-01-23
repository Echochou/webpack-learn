const _ = require('lodash');
export default function printMe(text) {
    // console.log("print from print.js");
    console.log(text);
    console.log(_.join(['print', 'concat'], ' '));
}