import { range, select, symbol, symbolsFill } from "d3";
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
// const mask2 = svg.append('mask').attr('id', 'mask2')

const n = 100;
svg.append('g')
  .selectAll('rect')
  .data(range(n))
  .join('rect')
  .attr('y', (d) => d * 15)
  .attr('width', width)
  .attr('height', 10)
  .attr('mask', 'url(#mask1)')
  ;
svg.append('g')
  .selectAll('rect')
  .data(range(n))
  .join('rect')
  .attr('x', (d) => d * 15)
  .attr('width', 10)
  .attr('height', height)
  .attr('mask', 'url(#mask2)')
  ;

const renderMask = (shapeIndex, maskId, inverted) => {
  const mask = svg.append('mask').attr('id', maskId);

  mask.append('rect')
    .attr('width', width)
    .attr('height', height)
    .attr('fill', inverted ? 'black' : 'white')
    ;

  mask
    .selectAll('g')
    .data(range(symbolsFill.length))
    .join((items) =>
      items
        .append('g')
        .attr('transform', (d) => `translate(${d * 200 + 150}, ${height / 2})`)
        .append('path')
        .attr('d', (d) => symbol(symbolsFill[d], 20000)())
        .attr('fill', inverted ? 'white' : 'black')
    )
}
renderMask(6, 'mask1', false)
renderMask(6, 'mask2', true)


