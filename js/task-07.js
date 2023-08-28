const fontSizeControl = document.getElementById('font-size-control');
const textSpan = document.getElementById('text');

const handleFontSizeChange = () => {
  const fontSize = `${fontSizeControl.value}px`;
  textSpan.style.fontSize = fontSize;
};

fontSizeControl.addEventListener('input', handleFontSizeChange);