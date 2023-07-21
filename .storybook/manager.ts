import { addons } from "@storybook/addons";
import { create } from "@storybook/theming";

const theme = create({
  base: "light",

  colorPrimary: "#0278BE",
  colorSecondary: "#02457C",

  brandTitle: "CodeWinglet",
  brandUrl: "https://www.codewinglet.com/",
  brandImage: "/logo.svg",
});

addons.setConfig({
  theme,
});
