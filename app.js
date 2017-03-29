document.write("07150741 石文莉<br>")
document.write('Webpack works.<br>')
var commonjs = require("./commonjs.js")
document.write(commonjs.fun())
import {es6fun} from './es6module.js'
document.write(es6fun())