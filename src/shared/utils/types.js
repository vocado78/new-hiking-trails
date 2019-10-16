import {
  shape, number, string, func, arrayOf, oneOfType, node
} from 'prop-types';

export const buttonType = {
  path: string,
  searchString: string,
  label: string.isRequired,
  handleClick: func
};

export const pageTitleType = {
  title: string.isRequired,
  page: string.isRequired
};

export const pageType = {
  children: node.isRequired
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

export const descriptionType = {
  trail: listItemDataType
};

export const keyFactsType = {
  trail: listItemDataType
};

export const mapType = {
  trail: listItemDataType
};

export const trailDetailType = {
  location: shape({
    state: listItemDataType
  })
};

export const trailStoreType = {
  children: node.isRequired
};
