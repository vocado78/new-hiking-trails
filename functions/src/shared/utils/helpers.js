"use strict";

var provinces = {
  svealand: ['Dalarna', 'Närke', 'Södermanland', 'Uppland', 'Värmland', 'Västmanland'],
  'northern-norrland': ['Lappland', 'Norrbotten', 'Västerbotten'],
  'southern-norrland': ['Gästrikland', 'Hälsningland', 'Härjedalen', 'Medelpad', 'Jämtland', 'Ångermanland'],
  'northern-gotaland': ['Bohuslän', 'Dalsland', 'Västergötland', 'Östergötland'],
  'southern-gotaland': ['Blekinge', 'Gotland', 'Halland', 'Småland', 'Skåne', 'Öland']
};
var regions = [{
  label: 'Please select region',
  value: ''
}, {
  label: 'Northern Norrland',
  value: 'northern-norrland'
}, {
  label: 'Southern Norrland',
  value: 'southern-norrland'
}, {
  label: 'Svealand',
  value: 'svealand'
}, {
  label: 'Northern Götaland',
  value: 'northern-gotaland'
}, {
  label: 'Southern Götaland',
  value: 'southern-gotaland'
}, {
  label: 'Show all',
  value: 'all'
}];
var filterOptions = {
  services: ['Satisfactory', 'Good', 'Very good'],
  duration: ['1-3 days', '4-7 days', '2 weeks', '3 weeks or more'],
  level: ['Easy', 'Easy to moderate', 'Moderate', 'Moderate to difficult', 'Difficult'],
  comfort: ['Mainly camping/camping cabins', 'Mainly hostels/hotels']
};

var capitalize = function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

var unSanitize = function unSanitize(str) {
  var result = regions.find(function (region) {
    return region.value === str;
  });
  console.log('result from unSanitize region is:', result);
  return result.label;
};

var showTrails = function showTrails(trailData, region) {
  var trailDataToArray = Object.values(trailData);
  var results;

  if (region === 'all') {
    results = trailDataToArray;
  } else {
    results = trailDataToArray.filter(function (trail) {
      return trail.region === region;
    });
  }

  return results;
};

var showProvinces = function showProvinces(region) {
  var results;

  if (region === 'all') {
    var two = provinces.svealand.concat(provinces['northern-norrland']);
    var three = two.concat(provinces['southern-norrland']);
    var four = three.concat(provinces['northern-gotaland']);
    results = four.concat(provinces['southern-gotaland']);
  } else {
    results = provinces[region] || [];
  }

  return results;
};

module.exports = {
  capitalize: capitalize,
  showTrails: showTrails,
  showProvinces: showProvinces,
  filterOptions: filterOptions,
  regions: regions,
  unSanitize: unSanitize
};