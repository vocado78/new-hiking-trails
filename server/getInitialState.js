import {
  showTrails,
  showProvinces
} from '../src/shared/utils/helpers';

export default function getInitialState(req, data) {
  const id = req.params.id || ''; // fix this
  const region = req.params[0].split('/')[2] || '';
  let trails = [];
  let trail = {};
  let provinces = [];

  if (region) {
    trails = showTrails(data, region);
    provinces = showProvinces(region);
  }

  if (id) trail = data[id];

  return { trails, region, provinces, trail };
}
