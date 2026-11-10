
(function(){
  var root=document.documentElement;
  try{if(sessionStorage.getItem('portfolio-theme')==='dark')root.dataset.theme='dark';}catch(e){}
  document.addEventListener('DOMContentLoaded',function(){
    var button=document.querySelector('.theme-toggle');
    if(!button)return;
    function update(){
      var dark=root.dataset.theme==='dark';
      button.setAttribute('aria-pressed',String(dark));
      button.setAttribute('aria-label',dark?'Switch to light mode':'Switch to dark mode');
      button.title=dark?'Switch to light mode':'Switch to dark mode';
    }
    button.addEventListener('click',function(){
      var theme=root.dataset.theme==='dark'?'light':'dark';
      root.dataset.theme=theme;
      try{sessionStorage.setItem('portfolio-theme',theme);}catch(e){}
      update();
    });
    update();
  });
})();

document.addEventListener('DOMContentLoaded',function(){
  var header=document.querySelector('body > header');
  if(!header)return;
  var idleTimer;
  function reveal(){
    header.classList.remove('is-scrolling');
  }
  window.addEventListener('scroll',function(){
    clearTimeout(idleTimer);
    if(window.scrollY>0 && !header.contains(document.activeElement)){
      header.classList.add('is-scrolling');
    }else{
      reveal();
    }
    idleTimer=setTimeout(reveal,180);
  },{passive:true});
  header.addEventListener('focusin',reveal);
});
