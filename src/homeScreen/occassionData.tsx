const date = new Date();
const year = date.getFullYear();
let yearsTogether =
  "Happy anniversary baby! It's Our " +
  (year - 2017) +
  "th Year Together. I love you.";
let age =
  "Its your " + (year - 1992) + " birthday. I hope it's an amazing one!";

const occassion = [
  {
    title: "Happy Anniversary",
    text: yearsTogether
  },
  {
    title: "Happy Birthday",
    text: age
  },
  {
    title: "Hohoho Merry Christmas",
    text: "The best present for this year is to spend time together."
  }
];

export default occassion;
