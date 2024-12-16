export enum VerticalGapType {
  min = 2,
  mid = 6,
  max = 10,
}

export const VerticalGap = ({
  gap = VerticalGapType.mid,
}: {
  gap?: VerticalGapType;
}) => {
  return <div className={`m-${gap}`}></div>;
};
