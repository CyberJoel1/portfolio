import { TypesSvgIcons } from "@/config/icons/enums/typesSvgIcons";
import { TemplateCardWork } from "../models/TemplateCardWork";

export const WORKS_DATA: TemplateCardWork[] = [
    {
        id: 1,
        title: "Waroom",
        description: "Prototipo de red social temática para la compra," +
            "venta y alquiler de inmuebles",
        image: "/works/waroom.png",
        functionalities: ["Manejo de publicaciones (me gusta, comentarios)",
         "Almacenamiento imagenes",
        "Creación de perfil de usuario público",
        "Manejo de mapas dinamicos",
        "Manejo de autenticación y autorización"],
        linkGithub: "https://github.com/CyberJoel1/Wow",
        tools: [TypesSvgIcons.NEXTJS_ICON, TypesSvgIcons.NEO4J,
                TypesSvgIcons.NESTJS_ICON, TypesSvgIcons.TAILWIND_ICON,
                TypesSvgIcons.GRAPHQL, TypesSvgIcons.WEBSOCKET,
                TypesSvgIcons.TYPESCRIPT, TypesSvgIcons.SUPABASE,
                TypesSvgIcons.JSONWEBTOKEN, TypesSvgIcons.LEAFLET
        ],
        link: ""
    },
    {
        id: 2,
        title: "Simulación de cajero",
        description: "",
        image: "/works/distri.png",
        functionalities: ["Motores de plantillas", "Manejo de sesiones"],
        linkGithub: "https://github.com/CyberJoel1/Modelo_cajero",
        tools: [TypesSvgIcons.NODEDOT_JS, TypesSvgIcons.SEQUELIZE, TypesSvgIcons.EJS],
        link: ""
    }
]; 