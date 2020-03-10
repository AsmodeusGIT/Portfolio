var themeButton1 = document.getElementsByClassName('theme1')[0];
var themeButton2 = document.getElementsByClassName('theme2')[0];
var themeButton3 = document.getElementsByClassName('theme3')[0];
var themeButton4 = document.getElementsByClassName('theme4')[0];
var themeButton5 = document.getElementsByClassName('theme5')[0];
var themeButton6 = document.getElementsByClassName('theme6')[0];

var swapColor = document.querySelectorAll('.swap-color');
var swapFontColor = document.querySelectorAll('.swap-font-color');
var swapBorderColor = document.querySelectorAll('.swap-border-color');

themeButton1.addEventListener('click', function setColor1() {
  swapColor.forEach(node =>
    node.classList.remove('color2', 'color3', 'color4', 'color5', 'color6')
  );
  swapColor.forEach(node => node.classList.add('color1'));
  swapFontColor.forEach(node =>
    node.classList.remove(
      'font-color2',
      'font-color3',
      'font-color4',
      'font-color5',
      'font-color6'
    )
  );
  swapFontColor.forEach(node => node.classList.add('font-color1'));
  swapBorderColor.forEach(node =>
    node.classList.remove(
      'border-color2',
      'border-color3',
      'border-color4',
      'border-color5',
      'border-color6'
    )
  );
  swapBorderColor.forEach(node => node.classList.add('border-color1'));
});

themeButton2.addEventListener('click', function setColor2() {
  swapColor.forEach(node =>
    node.classList.remove('color1', 'color3', 'color4', 'color5', 'color6')
  );
  swapColor.forEach(node => node.classList.add('color2'));
  swapFontColor.forEach(node =>
    node.classList.remove(
      'font-color1',
      'font-color3',
      'font-color4',
      'font-color5',
      'font-color6'
    )
  );
  swapFontColor.forEach(node => node.classList.add('font-color2'));
  swapBorderColor.forEach(node =>
    node.classList.remove(
      'border-color1',
      'border-color3',
      'border-color4',
      'border-color5',
      'border-color6'
    )
  );
  swapBorderColor.forEach(node => node.classList.add('border-color2'));
});

themeButton3.addEventListener('click', function setColor3() {
  swapColor.forEach(node =>
    node.classList.remove('color1', 'color2', 'color4', 'color5', 'color6')
  );
  swapColor.forEach(node => node.classList.add('color3'));
  swapFontColor.forEach(node =>
    node.classList.remove(
      'font-color1',
      'font-color2',
      'font-color4',
      'font-color5',
      'font-color6'
    )
  );
  swapFontColor.forEach(node => node.classList.add('font-color3'));
  swapBorderColor.forEach(node =>
    node.classList.remove(
      'border-color1',
      'border-color2',
      'border-color4',
      'border-color5',
      'border-color6'
    )
  );
  swapBorderColor.forEach(node => node.classList.add('border-color3'));
});

themeButton4.addEventListener('click', function setColor4() {
  swapColor.forEach(node =>
    node.classList.remove('color1', 'color3', 'color2', 'color5', 'color6')
  );
  swapColor.forEach(node => node.classList.add('color4'));
  swapFontColor.forEach(node =>
    node.classList.remove(
      'font-color1',
      'font-color3',
      'font-color2',
      'font-color5',
      'font-color6'
    )
  );
  swapFontColor.forEach(node => node.classList.add('font-color4'));
  swapBorderColor.forEach(node =>
    node.classList.remove(
      'border-color1',
      'border-color3',
      'border-color2',
      'border-color5',
      'border-color6'
    )
  );
  swapBorderColor.forEach(node => node.classList.add('border-color4'));
});

themeButton5.addEventListener('click', function setColor5() {
  swapColor.forEach(node =>
    node.classList.remove('color1', 'color3', 'color4', 'color2', 'color6')
  );
  swapColor.forEach(node => node.classList.add('color5'));
  swapFontColor.forEach(node =>
    node.classList.remove(
      'font-color1',
      'font-color3',
      'font-color4',
      'font-color2',
      'font-color6'
    )
  );
  swapFontColor.forEach(node => node.classList.add('font-color5'));
  swapBorderColor.forEach(node =>
    node.classList.remove(
      'border-color1',
      'border-color3',
      'border-color4',
      'border-color2',
      'border-color6'
    )
  );
  swapBorderColor.forEach(node => node.classList.add('border-color5'));
});

themeButton6.addEventListener('click', function setColor6() {
  swapColor.forEach(node =>
    node.classList.remove('color1', 'color3', 'color4', 'color5', 'color2')
  );
  swapColor.forEach(node => node.classList.add('color6'));
  swapFontColor.forEach(node =>
    node.classList.remove(
      'font-color1',
      'font-color3',
      'font-color4',
      'font-color5',
      'font-color2'
    )
  );
  swapFontColor.forEach(node => node.classList.add('font-color6'));
  swapBorderColor.forEach(node =>
    node.classList.remove(
      'border-color1',
      'border-color3',
      'border-color4',
      'border-color5',
      'border-color2'
    )
  );
  swapBorderColor.forEach(node => node.classList.add('border-color6'));
});
