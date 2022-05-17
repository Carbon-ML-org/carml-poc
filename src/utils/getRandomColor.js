import { red, pink, purple, deepPurple, indigo } from "@mui/material/colors";

const shade = 500;

const colors = [
  red[shade],
  pink[shade],
  purple[shade],
  deepPurple[shade],
  indigo[shade],
];

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

export default getRandomColor;
