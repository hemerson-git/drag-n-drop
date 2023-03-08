import { List } from "../List";

export function Board() {
  return (
    <section className="flex py-8 h-[calc(100&_-_80px)]">
      <List />
      <List />
      <List />
      <List />
    </section>
  );
}
