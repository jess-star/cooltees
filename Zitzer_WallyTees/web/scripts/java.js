

  function slideToggle(myEvent) {
    myEvent.preventDefault();
    myEvent.stopPropagation();
    document.querySelector('.menu').classList.toggle('visible');
  }
  
  function mynav(myEvent) {
      myEvent.preventDefault();
      document.querySelector('.menu').classList.remove('visible');
    }
    function isso(myEvent) {
      if (myEvent.target.closest('.menu')) {
        return;
      }
      document.querySelector('.menu').classList.remove('visible');
    }
    
    function socool(myEvent) {
      if (myEvent.key === 'Escape') {
        document.querySelector('.menu').classList.remove('visible');
      }
    }
    
    document.querySelector('#toggle').addEventListener('click', slideToggle);
    document.addEventListener('click', mynav);
    document.addEventListener('keydown', socool);
  
    