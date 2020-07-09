const markup = (color) => {
  let bar = document.createElement('div');

  bar.style.height = '4px';
  bar.style.backgroundColor = color;
  bar.style.top = '0';
  bar.style.left = '0';
  bar.style.position = 'fixed'
  bar.style.zIndex = '9999';
  bar.style.width = '0';

  return bar;
}

const calculate = content => (window.pageYOffset * 100) / content.offsetHeight;

const readingBar = (textContent, color = '#ff9800') => {
  const content = document.querySelector(textContent);
  const bar = markup(color);

  document.body.append(bar);
  document.addEventListener('scroll', () => {
    const updateBar = calculate(content);
    bar.style.width = `${updateBar}%`;
  });

  return this;
}

export default readingBar;
