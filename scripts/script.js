  window.onload = function() {
    var navigation=document.getElementById('nav');
    navigation.onclick = function(event) {
        var el=document.getElementsByClassName('navigation_li');
        for (var i=0; i<el.length; i++){
          el[i].classList.remove('active');
        }
        var add_tag=event.target||event.srcElement;
        add_tag.classList.add('active');
      }
  }
