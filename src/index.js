import { getData } from "./iris_data.js";
import { select } from "d3";

const width = window.innerWidth;
const height = window.innerHeight;

const svg = select('body').append('svg').attr('width', width).attr('height', height)

let data;
try {
  data = await getData(width, height, svg);
} catch (error) {
  console.error(error)
}
console.log(data)
svg.selectAll('circle')
  .data(data)
  .join('circle')
  .attr('r', 5)
  .attr('cx', (d) => d.x)
  .attr('cy', (d) => d.y)

