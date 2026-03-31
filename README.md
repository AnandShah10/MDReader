# Markdown Previewer Extension

A simple VSCode extension to preview Markdown files in a custom webview panel.

## Features
- Button in editor title bar for Markdown files to open preview.
- Renders Markdown using the `marked` library.
- Basic styling for readability.
- Live updates on edits.

## Installation
1. Install dependencies: `npm install`
2. Compile: `npx tsc -p ./`
3. Run in dev: Press F5 in VSCode with this folder open.
4. Package: `npm install -g @vscode/vsce && vsce package`

## Usage
- Open a `.md` file.
- Click the "Preview MD" button in the editor's title bar (top-right of the editor).
- The preview opens in a side panel.
- Alternatively, use command palette (Ctrl+Shift+P) > "MD Previewer: Preview Active File".
- Keybinding: Ctrl+Shift+V (when in MD file).

## Files
- `package.json`: Extension manifest.
- `src/extension.ts`: Main logic.
- `media/preview.css`: Styling for the webview.

## License
MIT