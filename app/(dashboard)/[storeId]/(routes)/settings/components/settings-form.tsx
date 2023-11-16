"use client";

import { Heading } from "@/components/ui/heading";
import { Store } from "@prisma/client";

interface SettingsFormProps {
  initialData: Store;
}

export const SettingsForm: React.FC<SettingsFormProps> = ({ initialData }) => {
  return (
    <div className="flex items-center justify-between">
      <Heading title="Setting" description="Manage Store preference" />
    </div>
  );
};
