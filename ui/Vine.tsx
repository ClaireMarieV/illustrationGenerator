interface Props {
  length: number;
  x: number;
  y: number;
}
const segmentLength = 100;

const horizontalOffset = 20;

const segment = () => {
  return `s ${0} ${(segmentLength / 3) * 2}, ${
    (Math.random() - 0.5) * horizontalOffset
  } ${segmentLength}`;
};

const Vine = ({ length, x, y }: Props) => {
  return (
    <g>
      <path
        fill="transparent"
        strokeWidth={1}
        stroke="black"
        d={`M${x} ${y} ${segment()} ${segment()} ${segment()} ${segment()} ${segment()}`}
      />
    </g>
  );
};
export default Vine;
