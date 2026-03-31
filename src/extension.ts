import * as vscode from 'vscode';
import * as marked from 'marked';

let previewPanel: vscode.WebviewPanel | undefined = undefined;
let globalContext: vscode.ExtensionContext | undefined = undefined;

export function activate(context: vscode.ExtensionContext) {
  globalContext = context;
  console.log('MD Previewer activated');

  // Register the command
  const disposable = vscode.commands.registerCommand('mdPreviewer.preview', () => {
    previewMarkdown();
  });

  context.subscriptions.push(disposable);

  // Optional: Auto-preview on MD file open (commented out for now)
  // vscode.workspace.onDidOpenTextDocument(doc => {
  //   if (doc.languageId === 'markdown' && vscode.window.activeTextEditor?.document === doc) {
  //     previewMarkdown();
  //   }
  // });
}

function previewMarkdown() {
  if (!globalContext) {
    vscode.window.showErrorMessage('Extension context not initialized.');
    return;
  }

  const editor = vscode.window.activeTextEditor;
  if (!editor) {
    vscode.window.showInformationMessage('No active editor found.');
    return;
  }

  if (editor.document.languageId !== 'markdown') {
    vscode.window.showInformationMessage('Active file is not a Markdown file.');
    return;
  }

  const document = editor.document;
  const content = document.getText();

  // Parse Markdown
  const htmlContent = marked.parse(content).toString();

  // Create or reuse panel
  if (previewPanel) {
    previewPanel.dispose();
  }

  previewPanel = vscode.window.createWebviewPanel(
    'mdPreviewer',
    'MD Preview',
    vscode.ViewColumn.Beside, // Open beside editor
    {
      enableScripts: true,
      retainContextWhenHidden: true,
      localResourceRoots: [vscode.Uri.joinPath(globalContext.extensionUri, 'media')]
    }
  );

  // Inject CSS and HTML
  previewPanel.webview.html = getWebviewContent(htmlContent, previewPanel.webview);

  // Handle disposal
  previewPanel.onDidDispose(() => {
    previewPanel = undefined;
  });

  // Update on editor change (basic sync)
  const changeDisposable = vscode.workspace.onDidChangeTextDocument(e => {
    if (e.document.uri.toString() === document.uri.toString() && previewPanel) {
      const updatedContent = e.document.getText();
      const updatedHtml = marked.parse(updatedContent).toString();
      previewPanel.webview.html = getWebviewContent(updatedHtml, previewPanel.webview);
    }
  });

  previewPanel.onDidDispose(() => changeDisposable.dispose());
}

function getWebviewContent(htmlContent: string, webview: vscode.Webview): string {
  if (!globalContext) {
    return '<html><body>Error: Context not available.</body></html>';
  }

  // Load CSS from media folder
  const cssUri = webview.asWebviewUri(vscode.Uri.joinPath(globalContext.extensionUri, 'media', 'preview.css'));

  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>MD Preview</title>
      <link href="${cssUri}" rel="stylesheet">
  </head>
  <body>
      <div class="markdown-body">
          ${htmlContent}
      </div>
  </body>
  </html>`;
}

export function deactivate() {}