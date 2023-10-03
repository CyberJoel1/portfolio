import { TypesSvgIcons } from "@/config/icons/enums/typesSvgIcons";

type TemplateCardWork = {
    id: number;
    title: string;
    description: any;
    image: any;
    functionalities: string[];
    linkGithub: string;
    tools: TypesSvgIcons[];
    link: string;
};