export type MenuType = {
  path?: string;
  label: string;
  icon?: string;
};

export type ChildrenType = {
  icon?: string;
  name: string;
  menu?: MenuType[];
};

export type ItemsType = {
  path?: string;
  label: string;
  children?: ChildrenType[];
};

export interface LinkItemProps {
  icon?: string;
  label: string;
  onClick?: () => void;
  isHeader?: boolean;
}

export interface MenuWithCategoryProps {
  open: boolean;
  anchorEle: HTMLElement | null;
  items: ItemsType;
  index: number;
  onClick: () => void;
}
