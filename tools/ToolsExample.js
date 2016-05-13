'use strict';

var Controller = require('substance/ui/Controller');
var ContainerEditor = require('substance/ui/ContainerEditor');
var SplitPane = require('substance/ui/SplitPane');
var ScrollPane = require('substance/ui/ScrollPane');
var DynamicToolbar = require('./DynamicToolbar');

function ToolsExample() {
  ToolsExample.super.apply(this, arguments);
}

ToolsExample.Prototype = function() {

  // var _super = ToolsDemo.super.prototype;

  this.render = function($$) {
    var config = this.getConfig();

    return $$('div').addClass('sc-editor').append(
      $$(SplitPane, {splitType: 'horizontal'}).append(
        $$(DynamicToolbar),
        $$(ScrollPane, {
          scrollbarType: 'substance',
          scrollbarPosition: 'right'
        }).append(
          $$(ContainerEditor, {
            documentSession: this.documentSession,
            containerId: 'body',
            name: 'bodyEditor',
            commands: config.bodyEditor.commands,
            textTypes: config.bodyEditor.textTypes
          }).ref('bodyEditor')
        ).ref('contentPanel')
      )
    );
  };
};

Controller.extend(ToolsExample);

ToolsExample.static.config = {
  // Controller specific configuration (required!)
  controller: {
    // Component registry
    components: {
      'paragraph': require('substance/packages/paragraph/ParagraphComponent'),
      'heading': require('substance/packages/heading/HeadingComponent'),
      'link': require('substance/packages/link/LinkComponent'),
      'codeblock': require('substance/packages/codeblock/CodeblockComponent'),
      'blockquote': require('substance/packages/blockquote/BlockquoteComponent')
    },
    // Controller commands
    commands: [
      require('substance/ui/UndoCommand'),
      require('substance/ui/RedoCommand'),
      require('substance/ui/SaveCommand')
    ]
  },
  // Custom configuration (required!)
  bodyEditor: {
    commands: [
      require('substance/packages/text/SwitchTextTypeCommand'),
      require('substance/packages/strong/StrongCommand'),
      require('substance/packages/emphasis/EmphasisCommand'),
      require('substance/packages/link/LinkCommand'),
    ],
    textTypes: [
      {name: 'paragraph', data: {type: 'paragraph'}},
      {name: 'heading1',  data: {type: 'heading', level: 1}},
      {name: 'heading2',  data: {type: 'heading', level: 2}},
      {name: 'heading3',  data: {type: 'heading', level: 3}},
      {name: 'codeblock', data: {type: 'codeblock'}},
      {name: 'blockquote', data: {type: 'blockquote'}}
    ]
  }
};

module.exports = ToolsExample;