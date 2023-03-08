import { Label } from "../Label";

export function Card() {
  return (
    <div>
      <header>
        <Label color="#7159c1" />
      </header>

      <p>Terminar de fazer minha aplicação</p>

      <img
        src="https://github.com/hemerson-git.png"
        alt="Foto do Hemerson Oliveira"
        className="h-6 w-6 rounded-sm mt-[5px]"
      />
    </div>
  );
}
