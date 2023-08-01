import { StoryObj } from "@storybook/react";
import HiringBoard from "./HiringBoard";

export default {
    component: HiringBoard,
    tags: ["We're Hiring"]
};

export const Default: StoryObj<typeof HiringBoard> = {
    args: {
        children: "Click here to apply"
    }
};