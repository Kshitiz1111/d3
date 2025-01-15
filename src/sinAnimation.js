import { select, range } from "d3";

const width = window.innerWidth;
const height = window.innerHeight;

const svg = select('body')
  .append('svg')
  .attr('width', width)
  .attr('height', height)

let time = 0;
setInterval(() => {
  const data = range(20).map((d) => (
    {
      x: d * 50 + 50,
      y: 250 + Math.sin(d * .5 + time) * 200
    }
  ))

  // const circles = svg.selectAll('circle')
  //   .data(data);
  // const circleEnter = circles.enter()//only work on first, when there is no data.
  //   .append('circle')
  //   .attr('r', 10)
  // circles.merge(circleEnter)//here merging the enter selection and the subsiquent update seletion
  //   .attr('cx', (d) => d.x)
  //   .attr('cy', (d) => d.y)

  //latest approach of above implementation wiht .join() method
  svg.selectAll('circle')
    .data(data)
    .join('circle')
    .attr('r', 10)
    .attr('cx', (d) => d.x)
    .attr('cy', (d) => d.y)

  time = time + .01;
}, 1000 / 60);