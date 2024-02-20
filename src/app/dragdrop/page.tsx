import DndExample from "@/components/DndExample";
import DndExample2 from "@/components/DndExample2";
import React from "react";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});
function DragDropPage() {
  return (
    <main
      className={`${quicksand.variable}  font-quicksand max-w-[900px] w-full m-auto `}
    >
      <div className="flex flex-col">
        <DndExample />
        <DndExample2 />
      </div>
    </main>
  );
}

export default DragDropPage;
