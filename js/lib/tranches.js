const def_spec = [
  [9964, 0],
  [27519, 11],
  [73779, 13],
  [156244, 14],
  [Number.MAX_VALUE, 45],
]

const tranches = (spec) => {
  // 0 -> ... -> Number.MAX_VALUE
  const z = {z:0, ts:[]};
  const r = ({z,ts}, [s,p]) => {
    // (z,ts) -> (s,[{z,s,p}])
    return {
      z:s,
      ts: ts.concat([{z:z, s:s, p:p}]),
    }
  };
  return spec.reduce(r, z);
}
