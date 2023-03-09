import { Plus } from "phosphor-react";
import { loadLists } from "../../services/api";
import { Card, CardProps } from "../Card";
import { ScrollArea } from "../ScrollArea";

type Props = {
  data: {
    title: string;
    creatable: boolean;
    done?: boolean | undefined;
    cards: CardProps[];
  };
};

export function List({ data }: Props) {
  return (
    <div
      className="
      px-4 h-full flex-grow-0 flex-shrink-0 basis-80 [&:not(first-child)]:border-l 
      [&:not(first)]:border-[rgba(0,0,0,0.05)] select-none
    "
    >
      <header className="flex justify-between items-center h-11">
        <h2 className="font-medium px-[10px]">{data.title}</h2>

        {data.creatable && (
          <button
            type="button"
            aria-label="Create New"
            className="
            flex w-10 h-10 rounded-2xl !bg-themeBlue-500 border-0 cursor-pointer
            items-center justify-center
          "
          >
            <Plus size={24} color="#FFF" />
          </button>
        )}
      </header>

      <ul className="mt-7">
        {data.cards.map((card) => (
          <li key={card.id}>
            <Card card={card} />
          </li>
        ))}
      </ul>
    </div>
  );
}
