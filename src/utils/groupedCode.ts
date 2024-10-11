import { BlogContentItem, BlogPost } from '@codewinglet/types';

export const groupedCode = (data: BlogPost[]) => {
  let groupedData: BlogContentItem[] = [];

  let codeData: Array<string> = [];
  let language: string = '';

  data.forEach((item) => {
    item?.content?.forEach((content) => {
      if (content.type !== 'code') {
        if (codeData.length > 0) {
          groupedData.push({
            type: 'code',
            code: codeData.join(''),
            language,
            children: [],
          });
          language = '';
          codeData = [];
        }
        groupedData.push(content);
      } else {
        language = content.language || '';
        codeData.push(
          `${content.children.map((child) => child.text || '').join('')}\n`
        );
      }
    });
    item.content = groupedData;
    groupedData = [];
  });
};
