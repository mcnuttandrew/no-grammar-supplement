
const skipped = (ctx, value) => ctx.p0.skip || ctx.p1.skip ? value : undefined;
const down = (ctx, value) => ctx.p0.parsed.y > ctx.p1.parsed.y ? value : undefined;

const genericOptions = {
  fill: false,
  interaction: {
    intersect: false
  },
  radius: 0,
};

const config = {
  type: 'line',
  data: {
    labels: Utils.months({count: 7}),
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, NaN, 48, 56, 57, 40],
      borderColor: 'rgb(75, 192, 192)',
      segment: {
        borderColor: ctx => skipped(ctx, 'rgb(0,0,0,0.2)') || down(ctx, 'rgb(192,75,75)'),
        borderDash: ctx => skipped(ctx, [6, 6]),
      },
      spanGaps: true
    }]
  },
  options: genericOptions
};

module.exports = {
  actions: [],
  config: config,
};
