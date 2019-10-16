const filterList = (trails, selections) => {
  const {
    selectedProvince,
    selectedService,
    selectedDay,
    selectedLevel,
    selectedComfort
  } = selections;
  let list = trails;

  if (selectedProvince && selectedProvince.length >= 1) {
    list = list.filter(trail => trail.province === selectedProvince);
  }

  if (selectedDay && selectedDay.length >= 1) {
    list = list.filter(trail => trail.duration.includes(selectedDay));
  }

  if (selectedLevel && selectedLevel.length >= 1) {
    list = list.filter(trail => selectedLevel.includes(trail.level));
  }

  if (selectedComfort && selectedComfort.length >= 1) {
    list = list.filter(trail => trail.comfort.includes(selectedComfort));
  }

  if (selectedService && selectedService.length >= 1) {
    list = list.filter(trail => trail.services === selectedService);
  }

  return list;
};

export default filterList;
