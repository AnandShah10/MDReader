import * as vscode from 'vscode';
import * as marked from 'marked';

let previewPanel: vscode.WebviewPanel | undefined;

export function activate(context: vscode.ExtensionContext) {

    const disposable = vscode.commands.registerCommand('mdreader.preview', () => {
        previewMarkdown(context);
    });
    context.subscriptions.push(disposable);

    vscode.workspace.onDidChangeTextDocument(event => {
        if (vscode.window.activeTextEditor?.document.languageId === 'markdown') {
            previewMarkdown(context);
        }
    });
}

function previewMarkdown(context: vscode.ExtensionContext) {
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

    const htmlContent: string = marked.parse(content).toString();

    if (previewPanel) {
        previewPanel.reveal(vscode.ViewColumn.Beside);
    } else {
        previewPanel = vscode.window.createWebviewPanel(
            'mdreader',
            'MD Reader Preview',
            vscode.ViewColumn.Beside,
            {
                enableScripts: true,
                retainContextWhenHidden: true,
                localResourceRoots: [vscode.Uri.joinPath(context.extensionUri, 'media')]
            }
        );

        previewPanel.onDidDispose(() => {
            previewPanel = undefined;
        });
    }

    previewPanel.webview.html = getWebviewContent(htmlContent, previewPanel.webview, context);

    const changeDisposable = vscode.workspace.onDidChangeTextDocument(e => {
        if (e.document.uri.toString() === document.uri.toString() && previewPanel) {
            const updatedHtml: string = marked.parse(e.document.getText()).toString();
            previewPanel.webview.html = getWebviewContent(updatedHtml, previewPanel.webview, context);
        }
    });

    previewPanel.onDidDispose(() => changeDisposable.dispose());
}

function getWebviewContent(htmlContent: string, webview: vscode.Webview, context: vscode.ExtensionContext): string {
    const cssUri = webview.asWebviewUri(
        vscode.Uri.joinPath(context.extensionUri, 'media', 'preview.css')
    );

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MD Reader Preview</title>
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