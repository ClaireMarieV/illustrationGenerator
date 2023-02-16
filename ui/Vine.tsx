interface Props {
  length: number;
  x: number;
  y: number;
  direction?: number;
}
const segmentLength = 100;

const horizontalOffset = 20;

const rootLength = 15;

const root = (direction: number) => {
  return `s ${Math.sin(direction) * rootLength * 0.35} ${
    Math.cos(direction) * rootLength
  }, ${Math.sin(direction) * rootLength} ${Math.cos(direction) * rootLength}`;
};

const segment = (length: number = segmentLength) => {
  return `s ${0} ${(length / 3) * 2}, ${
    (Math.random() - 0.5) * horizontalOffset
  } ${length}`;
};

const Vine = ({ length, x, y, direction = 0 }: Props) => {
  return (
    <g>
      <path
        fill="transparent"
        strokeWidth={1}
        stroke="black"
        d={`M${x} ${y}  ${root(direction)} ${[
          ...Array(Math.floor(length / segmentLength)).keys(),
        ].map(() => segment())} ${segment(length % segmentLength)}`}
      />
    </g>
  );
};
export default Vine;
