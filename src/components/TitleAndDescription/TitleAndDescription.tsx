import React from "react";
import { TitleDescriptionProps } from "./types";

const TitleAndDescription: React.FC<TitleDescriptionProps> = ({
  boldWords,
  title,
  titleClass,
  description,
  descriptionClass,
  ...rest
}) => {
  const titleWords = boldWords
    ? title.split(" ").map((word, index) => {
        const isBold = boldWords.includes(index);
        return (
          <>
            <span
              key={index}
              className={`${isBold ? "font-[800]" : "font-[300]"} text-primary`}
            >
              {word}
            </span>
            &nbsp;
          </>
        );
      })
    : title;

  return (
    <div className={"flex justify-center flex-col gap-2"}>
      <div
        className={`flex flex-wrap items-baseline text-[50px] text-primary ${titleClass}`}
        {...rest}
      >
        {titleWords}
      </div>
      <div className={`text-[18px] text-#506B82 ${descriptionClass}`} {...rest}>
        {description}
      </div>
    </div>
  );
};

export default TitleAndDescription;
