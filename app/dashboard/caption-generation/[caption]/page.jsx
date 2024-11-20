'use client'
import React from "react";
import PromptOutput from "../../content/_components/PromptOutput";
import { useParams} from "next/navigation";

function CaptionOutput() {
  const { caption } = useParams();
  return (
    <div>
      <PromptOutput userCaption={{ caption }} />
    </div>
  );
}

export default CaptionOutput;
