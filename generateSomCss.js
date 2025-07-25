const fs = require('fs');

function generateSomaliCss(translation) {
  // Somali utility mapping
  const spacingScale = {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    32: '8rem',
  };

  const colors = {
    cas: 'red',
    buluug: 'blue',
    cagaar: 'green',
    madow: 'black',
    caddaan: 'white',
    jaalle: 'yellow',
  };

  const fontSizes = {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
  };

  const fontWeights = {
    khafiif: '300', // light
    caadi: '400',  // normal
    dhumuc: '700', // bold
  };

  const sizes = {
    auto: 'auto',
    full: '100%',
    '1-2': '50%',
    '1-3': '33.3333%',
    '2-3': '66.6667%',
    '1-4': '25%',
    '3-4': '75%',
    4: '1rem',
    8: '2rem',
    16: '4rem',
    32: '8rem',
  };

  const borderRadius = {
    yar: '0.125rem',
    dhexdhexaad: '0.375rem',
    weyn: '0.5rem',
    buuxa: '9999px',
  };

  let css = '';

  // Margin utilities
  for (const [key, value] of Object.entries(spacingScale)) {
    css += `.${translation['margin']}-${key} { margin: ${value}; }\n`;
    css += `.${translation['margin-top']}-${key} { margin-top: ${value}; }\n`;
    css += `.${translation['margin-bottom']}-${key} { margin-bottom: ${value}; }\n`;
    css += `.${translation['margin-left']}-${key} { margin-left: ${value}; }\n`;
    css += `.${translation['margin-right']}-${key} { margin-right: ${value}; }\n`;
  }

  // Padding utilities
  for (const [key, value] of Object.entries(spacingScale)) {
    css += `.${translation['padding']}-${key} { padding: ${value}; }\n`;
    css += `.${translation['padding-top']}-${key} { padding-top: ${value}; }\n`;
    css += `.${translation['padding-bottom']}-${key} { padding-bottom: ${value}; }\n`;
    css += `.${translation['padding-left']}-${key} { padding-left: ${value}; }\n`;
    css += `.${translation['padding-right']}-${key} { padding-right: ${value}; }\n`;
  }

  // Text color utilities
  for (const [somali, color] of Object.entries(colors)) {
    css += `.${translation['text-color']}-${somali} { color: ${color}; }\n`;
  }

  // Background color utilities
  for (const [somali, color] of Object.entries(colors)) {
    css += `.${translation['background']}-${somali} { background-color: ${color}; }\n`;
  }

  // Font size utilities
  for (const [key, value] of Object.entries(fontSizes)) {
    css += `.${translation['font-size']}-${key} { font-size: ${value}; }\n`;
  }

  // Font weight utilities
  for (const [key, value] of Object.entries(fontWeights)) {
    css += `.${translation['font-weight']}-${key} { font-weight: ${value}; }\n`;
  }

  // Flex utilities
  css += `.${translation['flex']} { display: flex; }\n`;
  css += `.${translation['flex-row']} { flex-direction: row; }\n`;
  css += `.${translation['flex-col']} { flex-direction: column; }\n`;
  css += `.${translation['flex-center']} { justify-content: center; align-items: center; }\n`;

  // Grid utilities
  css += `.${translation['grid']} { display: grid; }\n`;
  css += `.${translation['grid']}-2 { grid-template-columns: repeat(2, 1fr); }\n`;
  css += `.${translation['grid']}-3 { grid-template-columns: repeat(3, 1fr); }\n`;
  css += `.${translation['grid']}-4 { grid-template-columns: repeat(4, 1fr); }\n`;

  // Width utilities
  for (const [key, value] of Object.entries(sizes)) {
    css += `.${translation['width']}-${key} { width: ${value}; }\n`;
  }
  // Height utilities
  for (const [key, value] of Object.entries(sizes)) {
    css += `.${translation['height']}-${key} { height: ${value}; }\n`;
  }

  // Border utilities
  css += `.${translation['border']} { border: 1px solid #000; }\n`;
  css += `.${translation['border']}-caddaan { border: 1px solid #fff; }\n`;
  css += `.${translation['border']}-cas { border: 1px solid red; }\n`;
  css += `.${translation['border']}-buluug { border: 1px solid blue; }\n`;
  css += `.${translation['border']}-cagaar { border: 1px solid green; }\n`;

  // Border radius utilities
  for (const [key, value] of Object.entries(borderRadius)) {
    css += `.${translation['border-radius']}-${key} { border-radius: ${value}; }\n`;
  }

  // Text alignment utilities
  css += `.${translation['text-left']} { text-align: left; }\n`;
  css += `.${translation['text-center']} { text-align: center; }\n`;
  css += `.${translation['text-right']} { text-align: right; }\n`;
  css += `.${translation['text-justify']} { text-align: justify; }\n`;

  // Display utilities
  css += `.${translation['display-block']} { display: block; }\n`;
  css += `.${translation['display-inline-block']} { display: inline-block; }\n`;
  css += `.${translation['display-inline']} { display: inline; }\n`;
  css += `.${translation['display-none']} { display: none; }\n`;

  // Font style utilities
  css += `.${translation['italic']} { font-style: italic; }\n`;
  css += `.${translation['normal']} { font-style: normal; }\n`;

  // Text transform utilities
  css += `.${translation['uppercase']} { text-transform: uppercase; }\n`;
  css += `.${translation['lowercase']} { text-transform: lowercase; }\n`;
  css += `.${translation['capitalize']} { text-transform: capitalize; }\n`;

  // Overflow utilities
  css += `.${translation['overflow-hidden']} { overflow: hidden; }\n`;
  css += `.${translation['overflow-scroll']} { overflow: scroll; }\n`;
  css += `.${translation['overflow-auto']} { overflow: auto; }\n`;

  // Opacity utilities
  css += `.${translation['opacity-0']} { opacity: 0; }\n`;
  css += `.${translation['opacity-25']} { opacity: 0.25; }\n`;
  css += `.${translation['opacity-50']} { opacity: 0.5; }\n`;
  css += `.${translation['opacity-75']} { opacity: 0.75; }\n`;
  css += `.${translation['opacity-100']} { opacity: 1; }\n`;

  // Z-index utilities
  css += `.${translation['z-0']} { z-index: 0; }\n`;
  css += `.${translation['z-10']} { z-index: 10; }\n`;
  css += `.${translation['z-20']} { z-index: 20; }\n`;
  css += `.${translation['z-30']} { z-index: 30; }\n`;
  css += `.${translation['z-40']} { z-index: 40; }\n`;
  css += `.${translation['z-50']} { z-index: 50; }\n`;

  // Position utilities
  css += `.${translation['static']} { position: static; }\n`;
  css += `.${translation['relative']} { position: relative; }\n`;
  css += `.${translation['absolute']} { position: absolute; }\n`;
  css += `.${translation['fixed']} { position: fixed; }\n`;
  css += `.${translation['sticky']} { position: sticky; }\n`;

  // Justify content utilities
  css += `.${translation['justify-start']} { justify-content: flex-start; }\n`;
  css += `.${translation['justify-center']} { justify-content: center; }\n`;
  css += `.${translation['justify-end']} { justify-content: flex-end; }\n`;
  css += `.${translation['justify-between']} { justify-content: space-between; }\n`;
  css += `.${translation['justify-around']} { justify-content: space-around; }\n`;
  css += `.${translation['justify-evenly']} { justify-content: space-evenly; }\n`;

  // Align items utilities
  css += `.${translation['items-start']} { align-items: flex-start; }\n`;
  css += `.${translation['items-center']} { align-items: center; }\n`;
  css += `.${translation['items-end']} { align-items: flex-end; }\n`;
  css += `.${translation['items-stretch']} { align-items: stretch; }\n`;
  css += `.${translation['items-baseline']} { align-items: baseline; }\n`;

  return css;
}

if (require.main === module) {
  const translation = JSON.parse(fs.readFileSync('somali-translation.json', 'utf8'));
  const css = generateSomaliCss(translation);
  fs.writeFileSync('somali-utilities.css', css);
  console.log('Somali utility CSS generated in somali-utilities.css');
}

module.exports = { generateSomaliCss }; 