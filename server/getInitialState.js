import {
  showTrails,
  showProvinces
} from '../src/shared/utils/helpers';

export default function getInitialState(req, data) {
  let id = '';
  let region = '';
  let trails = [];
  let trail = {};
  let provinces = [];

  if (req.url.includes('trail-detail')) {
    id = req.url.split('/').pop();
  } else {
    region = req.url.split('/').pop();
  }

  if (region) {
    trails = showTrails(data, region);
    provinces = showProvinces(region);
  }

  if (id) trail = data[id];

  return { trails, region, provinces, trail };
}
