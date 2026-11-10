import React from "react";
import { Tabs, TabsContent, TabsTrigger, TabsList } from "@/components/ui/tabs";
import DetailsAviso from "./DetailsAviso";
import { Button } from "@/components/ui/button";
import FileDropZone from "@/modules/avisos/components/FileDropZone";
import {
  Card,
  CardHeader,
  CardDescription,
  CardContent,
  CardTitle,
} from "@/components/ui/card";

import { Paperclip, Clipboard } from "lucide-react";
import TextoAviso from "./TextoAviso";
export const TabAvisos = () => {
  return (
    <Tabs defaultValue="aviso" className="w-full pt-4">
      <TabsList>
        <TabsTrigger value="aviso" className="flex items-center gap-2 px-4 py-2 text-lg data-[state=active]:bg-background data-[state=active]:shadow-sm">
            <Clipboard data-icon="inline-start" className="stroke-[2.5] w-5 h-5"/>
            Aviso
        </TabsTrigger>
        <TabsTrigger value="files" className="flex items-center gap-2 px-4 py-2 text-lg data-[state=active]:bg-background data-[state=active]:shadow-sm">
    
            <Paperclip className="stroke-[2.5] w-7 h-7"/>
            Archivos anexos      
        </TabsTrigger>
      </TabsList>
      <TabsContent value="aviso">
        <Card>
          <CardContent className="-6">
            <TextoAviso />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="files">
        <FileDropZone />
      </TabsContent>
    </Tabs>
  );
};

export default TabAvisos;
