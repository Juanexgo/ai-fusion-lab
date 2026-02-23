"use client";
import React, { useState } from "react";
import AiModelList from "./../../shared/AiModelList";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Lock, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";


function AiMultiModels() {
  const [aiModelList, setAiModelList] = useState(() =>
    AiModelList.map((model) => ({ ...model, enabled: model.enable }))
  );

  const onToggleChange = (model, value) => {
    setAiModelList((prev) =>
      prev.map((m) => (m.model === model ? { ...m, enabled: value } : m))
    );
  };

  return (
    <div className="flex flex-1 h-[75vh] border-b">
      {aiModelList.map((model) => (
        <div
          key={model.model}
          className={`flex flex-col border-r h-full overflow-auto ${
            model.enabled ? "flex-1 min-w-[400px]" : "w-[100px] flex-none"
          }`}
        >
          <div className="flex w-full h-[70px] items-center justify-between border-b p-4">
            <div className="flex items-center gap-4">
              <Image src={model.icon} alt={model.model} width={24} height={24} />

              {model.enabled && ( // 👈 antes decía model.enable
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder={model.subModel?.[0]?.name} />
                  </SelectTrigger>

                  <SelectContent>
                    {model.subModel?.map((subModel) => (
                      <SelectItem
                        key={subModel.name} // 👈 key estable
                        value={subModel.name}
                      >
                        {subModel.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            </div>

            {model.enabled ? (
              <Switch
                checked={model.enabled}
                onCheckedChange={(v) => onToggleChange(model.model, v)}
              />
            ) : (
              <button
                type="button"
                onClick={() => onToggleChange(model.model, true)}
                className="inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-muted"
                aria-label={`Activar ${model.model}`}
              >
                <MessageSquare className="h-5 w-5 text-foreground" strokeWidth={2.2} />
              </button>
            )}
          </div>
          <div className="flex-1">
            {model.premium && model.enabled && (
              <div className="flex h-full items-center justify-center">
                <Button size="sm" className="px-4">
                  <Lock className="mr-2 h-4 w-4" />
                  Upgrade to unlock
                </Button>
              </div>
            )}
          </div>
        </div>
      ))}


    </div>
  );
}

export default AiMultiModels;
