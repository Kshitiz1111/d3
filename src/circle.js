import { range, select } from "d3";
import "./index.scss"

const width = window.innerWidth
const height = "400"

const svg = select('body').append('svg')
  .attr('width', width)
  .attr('height', height)
  .style('border', '1px solid black');


// list of rec

// for (let i = 0; i < n; i++) {
//   marks.push({
//     y: i * 10,
//     width: "100%",
//     height: 5,
//     mask: 'url(#cicle-mask)'
//   })
// }
const mask = svg.append('mask').attr('id', 'circle-mask')
const mask2 = svg.append('mask').attr('id', 'circle-mask2')

const n = 100;
svg.append('g')
  .selectAll('rect')
  .data(range(n))
  .join('rect')
  .attr('y', (d) => d * 15)
  .attr('width', width)
  .attr('height', 10)
  .attr('mask', 'url(#circle-mask)')
  ;
svg.append('g')
  .selectAll('rect')
  .data(range(n))
  .join('rect')
  .attr('x', (d) => d * 15)
  .attr('width', 10)
  .attr('height', height)
  .attr('mask', 'url(#circle-mask2)')
  ;

mask.append('rect')
  .attr('width', width)
  .attr('height', height)
  .attr('fill', 'black')
  ;
mask.append('circle')
  .attr('cx', width / 2)
  .attr('cy', height / 2)
  .attr('r', 150)
  .attr('fill', 'white')
  ;

mask2.append('rect')
  .attr('width', width)
  .attr('height', height)
  .attr('fill', 'white')
  ;

mask2.append('circle')
  .attr('cx', width / 2)
  .attr('cy', height / 2)
  .attr('r', 150)
  .attr('fill', 'black')
  ;

// console.log(mark)