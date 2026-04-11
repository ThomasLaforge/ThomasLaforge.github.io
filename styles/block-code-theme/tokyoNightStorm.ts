// Color               	Use
// #f7768e	This keyword, HTML elements, Regex group symbol, CSS units, Terminal Red
// #ff9e64	Number and Boolean constants, Language support constants
// #e0af68	Function parameters, Regex character sets, Terminal Yellow
// #9ece6a	Strings, CSS class names
// #73daca	Object literal keys, Markdown links, Terminal Green
// #b4f9f8	Regex literal strings
// #2ac3de	Language support functions, CSS HTML elements
// #7dcfff	Object properties, Regex quantifiers and flags, Markdown headings, Terminal Cyan, Markdown code, Import/export keywords
// #7aa2f7	Function names, CSS property names, Terminal Blue
// #bb9af7	Control Keywords, Storage Types, Regex symbols and operators, HTML Attributes, Terminal Magenta
// #c0caf5	Variables, Class names, Terminal White
// #a9b1d6	Editor Foreground
// #9aa5ce	Markdown Text, HTML Text
// #cfc9c2	Parameters inside functions (semantic highlighting only)
// #565f89	Comments
// #414868	Terminal Black
// #24283b	Editor Background (Storm)
// #1a1b26	Editor Background (Night)

const primary = '#bb9af7';
const secondary = "#636f88";
const ternary = " #7aa2f7";
const quaternary = "#ff9e64";
const stringColor = "#9ece6a";
const warningColor = "#f07178";
const variableColor = "#c0caf5";
const bgColor = "#24283b";

export default {
  "code[class*=\"language-\"]": {
    "color": variableColor,
    "background": "none",
    "fontFamily": "\"Fira Code\", Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    "textAlign": "left",
    "whiteSpace": "pre",
    "wordSpacing": "normal",
    "wordBreak": "normal",
    "wordWrap": "normal",
    "lineHeight": "1.5",
    "MozTabSize": "4",
    "OTabSize": "4",
    "tabSize": "4",
    "WebkitHyphens": "none",
    "MozHyphens": "none",
    "msHyphens": "none",
    "hyphens": "none"
  },
  "pre[class*=\"language-\"]": {
    "color": variableColor,
    "background": bgColor,
    "fontFamily": "\"Fira Code\", Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    "textAlign": "left",
    "whiteSpace": "pre",
    "wordSpacing": "normal",
    "wordBreak": "normal",
    "wordWrap": "normal",
    "lineHeight": "1.5",
    "MozTabSize": "4",
    "OTabSize": "4",
    "tabSize": "4",
    "WebkitHyphens": "none",
    "MozHyphens": "none",
    "msHyphens": "none",
    "hyphens": "none",
    "padding": "1em",
    "margin": ".5em 0",
    "overflow": "auto",
    "borderRadius": "0.3em"
  },
  ":not(pre) > code[class*=\"language-\"]": {
    "background": bgColor,
    "padding": ".1em",
    "borderRadius": ".3em",
    "whiteSpace": "normal"
  },
  "comment": {
    "color": secondary
  },
  "prolog": {
    "color": secondary
  },
  "doctype": {
    "color": secondary
  },
  "cdata": {
    "color": secondary
  },
  "punctuation": {
    "color": primary
  },
  ".namespace": {
    "Opacity": ".7"
  },
  "property": {
    "color": primary
  },
  "tag": {
    "color": primary
  },
  "constant": {
    "color": primary
  },
  "symbol": {
    "color": primary
  },
  "deleted": {
    "color": primary
  },
  "number": {
    "color": quaternary
  },
  "boolean": {
    "color": primary
  },
  "selector": {
    "color": quaternary
  },
  "attr-name": {
    "color": quaternary
  },
  "string": {
    "color": stringColor
  },
  "char": {
    "color": stringColor
  },
  "builtin": {
    "color": quaternary
  },
  "inserted": {
    "color": quaternary
  },
  "operator": {
    "color": warningColor
  },
  "entity": {
    "color": primary,
    "cursor": "help"
  },
  "url": {
    "color": primary
  },
  ".language-css .token.string": {
    "color": primary
  },
  ".style .token.string": {
    "color": primary
  },
  "variable": {
    "color": variableColor
  },
  "atrule": {
    "color": ternary
  },
  "attr-value": {
    "color": ternary
  },
  "function": {
    "color": ternary
  },
  "class-name": {
    "color": ternary
  },
  "keyword": {
    "color": primary
  },
  "regex": {
    "color": warningColor
  },
  "important": {
    "color": warningColor,
    "fontWeight": "bold"
  },
  "bold": {
    "fontWeight": "bold"
  },
  "italic": {
    "fontStyle": "italic"
  }
}
