const trails = [
  {
    name: 'Kungsleden',
    region: 'northern-norrland',
    province: 'Lappland',
    start: 'Abisko',
    finish: 'Hemavan',
    startLat: 68.349541,
    startLon: 18.831241,
    middleLat: 67.020299,
    middleLon: 16.600342,
    finLat: 65.814906,
    finLon: 15.087689,
    distance: '425 km',
    duration: ['4-7 days', '2 weeks', '3 weeks or more'],
    complete: 'Completing the entire trail takes approx. 4 - 5 weeks.',
    level: 'Moderate to difficult',
    comfort: ['Mainly camping/camping cabins', 'Mainly hostels/hotels'],
    title: 'World famous hike with midnight sun in summer and Northern Lights in winter',
    description: 'The fascinating hike along Kungsleden is made possible by the Swedish Tourist Association who runs a large number of mountain stations, cabins and food shops along the way. The mountain stations offer comfortable accommodation and food services; whereas the mountain cabins are equipped for self-catering and has no electricity (they are heated by wood burners). Please note that there are no daily stages, instead stages are weekly and 5 in total. Thus hikes shorter than 1 week is maybe not to recommend. Each day you walk between mountain stations/cabins, about 10 – 20 km. The exception is the section between Kvikkjokk and Ammarnäs where tent and camping equipment are needed. Please note that reindeer husbandry is carried out in the entire region of the trail and hikers must show consideration.',
    landscape: 'Mountainous. The wilderness landscape varies between alpine terrain with high summits and deep valleys, mountain moors and low-lying birch forest, but the trail also passes through several mountain villages.',
    connect: 'None',
    stageDistances: 'Approx. 10-20 km',
    services: 'Good',
    stages: 5,
    access: 'Abisko, Nikkaluokta, Saltoluokta, Kvikkjokk, Ammarnäs and Hemavan.',
    moreInfo: 'https://www.svenskaturistforeningen.se/app/uploads/2015/10/kingstrail-information.pdf'
  },
  {
    name: 'Sörmlandsleden',
    region: 'svealand',
    province: 'Södermanland',
    start: 'Stockholm or most towns in Södermanland',
    finish: 'Stockholm or most towns in Södermanland',
    startLat: 59.292232,
    startLon: 18.115389,
    middleLat: 59.292232,
    middleLon: 18.115389,
    finLat: 59.292232,
    finLon: 18.115389,
    distance: '1000 km',
    duration: ['1-3 days', '4-7 days', '2 weeks', '3 weeks or more'],
    complete: 'Completing the entire trail takes approx. 5 – 6 weeks.',
    level: 'Easy to moderate',
    comfort: ['Mainly camping/camping cabins', 'Mainly hostels/hotels'],
    title: 'Customize your hike on one of Sweden’s longest and most varied lowland trails',
    description: 'Hiking on Sörmlandsleden is easily combined with a city holiday in Stockholm. The trail is circular and without the connecting sections the total distance is about 600 km. The difficulty level vary between sections, some are very easy and some are reasonably demanding. The trail follows forest paths and forest roads, but also gravel roads and at times other minor roads. Distance and comfort level are easily adapted according to preference. Apart from in towns and at serviced accommodation, water can be collected from several springs found all along the route. Please note that water from springs should be boiled before you drink it.',
    landscape: 'As expected from such a long trail, the landscape is varied along the route. There are deep forests, pastures, flat rocks and mountains, little lakes and open fields. Some sections go along the coast of the Baltic Sea and some sections go through towns.',
    connect: 'None',
    stageDistances: '4-20 km',
    services: 'Good',
    stages: 62,
    access: 'Stockholm, Nynäshamn, Södertälje, Järna, Mariefred, Malmköping, Flen, Eskilstuna, Katrineholm, Nyköping and Trosa.',
    moreInfo: 'http://www.sormlandsleden.se/'
  },
  {
    name: 'Höga Kustenleden',
    region: 'southern-norrland',
    province: 'Ångermanland',
    start: 'Hornöberget (Kramfors)',
    finish: 'Örnsköldsvik',
    startLat: 62.802939,
    startLon: 17.955437,
    middleLat: 63.046246,
    middleLon: 18.327942,
    finLat: 63.288927,
    finLon: 18.715897,
    distance: '129 km',
    duration: ['1-3 days', '4-7 days', '2 weeks'],
    complete: 'Completing the entire trail takes approx. 2 weeks.',
    level: 'Moderate to difficult',
    comfort: ['Mainly camping/camping cabins'],
    title: 'Beautiful views over the coast in a unique landscape home to an interesting culinary experience',
    description: 'The Höga Kusten area is a UNESCO World Heritage Site due to its unique geology which has formed the unusual landscape. The terrain of Höga Kustenleden is hilly with highs and lows for the most part throughout. Some sections are rugged and rocky to walk. Hostels are few, instead all along the trail there are wind shields, huts and cabins free to overnight in however these are not always found right at a stage end and can be full in high season. If you are planning to be out for several days you might want to plan your hike and break it down into other sections than those of the stage description and it is advisable to bring a tent. From Köpmanholmen there are boat tours to the islands of Ulvön and Trysunda where you can try the Swedish speciality Surströmming (fermented herring) if you dare…',
    landscape: 'The trail takes you along the coastline across rocks and mountains with scenic views over the coast and the archipelago, through forest and passed quiet little bays with sandy beaches.',
    connect: 'None',
    stageDistances: '5-15 km',
    services: 'Good',
    stages: 13,
    access: 'Kramfors, Ullånger, Docksta, Skuleberget, Köpmanholmen and Örnsköldsvik.',
    moreInfo: 'https://www.hogakusten.com/en/high-coast-trail'
  },
  {
    name: 'Upplandsleden',
    region: 'svealand',
    province: 'Uppland',
    start: 'Uppsala or Knivsta, Bålsta, Siggeforasjön (Heby)',
    finish: 'Älvkarleby, Skokloster, Härjarö',
    startLat: 59.790876,
    startLon: 17.659149,
    middleLat: 60.187964,
    middleLon: 17.882996,
    finLat: 60.564704,
    finLon: 17.438736,
    distance: '400 km',
    duration: ['1-3 days', '4-7 days', '2 weeks'],
    complete: 'Completing the eastern trail takes approx. 2 weeks.',
    level: 'Easy',
    comfort: ['Mainly camping/camping cabins'],
    title: 'Countryside walk passing ancient monuments from the Viking Age and Iron Age',
    description: 'Upplandsleden is divided into separate sub-trails; the longest parts are the eastern (starts in Uppsala/Knivsta and finishes in Älvkarleby, 250 km) and the western (starts close to Heby and finishes in Härjarö, 110 km) trails. The middle trail (starts in Bålsta, 20 km) takes you to Skokloster Palace dating back to the 17th century and from here there are boat tours to Uppsala. All parts pass by ancient monuments and remnants such as rune stones and burial places, especially the middle and western trails. Country farms and manors are many in the area too and there are pastures with grazing animals. A large number of stage starts and ends can be reached by public transport. Plenty of resting-places but few places for water refills.',
    landscape: 'Generally the landscape is fairly flat throughout. The western part of the trail is dominated by open fields and pastures, some more forest along the eastern part. The terrain is forest path as often as forest or gravel road.',
    connect: 'Gästrikeleden, east of Älvkarleby (stage 18).',
    stageDistances: '5-30 km',
    services: 'Satisfactory',
    stages: 31,
    access: 'Uppsala, Knivsta, Enköping, Bålsta, Knutby, Gimo, Österbybruk, Lövstabruk and Älvkarleby.',
    moreInfo: 'http://www.upplandsstiftelsen.se/upplandsleden'
  },
  {
    name: 'Bohusleden',
    region: 'northern-gotaland',
    province: 'Bohuslän',
    start: 'Lindome (Göteborg)',
    finish: 'Strömstad',
    startLat: 57.566954,
    startLon: 12.135773,
    middleLat: 58.347344,
    middleLon: 11.932526,
    finLat: 58.937787,
    finLon: 11.171722,
    distance: '370 km',
    duration: ['1-3 days', '4-7 days', '2 weeks', '3 weeks or more'],
    complete: 'Completing the entire trail takes approx. 3 weeks.',
    level: 'Easy to moderate',
    comfort: ['Mainly camping/camping cabins'],
    title: 'A taste of the landscapes in the north and surprisingly remote',
    description: 'Despite going through one of Sweden’s most densely populated regions, large parts of the trail stretches through nature reserves and wilderness. After stage 8 services are scarce until the trail approaches Glimmingen near Uddevalla.  The same goes for the section between Kaserna near Munkedal and Strömstad. Stages 1 – 7 mainly go on asphalt or minor roads and often through inhabited areas. Here accommodation and services are easily accessible.',
    landscape: 'The landscape along the trail offers great variation between pine-forest, deciduous forest, flat rocks, mire and mountains. Several stages cross high plateaus (e.g. Kynnefjäll) which give you the impression of being in the mountains in northern Sweden.',
    connect: 'Hallandsleden and Kuststigen',
    stageDistances: '8-19 km',
    services: 'Satisfactory',
    stages: 27,
    access: 'Anywhere along stages 1 – 6 on the outskirts of Göteborg, Fontin (Kungälv), Glimmingen or Bovik (Uddevalla), Kaserna (Munkedal), Svarteborg and Strömstad.',
    moreInfo: 'http://bohusleden.se'
  },
  {
    name: 'Kuststigen',
    region: 'northern-gotaland',
    province: 'Bohuslän',
    start: 'Island of Tjörn or Uddevalla',
    finish: 'North of Moss in Norway',
    startLat: 58.347344,
    startLon: 11.932526,
    middleLat: 58.599776,
    middleLon: 11.288224,
    finLat: 58.952841,
    finLon: 11.45874,
    distance: '380 km in Sweden',
    duration: ['1-3 days', '4-7 days', '2 weeks', '3 weeks or more'],
    complete: 'Completing the entire trail located in Sweden takes approx. 3 weeks.',
    level: 'Easy',
    comfort: ['Mainly hostels/hotels'],
    title: 'A collection of beautiful, easy coastal walks accessible for everyone',
    description: 'Kuststigen is a series of trails that cover the coastal area of Tjörn, Orust, Ljungskile, Uddevalla, Lysekil and Hunnebostrand on the Swedish side. Then there is a gap to Tanumstrand near Grebbestad, where the trail goes inland and into Norway by Ejgdesjön. There are also some sections of the trail around Strömstad. The purpose of the trail is to make it possible for everyone regardless of age, mobility or experience to enjoy the coastal scenery. A large part of the trail follows minor roads. There are plenty of places to visit and explore along the way which makes it ideal for combining walking with other activities. Accommodation and services are within easy reach for the most part.',
    landscape: 'The trail passes through quiet, wild areas as well as lively villages and towns on the coast. Along the way are forts, fishermen’s villages, medieval churches and manor houses.',
    connect: 'Bohusleden',
    stageDistances: '8-35 km',
    services: 'Very good',
    stages: 16,
    access: 'Uddevalla, Ljungskile, Stenungsund, Lysekil, Hunnebostrand, Grebbestad and Strömstad.',
    moreInfo: 'https://issuu.com/akershusfylke/docs/kartbok_engelsk_liten_oppl__sning_e'
  },
  {
    name: 'Bruksleden',
    region: 'svealand',
    province: 'Västmanland',
    start: 'Skälby or Rocklunda (Västerås)',
    finish: 'Tråbacken (Avesta)',
    startLat: 59.609868,
    startLon: 16.44825,
    middleLat: 59.944695,
    middleLon: 16.275558,
    finLat: 60.140479,
    finLon: 16.134367,
    distance: '250 km',
    duration: ['1-3 days', '4-7 days', '2 weeks'],
    complete: 'Completing the entire trail takes approx. 10 - 14 days.',
    level: 'Easy to moderate',
    comfort: ['Mainly camping/camping cabins', 'Mainly hostels/hotels'],
    title: 'In to the forest full of traces of a busy industrial past',
    description: 'Bruksleden goes through an area of old industrial communities most of which still produces metal of some sort. More or less all along the way there are remnants of smelting works. The entire trail of 250 km consists of some loose ends (leading to/from towns/villages which make it easy to get on and off the trail in many places) and alternative stages i.e. to walk from start to finish you do not walk every stage of the trail. Taking this into account, the distance covered walking from start to finish is between 140 - 180 km depending on stage choices. If preferred, the hike can be completed without camping if you do not mind some long days.',
    landscape: 'The dominating landscape along the trail is forest with flat-rocks, mires and little lakes; with some exceptions close to towns and villages. Generally there are small differences in altitude but some stages have rugged and rocky terrain which slows down the pace.',
    connect: 'Bergslagsleden, from Malingsbo via a local trail (stage 21).',
    stageDistances: '4-15,5 km',
    services: 'Good',
    stages: 27,
    access: 'Västerås, Skultuna, Hallstahammar, Surahammar, Ramnäs, Skinnskatteberg, Fagersta, Norberg and Avesta.',
    moreInfo: 'http://bruksleden.se/'
  },
  {
    name: 'Blekingeleden',
    region: 'southern-gotaland',
    province: 'Blekinge',
    start: 'Boafall (Olofström)',
    finish: 'Bröms',
    startLat: 56.238747,
    startLon: 14.461269,
    middleLat: 56.209043,
    middleLon: 15.274601,
    finLat: 56.318393,
    finLon: 16.03858,
    distance: '232 km',
    duration: ['1-3 days', '4-7 days', '2 weeks'],
    complete: 'Completing the entire trail takes approx. 10 - 14 days.',
    level: 'Easy to moderate',
    comfort: ['Mainly camping/camping cabins'],
    title: 'In the forests of the province called the garden of Sweden',
    description: 'Some camping sites along the way (Långasjönäs, Järnavik, Alljungen, Kristianopel). Maps available at the respective local tourist information.',
    landscape: 'Forest, hills and valleys, last stage along the coast.',
    connect: 'Skåneleden, an additional 34 km to/from Sölvesborg.',
    stageDistances: '9-30 km',
    services: 'Satisfactory',
    stages: 12,
    access: 'Olofström, Ronneby and Bröms (Torsås, Bergkvara or Karlskrona).',
    moreInfo: 'http://privat.bahnhof.se/wb114455/blekingeleden/bl.leden.htm'
  },
  {
    name: 'Bergslagsleden',
    region: 'svealand',
    province: 'Närke',
    start: 'Kloten (Kopparberg)',
    finish: 'Stenkällegården',
    startLat: 59.894792,
    startLon: 15.288849,
    middleLat: 59.296046,
    middleLon: 14.894028,
    finLat: 58.680529,
    finLon: 14.597912,
    distance: '280 km',
    duration: ['1-3 days', '4-7 days', '2 weeks', '3 weeks or more'],
    complete: 'Completing the entire trail takes approx. 2 - 3 weeks.',
    level: 'Moderate',
    comfort: ['Mainly camping/camping cabins', 'Mainly hostels/hotels'],
    title: 'Hilly hike in the wilderness through lands of old ironworks',
    description: 'The starting point in Kloten cannot be reached by public transport. Taxi from nearby Kopparberg is recommended. With some planning and use of public transport most of the trail (but not all of it) can be walked with overnight stays indoors and with access to facilities. However camping is also possible at each stage end, and by the resting-places about half-way of each stage. Drinking water is available at most stage starts/ends and sometimes also in between. Some cafés and restaurants can be found along the way but are not always open all year. From the finish in Stenkällegården it is a 2 km walk to the nearest bus stop for infrequent transport to Örebro or Skövde.',
    landscape: 'The trail goes through old forests, across hill tops, mountains and mires, and the area offers rich wildlife. At times the ground is rugged and rocky. Along the way the trail passes by ruins of old smelting-works, mines, old forts and crofts; as well as grand manors and farm houses.',
    connect: 'Bruksleden, from Kloten via a local trail (stage 1).',
    stageDistances: '7-22 km',
    services: 'Good',
    stages: 17,
    access: 'Kopparberg, Nora, Mogetorp, Leken, Svartå Herrgård and Ramundeboda.',
    moreInfo: 'http://bergslagsleden.se'
  }
];

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

const filterByRegion = (region) => {
  const results = trails.filter(trail => trail.region === region);
  return results;
};

const showAllTrails = () => trails;

const capitalize = (str) => {
  const capitalized = str.replace(/[^a-z]/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
  return capitalized;
};

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
