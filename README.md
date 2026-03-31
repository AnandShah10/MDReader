# Markdown Previewer Extension

A simple VSCode extension to preview Markdown files in a custom webview panel.

## Features
- Opens a preview panel for the active Markdown file.
- Renders Markdown using the `marked` library.
- Basic styling for readability.

## Installation
1. Install dependencies: `npm install marked --save`
2. Install dev deps: `npm install @types/vscode @types/marked typescript --save-dev`
3. Compile: `npx tsc -p ./`
4. Run in dev: Press F5 in VSCode with this folder open.
5. Package: `npm install -g @vscode/vsce && vsce package`

## Usage
- Open a `.md` file.
- Run command: `MD Previewer: Preview Active File` (Ctrl+Shift+P).
- The preview opens in a side panel.

## Files
- `package.json`: Extension manifest.
- `src/extension.ts`: Main logic.
- `media/preview.css`: Styling for the webview.

## License
MIT