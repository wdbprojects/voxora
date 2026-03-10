"use client";

import { quickActions } from "@/config/quick-actions-data";
import React from "react";
import QuickActionCard from "@/modules/components/dashboard/quick-action-card";

const QuickActionsPanel = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Quick actions</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {quickActions.map((action) => {
          return (
            <QuickActionCard
              key={action.key}
              title={action.title}
              description={action.description}
              gradient={action.gradient}
              href={action.href}
            />
          );
        })}
      </div>
    </div>
  );
};

export default QuickActionsPanel;
