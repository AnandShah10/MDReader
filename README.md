# MD Reader - Markdown Previewer for VS Code

[![GitHub Repo stars](https://img.shields.io/github/stars/AnandShah10/MDReader?style=social)](https://github.com/AnandShah10/MDReader)
[![GitHub issues](https://img.shields.io/github/issues/AnandShah10/MDReader)](https://github.com/AnandShah10/MDReader/issues)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Overview

**MD Reader** is a lightweight and user-friendly Visual Studio Code extension designed to provide a seamless Markdown preview experience. It renders Markdown files in a dedicated webview panel with customizable styling, making it easier for developers, writers, and documentation enthusiasts to preview their content without leaving their editor.

Developed by **Anand Shah**, this extension leverages the power of the `marked` library for accurate Markdown parsing and offers a clean, professional interface.

## Features

- **Real-time Preview**: Instantly preview the active Markdown file in a side panel.
- **Custom Styling**: Enhanced CSS for better readability, including syntax highlighting for code blocks.
- **Easy Activation**: Trigger the preview via command palette (Ctrl+Shift+P) or assign a custom keybinding.
- **Lightweight**: Minimal dependencies and fast loading times.
- **Cross-compatible**: Works with VS Code's latest versions (1.80.0+).

## Installation

### Prerequisites
- Visual Studio Code (version 1.80.0 or higher)
- Node.js and npm (for development)

### From VS Code Marketplace (Upcoming)
1. Open VS Code.
2. Go to the Extensions view (Ctrl+Shift+X).
3. Search for "MD Reader" by Anand Shah.
4. Click Install.

### Manual Installation (Development)
1. Clone the repository:
   ```
   git clone https://github.com/AnandShah10/MDReader.git
   ```
2. Open the cloned folder in VS Code.
3. Install dependencies:
   ```
   npm install
   ```
4. Compile the extension:
   ```
   npm run compile
   ```
5. Press F5 to run the extension in a development instance of VS Code.

### Packaging for Distribution
To create a VSIX package for manual installation or publishing:
```
npm install -g @vscode/vsce
vsce package
```

## Usage

1. Open a Markdown file (`.md`) in VS Code.
2. Open the Command Palette (Ctrl+Shift+P).
3. Type and select **MD Reader: Preview Active File**.
4. A preview panel will open on the side, rendering your Markdown content.

You can also assign a keyboard shortcut to the command in VS Code's Keyboard Shortcuts settings.

## Screenshots

### Preview Button
![Preview in Action](/media/screenshot1.png)

### Preview Panel
![Preview in Action](/media/screenshot2.png)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request or open an Issue on the [GitHub repository](https://github.com/AnandShah10/MDReader).

1. Fork the repo.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## Support & Issues

If you encounter any issues or have suggestions, please report them on the [Issues page](https://github.com/AnandShah10/MDReader/issues).

## Publisher Information

- **Name**: Anand Shah
- **GitHub**: [@AnandShah10](https://github.com/AnandShah10)
- **Email**: (Optional - add if desired)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

*Built with ❤️ for the VS Code community by Anand Shah.*