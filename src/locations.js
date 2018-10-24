function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./city_assets', false, /\.(png|jpe?g|svg)$/));

const locations = {
  aptos: {
    name: 'aptos',
    label: images['label_aptos.png']
  },
  bouldercreek: {
    name: 'bouldercreek',
    label: images['label_bouldercreek.png']
  },
  capitola: {
    name: 'capitola',
    label: images['label_capitola.png']
  },
  davenport: {
    name: 'davenport',
    label: images['label_davenport.png']
  },
  felton: {
    name: 'felton',
    label: images['label_felton.png']
  },
  santacruz: {
    name: 'santacruz',
    label: images['label_santacruz.png']
  },
};

export default locations;
