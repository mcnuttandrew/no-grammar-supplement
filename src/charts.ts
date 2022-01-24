export const outputTypePi = (
  values: { key: string; count: number }[]
): any => ({
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  data: { values },
  mark: { type: "arc", tooltip: { content: "data" } },
  encoding: {
    theta: { field: "count", type: "quantitative" },
    color: { field: "key", type: "nominal" },
  },
});
