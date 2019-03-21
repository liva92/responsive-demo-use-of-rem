import './index.scss'

//获取视觉窗口尺寸
let htmlWidth = document.documentElement.clientWidth ||document.body.clientWidth;
//获取html元素
let htmlDOM = document.getElementsByTagName('html')[0];
//动态设置html元素的font-size
htmlDOM.style.fontSize = htmlWidth / 10 + 'px';
//监听屏幕窗口变化，设置font-size
window.addEventListener('resize', (e) => {
let htmlWidth = document.documentElement.clientWidth ||document.body.clientWidth;
  htmlDOM.style.fontSize = htmlWidth / 10 + 'px';

})
