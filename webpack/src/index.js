import img from './img/10.jpg';
import style from './css/index.css';
console.log('第一次webpack');
var oImg = new Image();
oImg.src = img;
document.body.append(oImg);
