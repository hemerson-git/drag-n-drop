import * as PrimitiveScrollArea from "@radix-ui/react-scroll-area";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  orientation?: "horizontal" | "vertical";
};

export function ScrollArea({ children, orientation = "vertical" }: Props) {
  return (
    <PrimitiveScrollArea.Root className="overflow-hidden h-full w-[calc(100%_-_20px)]">
      <PrimitiveScrollArea.Viewport className="h-[calc(100vh_-_120px)]">
        <div className="flex">{children}</div>
      </PrimitiveScrollArea.Viewport>

      <PrimitiveScrollArea.Scrollbar
        orientation="horizontal"
        className="
          flex select-none touch-none p-[2px] bg-gray-300 h-3 !w-screen transition-colors
          hover:bg-gray-300"
      >
        <PrimitiveScrollArea.Thumb className="bg-theme-500 flex-1 rounded-md relative" />
      </PrimitiveScrollArea.Scrollbar>

      <PrimitiveScrollArea.Scrollbar
        orientation="vertical"
        className="flex select-none touch-none p-[2px] bg-gray-300 h-full w-3 transition-colors
        hover:bg-gray-300"
      >
        <PrimitiveScrollArea.Thumb className="bg-theme-500 flex-1 rounded-md relative" />
      </PrimitiveScrollArea.Scrollbar>
      <PrimitiveScrollArea.Corner />
    </PrimitiveScrollArea.Root>
  );
}
