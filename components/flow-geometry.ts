const centerY = 300;

export const flowStrands = Array.from({ length: 13 }, (_, index) => {
  const offset = index - 6;
  const entrance = centerY + offset * 38;
  const junction = centerY + offset * 7;
  const exit = centerY + offset * 28;

  return {
    d: `M0 ${entrance} C120 ${entrance} 160 ${junction} 278 ${junction} C390 ${junction} 480 ${exit} 640 ${exit}`,
    junction,
    exit,
    index,
  };
});

export const flowConnections = [1, 4, 7, 10].map((index) =>
  `M242 ${flowStrands[index].junction} C258 ${flowStrands[index].junction} 262 ${flowStrands[index + 1].junction} 278 ${flowStrands[index + 1].junction}`,
);

export const flowBranches = [
  "M278 300 C370 272 465 230 640 210",
  "M278 300 C370 286 470 278 640 278",
  "M278 300 C370 314 470 322 640 322",
  "M278 300 C370 328 465 370 640 390",
];
