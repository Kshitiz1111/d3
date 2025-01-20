import { select, range, line } from "d3";

const width = window.innerWidth;
const height = window.innerHeight;

const svg = select('body')
  .append('svg')
  .attr('width', width)
  .attr('height', height)

let time = 0;

function makeData(time, n) {
  const data = range(n).map((d) => (
    {
      x: d * 50 + 50,
      y: 250 + Math.sin(d * .5 + time) * 200,
      r: 20 + Math.sin(d * .5 + time * 1) * 10
    }
  ))
  return data;
}

function vizData(data) {
  const lineGenerator = line().x((d) => d.x).y((d) => d.y)

  svg.selectAll('path')
    .data([1])
    .join('path')
    .attr('d', lineGenerator(data))
    .attr('fill', 'none')
    .attr('stroke', 'gray')
    .attr('stroke-width', 5)

  svg.selectAll('circle')
    .data(data)
    .join('circle')
    .attr('r', (d) => d.r)
    .attr('cx', (d) => d.x)
    .attr('cy', (d) => d.y)
}


setInterval(() => {
  const n = 20;
  const data = makeData(time, n)
  vizData(data);
  time = time + .01;
}, 1000 / 60);