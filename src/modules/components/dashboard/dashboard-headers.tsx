"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { Headphones, ThumbsUp } from "lucide-react";
import Link from "next/link";

const DashboardHeader = () => {
  const { data: session } = authClient.useSession();

  return (
    <div className="flex items-start justify-between">
      <div className="space-y-1">
        <p className="text-muted-foreground text-sm">Nice to see you</p>
        <h1 className="text-2xl font-semibold tracking-tight lg:text-3xl">
          {session?.user?.name}
        </h1>
      </div>
      <div className="hidden items-center gap-3 lg:flex">
        <Button variant="outline" size="sm">
          <Link
            href="mailto:business@voxora.com"
            className="flex items-center justify-center gap-2"
          >
            <ThumbsUp />
            <span className="hidden lg:block">Feedback</span>
          </Link>
        </Button>
        <Button variant="outline" size="sm">
          <Link
            href="mailto:business@voxora.com"
            className="flex items-center justify-center gap-2"
          >
            <Headphones />
            <span className="hidden lg:block">Need help?</span>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default DashboardHeader;
