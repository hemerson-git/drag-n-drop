import { Label } from "../Label";

export type CardProps = {
  id: number;
  content: string;
  labels: string[];
  user?: string;
};

type Props = {
  card: CardProps;
};

export function Card({ card }: Props) {
  return (
    <div
      className="relative cursor-grab bg-white rounded-md mb-[10px] p-4 shadow-theme border-t-[20px]
        border-[rgba(230, 236, 245, 0.4)]
      "
    >
      <header className="absolute -top-[22px] left-[15px]">
        {card.labels.map((label) => (
          <Label color={label} key={label} />
        ))}
      </header>

      <p className="font-medium leading-5">{card.content}</p>

      {card?.user && (
        <img
          src={card.user}
          alt="Foto do Hemerson Oliveira"
          className="h-6 w-6 rounded-sm mt-[5px]"
        />
      )}
    </div>
  );
}
