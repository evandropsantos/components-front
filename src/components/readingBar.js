const config = color => {
  return {
    height: '4px',
    backgroundColor: color,
    top: '0',
    left: '0',
    position: 'fixed',
    zIndex: '9999',
    width: '0'
  }
};

const markup = (color) => {
  let bar = document.createElement('div');

  Object.entries(config(color)).map(el =>
    bar.style[el[0]] = el[1]
  );

  return bar;
}

const calculate = content => (window.pageYOffset * 100) / content.offsetHeight;

const readingBar = (textContent, color = '#ff9800') => {
  const content = document.querySelector(textContent);
  const bar = markup(color);

  document.body.append(bar);
  document.addEventListener('scroll', () => bar.style.width = `${calculate(content)}%`);
  return this;
}

export default readingBar;
