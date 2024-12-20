import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SimpleButton } from "@components/index";
import { Badge } from "../ui/badge";
import { Earth } from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";

const Persona = ({ personaList = [] }) => {
  return (
    <>
      <div className="flex flex-col w-[450px] h-[510px]">
        <div className=" bg-transparent border-2 backdrop-blur-lg rounded-3xl h-12  transition-colors flex justify-center items-center mb-4 ">
          <p>My Beyond Tree</p>
        </div>

        <Tabs
          defaultValue="account"
          className=" bg-transparent w-full  h-[400px] "
        >
          <TabsList className="grid w-full grid-cols-2 bg-gray-800/20 border-white border-2 ">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account" className="h-full">
            <Card className="bg-transparent h-full">
              <ScrollArea className="h-full py-4">
                <CardContent className="flex flex-col gap-4 animate-slideInUp">
                  {personaList.map((thing, index) => (
                    <div className="flex gap-2 " key={index}>
                      <div className="w-full h-fit min-h-24 bg-gray-800/30 border-white flex rounded-2xl gap-2 p-2   ">
                        <Earth />
                        <div className="flex flex-col w-full gap-1">
                          <p className="border-b-2 w-fit pb-1 pr-2 border-black text-white">
                            {thing}
                          </p>
                          <p className="text-base">
                            fcvgnj fghjk drfghj4e5r6ty ftge hj g fcvgnj fghjk
                            drfghj4e5r6ty ftge hj g fcvgnj fghjk drfghj4e5r6ty
                            ftge hj g fcvgnj fghj k drfghj4e5r6ty ftge hj g{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </ScrollArea>
            </Card>
          </TabsContent>
          <TabsContent value="password" className="h-full">
            <Card className="bg-transparent h-full">
              <CardContent className="space-y-2"></CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default Persona;
