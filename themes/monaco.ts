export const cortexDark = {
  name: "cortex-dark",
  colors: {
    "editor.background": "#18181B",
    "editor.foreground": "#D1D5DA",
  },
  settings: [
    {
      name: "Comment",
      scope: ["comment", "punctuation.definition.comment"],
      settings: {
        foreground: "#6A737D",
        fontStyle: "italic",
      },
    },
    {
      name: "String",
      scope: ["string", "punctuation.definition.string"],
      settings: {
        foreground: "#9ECB4A",
      },
    },
    {
      name: "Number",
      scope: "constant.numeric",
      settings: {
        foreground: "#D19A66",
      },
    },
    {
      name: "Keyword",
      scope: ["keyword", "keyword.control", "keyword.operator"],
      settings: {
        foreground: "#C678DD",
        fontStyle: "bold",
      },
    },
    {
      name: "Function Name",
      scope: ["entity.name.function", "meta.function-call", "support.function"],
      settings: {
        foreground: "#61AFEF",
      },
    },
    {
      name: "Variable Name",
      scope: ["variable", "meta.definition.variable.name"],
      settings: {
        foreground: "#E06C75",
      },
    },
    {
      name: "Constant",
      scope: ["constant", "constant.language", "constant.character.escape"],
      settings: {
        foreground: "#D19A66",
      },
    },
    {
      name: "Class Name",
      scope: ["entity.name.type.class", "entity.name.class"],
      settings: {
        foreground: "#E5C07B",
        fontStyle: "underline",
      },
    },
    {
      name: "Support",
      scope: ["support.type", "support.constant"],
      settings: {
        foreground: "#56B6C2",
      },
    },
    {
      name: "Invalid",
      scope: ["invalid", "invalid.illegal"],
      settings: {
        foreground: "#FFFFFF",
        background: "#E06C75",
      },
    },
    {
      name: "Regexp",
      scope: "string.regexp",
      settings: {
        foreground: "#98C379",
      },
    },
    {
      name: "Type",
      scope: ["storage.type", "support.type"],
      settings: {
        foreground: "#C678DD",
      },
    },
    {
      name: "Decorator",
      scope: ["meta.decorator", "entity.name.function.decorator"],
      settings: {
        foreground: "#D19A66",
        fontStyle: "italic",
      },
    },
    {
      name: "Operator",
      scope: "keyword.operator",
      settings: {
        foreground: "#C678DD",
      },
    },
    {
      name: "Punctuation",
      scope: "punctuation",
      settings: {
        foreground: "#D1D5DA",
      },
    },
    {
      name: "Builtin Functions",
      scope: "support.function.builtin",
      settings: {
        foreground: "#56B6C2",
      },
    },
    {
      name: "Builtin Constants",
      scope: ["constant.language", "support.constant"],
      settings: {
        foreground: "#56B6C2",
      },
    },
    {
      name: "Exception",
      scope: "support.type.exception",
      settings: {
        foreground: "#E06C75",
      },
    },
    {
      name: "Annotation",
      scope: "storage.type.annotation",
      settings: {
        foreground: "#E5C07B",
      },
    },
    {
      name: "Attribute",
      scope: "variable.parameter.function.language.special.self",
      settings: {
        foreground: "#D1D5DA",
        fontStyle: "italic",
      },
    },
    {
      name: "Magic Methods",
      scope: "support.function.magic",
      settings: {
        foreground: "#61AFEF",
        fontStyle: "italic",
      },
    },
    {
      name: "Magic Variables",
      scope: "variable.language.special",
      settings: {
        foreground: "#E06C75",
        fontStyle: "italic",
      },
    },
    {
      name: "URL",
      scope: "constant.other.inline-link",
      settings: {
        foreground: "#61AFEF",
        fontStyle: "underline",
      },
    },
    {
      name: "Heading",
      scope: ["markup.heading", "entity.name.section"],
      settings: {
        foreground: "#61AFEF",
        fontStyle: "bold",
      },
    },
    {
      name: "Bold",
      scope: ["markup.bold", "strong"],
      settings: {
        fontStyle: "bold",
      },
    },
    {
      name: "Italic",
      scope: ["markup.italic", "emphasis"],
      settings: {
        fontStyle: "italic",
      },
    },
    {
      name: "Underline",
      scope: "markup.underline",
      settings: {
        fontStyle: "underline",
      },
    },
    {
      name: "Strike",
      scope: "markup.strike",
      settings: {
        foreground: "#6A737D",
        fontStyle: "strikethrough",
      },
    },
    {
      name: "Blockquote",
      scope: "markup.quote",
      settings: {
        foreground: "#6A737D",
        fontStyle: "italic",
      },
    },
    {
      name: "List",
      scope: "markup.list",
      settings: {
        foreground: "#56B6C2",
      },
    },
    {
      name: "Markup Inline Code",
      scope: "markup.inline.raw",
      settings: {
        foreground: "#E5C07B",
      },
    },
    {
      name: "Markup Code Block",
      scope: "markup.raw.block",
      settings: {
        foreground: "#E5C07B",
      },
    },
    {
      name: "Markup Inserted",
      scope: "markup.inserted",
      settings: {
        foreground: "#98C379",
      },
    },
    {
      name: "Markup Deleted",
      scope: "markup.deleted",
      settings: {
        foreground: "#E06C75",
      },
    },
    {
      name: "Markup Changed",
      scope: "markup.changed",
      settings: {
        foreground: "#C678DD",
      },
    },
    {
      name: "Diff Header",
      scope: ["meta.diff", "meta.diff.header"],
      settings: {
        foreground: "#61AFEF",
      },
    },
    {
      name: "JSON Key",
      scope: "support.type.property-name.json",
      settings: {
        foreground: "#61AFEF",
        fontStyle: "bold",
      },
    },
    {
      name: "YAML Key",
      scope: "entity.name.tag.yaml",
      settings: {
        foreground: "#E06C75",
      },
    },
    {
      name: "CSS ID",
      scope: "source.css entity.other.attribute-name.id",
      settings: {
        foreground: "#E06C75",
      },
    },
    {
      name: "CSS Class",
      scope: "entity.other.attribute-name.class.css",
      settings: {
        foreground: "#E5C07B",
      },
    },
    {
      name: "Shell Variables",
      scope: "variable.other.normal.shell",
      settings: {
        foreground: "#E5C07B",
      },
    },
    {
      name: "Shell Built-ins",
      scope: "support.function.builtin.shell",
      settings: {
        foreground: "#61AFEF",
      },
    },
    {
      name: "Tag",
      scope: "entity.name.tag",
      settings: {
        foreground: "#E06C75",
      },
    },
    {
      name: "Attribute Name",
      scope: ["entity.other.attribute-name", "meta.attribute"],
      settings: {
        foreground: "#D19A66",
      },
    },
    {
      name: "Attribute Value",
      scope: [
        "string.quoted.double.attribute-value",
        "string.quoted.single.attribute-value",
      ],
      settings: {
        foreground: "#9ECB4A",
      },
    },
    {
      name: "Embedded Source",
      scope: ["meta.embedded", "source.groovy.embedded"],
      settings: {
        background: "#2C313A",
      },
    },
    {
      name: "Brackets",
      scope: ["punctuation.section", "meta.brace", "meta.delimiter.bracket"],
      settings: {
        foreground: "#D1D5DA",
      },
    },
    {
      name: "Separator",
      scope: "meta.separator",
      settings: {
        foreground: "#6A737D",
      },
    },
    {
      name: "Python Built-ins",
      scope: ["support.function.builtin.python", "support.type.python"],
      settings: {
        foreground: "#56B6C2",
      },
    },
    {
      name: "Python Exceptions",
      scope: "support.type.exception.python",
      settings: {
        foreground: "#E06C75",
      },
    },
    {
      name: "Python Variables",
      scope: [
        "variable.parameter.function.python",
        "variable.language.special",
      ],
      settings: {
        foreground: "#D1D5DA",
      },
    },
    {
      name: "Python Magic Functions",
      scope: "support.function.magic.python",
      settings: {
        foreground: "#61AFEF",
        fontStyle: "italic",
      },
    },
    {
      name: "Python Decorators",
      scope: "entity.name.function.decorator.python",
      settings: {
        foreground: "#D19A66",
        fontStyle: "italic",
      },
    },
    {
      name: "Python F-String Expressions",
      scope: [
        "punctuation.definition.expression.begin.python",
        "punctuation.definition.expression.end.python",
      ],
      settings: {
        foreground: "#C678DD",
      },
    },
    {
      name: "Python F-String",
      scope: "string.interpolated.python",
      settings: {
        foreground: "#9ECB4A",
      },
    },
    {
      name: "JS Variables",
      scope: ["variable.other.readwrite.js", "variable.other.object.js"],
      settings: {
        foreground: "#E5C07B",
      },
    },
    {
      name: "JS Functions",
      scope: ["entity.name.function.js", "support.function.dom.js"],
      settings: {
        foreground: "#61AFEF",
      },
    },
    {
      name: "JS Storage",
      scope: ["storage.type.js", "storage.modifier.async.js"],
      settings: {
        foreground: "#D19A66",
        fontStyle: "bold",
      },
    },
    {
      name: "JS Classes",
      scope: ["support.class.builtin.js", "entity.name.type.class.js"],
      settings: {
        foreground: "#E5C07B",
        fontStyle: "underline",
      },
    },
    {
      name: "JS Template Literals",
      scope: [
        "string.template.js punctuation.quasi.element.begin.js",
        "string.template.js punctuation.quasi.element.end.js",
      ],
      settings: {
        foreground: "#C678DD",
      },
    },
    {
      name: "JS Interpolation",
      scope: [
        "punctuation.definition.template-expression.begin.js",
        "punctuation.definition.template-expression.end.js",
      ],
      settings: {
        foreground: "#E06C75",
      },
    },
    {
      name: "JS Regex",
      scope: "string.regexp.js",
      settings: {
        foreground: "#98C379",
      },
    },
    {
      name: "JS Arrow Function",
      scope: "storage.type.function.arrow.js",
      settings: {
        foreground: "#C678DD",
      },
    },
    {
      name: "JS Object Property",
      scope: ["variable.other.property.js", "meta.object-literal.key.js"],
      settings: {
        foreground: "#E06C75",
      },
    },
    {
      name: "JS Import Export",
      scope: ["keyword.control.import.js", "keyword.control.export.js"],
      settings: {
        foreground: "#C678DD",
        fontStyle: "bold",
      },
    },
    {
      name: "JS Constants",
      scope: "variable.other.constant.js",
      settings: {
        foreground: "#D19A66",
      },
    },
    {
      name: "JS This",
      scope: "variable.language.this.js",
      settings: {
        foreground: "#E06C75",
        fontStyle: "italic",
      },
    },
    {
      name: "JS Storage Modifier",
      scope: "storage.modifier.js",
      settings: {
        foreground: "#C678DD",
      },
    },
    {
      name: "JS Punctuation Accessor",
      scope: "punctuation.accessor.js",
      settings: {
        foreground: "#D1D5DA",
      },
    },
    {
      name: "GitGutter Added",
      scope: "markup.inserted.git_gutter",
      settings: {
        foreground: "#109868",
      },
    },
    {
      name: "GitGutter Modified",
      scope: "markup.changed.git_gutter",
      settings: {
        foreground: "#948B60",
      },
    },
    {
      name: "GitGutter Deleted",
      scope: "markup.deleted.git_gutter",
      settings: {
        foreground: "#9A353D",
      },
    },
  ],
};

export const cortexLight = {
  name: "cortex-light",
  colors: {
    "editor.background": "#FFFFFF",
    "editor.foreground": "#333333",
  },
  settings: [
    {
      scope: ["comment", "punctuation.definition.comment"],
      settings: {
        foreground: "#555555",
        fontStyle: "italic",
      },
    },
    {
      scope: ["constant", "entity.name.constant"],
      settings: {
        foreground: "#CC8400",
      },
    },
    {
      scope: ["entity", "entity.name"],
      settings: {
        foreground: "#005FBC",
      },
    },
    {
      scope: ["keyword", "storage.type", "storage.modifier"],
      settings: {
        foreground: "#D8000C",
      },
    },
    {
      scope: ["storage.type.function", "entity.name.function"],
      settings: {
        foreground: "#005FBC",
      },
    },
    {
      scope: ["string", "constant.other.symbol"],
      settings: {
        foreground: "#4A7C3B",
      },
    },
    {
      scope: ["variable", "meta.definition.variable", "entity.name.variable"],
      settings: {
        foreground: "#333333",
      },
    },
    {
      scope: ["meta.function-call", "support.function"],
      settings: {
        foreground: "#005FBC",
      },
    },
    {
      scope: ["punctuation", "delimiter", "operator"],
      settings: {
        foreground: "#333333",
      },
    },
    {
      scope: ["punctuation.definition.tag", "punctuation.definition.tag.html"],
      settings: {
        foreground: "#D8000C",
      },
    },
    {
      scope: [
        "entity.other.attribute-name.id",
        "entity.other.attribute-name.class",
      ],
      settings: {
        foreground: "#CC8400",
      },
    },
    {
      scope: ["support.constant"],
      settings: {
        foreground: "#CC8400",
      },
    },
    {
      scope: ["meta.function"],
      settings: {
        foreground: "#005FBC",
      },
    },
    {
      scope: ["storage.type.java"],
      settings: {
        foreground: "#D8000C",
      },
    },
    {
      scope: ["string.regexp"],
      settings: {
        foreground: "#4A7C3B",
      },
    },
    {
      scope: ["punctuation.section.embedded"],
      settings: {
        foreground: "#D8000C",
      },
    },
    {
      scope: ["variable.language"],
      settings: {
        foreground: "#CC8400",
      },
    },
    {
      scope: ["meta.annotation"],
      settings: {
        foreground: "#005FBC",
      },
    },
    {
      scope: ["constant.other.color"],
      settings: {
        foreground: "#CC8400",
      },
    },
    {
      scope: ["markup.bold"],
      settings: {
        foreground: "#CC8400",
      },
    },
    {
      scope: ["markup.italic"],
      settings: {
        foreground: "#005FBC",
        fontStyle: "italic",
      },
    },
    {
      scope: ["markup.heading", "markup.heading.setext"],
      settings: {
        foreground: "#D8000C",
      },
    },
    {
      scope: ["markup.quote"],
      settings: {
        foreground: "#555555",
        fontStyle: "italic",
      },
    },
    {
      scope: ["markup.list"],
      settings: {
        foreground: "#4A7C3B",
      },
    },
    {
      scope: ["markup.inline.raw", "markup.raw.block"],
      settings: {
        foreground: "#CC8400",
      },
    },
    {
      scope: ["markup.underline.link"],
      settings: {
        foreground: "#005FBC",
        fontStyle: "underline",
      },
    },
    {
      scope: ["markup.table"],
      settings: {
        foreground: "#333333",
      },
    },
    {
      scope: [
        "meta.brace",
        "meta.delimiter",
        "meta.structure.dictionary.json meta.structure.dictionary.value.json",
      ],
      settings: {
        foreground: "#333333",
      },
    },
    {
      scope: ["invalid", "invalid.illegal"],
      settings: {
        foreground: "#FF5555",
        fontStyle: "underline",
      },
    },
    {
      scope: ["markup.inserted"],
      settings: {
        foreground: "#4A7C3B",
      },
    },
    {
      scope: ["markup.deleted"],
      settings: {
        foreground: "#D8000C",
      },
    },
    {
      scope: ["markup.changed"],
      settings: {
        foreground: "#005FBC",
      },
    },
    {
      scope: [
        "meta.diff",
        "meta.diff.header.from-file",
        "meta.diff.header.to-file",
      ],
      settings: {
        foreground: "#005FBC",
      },
    },
    {
      scope: ["meta.separator"],
      settings: {
        foreground: "#D8000C",
      },
    },
    {
      scope: ["meta.output"],
      settings: {
        foreground: "#4A7C3B",
      },
    },
    {
      scope: ["constant.numeric", "constant.language", "constant.character"],
      settings: {
        foreground: "#CC8400",
      },
    },
    {
      scope: ["entity.name.tag", "entity.other.attribute-name"],
      settings: {
        foreground: "#D8000C",
      },
    },
    {
      scope: ["support.class", "support.type", "support.function"],
      settings: {
        foreground: "#005FBC",
      },
    },
    {
      scope: ["variable.parameter", "self"],
      settings: {
        foreground: "#CC8400",
      },
    },
    {
      scope: ["meta.embedded.block"],
      settings: {
        background: "#FFFFFF",
      },
    },
    {
      scope: [
        "brackethighlighter.tag",
        "brackethighlighter.curly",
        "brackethighlighter.round",
        "brackethighlighter.square",
      ],
      settings: {
        foreground: "#CC8400",
      },
    },
    {
      scope: ["brackethighlighter.angle"],
      settings: {
        foreground: "#D8000C",
      },
    },
    {
      scope: ["brackethighlighter.unmatched"],
      settings: {
        foreground: "#FF5555",
        fontStyle: "underline",
      },
    },
  ],
};
