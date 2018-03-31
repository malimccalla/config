export default {
  'workbench.iconTheme': 'file-icons-colourless',
  'window.zoomLevel': 0,
  'editor.fontFamily': 'Source Code Pro',
  'editor.fontSize': 14,
  'editor.lineHeight': 0,
  'editor.cursorStyle': 'line',
  'editor.wordWrap': 'off',
  'editor.scrollBeyondLastLine': false,
  'editor.smoothScrolling': false,
  'editor.minimap.enabled': true,
  'editor.minimap.showSlider': 'mouseover',
  'editor.cursorBlinking': 'blink',
  'editor.formatOnSave': true,
  'prettier.singleQuote': true,
  'prettier.trailingComma': 'es5',
  'prettier.bracketSpacing': true,
  'prettier.semi': true,
  'prettier.useTabs': false,
  'terminal.external.osxExec': 'iTerm2',
  'vsicons.presets.jsOfficial': false,
  'prettier.printWidth': 85,
  'editor.renderLineHighlight': 'all',
  'vsicons.dontShowNewVersionMessage': true,
  'explorer.confirmDragAndDrop': false,
  'editor.renderWhitespace': 'boundary',
  'workbench.statusBar.feedback.visible': false,
  'editor.tabSize': 2,
  'workbench.colorTheme': 'One Dark Pro',
  'editor.minimap.renderCharacters': false,
  'editor.quickSuggestionsDelay': 10,
  'scm.diffDecorationsGutterWidth': 1,
  'workbench.colorCustomizations': {
    // "activityBar.background": "#20242e",
    // "sideBar.background": "#1a1e28",
    // "editor.background": "#1d222e",
    // "gitDecoration.modifiedResourceForeground": "#dbb56a",
    'gitDecoration.untrackedResourceForeground': '#43AC6A',
    'gitDecoration.deletedResourceForeground': '#EE5150',
    'gitDecoration.modifiedResourceForeground': '#e5c07b',
    'editorGutter.modifiedBackground': '#e5c07b44',
    'editorGutter.addedBackground': '#43ac6a81',
    // "gitDecoration.modifiedResourceForeground": "#ff0000"
    // "statusBar.background": "#141822",
    // "tab.activeBackground": "#1a1e28",
    // "tab.inactiveBackground": "#20242e",
    // "activityBarBadge.background": "#EE5150",
    // "input.background": "#141822"
  },
  'editor.tokenColorCustomizations': {
    '[One Dark Pro]': {
      // "comments": "#555a66",
      textMateRules: [
        {
          scope: 'punctuation.terminator',
          settings: {
            foreground: '#585d6b',
          },
        },
        {
          name: 'Inherited Class',
          scope: 'entity.other.inherited-class',
          settings: {
            foreground: '#e5c07b',
          },
        },
        {
          scope: 'comment.line.double-slash,comment.block.documentation',
          settings: {
            foreground: '#585d6b',
          },
        },
        {
          name: 'Comments',
          scope: 'comment, punctuation.definition.comment',
          settings: {
            foreground: '#585d6b',
            fontStyle: 'italic',
          },
        },
        {
          scope: 'support.class',
          settings: {
            foreground: '#56b6c2',
          },
        },
        {
          name: 'js ts this',
          scope:
            'var.this,variable.language.this.js,variable.language.this.ts,variable.language.this.jsx,variable.language.this.tsx',
          settings: {
            foreground: '#56b6c2',
            fontStyle: 'bold',
          },
        },
        {
          name: 'ts primitive/builtin types',
          scope:
            'support.type.primitive.ts,support.type.builtin.ts,support.type.primitive.tsx,support.type.builtin.tsx',
          settings: {
            foreground: '#56b6c2',
          },
        },
        {
          scope: 'entity.name.type',
          settings: {
            foreground: '#56b6c2',
          },
        },
        {
          scope: 'support.type',
          settings: {
            foreground: '#56b6c2',
          },
        },
      ],
    },
  },
  'workbench.activityBar.visible': true,
};
