"use client";

import { Button } from "@/components/ui/button";
import { type IQuickAction } from "@/config/types";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const QuickActionCard = ({
  key,
  title,
  description,
  gradient,
  href,
}: IQuickAction) => {
  return (
    <div key={key} className="bg-card flex gap-4 rounded-xl border p-3">
      <div
        className={cn(
          "relative h-31 w-31 shrink-0 overflow-hidden rounded-xl bg-linear-to-br",
          gradient,
        )}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-card/30 size-12 rounded-full"></div>
        </div>
        <div className="ring-card/20 absolute inset-2 rounded-lg ring-2 ring-inset"></div>
      </div>
      {/* CONTENT */}
      <div className="flex flex-col justify-between py-1">
        <div className="space-y-1">
          <h3 className="text-sm leading-tight font-normal">{title}</h3>
          <p className="text-muted-foreground text-xs leading-tight">
            {description}
          </p>
        </div>
        <Button variant="outline" size="xs" className="w-fit">
          <Link href={href} className="flex items-center justify-between gap-2">
            <span>Try now</span>
            <ArrowRight className="size-3" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default QuickActionCard;
