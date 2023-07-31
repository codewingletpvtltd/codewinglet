import React from "react";
import { StoryObj } from "@storybook/react";
import TitleAndDescription from "./TitleAndDescription";

export default {
  component: TitleAndDescription,
  tags: ["TitleAndDescription"],
};

export const Basic: StoryObj<typeof TitleAndDescription> = {
  args: {
    title: "This is a title",
    description: "This is a description",
  },
};

export const BoldFirstWord: StoryObj<typeof TitleAndDescription> = {
  args: {
    title: "This is a title",
    description: "This is a description",
    boldWords: [0],
  },
};

export const BoldFirstAndLastWords: StoryObj<typeof TitleAndDescription> = {
  args: {
    title: "This is a title",
    description: "This is a description",
    boldWords: [0, 3],
  },
};

export const CustomTitleClass: StoryObj<typeof TitleAndDescription> = {
  args: {
    title: "This is a title",
    description: "This is a description",
    titleClass: "text-#FF0000",
  },
};

export const CustomDescriptionClass: StoryObj<typeof TitleAndDescription> = {
  args: {
    title: "This is a title",
    description: "This is a description",
    descriptionClass: "text-#FF0000-lg",
  },
};

export const CustomClassesAndBoldWords: StoryObj<typeof TitleAndDescription> = {
  args: {
    title: "This is a title",
    description: "This is a description",
    boldWords: [0, 3],
    titleClass: "text-#FF0000-2xl",
    descriptionClass: "text-#FF333-lg",
  },
};
