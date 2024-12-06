import { useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, Play } from "lucide-react";

const SingleProjectView = ({
  title="",
  description="",
  techStack=[],
  codeLink="",
  runLink=""
}) => {
  return (
    <>
      <Card className=" bg-blue-800/10  min-h-[150px]  ">
        <div className="flex flex-col  ">


          <CardHeader className="flex flex-row items-start justify-between ">
            <div>
              <CardTitle>{title}</CardTitle>
              {techStack.length > 0 ? (
                techStack.map((tech, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="mt-2 bg-gray-800/40 mr-1 hover:text-black text-white"
                  >
                    {" "}
                    {tech}{" "}
                  </Badge>
                ))
              ) : (
                ""
              )}
              {/* <Badge className=" mt-2 bg-gray-800/40">{title}</Badge> */}
            </div>

            <div className=" flex justify-around gap-0 ">
              <Button onClick={() => window.open(codeLink, '_blank')} className="bg-orange-900 hover:bg-gray-800/10 rounded-s-xl rounded-e-none">{"Code <>"}</Button>
              <Button onClick={() => window.open(runLink, '_blank')} className="bg-gray-900 rounded-e-xl rounded-s-none hover:bg-orange-800/10  ">Run 🏃‍♂️‍➡️</Button>
            </div>
          </CardHeader>


          <CardContent>
            <p className="text-sm">{description}</p>
          </CardContent>
        </div>
      </Card>
    </>
  );
};

export default SingleProjectView;
