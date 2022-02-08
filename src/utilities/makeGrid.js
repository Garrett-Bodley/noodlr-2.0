const makeGrid = (
  beatCount,
  pitches = ["F4", "Eb4", "C4", "Bb3", "Ab3", "F3", "E1", "D1", "C1"]
) => {
  const vamp = [];

  for (const pitch of pitches) {
    const row = [];
    for (let i = 0; i < beatCount; i++) {
      row.push({ pitch: pitch, isActive: false });
    }
    vamp.push(row);
  }
  return vamp;
};

export default makeGrid;
