import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

const PlatformIcon = ({ Icon, color, title }) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger>
        <Icon
          className={`${color} w-10 h-10 hover:scale-110 transition-transform`}
        />
      </TooltipTrigger>
      <TooltipContent>
        <p>{title}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

export default PlatformIcon;
