<Frame width={360} height={270} background="#7375A5">
  <WordCloud
    className="word-cloud"
    width={360}
    height={270}
    data={namesData}
    encoding={{
      color: {
        field: 'count',
        scale: {
          range: ['#7375A5', '#fff'],
          zero: true
        },
        type: 'quantitative'
      },
      emoji: {
        field: 'count',
        scale: {
          type: 'threshold',
          domain: [1000000, 2000000],
          range: ['', '☃️', '️❄️']
        },
        type: 'quantitative'
      },
      fontFamily: {
        value: 'Raleway, Helvetica, sans-serif'
      },
      fontSize: {
        field: 'count',
        scale: {
          range: [0, 40]
        },
        type: 'quantitative'
      },
      fontWeight: {
        value: 'normal'
      },
      text: {field: 'name'}
    }}
  />
</Frame>;
