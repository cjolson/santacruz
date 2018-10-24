function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./city_assets', false, /\.(png|jpe?g|svg)$/));

const locations = {
  aptos: {
    name: 'aptos',
    label: images['label_aptos.png'],
    pics: [],
    details: null,
  },
  bouldercreek: {
    name: 'bouldercreek',
    label: images['label_bouldercreek.png'],
    pics: [],
    details: null,
  },
  capitola: {
    name: 'capitola',
    label: images['label_capitola.png'],
    pics: [],
    details: null,
  },
  davenport: {
    name: 'davenport',
    label: images['label_davenport.png'],
    pics: [images['davenport1.jpg']],
    details: null,
  },
  felton: {
    name: 'felton',
    label: images['label_felton.png'],
    pics: [],
    details: null,
  },
  santacruz: {
    name: 'santacruz',
    label: images['label_santacruz.png'],
    pics: [],
    details: null,
  },
};

export default locations;
