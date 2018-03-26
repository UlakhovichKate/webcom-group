  window.onload = function() {
    var navigation=document.getElementById('main-menu');
    navigation.onclick = function(event) {
        var el=document.getElementsByClassName('navigation_li');
        var el_as=document.getElementsByClassName('aside_nav');
        for (var i=0; i<el.length; i++){
          el[i].classList.remove('active');
          el_as[i].classList.remove('active');
        }
        var add_tag=event.target||event.srcElement;
        add_tag.classList.add('active');
      }
  }
/*
window.onload = function() {
  var el=document.getElementsByClassName('navigation_li');
  var el_as=document.getElementsByClassName('aside_nav');
  for (var i=0; i<el.length; i++){
    el[i].onclick = function(j){
      return function() {
        el[j].classList.add('active');
        el_as[j].classList.add('active');
      }
    }(i);
  }
}
*/
