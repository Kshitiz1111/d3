import "./index.scss"

import { select } from "d3-selection"

const svg = select('body').append('svg')
  .attr('width', "100%")
  .attr('height', "500px")
  .style('border', '1px solid black');


// list of rec

const marks = [];
const n = 100;
for (let i = 0; i < n; i++) {
  marks.push({
    y: i * 10,
    width: "100%",
    height: 5,
    mask: 'url(#cicle-mask)'
  })
}

svg.selectAll('rect')
  .data(marks)
  .join('rect')
  .attr('y', (d) => d.y)
  .attr('width', (d) => d.width)
  .attr('height', (d) => d.height)
  .attr('mask', (d) => d.mask)
  ;
// console.log(mark)