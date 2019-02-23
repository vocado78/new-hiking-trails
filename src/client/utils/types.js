import {
  shape, number, string, objectOf, func, arrayOf, oneOfType
} from 'prop-types';

export const buttonType = {
  path: string,
  searchString: string,
  label: string.isRequired,
  handleClick: func
};

export const regionMapType = {
  onMouseEnter: func.isRequired,
  onMouseLeave: func.isRequired,
  regionColor: objectOf(string).isRequired
};

export const regionSelectType = {
  region: string.isRequired,
  onChange: func.isRequired
};

export const pageTitleType = {
  title: string.isRequired,
  page: string.isRequired
};

export const checkOrRadioButtonType = {
  handleChange: func.isRequired,
  options: arrayOf(string).isRequired,
  selectedOption: oneOfType([
    string,
    arrayOf(string)
  ]).isRequired,
  name: string.isRequired,
  title: string.isRequired,
  type: string.isRequired
};

export const provinceSelectType = {
  handleChange: func.isRequired,
  options: arrayOf(string).isRequired,
  placeholder: string.isRequired,
  selectedOption: oneOfType([
    string,
    arrayOf(string)
  ]).isRequired,
  title: string.isRequired,
};

export const filterType = {
  region: string.isRequired,
  options: objectOf(
    arrayOf(string)
  ).isRequired,
  selections: shape({
    selectedProvince: string,
    selectedComfort: string,
    selectedDay: string,
    selectedLevel: arrayOf(string),
    selectedService: string
  }).isRequired,
  onSelect: func.isRequired,
  handleClick: func.isRequired
};

export const listItemDataType = shape({
  name: string,
  region: string,
  province: string,
  start: string,
  finish: string,
  startLat: number,
  startLon: number,
  middleLat: number,
  middleLon: number,
  finLat: number,
  finLon: number,
  distance: string,
  duration: arrayOf(string),
  complete: string,
  level: string,
  comfort: arrayOf(string),
  title: string,
  description: string,
  landscape: string,
  connect: string,
  stageDistances: string,
  services: string,
  stages: number,
  access: string,
  moreInfo: string
});

export const listType = {
  results: arrayOf(listItemDataType),
  selections: filterType.selections
};

export const descriptionType = {
  access: string.isRequired,
  complete: string.isRequired,
  description: string.isRequired,
  landscape: string.isRequired,
  moreInfo: string.isRequired
};

export const keyFactsType = {
  connect: string.isRequired,
  distance: string.isRequired,
  duration: arrayOf(string).isRequired,
  finish: string.isRequired,
  level: string.isRequired,
  province: string.isRequired,
  stageDistances: string.isRequired,
  stages: number.isRequired,
  start: string.isRequired,
  comfort: arrayOf(string).isRequired
};

export const trailDetailType = {
  location: shape({
    state: listItemDataType
  })
};
