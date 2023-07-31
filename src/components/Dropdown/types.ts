export type ItemsProps = {
  icon: string;
  title: string;
};

export interface DropdownProps {
  menuItems: {
    [key: string]: {
      icon: string;
      items: ItemsProps[];
    };
  };
  showColHeader?: boolean | false;
}
