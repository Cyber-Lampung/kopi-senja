function navbar() {
  
  const menuicon = document.querySelector('.menu');
  const inputCheckbox = document.getElementById('menu');
  const navbar = document.querySelector('.navbar');
  const closeI = document.getElementById('close');
  const close = document.querySelector('.close')
  
  menuicon.addEventListener('click', () => {
    if (inputCheckbox.checked){
      navbar.style.left = '-10px';
      menuicon.style.display = 'none';
      close.style.display = 'block';
    }
  });
  
  closeI.addEventListener('click', () => {
    
    if (closeI.checked){
      navbar.style.left = '-300px';
      close.style.display = 'none';
      menuicon.style.display = 'block';
    }
    
  });
  
};

navbar()

