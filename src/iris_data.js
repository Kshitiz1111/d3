import { axisBottom, axisLeft, csv, extent, scaleLinear } from "d3"


const csvUrl = [
  'https://gist.githubusercontent.com/',
  'curran/',
  'a08a1080b88344b0c8a7/',
  'raw/0e7a9b0a5d22642a06d3d5b9bcbad9890c8ee534/',
  'iris.csv'
].join('')

const parseRow = (d) => {
  d.sepal_length = +d.sepal_length;
  d.sepal_width = +d.sepal_width;
  d.petal_length = +d.petal_length;
  d.petal_width = +d.petal_width;
  return d;
}

const xValue = (d) => d.petal_length;
const yValue = (d) => d.sepal_length;

const margin = {
  top: 100,
  bottom: 100,
  right: 100,
  left: 100
}

async function getDataFromCsvUrl() {
  try {
    const data = await csv(csvUrl, parseRow);
    // console.log("CSV Data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching CSV:", error);
    return undefined;
  }
}

export const getData = async (weight, height, svg) => {
  if (getDataFromCsvUrl()) {
    const data = await getDataFromCsvUrl();

    const x = scaleLinear().domain(extent(data, xValue)).range([margin.left, weight - margin.right]);
    const y = scaleLinear().domain(extent(data, yValue)).range([height - margin.bottom, margin.top]);

    const marks = data.map(d => ({
      x: x(d.petal_length),
      y: y(d.sepal_length)
    }))
    svg.append('g').attr('transform', `translate(${margin.right},0)`).call(axisLeft(y))
    svg.append('g').attr('transform', `translate(0,${height - margin.bottom})`).call(axisBottom(x))
    return marks;
  }

  if (!getDataFromCsvUrl()) {
    return null;
  }
}