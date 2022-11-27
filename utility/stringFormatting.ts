const INVALID_CHARACTERS = {
  " ": "-",
};

function textToID(text: string): string {
  text = text.toLowerCase();

  for (const [key, value] of Object.entries(INVALID_CHARACTERS)) {
    text = text.replaceAll(key, value);
  }

  return text;
}

export { textToID };
