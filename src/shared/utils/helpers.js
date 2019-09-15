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

const regions = [
  {
    label: 'Please select region',
    value: ''
  },
  {
    label: 'Northern Norrland',
    value: 'northern-norrland'
  },
  {
    label: 'Southern Norrland',
    value: 'southern-norrland'
  },
  {
    label: 'Svealand',
    value: 'svealand'
  },
  {
    label: 'Northern Götaland',
    value: 'northern-gotaland'
  },
  {
    label: 'Southern Götaland',
    value: 'southern-gotaland'
  },
  {
    label: 'Show all',
    value: 'all'
  }
];

const filterOptions = {
  services: ['Satisfactory', 'Good', 'Very good'],
  duration: ['1-3 days', '4-7 days', '2 weeks', '3 weeks or more'],
  level: ['Easy', 'Easy to moderate', 'Moderate', 'Moderate to difficult', 'Difficult'],
  comfort: ['Mainly camping/camping cabins', 'Mainly hostels/hotels'],
};

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

const unSanitize = (str) => {
  const result = regions.find(region => region.value === str);
  return result.label;
};

const showTrails = (trailData, region) => {
  const trailDataToArray = Object.values(trailData);
  let results;

  if (region === 'all') {
    results = trailDataToArray;
  } else {
    results = trailDataToArray.filter(trail => trail.region === region);
  }

  return results;
};

const showProvinces = (region) => {
  let results;

  if (region === 'all') {
    const two = provinces.svealand.concat(provinces['northern-norrland']);
    const three = two.concat(provinces['southern-norrland']);
    const four = three.concat(provinces['northern-gotaland']);
    results = four.concat(provinces['southern-gotaland']);
  } else {
    results = provinces[region];
  }

  return results;
};

module.exports = {
  capitalize,
  showTrails,
  showProvinces,
  filterOptions,
  regions,
  unSanitize
};
