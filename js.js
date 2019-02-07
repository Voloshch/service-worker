// register service worker
/*var ul=document.getElementById('ul'),div=document.getElementById('div');
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw-test/sw.js', { scope: '/sw-test/' }).then(function(reg) {

    if(reg.installing) {
      console.log('Service worker installing');
    } else if(reg.waiting) {
      console.log('Service worker installed');
    } else if(reg.active) {
      console.log('Service worker active');
    }

  }).catch(function(error) {
    // registration failed
    console.log('Registration failed with ' + error);
  });
}
*/
// функция загрузки каждого изображения через XHR

function imgLoad() {
  // вернуть обещание для загрузки изображения
  return new Promise(function(resolve, reject) {
    var request = new XMLHttpRequest();
    request.open('GET', '1.json',true);
    //request.responseType = 'blob';

    request.onload = function() {
      if (request.status == 200) {
        resolve(JSON.parse(this.responseText));
      } else {
        reject(Error('Image didn\'t load successfully; error code:' + request.statusText));
      }
    };

    request.onerror = function() {
      reject(Error('There was a network error.'));
    };

    // Отправить запрос
    request.send();
  });
}

//var imgSection = document.querySelector('section');
/*
window.onload = function() {
var el;
var xhr = new XMLHttpRequest();
xhr.open('GET', '1.json',true);
xhr.onload=function(){
  const data = this.responseText;
  const items = JSON.parse(data);  
  console.log(items);
  for(var i=0;i<items.length;i++){
    el=document.createElement("li");
    el.innerHTML=items.name;
    ul.appendChild(el);
  }
}
}*/
window.onload = function() {

  // load each set of image, alt text, name and caption
    imgLoad().then(function(items) {
      div=items;
    }, function(Error) {
      console.log(Error);
    });

};