/*
title: Node Align Right in Sankey
category: sankey
titleCN: 桑基图右对齐布局
difficulty: 3
*/

myChart.showLoading();
$.get(ROOT_PATH + '/data/asset/data/energy.json', function (data) {
  myChart.hideLoading();

  myChart.setOption(
    (option = {
      title: {
        text: 'Node Align Left'
      },
      tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
      },
      animation: false,
      series: [
        {
          type: 'sankey',
          emphasis: {
            focus: 'adjacency'
          },
          nodeAlign: 'right',
          data: data.nodes,
          links: data.links,
          lineStyle: {
            color: 'source',
            curveness: 0.5
          }
        }
      ]
    })
  );
});

export {};
