import DndExample from "@/components/DndExample";
import DndExample2 from "@/components/DndExample2";
import React from "react";

function DragDropPage() {
  return (
    <div className="flex flex-col">
      <DndExample /> <DndExample2 />
    </div>
  );
}

export default DragDropPage;
