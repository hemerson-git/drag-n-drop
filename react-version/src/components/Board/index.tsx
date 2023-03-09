import { loadLists } from "../../services/api";
import { List } from "../List";
import { ScrollArea } from "../ScrollArea";

const lists = loadLists();

export function Board() {
  return (
    <section className="flex py-8 h-[calc(100&_-_80px)] overflow-hidden">
      <ScrollArea>
        {lists.map((list) => (
          <List key={list.title} data={list} />
        ))}
      </ScrollArea>
    </section>
  );
}
