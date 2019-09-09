const provinces = {
  svealand: [
    'Dalarna',
    'Närke',
    'Södermanland',
    'Uppland',
    'Värmland',
    'Västmanland'
  ],
  'northern-norrland': [
    'Lappland',
    'Norrbotten',
    'Västerbotten'
  ],
  'southern-norrland': [
    'Gästrikland',
    'Hälsningland',
    'Härjedalen',
    'Medelpad',
    'Jämtland',
    'Ångermanland'
  ],
  'northern-gotaland': [
    'Bohuslän',
    'Dalsland',
    'Västergötland',
    'Östergötland'
  ],
  'southern-gotaland': [
    'Blekinge',
    'Gotland',
    'Halland',
    'Småland',
    'Skåne',
    'Öland'
  ]
};

const filterOptions = {
  services: ['Satisfactory', 'Good', 'Very good'],
  duration: ['1-3 days', '4-7 days', '2 weeks', '3 weeks or more'],
  level: ['Easy', 'Easy to moderate', 'Moderate', 'Moderate to difficult', 'Difficult'],
  comfort: ['Mainly camping/camping cabins', 'Mainly hostels/hotels'],
};

const trailDataToArray = trailData => Object.values(trailData);

const filterByRegion = (trailData, region) => {
  const results = trailDataToArray(trailData).filter(trail => trail.region === region);
  return results;
};

const showAllTrails = trailData => trailDataToArray(trailData);

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

const showProvinces = (region) => {
  const display = provinces[region];
  return display;
};

const showAllProvinces = () => {
  const two = provinces.svealand.concat(provinces['northern-norrland']);
  const three = two.concat(provinces['southern-norrland']);
  const four = three.concat(provinces['northern-gotaland']);
  const all = four.concat(provinces['southern-gotaland']);
  return all;
};

module.exports = {
  filterByRegion,
  capitalize,
  showAllTrails,
  showProvinces,
  showAllProvinces,
  filterOptions
};
