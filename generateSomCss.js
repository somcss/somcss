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

  // Text decoration utilities
  css += `.${translation['underline']} { text-decoration: underline; }\n`;
  css += `.${translation['line-through']} { text-decoration: line-through; }\n`;
  css += `.${translation['no-underline']} { text-decoration: none; }\n`;

  // Font family utilities
  css += `.${translation['sans']} { font-family: sans-serif; }\n`;
  css += `.${translation['serif']} { font-family: serif; }\n`;
  css += `.${translation['mono']} { font-family: monospace; }\n`;

  // Box shadow utilities
  css += `.${translation['shadow-sm']} { box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05); }\n`;
  css += `.${translation['shadow']} { box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0,0,0,0.06); }\n`;
  css += `.${translation['shadow-md']} { box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06); }\n`;
  css += `.${translation['shadow-lg']} { box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05); }\n`;
  css += `.${translation['shadow-none']} { box-shadow: none; }\n`;

  // Border style utilities
  css += `.${translation['border-solid']} { border-style: solid; }\n`;
  css += `.${translation['border-dashed']} { border-style: dashed; }\n`;
  css += `.${translation['border-dotted']} { border-style: dotted; }\n`;
  css += `.${translation['border-none']} { border-style: none; }\n`;

  // Border width utilities
  css += `.${translation['border-0']} { border-width: 0; }\n`;
  css += `.${translation['border-2']} { border-width: 2px; }\n`;
  css += `.${translation['border-4']} { border-width: 4px; }\n`;
  css += `.${translation['border-8']} { border-width: 8px; }\n`;

  // Cursor utilities
  css += `.${translation['pointer']} { cursor: pointer; }\n`;
  css += `.${translation['not-allowed']} { cursor: not-allowed; }\n`;
  css += `.${translation['wait']} { cursor: wait; }\n`;

  // List style utilities
  css += `.${translation['list-none']} { list-style-type: none; }\n`;
  css += `.${translation['list-disc']} { list-style-type: disc; }\n`;
  css += `.${translation['list-decimal']} { list-style-type: decimal; }\n`;

  // Max width utilities
  css += `.${translation['max-w-xs']} { max-width: 20rem; }\n`;
  css += `.${translation['max-w-sm']} { max-width: 24rem; }\n`;
  css += `.${translation['max-w-md']} { max-width: 28rem; }\n`;
  css += `.${translation['max-w-lg']} { max-width: 32rem; }\n`;
  css += `.${translation['max-w-xl']} { max-width: 36rem; }\n`;
  css += `.${translation['max-w-full']} { max-width: 100%; }\n`;

  // Min height utilities
  css += `.${translation['min-h-0']} { min-height: 0; }\n`;
  css += `.${translation['min-h-full']} { min-height: 100%; }\n`;
  css += `.${translation['min-h-screen']} { min-height: 100vh; }\n`;

  // Transition utilities
  css += `.${translation['transition']} { transition-property: all; transition-duration: 150ms; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }\n`;
  css += `.${translation['transition-colors']} { transition-property: color, background-color, border-color, text-decoration-color, fill, stroke; transition-duration: 150ms; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }\n`;
  css += `.${translation['transition-opacity']} { transition-property: opacity; transition-duration: 150ms; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }\n`;
  css += `.${translation['transition-shadow']} { transition-property: box-shadow; transition-duration: 150ms; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }\n`;

  return css;
}

if (require.main === module) {
  const translation = JSON.parse(fs.readFileSync('somali-translation.json', 'utf8'));
  const css = generateSomaliCss(translation);
  fs.writeFileSync('somali-utilities.css', css);
  console.log('Somali utility CSS generated in somali-utilities.css');
}

module.exports = { generateSomaliCss }; 