window.BENCHMARK_DATA = {
  lastUpdate: 1642994238475,
  repoUrl: 'https://github.com/napi-rs/napi-rs',
  entries: {
    Benchmark: [
      {
        commit: {
          author: {
            email: 'lynweklm@gmail.com',
            name: 'LongYinan',
            username: 'Brooooooklyn',
          },
          committer: {
            email: 'noreply@github.com',
            name: 'GitHub',
            username: 'web-flow',
          },
          distinct: true,
          id: '135b27acf4b6d4bef1962f813cbc79d3783f77b3',
          message:
            'Merge pull request #1048 from napi-rs/feat/get-js-function\n\nFeat/get js function',
          timestamp: '2022-01-24T11:10:09+08:00',
          tree_id: '11547c2280a352b84ad0a19e176b96822de803dc',
          url: 'https://github.com/napi-rs/napi-rs/commit/135b27acf4b6d4bef1962f813cbc79d3783f77b3',
        },
        date: 1642994237292,
        tool: 'benchmarkjs',
        benches: [
          {
            name: 'noop#napi-rs',
            value: 56149610,
            range: '±0.32%',
            unit: 'ops/sec',
            extra: '93 samples',
          },
          {
            name: 'noop#JavaScript',
            value: 711663587,
            range: '±0.14%',
            unit: 'ops/sec',
            extra: '96 samples',
          },
          {
            name: 'Plus number#napi-rs',
            value: 19069637,
            range: '±0.17%',
            unit: 'ops/sec',
            extra: '93 samples',
          },
          {
            name: 'Plus number#JavaScript',
            value: 709443888,
            range: '±0.13%',
            unit: 'ops/sec',
            extra: '98 samples',
          },
          {
            name: 'Create buffer#napi-rs',
            value: 324386,
            range: '±10.19%',
            unit: 'ops/sec',
            extra: '57 samples',
          },
          {
            name: 'Create buffer#JavaScript',
            value: 1515831,
            range: '±1.67%',
            unit: 'ops/sec',
            extra: '79 samples',
          },
          {
            name: 'createArray#createArrayJson',
            value: 36676,
            range: '±0.15%',
            unit: 'ops/sec',
            extra: '98 samples',
          },
          {
            name: 'createArray#create array for loop',
            value: 7446,
            range: '±0.12%',
            unit: 'ops/sec',
            extra: '98 samples',
          },
          {
            name: 'createArray#create array with serde trait',
            value: 7437,
            range: '±0.12%',
            unit: 'ops/sec',
            extra: '99 samples',
          },
          {
            name: 'getArrayFromJs#get array from json string',
            value: 16398,
            range: '±0.77%',
            unit: 'ops/sec',
            extra: '97 samples',
          },
          {
            name: 'getArrayFromJs#get array from serde',
            value: 9999,
            range: '±0.14%',
            unit: 'ops/sec',
            extra: '98 samples',
          },
          {
            name: 'getArrayFromJs#get array with for loop',
            value: 12287,
            range: '±0.08%',
            unit: 'ops/sec',
            extra: '97 samples',
          },
          {
            name: 'Get Set property#Get Set from native#u32',
            value: 390624,
            range: '±5.63%',
            unit: 'ops/sec',
            extra: '76 samples',
          },
          {
            name: 'Get Set property#Get Set from JavaScript#u32',
            value: 336082,
            range: '±5.75%',
            unit: 'ops/sec',
            extra: '76 samples',
          },
          {
            name: 'Get Set property#Get Set from native#string',
            value: 345286,
            range: '±5.09%',
            unit: 'ops/sec',
            extra: '78 samples',
          },
          {
            name: 'Get Set property#Get Set from JavaScript#string',
            value: 318394,
            range: '±6%',
            unit: 'ops/sec',
            extra: '78 samples',
          },
          {
            name: 'Async task#spawn task',
            value: 38933,
            range: '±1%',
            unit: 'ops/sec',
            extra: '84 samples',
          },
          {
            name: 'Async task#ThreadSafeFunction',
            value: 441,
            range: '±2.18%',
            unit: 'ops/sec',
            extra: '71 samples',
          },
          {
            name: 'Async task#Tokio future to Promise',
            value: 28965,
            range: '±0.54%',
            unit: 'ops/sec',
            extra: '82 samples',
          },
          {
            name: 'Query#query * 100',
            value: 1990,
            range: '±1.46%',
            unit: 'ops/sec',
            extra: '87 samples',
          },
          {
            name: 'Query#query * 1',
            value: 29457,
            range: '±0.84%',
            unit: 'ops/sec',
            extra: '81 samples',
          },
        ],
      },
    ],
  },
}
