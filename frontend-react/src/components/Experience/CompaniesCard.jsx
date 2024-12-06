import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "../ui/scroll-area";
import { Badge } from "@/components/ui/badge"

const CompaniesCard = () => {
  const experiences = [
    {
      title: "Machine Learning Engineer",
      company: "TikTok Inc.",
      period: "June 2023 - Present",
      location: "San Jose, CA, USA",
      description:
        "Improving ads ranking models on the core TikTok product. Experience working on modeling two-tower architectures like DeepFM, Wide & deep learning, etc. Working on Large Language Models (LLM) pretraining and Large Multi-modal Model (LMM) finetuning strategies.",
      logo: "/images/me1.png",
    },
    {
      title: "Associate AI Engineer",
      company: "Legato Health Technology",
      period: "June 2020 - Aug 2021",
      location: "Hyderabad, Telangana",
      description:
        "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurrence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
      logo: "/legato-logo.png",
    },
    {
        title: "Associate AI Engineer",
        company: "Legato Health Technology",
        period: "June 2020 - Aug 2021",
        location: "Hyderabad, Telangana",
        description:
          "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurrence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
        logo: "/legato-logo.png",
      },
      {
        title: "Associate AI Engineer",
        company: "Legato Health Technology",
        period: "June 2020 - Aug 2021",
        location: "Hyderabad, Telangana",
        description:
          "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurrence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
        logo: "/images/me2.png",
      },
  ];


  console.log(experiences.length);
  

  return (
    <>

        <ScrollArea className="h-[550px] animate-slideInBottom">
      <div className="max-w-4xl mx-auto p-4">
        <div className="relative">
          {/* Timeline line */}
          

          {/* Experience cards */}
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div key={index} className="relative flex gap-6">
                
                {console.log("jaimn", index)}
                {/* {console.log("jaimn", index)} */}

                
                {index !== experiences.length - 1 && <div className=" absolute left-[39px] top-0 h-[120%] w-0.5 bg-border" /> }
                
                {/* Logo */}
                <Avatar className="w-20 h-20 bg-transparent border-2 border-background">
                  <AvatarImage
                    src={experience.logo}
                    alt={`${experience.company} logo`}
                  />
                  <AvatarFallback>{experience.company[0]}</AvatarFallback>
                </Avatar>

                

                {/* Content */}
                <Card className="flex-1 bg-blue-900/40 ">
                  <CardHeader className="flex  flex-row items-start justify-between space-y-0">
                    <div>
                      <CardTitle>{experience.title}</CardTitle>
                        <Badge className=" mt-2 bg-gray-800/40">{experience.company}</Badge>

                    </div>
                    <div className="text-right flex flex-col text-sm text-muted-foreground">
                      <Badge className=" mt-2 bg-gray-800/40">{experience.period}</Badge>
                      <Badge className=" mt-2 bg-gray-800/40">{experience.location}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">{experience.description}</p>
                  </CardContent>
                </Card>
              </div>

              
            ))}
          </div>
        </div>
      </div>
      </ScrollArea>
    </>
  );
};

export default CompaniesCard;
