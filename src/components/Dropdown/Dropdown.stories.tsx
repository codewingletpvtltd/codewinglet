import { StoryObj } from "@storybook/react";
import Dropdown from "./Dropdown";
import Logo from "../../assets/reactJS.svg";

export default {
  component: Dropdown,
};

export const Default: StoryObj<typeof Dropdown> = {
  args: {
    menuItems: {
      "col 1": {
        icon: Logo,
        items: [
          { icon: Logo, title: "title 1" },
          { icon: Logo, title: "title 2" },
          { icon: Logo, title: "title 3" },
          { icon: Logo, title: "title 4" },
          { icon: Logo, title: "title 5" },
        ],
      },
      "col 2": {
        icon: Logo,
        items: [
          { icon: Logo, title: "title 1" },
          { icon: Logo, title: "title 2" },
          { icon: "", title: "title 3" },
          { icon: "", title: "title 4" },
          { icon: "", title: "title 5" },
        ],
      },
      "col 3": {
        icon: "",
        items: [
          { icon: Logo, title: "title 1" },
          { icon: Logo, title: "title 2" },
          { icon: Logo, title: "title 3" },
          { icon: Logo, title: "title 4" },
          { icon: Logo, title: "title 5" },
        ],
      },
      "col 4": {
        icon: "",
        items: [
          { icon: Logo, title: "title 1" },
          { icon: Logo, title: "title 2" },
          { icon: Logo, title: "title 3" },
          { icon: Logo, title: "title 4" },
          { icon: Logo, title: "title 5" },
        ],
      },
    },
  },
};
