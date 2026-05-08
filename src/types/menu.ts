import { RiToolsLine } from "@remixicon/react";

import { type RemixiconComponentType as RMX } from "@remixicon/react";

export interface MenuItem {
  id: string;
  shown: boolean;
}

export interface MenuState {
  items: Record<string, MenuItem>;
}

export interface MenuOption {
  id: string;
  icon: RMX;
  text: string;
}

export const menuOptions: MenuOption[] = [
  {
    id: "settings",
    icon: RiToolsLine,
    text: "Settings",
  },
];
