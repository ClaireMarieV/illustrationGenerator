interface Props {
  length: number;
  x: number;
  y: number;
}
const segmentLength = 100;

const horizontalOffset = 20;

const segment = (length: number = segmentLength) => {
  return `s ${0} ${(length / 3) * 2}, ${
    (Math.random() - 0.5) * horizontalOffset
  } ${length}`;
};

const Vine = ({ length, x, y }: Props) => {
  return (
    <g>
      <path
        fill="transparent"
        strokeWidth={1}
        stroke="black"
        d={`M${x} ${y} ${[
          ...Array(Math.floor(length / segmentLength)).keys(),
        ].map(() => segment())} ${segment(length % segmentLength)}`}
      />
    </g>
  );
};
export default Vine;
