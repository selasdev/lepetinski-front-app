export const marksDistance = [
  {
    value: 0,
    label: "0km",
  },
  {
    value: 10,
    label: "10km",
  },
  {
    value: 20,
    label: "20km",
  },
  {
    value: 30,
    label: "30km",
  },
  {
    value: 40,
    label: "40km",
  },
  {
    value: 50,
    label: "50km",
  },
  {
    value: 60,
    label: "60km",
  },
  {
    value: 70,
    label: "70km",
  },
  {
    value: 80,
    label: "80km",
  },
  {
    value: 90,
    label: "90km",
  },
  {
    value: 100,
    label: "100km",
  },
];

export function valueTextDistance(value: number) {
  return `${value}km`;
}

export function valueLabelFormatDistance(value: number) {
  return value + "km";
}

export const marksAge = [
  {
    value: 0,
    label: "0 años",
  },
  {
    value: 1,
    label: "1 años",
  },
  {
    value: 2,
    label: "2 años",
  },
  {
    value: 3,
    label: "3 años",
  },
  {
    value: 4,
    label: "4 años",
  },
  {
    value: 5,
    label: "5 años",
  },
  {
    value: 6,
    label: "6 años",
  },
  {
    value: 7,
    label: "7 años",
  },
  {
    value: 8,
    label: "8 años",
  },
  {
    value: 9,
    label: "9 años",
  },
  {
    value: 10,
    label: "10 años +",
  },
];

export function valueTextAge(value: number) {
  return `${value} años`;
}

export function valueLabelFormatAge(value: number) {
  return value + (value < 10 ? " años" : " años+");
}
