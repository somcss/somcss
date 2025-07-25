const { generateSomaliCss } = require('../generateSomCss');

describe('generateSomaliCss', () => {
  it('generates margin utility for translation', () => {
    const translation = {
      margin: 'mar',
      'margin-top': 'mar-kor',
      'margin-bottom': 'mar-hoos',
      'margin-left': 'mar-bidix',
      'margin-right': 'mar-mid',
      padding: 'buuxi',
      'padding-top': 'buuxi-kor',
      'padding-bottom': 'buuxi-hoos',
      'padding-left': 'buuxi-bidix',
      'padding-right': 'buuxi-mid',
      'text-color': 'midab-qor',
      background: 'asalka',
      'font-size': 'cabirka-xarfaha',
      'font-weight': 'miisaanka-xarfaha',
      flex: 'dabacsan',
      'flex-row': 'dabacsan-saf',
      'flex-col': 'dabacsan-tiir',
      'flex-center': 'dabacsan-bartamaha',
      grid: 'shabag',
      width: 'balac',
      height: 'dherer',
      border: 'xuduud',
      'border-radius': 'xuduud-wareeg',
    };
    const css = generateSomaliCss(translation);
    expect(css).toContain('.mar-0 { margin: 0; }');
    expect(css).toContain('.mar-kor-1 { margin-top: 0.25rem; }');
    expect(css).toContain('.midab-qor-cas { color: red; }');
    expect(css).toContain('.dabacsan { display: flex; }');
    expect(css).toContain('.shabag-2 { grid-template-columns: repeat(2, 1fr); }');
    expect(css).toContain('.xuduud-wareeg-yar { border-radius: 0.125rem; }');
  });
}); 