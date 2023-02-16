import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  width: number;
  height: number;
}

const Illustration = ({ children, width, height }: Props) => {
  return <svg viewBox={`0 0 ${width} ${height}`}>{children}</svg>;
};

export default Illustration;
