import { TypesSvgIcons } from "@/config/icons/enums/typesSvgIcons";


export const SKILL_TEMPLATE_DATA: SkillTemplate[] = [
    {
        id: 1,
        title: 'Desarrollo Frontend',
        description: 'Desarrollo frontend mediante :',
        icons: [
            TypesSvgIcons.REACT_ICON,
            TypesSvgIcons.CSS_ICON,
            TypesSvgIcons.TAILWIND_ICON,
            TypesSvgIcons.NEXTJS_ICON,
            TypesSvgIcons.REACTQUERY_ICON
        ]
    },
    {
        id: 2,
        title: 'Desarrollo Backend',
        description: 'Desarrollo backend :',
        icons: [
            TypesSvgIcons.NESTJS_ICON,
            TypesSvgIcons.SPRINGBOOT_ICON,
            TypesSvgIcons.NODEDOT_JS,
            TypesSvgIcons.MYSQL_ICON
        ]
    },
    {
        id: 3,
        title: 'Desarrollo CLOUD',
        description: 'Desarrollo cloud con herramientas como :',
        icons: [
            TypesSvgIcons.AMAZON_AWS,
            TypesSvgIcons.TERMINAL_ICON,
            TypesSvgIcons.LINUX_ICON
            
        ]
    },
    {
        id: 4,
        title: 'Lenguajes utilizados',
        description: 'lenguajes :',
        icons: [
            TypesSvgIcons.JAVASCRIPT_ICON,
            TypesSvgIcons.JAVA,
            TypesSvgIcons.PYTHON_ICON
        ]
    },
    {
        id: 5,
        title: 'Protocolos utilizados',
        description: 'estos son :',
        icons: [
            TypesSvgIcons.API,
            TypesSvgIcons.GRAPHQL,
            TypesSvgIcons.WEBSOCKET
        ]
    }
];