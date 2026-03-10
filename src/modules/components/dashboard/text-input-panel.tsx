"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { TEXT_MAX_LENGTH } from "@/config/data";
import { routes } from "@/config/routes";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Coins } from "lucide-react";
import { Button } from "@/components/ui/button";

const TextInputPanel = () => {
  const [text, setText] = useState("");
  const router = useRouter();

  const handleGenerate = () => {
    const trimmed = text.trim();
    if (!trimmed) return;
    router.push(`${routes.textToSpeech}?text=${encodeURIComponent(trimmed)}`);
  };

  return (
    <div className="z-20 rounded-[20px] bg-linear-185 from-[#FF8EE3] from-15% via-[#57D7E0] via-39% to-[#DBF1F2] to-85% p-0">
      <div className="rounded-[20px] p-1">
        <div className="bg-background space-y-4 rounded-2xl p-0 drop-shadow-xs">
          {/* TEXTAREA */}
          <Textarea
            placeholder="Start typing or paste your text here"
            className="text-foreground! min-h-35 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
            value={text}
            onChange={(event) => {
              setText(event.target.value);
            }}
            maxLength={TEXT_MAX_LENGTH}
          />
          {/* BOTTOM INFO */}
          <div className="z-10 flex items-center justify-between bg-transparent">
            <Badge
              variant="outline"
              className="mb-2 ml-2 gap-1.5 border-dashed"
            >
              <Coins className="text-chart-5 size-3" />
              <span className="text-xs">
                {text.length === 0 ? (
                  "Start typing to estimate"
                ) : (
                  <>
                    <span className="tabular-nums">
                      ${(text.length * 0.0003).toFixed(4)}
                    </span>{" "}
                    estimated
                  </>
                )}
              </span>
            </Badge>
            <span className="text-muted-foreground mr-3 mb-2 text-xs">
              {text.length.toLocaleString()} /{" "}
              {TEXT_MAX_LENGTH.toLocaleString()} characters
            </span>
          </div>
        </div>
        {/* ACTION BAR */}
        <div className="flex items-center justify-end p-3">
          <Button
            size="sm"
            disabled={!text.trim()}
            onClick={handleGenerate}
            className="w-full lg:w-auto"
          >
            Generate Speech
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TextInputPanel;
