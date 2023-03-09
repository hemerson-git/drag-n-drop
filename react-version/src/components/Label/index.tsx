type Props = {
  color: string;
};

export function Label({ color }: Props) {
  return (
    <span
      className={`w-[10px] h-[10px] rounded-sm inline-block`}
      style={{
        background: color,
      }}
    ></span>
  );
}
