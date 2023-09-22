import ItemsMenu from "@/data/MenuPrincipal.json";

export function adaptMenuItems(): Record<string,MenuItem> {
    
    const { HOME, ABOUT_ME, WORKS, SKILLS, CONTACT } = ItemsMenu;

    const itemsMenuPrincipal: Record<string,MenuItem>  = {
        HOME    : HOME,
        ABOUT_ME: ABOUT_ME,
        SKILLS  : SKILLS,
        WORKS   : WORKS,
        CONTACT : CONTACT
    };
  
    return itemsMenuPrincipal;
}