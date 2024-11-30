const spec = {
  data: {
    values: [
      {a: 'A', b: 28},
      {a: 'B', b: 55},
      {a: 'C', b: 43},
      {a: 'D', b: 91},
      {a: 'E', b: 81},
      {a: 'F', b: 53},
      {a: 'G', b: 19},
      {a: 'H', b: 87}
    ]
  },
  mark: 'point',
  encoding: {
    x: {field: 'a', type: 'nominal'},
    y: {field: 'b', type: 'quantitative'}
  }
};

// Assuming you're using a library like Vega-Embed to render this specification:
vegaEmbed('#vis', spec);
