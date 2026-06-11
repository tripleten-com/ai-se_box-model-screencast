const container = document.getElementById('container');
const boxModel = document.getElementById('boxModel');
const paddingLayer = document.getElementById('paddingLayer');
const borderLayer = document.getElementById('borderLayer');
const marginLayer = document.getElementById('marginLayer');
const dualBoxes = document.getElementById('dualBoxes');
const hint = document.getElementById('hint');
const content = document.querySelector('.content');
const paddingLabels = document.querySelectorAll('#boxModel .padding-label');
const borderLabel = document.querySelector('#boxModel .border-label');
const marginLabels = document.querySelectorAll('#boxModel .margin-label');

let frame = 0;
const frames = [
  {
    name: 'content',
    setup: () => {
      paddingLayer.classList.remove('visible');
      borderLayer.classList.remove('visible');
      marginLayer.classList.remove('visible');
      paddingLabels.forEach(l => l.classList.remove('visible'));
      borderLabel.classList.remove('visible');
      marginLabels.forEach(l => l.classList.remove('visible'));

      paddingLayer.style.padding = '0';
      borderLayer.style.padding = '0';
      marginLayer.style.padding = '0';
    }
  },
  {
    name: 'padding',
    setup: () => {
      paddingLayer.classList.add('visible');
      paddingLabels.forEach(l => l.classList.add('visible'));
      paddingLayer.style.padding = '32px';
    }
  },
  {
    name: 'border',
    setup: () => {
      borderLayer.classList.add('visible');
      borderLabel.classList.add('visible');
    }
  },
  {
    name: 'margin',
    setup: () => {
      marginLayer.classList.add('visible');
      marginLabels.forEach(l => l.classList.add('visible'));
      marginLayer.style.padding = '40px';
    }
  },
  {
    name: 'dual-boxes',
    setup: () => {
      boxModel.style.display = 'none';
      dualBoxes.classList.add('visible');

      const paddingSize = 32;
      const marginSize = 40;

      const paddingLayerLeft = document.getElementById('paddingLayerLeft');
      const borderLayerLeft = document.getElementById('borderLayerLeft');
      const marginLayerLeft = document.getElementById('marginLayerLeft');
      const paddingLabelsLeft = dualBoxes.querySelectorAll('#boxModelLeft .padding-label');
      const borderLabelLeft = dualBoxes.querySelector('#boxModelLeft .border-label');

      paddingLayerLeft.classList.add('visible');
      borderLayerLeft.classList.add('visible');
      marginLayerLeft.classList.add('visible');
      paddingLabelsLeft.forEach(l => l.classList.add('visible'));
      borderLabelLeft.classList.add('visible');

      paddingLayerLeft.style.padding = `${paddingSize}px`;
      marginLayerLeft.style.padding = `${marginSize}px`;

      const paddingLayerRight = document.getElementById('paddingLayerRight');
      const borderLayerRight = document.getElementById('borderLayerRight');
      const marginLayerRight = document.getElementById('marginLayerRight');
      const paddingLabelsRight = dualBoxes.querySelectorAll('#boxModelRight .padding-label');
      const borderLabelRight = dualBoxes.querySelector('#boxModelRight .border-label');

      paddingLayerRight.classList.add('visible');
      borderLayerRight.classList.add('visible');
      paddingLabelsRight.forEach(l => l.classList.add('visible'));
      borderLabelRight.classList.add('visible');

      paddingLayerRight.style.padding = `${paddingSize}px`;
      marginLayerRight.style.padding = '0';
    }
  }
];

function render() {
  frames[frame].setup();
  hint.classList.toggle('visible', frame < frames.length - 1);
}

function nextFrame() {
  if (frame < frames.length - 1) {
    frame++;
    render();
  }
}

document.addEventListener('click', nextFrame);
render();
