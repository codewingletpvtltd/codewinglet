import { TypingHTMLElement } from '../types';

const OP_CODE_DELETION = 'DELETE';
const OP_CODE_WRITING = 'WRITING';

/**
 *
 * @param edits Array of characters
 */
function* editor(edits: ReadonlyArray<string>) {
  for (const snippet of edits) {
    yield {
      op: (node: any) =>
        requestAnimationFrame(() => (node.textContent = snippet)),

      opCode: (node: any) => {
        const nodeContent = node.textContent || '';

        return snippet === '' || nodeContent.length > snippet.length
          ? OP_CODE_DELETION
          : OP_CODE_WRITING;
      },
    };
  }
}

/**
 *
 * @param ms Wait for the perticulare ms
 */
async function wait(ms: number) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 *
 * @param node Current node
 * @param edits Array of characters
 * @param speed Typing speed
 * @param deletionSpeed Deletion speed
 */
async function perform(
  node: TypingHTMLElement,
  edits: ReadonlyArray<string>,
  speed: number,
  deletionSpeed: number
) {
  let filteredEdits = edits;

  for (const op of genratorResolver(editor(filteredEdits))) {
    const waitingTime =
      op.opCode(node) === OP_CODE_WRITING
        ? speed + speed * (Math.random() - 0.5)
        : deletionSpeed + deletionSpeed * (Math.random() - 0.5);
    op.op(node);
    await wait(waitingTime);
  }
}

/**
 *
 * @param text String which should be type
 * @param startIndex Where to start writing
 */
function* writer(text: string, startIndex = 0) {
  const splitText = text.split('');
  const endIndex = splitText.length;

  while (startIndex < endIndex) {
    yield splitText.slice(0, ++startIndex).join('');
  }
}

/**
 *
 * @param text String which shiould be deleted
 * @param startIndex Where to delete the text
 */
function* deleter(text: string, startIndex = 0) {
  const splitText = text.split('');
  let endIndex = splitText.length;

  while (endIndex > startIndex) {
    yield splitText.slice(0, --endIndex).join('');
  }
}

/**
 * We need this function because in the ES2015+ we can't use spread operator directly on GeneratorFunctions.
 * @param gen Generator functions
 * @returns Result array
 */
const genratorResolver = (gen: Generator<any, void, any>) => {
  let result = [];
  let next = gen.next();
  while (!next.done) {
    result.push(next.value);
    next = gen.next();
  }
  return result;
};

/**
 *
 * @param node Current node
 * @param text Current text
 * @param speed Typing and deletion speed
 */
async function edit(node: TypingHTMLElement, text: string, speed: number) {
  const nodeContent = node.textContent || '';

  await perform(
    node,
    [
      ...genratorResolver(deleter(nodeContent)),
      ...genratorResolver(writer(text)),
    ],
    speed,
    speed
  );
}

/**
 *
 * @param node The node is the current element.
 * @param text Array of the strings and number of functions to be executed.
 * @param speed Speed of the typing and deletion
 */
export async function typingMain(
  node: TypingHTMLElement,
  text: Array<string | typeof typingMain>,
  speed: number,
  wordDelay: number
) {
  for (const arg of text) {
    switch (typeof arg) {
      case 'string':
        await edit(node, arg, speed);
        await wait(wordDelay);
        break;
      case 'function':
        arg(node, text, speed, wordDelay);
        break;
      default:
        arg;
        break;
    }
  }
}
