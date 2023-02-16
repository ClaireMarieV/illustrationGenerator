import Vine from "./Vine";

interface Props {
  width: number;
  height: number;
  x: number;
  y: number;
}

const vineGap = 10;

const vineOffset = 50;

const VinePot = ({ width, height, x, y }: Props) => (
  <g>
    {[...Array(Math.floor(width / vineGap)).keys()].map((_, index, array) => (
      <Vine
        direction={(1.15 - index * (0.3 / array.length)) * Math.PI}
        length={200}
        x={x + index * vineGap + (Math.random() - 0.5) * vineOffset}
        y={y + 32}
      />
    ))}
  </g>
);

export default VinePot;
