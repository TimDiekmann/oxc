// Auto-generated code, DO NOT EDIT DIRECTLY!
// To edit this generated file you have to edit `tasks/ast_tools/src/generators/raw_transfer_lazy.rs`.

'use strict';

// Unique token which is not exposed publicly.
// Used to prevent user calling class constructors.
const TOKEN = {};

module.exports = { deserialize, TOKEN };

function deserialize(ast) {
  // (2 * 1024 * 1024 * 1024 - 16) >> 2
  const metadataPos32 = 536870908;

  return new RawTransferData(ast.buffer.uint32[metadataPos32], ast, TOKEN);
}

const textDecoder = new TextDecoder('utf-8', { ignoreBOM: true }),
  decodeStr = textDecoder.decode.bind(textDecoder),
  { fromCodePoint } = String;

function deserializeProgram(pos, ast) {
  return new Program(pos, ast);
}

class Program {
  type = 'Program';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast, body: void 0 };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get sourceType() {
    const internal = this.#internal;
    return deserializeSourceType(internal.$pos + 124, internal.$ast);
  }

  get hashbang() {
    const internal = this.#internal;
    return deserializeOptionHashbang(internal.$pos + 48, internal.$ast);
  }

  get body() {
    const internal = this.#internal,
      node = internal.body;
    if (node !== void 0) return node;
    return internal.body = deserializeVecStatement(internal.$pos + 96, internal.$ast);
  }

  toJSON() {
    return {
      type: 'Program',
      start: this.start,
      end: this.end,
      sourceType: this.sourceType,
      hashbang: this.hashbang,
      body: this.body,
    };
  }
}

function deserializeExpression(pos, ast) {
  switch (ast.buffer[pos]) {
    case 0:
      return deserializeBoxBooleanLiteral(pos + 8, ast);
    case 1:
      return deserializeBoxNullLiteral(pos + 8, ast);
    case 2:
      return deserializeBoxNumericLiteral(pos + 8, ast);
    case 3:
      return deserializeBoxBigIntLiteral(pos + 8, ast);
    case 4:
      return deserializeBoxRegExpLiteral(pos + 8, ast);
    case 5:
      return deserializeBoxStringLiteral(pos + 8, ast);
    case 6:
      return deserializeBoxTemplateLiteral(pos + 8, ast);
    case 7:
      return deserializeBoxIdentifierReference(pos + 8, ast);
    case 8:
      return deserializeBoxMetaProperty(pos + 8, ast);
    case 9:
      return deserializeBoxSuper(pos + 8, ast);
    case 10:
      return deserializeBoxArrayExpression(pos + 8, ast);
    case 11:
      return deserializeBoxArrowFunctionExpression(pos + 8, ast);
    case 12:
      return deserializeBoxAssignmentExpression(pos + 8, ast);
    case 13:
      return deserializeBoxAwaitExpression(pos + 8, ast);
    case 14:
      return deserializeBoxBinaryExpression(pos + 8, ast);
    case 15:
      return deserializeBoxCallExpression(pos + 8, ast);
    case 16:
      return deserializeBoxChainExpression(pos + 8, ast);
    case 17:
      return deserializeBoxClass(pos + 8, ast);
    case 18:
      return deserializeBoxConditionalExpression(pos + 8, ast);
    case 19:
      return deserializeBoxFunction(pos + 8, ast);
    case 20:
      return deserializeBoxImportExpression(pos + 8, ast);
    case 21:
      return deserializeBoxLogicalExpression(pos + 8, ast);
    case 22:
      return deserializeBoxNewExpression(pos + 8, ast);
    case 23:
      return deserializeBoxObjectExpression(pos + 8, ast);
    case 24:
      return deserializeBoxParenthesizedExpression(pos + 8, ast);
    case 25:
      return deserializeBoxSequenceExpression(pos + 8, ast);
    case 26:
      return deserializeBoxTaggedTemplateExpression(pos + 8, ast);
    case 27:
      return deserializeBoxThisExpression(pos + 8, ast);
    case 28:
      return deserializeBoxUnaryExpression(pos + 8, ast);
    case 29:
      return deserializeBoxUpdateExpression(pos + 8, ast);
    case 30:
      return deserializeBoxYieldExpression(pos + 8, ast);
    case 31:
      return deserializeBoxPrivateInExpression(pos + 8, ast);
    case 32:
      return deserializeBoxJSXElement(pos + 8, ast);
    case 33:
      return deserializeBoxJSXFragment(pos + 8, ast);
    case 34:
      return deserializeBoxTSAsExpression(pos + 8, ast);
    case 35:
      return deserializeBoxTSSatisfiesExpression(pos + 8, ast);
    case 36:
      return deserializeBoxTSTypeAssertion(pos + 8, ast);
    case 37:
      return deserializeBoxTSNonNullExpression(pos + 8, ast);
    case 38:
      return deserializeBoxTSInstantiationExpression(pos + 8, ast);
    case 39:
      return deserializeBoxV8IntrinsicExpression(pos + 8, ast);
    case 48:
      return deserializeBoxComputedMemberExpression(pos + 8, ast);
    case 49:
      return deserializeBoxStaticMemberExpression(pos + 8, ast);
    case 50:
      return deserializeBoxPrivateFieldExpression(pos + 8, ast);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for Expression`);
  }
}

function deserializeIdentifierName(pos, ast) {
  return new IdentifierName(pos, ast);
}

class IdentifierName {
  type = 'IdentifierName';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast, name: void 0 };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get name() {
    const internal = this.#internal,
      node = internal.name;
    if (node !== void 0) return node;
    return internal.name = deserializeStr(internal.$pos + 8, internal.$ast);
  }

  toJSON() {
    return {
      type: 'IdentifierName',
      start: this.start,
      end: this.end,
      name: this.name,
    };
  }
}

function deserializeIdentifierReference(pos, ast) {
  return new IdentifierReference(pos, ast);
}

class IdentifierReference {
  type = 'IdentifierReference';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast, name: void 0 };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get name() {
    const internal = this.#internal,
      node = internal.name;
    if (node !== void 0) return node;
    return internal.name = deserializeStr(internal.$pos + 8, internal.$ast);
  }

  toJSON() {
    return {
      type: 'IdentifierReference',
      start: this.start,
      end: this.end,
      name: this.name,
    };
  }
}

function deserializeBindingIdentifier(pos, ast) {
  return new BindingIdentifier(pos, ast);
}

class BindingIdentifier {
  type = 'BindingIdentifier';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast, name: void 0 };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get name() {
    const internal = this.#internal,
      node = internal.name;
    if (node !== void 0) return node;
    return internal.name = deserializeStr(internal.$pos + 8, internal.$ast);
  }

  toJSON() {
    return {
      type: 'BindingIdentifier',
      start: this.start,
      end: this.end,
      name: this.name,
    };
  }
}

function deserializeLabelIdentifier(pos, ast) {
  return new LabelIdentifier(pos, ast);
}

class LabelIdentifier {
  type = 'LabelIdentifier';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast, name: void 0 };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get name() {
    const internal = this.#internal,
      node = internal.name;
    if (node !== void 0) return node;
    return internal.name = deserializeStr(internal.$pos + 8, internal.$ast);
  }

  toJSON() {
    return {
      type: 'LabelIdentifier',
      start: this.start,
      end: this.end,
      name: this.name,
    };
  }
}

function deserializeThisExpression(pos, ast) {
  return new ThisExpression(pos, ast);
}

class ThisExpression {
  type = 'ThisExpression';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  toJSON() {
    return {
      type: 'ThisExpression',
      start: this.start,
      end: this.end,
    };
  }
}

function deserializeArrayExpression(pos, ast) {
  return new ArrayExpression(pos, ast);
}

class ArrayExpression {
  type = 'ArrayExpression';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast, elements: void 0 };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get elements() {
    const internal = this.#internal,
      node = internal.elements;
    if (node !== void 0) return node;
    return internal.elements = deserializeVecArrayExpressionElement(internal.$pos + 8, internal.$ast);
  }

  toJSON() {
    return {
      type: 'ArrayExpression',
      start: this.start,
      end: this.end,
      elements: this.elements,
    };
  }
}

function deserializeArrayExpressionElement(pos, ast) {
  switch (ast.buffer[pos]) {
    case 0:
      return deserializeBoxBooleanLiteral(pos + 8, ast);
    case 1:
      return deserializeBoxNullLiteral(pos + 8, ast);
    case 2:
      return deserializeBoxNumericLiteral(pos + 8, ast);
    case 3:
      return deserializeBoxBigIntLiteral(pos + 8, ast);
    case 4:
      return deserializeBoxRegExpLiteral(pos + 8, ast);
    case 5:
      return deserializeBoxStringLiteral(pos + 8, ast);
    case 6:
      return deserializeBoxTemplateLiteral(pos + 8, ast);
    case 7:
      return deserializeBoxIdentifierReference(pos + 8, ast);
    case 8:
      return deserializeBoxMetaProperty(pos + 8, ast);
    case 9:
      return deserializeBoxSuper(pos + 8, ast);
    case 10:
      return deserializeBoxArrayExpression(pos + 8, ast);
    case 11:
      return deserializeBoxArrowFunctionExpression(pos + 8, ast);
    case 12:
      return deserializeBoxAssignmentExpression(pos + 8, ast);
    case 13:
      return deserializeBoxAwaitExpression(pos + 8, ast);
    case 14:
      return deserializeBoxBinaryExpression(pos + 8, ast);
    case 15:
      return deserializeBoxCallExpression(pos + 8, ast);
    case 16:
      return deserializeBoxChainExpression(pos + 8, ast);
    case 17:
      return deserializeBoxClass(pos + 8, ast);
    case 18:
      return deserializeBoxConditionalExpression(pos + 8, ast);
    case 19:
      return deserializeBoxFunction(pos + 8, ast);
    case 20:
      return deserializeBoxImportExpression(pos + 8, ast);
    case 21:
      return deserializeBoxLogicalExpression(pos + 8, ast);
    case 22:
      return deserializeBoxNewExpression(pos + 8, ast);
    case 23:
      return deserializeBoxObjectExpression(pos + 8, ast);
    case 24:
      return deserializeBoxParenthesizedExpression(pos + 8, ast);
    case 25:
      return deserializeBoxSequenceExpression(pos + 8, ast);
    case 26:
      return deserializeBoxTaggedTemplateExpression(pos + 8, ast);
    case 27:
      return deserializeBoxThisExpression(pos + 8, ast);
    case 28:
      return deserializeBoxUnaryExpression(pos + 8, ast);
    case 29:
      return deserializeBoxUpdateExpression(pos + 8, ast);
    case 30:
      return deserializeBoxYieldExpression(pos + 8, ast);
    case 31:
      return deserializeBoxPrivateInExpression(pos + 8, ast);
    case 32:
      return deserializeBoxJSXElement(pos + 8, ast);
    case 33:
      return deserializeBoxJSXFragment(pos + 8, ast);
    case 34:
      return deserializeBoxTSAsExpression(pos + 8, ast);
    case 35:
      return deserializeBoxTSSatisfiesExpression(pos + 8, ast);
    case 36:
      return deserializeBoxTSTypeAssertion(pos + 8, ast);
    case 37:
      return deserializeBoxTSNonNullExpression(pos + 8, ast);
    case 38:
      return deserializeBoxTSInstantiationExpression(pos + 8, ast);
    case 39:
      return deserializeBoxV8IntrinsicExpression(pos + 8, ast);
    case 48:
      return deserializeBoxComputedMemberExpression(pos + 8, ast);
    case 49:
      return deserializeBoxStaticMemberExpression(pos + 8, ast);
    case 50:
      return deserializeBoxPrivateFieldExpression(pos + 8, ast);
    case 64:
      return deserializeBoxSpreadElement(pos + 8, ast);
    case 65:
      return deserializeElision(pos + 8, ast);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for ArrayExpressionElement`);
  }
}

function deserializeElision(pos, ast) {
  return new Elision(pos, ast);
}

class Elision {
  type = 'Elision';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  toJSON() {
    return {
      type: 'Elision',
      start: this.start,
      end: this.end,
    };
  }
}

function deserializeObjectExpression(pos, ast) {
  return new ObjectExpression(pos, ast);
}

class ObjectExpression {
  type = 'ObjectExpression';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast, properties: void 0 };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get properties() {
    const internal = this.#internal,
      node = internal.properties;
    if (node !== void 0) return node;
    return internal.properties = deserializeVecObjectPropertyKind(internal.$pos + 8, internal.$ast);
  }

  toJSON() {
    return {
      type: 'ObjectExpression',
      start: this.start,
      end: this.end,
      properties: this.properties,
    };
  }
}

function deserializeObjectPropertyKind(pos, ast) {
  switch (ast.buffer[pos]) {
    case 0:
      return deserializeBoxObjectProperty(pos + 8, ast);
    case 1:
      return deserializeBoxSpreadElement(pos + 8, ast);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for ObjectPropertyKind`);
  }
}

function deserializeObjectProperty(pos, ast) {
  return new ObjectProperty(pos, ast);
}

class ObjectProperty {
  type = 'ObjectProperty';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get kind() {
    const internal = this.#internal;
    return deserializePropertyKind(internal.$pos + 40, internal.$ast);
  }

  get key() {
    const internal = this.#internal;
    return deserializePropertyKey(internal.$pos + 8, internal.$ast);
  }

  get value() {
    const internal = this.#internal;
    return deserializeExpression(internal.$pos + 24, internal.$ast);
  }

  get method() {
    const internal = this.#internal;
    return deserializeBool(internal.$pos + 41, internal.$ast);
  }

  get shorthand() {
    const internal = this.#internal;
    return deserializeBool(internal.$pos + 42, internal.$ast);
  }

  get computed() {
    const internal = this.#internal;
    return deserializeBool(internal.$pos + 43, internal.$ast);
  }

  toJSON() {
    return {
      type: 'ObjectProperty',
      start: this.start,
      end: this.end,
      kind: this.kind,
      key: this.key,
      value: this.value,
      method: this.method,
      shorthand: this.shorthand,
      computed: this.computed,
    };
  }
}

function deserializePropertyKey(pos, ast) {
  switch (ast.buffer[pos]) {
    case 0:
      return deserializeBoxBooleanLiteral(pos + 8, ast);
    case 1:
      return deserializeBoxNullLiteral(pos + 8, ast);
    case 2:
      return deserializeBoxNumericLiteral(pos + 8, ast);
    case 3:
      return deserializeBoxBigIntLiteral(pos + 8, ast);
    case 4:
      return deserializeBoxRegExpLiteral(pos + 8, ast);
    case 5:
      return deserializeBoxStringLiteral(pos + 8, ast);
    case 6:
      return deserializeBoxTemplateLiteral(pos + 8, ast);
    case 7:
      return deserializeBoxIdentifierReference(pos + 8, ast);
    case 8:
      return deserializeBoxMetaProperty(pos + 8, ast);
    case 9:
      return deserializeBoxSuper(pos + 8, ast);
    case 10:
      return deserializeBoxArrayExpression(pos + 8, ast);
    case 11:
      return deserializeBoxArrowFunctionExpression(pos + 8, ast);
    case 12:
      return deserializeBoxAssignmentExpression(pos + 8, ast);
    case 13:
      return deserializeBoxAwaitExpression(pos + 8, ast);
    case 14:
      return deserializeBoxBinaryExpression(pos + 8, ast);
    case 15:
      return deserializeBoxCallExpression(pos + 8, ast);
    case 16:
      return deserializeBoxChainExpression(pos + 8, ast);
    case 17:
      return deserializeBoxClass(pos + 8, ast);
    case 18:
      return deserializeBoxConditionalExpression(pos + 8, ast);
    case 19:
      return deserializeBoxFunction(pos + 8, ast);
    case 20:
      return deserializeBoxImportExpression(pos + 8, ast);
    case 21:
      return deserializeBoxLogicalExpression(pos + 8, ast);
    case 22:
      return deserializeBoxNewExpression(pos + 8, ast);
    case 23:
      return deserializeBoxObjectExpression(pos + 8, ast);
    case 24:
      return deserializeBoxParenthesizedExpression(pos + 8, ast);
    case 25:
      return deserializeBoxSequenceExpression(pos + 8, ast);
    case 26:
      return deserializeBoxTaggedTemplateExpression(pos + 8, ast);
    case 27:
      return deserializeBoxThisExpression(pos + 8, ast);
    case 28:
      return deserializeBoxUnaryExpression(pos + 8, ast);
    case 29:
      return deserializeBoxUpdateExpression(pos + 8, ast);
    case 30:
      return deserializeBoxYieldExpression(pos + 8, ast);
    case 31:
      return deserializeBoxPrivateInExpression(pos + 8, ast);
    case 32:
      return deserializeBoxJSXElement(pos + 8, ast);
    case 33:
      return deserializeBoxJSXFragment(pos + 8, ast);
    case 34:
      return deserializeBoxTSAsExpression(pos + 8, ast);
    case 35:
      return deserializeBoxTSSatisfiesExpression(pos + 8, ast);
    case 36:
      return deserializeBoxTSTypeAssertion(pos + 8, ast);
    case 37:
      return deserializeBoxTSNonNullExpression(pos + 8, ast);
    case 38:
      return deserializeBoxTSInstantiationExpression(pos + 8, ast);
    case 39:
      return deserializeBoxV8IntrinsicExpression(pos + 8, ast);
    case 48:
      return deserializeBoxComputedMemberExpression(pos + 8, ast);
    case 49:
      return deserializeBoxStaticMemberExpression(pos + 8, ast);
    case 50:
      return deserializeBoxPrivateFieldExpression(pos + 8, ast);
    case 64:
      return deserializeBoxIdentifierName(pos + 8, ast);
    case 65:
      return deserializeBoxPrivateIdentifier(pos + 8, ast);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for PropertyKey`);
  }
}

function deserializePropertyKind(pos, ast) {
  switch (ast.buffer[pos]) {
    case 0:
      return 'init';
    case 1:
      return 'get';
    case 2:
      return 'set';
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for PropertyKind`);
  }
}

function deserializeTemplateLiteral(pos, ast) {
  return new TemplateLiteral(pos, ast);
}

class TemplateLiteral {
  type = 'TemplateLiteral';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast, quasis: void 0, expressions: void 0 };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get quasis() {
    const internal = this.#internal,
      node = internal.quasis;
    if (node !== void 0) return node;
    return internal.quasis = deserializeVecTemplateElement(internal.$pos + 8, internal.$ast);
  }

  get expressions() {
    const internal = this.#internal,
      node = internal.expressions;
    if (node !== void 0) return node;
    return internal.expressions = deserializeVecExpression(internal.$pos + 32, internal.$ast);
  }

  toJSON() {
    return {
      type: 'TemplateLiteral',
      start: this.start,
      end: this.end,
      quasis: this.quasis,
      expressions: this.expressions,
    };
  }
}

function deserializeTaggedTemplateExpression(pos, ast) {
  return new TaggedTemplateExpression(pos, ast);
}

class TaggedTemplateExpression {
  type = 'TaggedTemplateExpression';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get tag() {
    const internal = this.#internal;
    return deserializeExpression(internal.$pos + 8, internal.$ast);
  }

  get typeArguments() {
    const internal = this.#internal;
    return deserializeOptionBoxTSTypeParameterInstantiation(internal.$pos + 24, internal.$ast);
  }

  get quasi() {
    const internal = this.#internal;
    return deserializeTemplateLiteral(internal.$pos + 32, internal.$ast);
  }

  toJSON() {
    return {
      type: 'TaggedTemplateExpression',
      start: this.start,
      end: this.end,
      tag: this.tag,
      typeArguments: this.typeArguments,
      quasi: this.quasi,
    };
  }
}

function deserializeTemplateElement(pos, ast) {
  return new TemplateElement(pos, ast);
}

class TemplateElement {
  type = 'TemplateElement';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get value() {
    const internal = this.#internal;
    return deserializeTemplateElementValue(internal.$pos + 8, internal.$ast);
  }

  get tail() {
    const internal = this.#internal;
    return deserializeBool(internal.$pos + 40, internal.$ast);
  }

  toJSON() {
    return {
      type: 'TemplateElement',
      start: this.start,
      end: this.end,
      value: this.value,
      tail: this.tail,
    };
  }
}

function deserializeTemplateElementValue(pos, ast) {
  return new TemplateElementValue(pos, ast);
}

class TemplateElementValue {
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast, raw: void 0, cooked: void 0 };
  }

  get raw() {
    const internal = this.#internal,
      node = internal.raw;
    if (node !== void 0) return node;
    return internal.raw = deserializeStr(internal.$pos, internal.$ast);
  }

  get cooked() {
    const internal = this.#internal,
      node = internal.cooked;
    if (node !== void 0) return node;
    return internal.cooked = deserializeOptionStr(internal.$pos + 16, internal.$ast);
  }

  toJSON() {
    return {
      raw: this.raw,
      cooked: this.cooked,
    };
  }
}

function deserializeMemberExpression(pos, ast) {
  switch (ast.buffer[pos]) {
    case 48:
      return deserializeBoxComputedMemberExpression(pos + 8, ast);
    case 49:
      return deserializeBoxStaticMemberExpression(pos + 8, ast);
    case 50:
      return deserializeBoxPrivateFieldExpression(pos + 8, ast);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for MemberExpression`);
  }
}

function deserializeComputedMemberExpression(pos, ast) {
  return new ComputedMemberExpression(pos, ast);
}

class ComputedMemberExpression {
  type = 'ComputedMemberExpression';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get object() {
    const internal = this.#internal;
    return deserializeExpression(internal.$pos + 8, internal.$ast);
  }

  get property() {
    const internal = this.#internal;
    return deserializeExpression(internal.$pos + 24, internal.$ast);
  }

  get optional() {
    const internal = this.#internal;
    return deserializeBool(internal.$pos + 40, internal.$ast);
  }

  toJSON() {
    return {
      type: 'ComputedMemberExpression',
      start: this.start,
      end: this.end,
      object: this.object,
      property: this.property,
      optional: this.optional,
    };
  }
}

function deserializeStaticMemberExpression(pos, ast) {
  return new StaticMemberExpression(pos, ast);
}

class StaticMemberExpression {
  type = 'StaticMemberExpression';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get object() {
    const internal = this.#internal;
    return deserializeExpression(internal.$pos + 8, internal.$ast);
  }

  get property() {
    const internal = this.#internal;
    return deserializeIdentifierName(internal.$pos + 24, internal.$ast);
  }

  get optional() {
    const internal = this.#internal;
    return deserializeBool(internal.$pos + 48, internal.$ast);
  }

  toJSON() {
    return {
      type: 'StaticMemberExpression',
      start: this.start,
      end: this.end,
      object: this.object,
      property: this.property,
      optional: this.optional,
    };
  }
}

function deserializePrivateFieldExpression(pos, ast) {
  return new PrivateFieldExpression(pos, ast);
}

class PrivateFieldExpression {
  type = 'PrivateFieldExpression';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get object() {
    const internal = this.#internal;
    return deserializeExpression(internal.$pos + 8, internal.$ast);
  }

  get property() {
    const internal = this.#internal;
    return deserializePrivateIdentifier(internal.$pos + 24, internal.$ast);
  }

  get optional() {
    const internal = this.#internal;
    return deserializeBool(internal.$pos + 48, internal.$ast);
  }

  toJSON() {
    return {
      type: 'PrivateFieldExpression',
      start: this.start,
      end: this.end,
      object: this.object,
      property: this.property,
      optional: this.optional,
    };
  }
}

function deserializeCallExpression(pos, ast) {
  return new CallExpression(pos, ast);
}

class CallExpression {
  type = 'CallExpression';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast, arguments: void 0 };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get callee() {
    const internal = this.#internal;
    return deserializeExpression(internal.$pos + 8, internal.$ast);
  }

  get typeArguments() {
    const internal = this.#internal;
    return deserializeOptionBoxTSTypeParameterInstantiation(internal.$pos + 24, internal.$ast);
  }

  get arguments() {
    const internal = this.#internal,
      node = internal.arguments;
    if (node !== void 0) return node;
    return internal.arguments = deserializeVecArgument(internal.$pos + 32, internal.$ast);
  }

  get optional() {
    const internal = this.#internal;
    return deserializeBool(internal.$pos + 56, internal.$ast);
  }

  toJSON() {
    return {
      type: 'CallExpression',
      start: this.start,
      end: this.end,
      callee: this.callee,
      typeArguments: this.typeArguments,
      arguments: this.arguments,
      optional: this.optional,
    };
  }
}

function deserializeNewExpression(pos, ast) {
  return new NewExpression(pos, ast);
}

class NewExpression {
  type = 'NewExpression';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast, arguments: void 0 };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get callee() {
    const internal = this.#internal;
    return deserializeExpression(internal.$pos + 8, internal.$ast);
  }

  get typeArguments() {
    const internal = this.#internal;
    return deserializeOptionBoxTSTypeParameterInstantiation(internal.$pos + 24, internal.$ast);
  }

  get arguments() {
    const internal = this.#internal,
      node = internal.arguments;
    if (node !== void 0) return node;
    return internal.arguments = deserializeVecArgument(internal.$pos + 32, internal.$ast);
  }

  toJSON() {
    return {
      type: 'NewExpression',
      start: this.start,
      end: this.end,
      callee: this.callee,
      typeArguments: this.typeArguments,
      arguments: this.arguments,
    };
  }
}

function deserializeMetaProperty(pos, ast) {
  return new MetaProperty(pos, ast);
}

class MetaProperty {
  type = 'MetaProperty';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get meta() {
    const internal = this.#internal;
    return deserializeIdentifierName(internal.$pos + 8, internal.$ast);
  }

  get property() {
    const internal = this.#internal;
    return deserializeIdentifierName(internal.$pos + 32, internal.$ast);
  }

  toJSON() {
    return {
      type: 'MetaProperty',
      start: this.start,
      end: this.end,
      meta: this.meta,
      property: this.property,
    };
  }
}

function deserializeSpreadElement(pos, ast) {
  return new SpreadElement(pos, ast);
}

class SpreadElement {
  type = 'SpreadElement';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get argument() {
    const internal = this.#internal;
    return deserializeExpression(internal.$pos + 8, internal.$ast);
  }

  toJSON() {
    return {
      type: 'SpreadElement',
      start: this.start,
      end: this.end,
      argument: this.argument,
    };
  }
}

function deserializeArgument(pos, ast) {
  switch (ast.buffer[pos]) {
    case 0:
      return deserializeBoxBooleanLiteral(pos + 8, ast);
    case 1:
      return deserializeBoxNullLiteral(pos + 8, ast);
    case 2:
      return deserializeBoxNumericLiteral(pos + 8, ast);
    case 3:
      return deserializeBoxBigIntLiteral(pos + 8, ast);
    case 4:
      return deserializeBoxRegExpLiteral(pos + 8, ast);
    case 5:
      return deserializeBoxStringLiteral(pos + 8, ast);
    case 6:
      return deserializeBoxTemplateLiteral(pos + 8, ast);
    case 7:
      return deserializeBoxIdentifierReference(pos + 8, ast);
    case 8:
      return deserializeBoxMetaProperty(pos + 8, ast);
    case 9:
      return deserializeBoxSuper(pos + 8, ast);
    case 10:
      return deserializeBoxArrayExpression(pos + 8, ast);
    case 11:
      return deserializeBoxArrowFunctionExpression(pos + 8, ast);
    case 12:
      return deserializeBoxAssignmentExpression(pos + 8, ast);
    case 13:
      return deserializeBoxAwaitExpression(pos + 8, ast);
    case 14:
      return deserializeBoxBinaryExpression(pos + 8, ast);
    case 15:
      return deserializeBoxCallExpression(pos + 8, ast);
    case 16:
      return deserializeBoxChainExpression(pos + 8, ast);
    case 17:
      return deserializeBoxClass(pos + 8, ast);
    case 18:
      return deserializeBoxConditionalExpression(pos + 8, ast);
    case 19:
      return deserializeBoxFunction(pos + 8, ast);
    case 20:
      return deserializeBoxImportExpression(pos + 8, ast);
    case 21:
      return deserializeBoxLogicalExpression(pos + 8, ast);
    case 22:
      return deserializeBoxNewExpression(pos + 8, ast);
    case 23:
      return deserializeBoxObjectExpression(pos + 8, ast);
    case 24:
      return deserializeBoxParenthesizedExpression(pos + 8, ast);
    case 25:
      return deserializeBoxSequenceExpression(pos + 8, ast);
    case 26:
      return deserializeBoxTaggedTemplateExpression(pos + 8, ast);
    case 27:
      return deserializeBoxThisExpression(pos + 8, ast);
    case 28:
      return deserializeBoxUnaryExpression(pos + 8, ast);
    case 29:
      return deserializeBoxUpdateExpression(pos + 8, ast);
    case 30:
      return deserializeBoxYieldExpression(pos + 8, ast);
    case 31:
      return deserializeBoxPrivateInExpression(pos + 8, ast);
    case 32:
      return deserializeBoxJSXElement(pos + 8, ast);
    case 33:
      return deserializeBoxJSXFragment(pos + 8, ast);
    case 34:
      return deserializeBoxTSAsExpression(pos + 8, ast);
    case 35:
      return deserializeBoxTSSatisfiesExpression(pos + 8, ast);
    case 36:
      return deserializeBoxTSTypeAssertion(pos + 8, ast);
    case 37:
      return deserializeBoxTSNonNullExpression(pos + 8, ast);
    case 38:
      return deserializeBoxTSInstantiationExpression(pos + 8, ast);
    case 39:
      return deserializeBoxV8IntrinsicExpression(pos + 8, ast);
    case 48:
      return deserializeBoxComputedMemberExpression(pos + 8, ast);
    case 49:
      return deserializeBoxStaticMemberExpression(pos + 8, ast);
    case 50:
      return deserializeBoxPrivateFieldExpression(pos + 8, ast);
    case 64:
      return deserializeBoxSpreadElement(pos + 8, ast);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for Argument`);
  }
}

function deserializeUpdateExpression(pos, ast) {
  return new UpdateExpression(pos, ast);
}

class UpdateExpression {
  type = 'UpdateExpression';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get operator() {
    const internal = this.#internal;
    return deserializeUpdateOperator(internal.$pos + 24, internal.$ast);
  }

  get prefix() {
    const internal = this.#internal;
    return deserializeBool(internal.$pos + 25, internal.$ast);
  }

  get argument() {
    const internal = this.#internal;
    return deserializeSimpleAssignmentTarget(internal.$pos + 8, internal.$ast);
  }

  toJSON() {
    return {
      type: 'UpdateExpression',
      start: this.start,
      end: this.end,
      operator: this.operator,
      prefix: this.prefix,
      argument: this.argument,
    };
  }
}

function deserializeUnaryExpression(pos, ast) {
  return new UnaryExpression(pos, ast);
}

class UnaryExpression {
  type = 'UnaryExpression';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get operator() {
    const internal = this.#internal;
    return deserializeUnaryOperator(internal.$pos + 24, internal.$ast);
  }

  get argument() {
    const internal = this.#internal;
    return deserializeExpression(internal.$pos + 8, internal.$ast);
  }

  toJSON() {
    return {
      type: 'UnaryExpression',
      start: this.start,
      end: this.end,
      operator: this.operator,
      argument: this.argument,
    };
  }
}

function deserializeBinaryExpression(pos, ast) {
  return new BinaryExpression(pos, ast);
}

class BinaryExpression {
  type = 'BinaryExpression';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get left() {
    const internal = this.#internal;
    return deserializeExpression(internal.$pos + 8, internal.$ast);
  }

  get operator() {
    const internal = this.#internal;
    return deserializeBinaryOperator(internal.$pos + 40, internal.$ast);
  }

  get right() {
    const internal = this.#internal;
    return deserializeExpression(internal.$pos + 24, internal.$ast);
  }

  toJSON() {
    return {
      type: 'BinaryExpression',
      start: this.start,
      end: this.end,
      left: this.left,
      operator: this.operator,
      right: this.right,
    };
  }
}

function deserializePrivateInExpression(pos, ast) {
  return new PrivateInExpression(pos, ast);
}

class PrivateInExpression {
  type = 'PrivateInExpression';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get left() {
    const internal = this.#internal;
    return deserializePrivateIdentifier(internal.$pos + 8, internal.$ast);
  }

  get right() {
    const internal = this.#internal;
    return deserializeExpression(internal.$pos + 32, internal.$ast);
  }

  toJSON() {
    return {
      type: 'PrivateInExpression',
      start: this.start,
      end: this.end,
      left: this.left,
      right: this.right,
    };
  }
}

function deserializeLogicalExpression(pos, ast) {
  return new LogicalExpression(pos, ast);
}

class LogicalExpression {
  type = 'LogicalExpression';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get left() {
    const internal = this.#internal;
    return deserializeExpression(internal.$pos + 8, internal.$ast);
  }

  get operator() {
    const internal = this.#internal;
    return deserializeLogicalOperator(internal.$pos + 40, internal.$ast);
  }

  get right() {
    const internal = this.#internal;
    return deserializeExpression(internal.$pos + 24, internal.$ast);
  }

  toJSON() {
    return {
      type: 'LogicalExpression',
      start: this.start,
      end: this.end,
      left: this.left,
      operator: this.operator,
      right: this.right,
    };
  }
}

function deserializeConditionalExpression(pos, ast) {
  return new ConditionalExpression(pos, ast);
}

class ConditionalExpression {
  type = 'ConditionalExpression';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get test() {
    const internal = this.#internal;
    return deserializeExpression(internal.$pos + 8, internal.$ast);
  }

  get consequent() {
    const internal = this.#internal;
    return deserializeExpression(internal.$pos + 24, internal.$ast);
  }

  get alternate() {
    const internal = this.#internal;
    return deserializeExpression(internal.$pos + 40, internal.$ast);
  }

  toJSON() {
    return {
      type: 'ConditionalExpression',
      start: this.start,
      end: this.end,
      test: this.test,
      consequent: this.consequent,
      alternate: this.alternate,
    };
  }
}

function deserializeAssignmentExpression(pos, ast) {
  return new AssignmentExpression(pos, ast);
}

class AssignmentExpression {
  type = 'AssignmentExpression';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get operator() {
    const internal = this.#internal;
    return deserializeAssignmentOperator(internal.$pos + 40, internal.$ast);
  }

  get left() {
    const internal = this.#internal;
    return deserializeAssignmentTarget(internal.$pos + 8, internal.$ast);
  }

  get right() {
    const internal = this.#internal;
    return deserializeExpression(internal.$pos + 24, internal.$ast);
  }

  toJSON() {
    return {
      type: 'AssignmentExpression',
      start: this.start,
      end: this.end,
      operator: this.operator,
      left: this.left,
      right: this.right,
    };
  }
}

function deserializeAssignmentTarget(pos, ast) {
  switch (ast.buffer[pos]) {
    case 0:
      return deserializeBoxIdentifierReference(pos + 8, ast);
    case 1:
      return deserializeBoxTSAsExpression(pos + 8, ast);
    case 2:
      return deserializeBoxTSSatisfiesExpression(pos + 8, ast);
    case 3:
      return deserializeBoxTSNonNullExpression(pos + 8, ast);
    case 4:
      return deserializeBoxTSTypeAssertion(pos + 8, ast);
    case 8:
      return deserializeBoxArrayAssignmentTarget(pos + 8, ast);
    case 9:
      return deserializeBoxObjectAssignmentTarget(pos + 8, ast);
    case 48:
      return deserializeBoxComputedMemberExpression(pos + 8, ast);
    case 49:
      return deserializeBoxStaticMemberExpression(pos + 8, ast);
    case 50:
      return deserializeBoxPrivateFieldExpression(pos + 8, ast);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for AssignmentTarget`);
  }
}

function deserializeSimpleAssignmentTarget(pos, ast) {
  switch (ast.buffer[pos]) {
    case 0:
      return deserializeBoxIdentifierReference(pos + 8, ast);
    case 1:
      return deserializeBoxTSAsExpression(pos + 8, ast);
    case 2:
      return deserializeBoxTSSatisfiesExpression(pos + 8, ast);
    case 3:
      return deserializeBoxTSNonNullExpression(pos + 8, ast);
    case 4:
      return deserializeBoxTSTypeAssertion(pos + 8, ast);
    case 48:
      return deserializeBoxComputedMemberExpression(pos + 8, ast);
    case 49:
      return deserializeBoxStaticMemberExpression(pos + 8, ast);
    case 50:
      return deserializeBoxPrivateFieldExpression(pos + 8, ast);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for SimpleAssignmentTarget`);
  }
}

function deserializeAssignmentTargetPattern(pos, ast) {
  switch (ast.buffer[pos]) {
    case 8:
      return deserializeBoxArrayAssignmentTarget(pos + 8, ast);
    case 9:
      return deserializeBoxObjectAssignmentTarget(pos + 8, ast);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for AssignmentTargetPattern`);
  }
}

function deserializeArrayAssignmentTarget(pos, ast) {
  return new ArrayAssignmentTarget(pos, ast);
}

class ArrayAssignmentTarget {
  type = 'ArrayAssignmentTarget';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast, elements: void 0 };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get elements() {
    const internal = this.#internal,
      node = internal.elements;
    if (node !== void 0) return node;
    return internal.elements = deserializeVecOptionAssignmentTargetMaybeDefault(internal.$pos + 8, internal.$ast);
  }

  toJSON() {
    return {
      type: 'ArrayAssignmentTarget',
      start: this.start,
      end: this.end,
      elements: this.elements,
    };
  }
}

function deserializeObjectAssignmentTarget(pos, ast) {
  return new ObjectAssignmentTarget(pos, ast);
}

class ObjectAssignmentTarget {
  type = 'ObjectAssignmentTarget';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast, properties: void 0 };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get properties() {
    const internal = this.#internal,
      node = internal.properties;
    if (node !== void 0) return node;
    return internal.properties = deserializeVecAssignmentTargetProperty(internal.$pos + 8, internal.$ast);
  }

  toJSON() {
    return {
      type: 'ObjectAssignmentTarget',
      start: this.start,
      end: this.end,
      properties: this.properties,
    };
  }
}

function deserializeAssignmentTargetRest(pos, ast) {
  return new AssignmentTargetRest(pos, ast);
}

class AssignmentTargetRest {
  type = 'AssignmentTargetRest';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get argument() {
    const internal = this.#internal;
    return deserializeAssignmentTarget(internal.$pos + 8, internal.$ast);
  }

  toJSON() {
    return {
      type: 'AssignmentTargetRest',
      start: this.start,
      end: this.end,
      argument: this.argument,
    };
  }
}

function deserializeAssignmentTargetMaybeDefault(pos, ast) {
  switch (ast.buffer[pos]) {
    case 0:
      return deserializeBoxIdentifierReference(pos + 8, ast);
    case 1:
      return deserializeBoxTSAsExpression(pos + 8, ast);
    case 2:
      return deserializeBoxTSSatisfiesExpression(pos + 8, ast);
    case 3:
      return deserializeBoxTSNonNullExpression(pos + 8, ast);
    case 4:
      return deserializeBoxTSTypeAssertion(pos + 8, ast);
    case 8:
      return deserializeBoxArrayAssignmentTarget(pos + 8, ast);
    case 9:
      return deserializeBoxObjectAssignmentTarget(pos + 8, ast);
    case 16:
      return deserializeBoxAssignmentTargetWithDefault(pos + 8, ast);
    case 48:
      return deserializeBoxComputedMemberExpression(pos + 8, ast);
    case 49:
      return deserializeBoxStaticMemberExpression(pos + 8, ast);
    case 50:
      return deserializeBoxPrivateFieldExpression(pos + 8, ast);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for AssignmentTargetMaybeDefault`);
  }
}

function deserializeAssignmentTargetWithDefault(pos, ast) {
  return new AssignmentTargetWithDefault(pos, ast);
}

class AssignmentTargetWithDefault {
  type = 'AssignmentTargetWithDefault';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get left() {
    const internal = this.#internal;
    return deserializeAssignmentTarget(internal.$pos + 8, internal.$ast);
  }

  get right() {
    const internal = this.#internal;
    return deserializeExpression(internal.$pos + 24, internal.$ast);
  }

  toJSON() {
    return {
      type: 'AssignmentTargetWithDefault',
      start: this.start,
      end: this.end,
      left: this.left,
      right: this.right,
    };
  }
}

function deserializeAssignmentTargetProperty(pos, ast) {
  switch (ast.buffer[pos]) {
    case 0:
      return deserializeBoxAssignmentTargetPropertyIdentifier(pos + 8, ast);
    case 1:
      return deserializeBoxAssignmentTargetPropertyProperty(pos + 8, ast);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for AssignmentTargetProperty`);
  }
}

function deserializeAssignmentTargetPropertyIdentifier(pos, ast) {
  return new AssignmentTargetPropertyIdentifier(pos, ast);
}

class AssignmentTargetPropertyIdentifier {
  type = 'AssignmentTargetPropertyIdentifier';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get key() {
    const internal = this.#internal;
    return deserializeIdentifierReference(internal.$pos + 8, internal.$ast);
  }

  get value() {
    const internal = this.#internal;
    return deserializeOptionExpression(internal.$pos + 40, internal.$ast);
  }

  toJSON() {
    return {
      type: 'AssignmentTargetPropertyIdentifier',
      start: this.start,
      end: this.end,
      key: this.key,
      value: this.value,
    };
  }
}

function deserializeAssignmentTargetPropertyProperty(pos, ast) {
  return new AssignmentTargetPropertyProperty(pos, ast);
}

class AssignmentTargetPropertyProperty {
  type = 'AssignmentTargetPropertyProperty';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get key() {
    const internal = this.#internal;
    return deserializePropertyKey(internal.$pos + 8, internal.$ast);
  }

  get value() {
    const internal = this.#internal;
    return deserializeAssignmentTargetMaybeDefault(internal.$pos + 24, internal.$ast);
  }

  get computed() {
    const internal = this.#internal;
    return deserializeBool(internal.$pos + 40, internal.$ast);
  }

  toJSON() {
    return {
      type: 'AssignmentTargetPropertyProperty',
      start: this.start,
      end: this.end,
      key: this.key,
      value: this.value,
      computed: this.computed,
    };
  }
}

function deserializeSequenceExpression(pos, ast) {
  return new SequenceExpression(pos, ast);
}

class SequenceExpression {
  type = 'SequenceExpression';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast, expressions: void 0 };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get expressions() {
    const internal = this.#internal,
      node = internal.expressions;
    if (node !== void 0) return node;
    return internal.expressions = deserializeVecExpression(internal.$pos + 8, internal.$ast);
  }

  toJSON() {
    return {
      type: 'SequenceExpression',
      start: this.start,
      end: this.end,
      expressions: this.expressions,
    };
  }
}

function deserializeSuper(pos, ast) {
  return new Super(pos, ast);
}

class Super {
  type = 'Super';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  toJSON() {
    return {
      type: 'Super',
      start: this.start,
      end: this.end,
    };
  }
}

function deserializeAwaitExpression(pos, ast) {
  return new AwaitExpression(pos, ast);
}

class AwaitExpression {
  type = 'AwaitExpression';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get argument() {
    const internal = this.#internal;
    return deserializeExpression(internal.$pos + 8, internal.$ast);
  }

  toJSON() {
    return {
      type: 'AwaitExpression',
      start: this.start,
      end: this.end,
      argument: this.argument,
    };
  }
}

function deserializeChainExpression(pos, ast) {
  return new ChainExpression(pos, ast);
}

class ChainExpression {
  type = 'ChainExpression';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get expression() {
    const internal = this.#internal;
    return deserializeChainElement(internal.$pos + 8, internal.$ast);
  }

  toJSON() {
    return {
      type: 'ChainExpression',
      start: this.start,
      end: this.end,
      expression: this.expression,
    };
  }
}

function deserializeChainElement(pos, ast) {
  switch (ast.buffer[pos]) {
    case 0:
      return deserializeBoxCallExpression(pos + 8, ast);
    case 1:
      return deserializeBoxTSNonNullExpression(pos + 8, ast);
    case 48:
      return deserializeBoxComputedMemberExpression(pos + 8, ast);
    case 49:
      return deserializeBoxStaticMemberExpression(pos + 8, ast);
    case 50:
      return deserializeBoxPrivateFieldExpression(pos + 8, ast);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for ChainElement`);
  }
}

function deserializeParenthesizedExpression(pos, ast) {
  return new ParenthesizedExpression(pos, ast);
}

class ParenthesizedExpression {
  type = 'ParenthesizedExpression';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get expression() {
    const internal = this.#internal;
    return deserializeExpression(internal.$pos + 8, internal.$ast);
  }

  toJSON() {
    return {
      type: 'ParenthesizedExpression',
      start: this.start,
      end: this.end,
      expression: this.expression,
    };
  }
}

function deserializeStatement(pos, ast) {
  switch (ast.buffer[pos]) {
    case 0:
      return deserializeBoxBlockStatement(pos + 8, ast);
    case 1:
      return deserializeBoxBreakStatement(pos + 8, ast);
    case 2:
      return deserializeBoxContinueStatement(pos + 8, ast);
    case 3:
      return deserializeBoxDebuggerStatement(pos + 8, ast);
    case 4:
      return deserializeBoxDoWhileStatement(pos + 8, ast);
    case 5:
      return deserializeBoxEmptyStatement(pos + 8, ast);
    case 6:
      return deserializeBoxExpressionStatement(pos + 8, ast);
    case 7:
      return deserializeBoxForInStatement(pos + 8, ast);
    case 8:
      return deserializeBoxForOfStatement(pos + 8, ast);
    case 9:
      return deserializeBoxForStatement(pos + 8, ast);
    case 10:
      return deserializeBoxIfStatement(pos + 8, ast);
    case 11:
      return deserializeBoxLabeledStatement(pos + 8, ast);
    case 12:
      return deserializeBoxReturnStatement(pos + 8, ast);
    case 13:
      return deserializeBoxSwitchStatement(pos + 8, ast);
    case 14:
      return deserializeBoxThrowStatement(pos + 8, ast);
    case 15:
      return deserializeBoxTryStatement(pos + 8, ast);
    case 16:
      return deserializeBoxWhileStatement(pos + 8, ast);
    case 17:
      return deserializeBoxWithStatement(pos + 8, ast);
    case 32:
      return deserializeBoxVariableDeclaration(pos + 8, ast);
    case 33:
      return deserializeBoxFunction(pos + 8, ast);
    case 34:
      return deserializeBoxClass(pos + 8, ast);
    case 35:
      return deserializeBoxTSTypeAliasDeclaration(pos + 8, ast);
    case 36:
      return deserializeBoxTSInterfaceDeclaration(pos + 8, ast);
    case 37:
      return deserializeBoxTSEnumDeclaration(pos + 8, ast);
    case 38:
      return deserializeBoxTSModuleDeclaration(pos + 8, ast);
    case 39:
      return deserializeBoxTSImportEqualsDeclaration(pos + 8, ast);
    case 64:
      return deserializeBoxImportDeclaration(pos + 8, ast);
    case 65:
      return deserializeBoxExportAllDeclaration(pos + 8, ast);
    case 66:
      return deserializeBoxExportDefaultDeclaration(pos + 8, ast);
    case 67:
      return deserializeBoxExportNamedDeclaration(pos + 8, ast);
    case 68:
      return deserializeBoxTSExportAssignment(pos + 8, ast);
    case 69:
      return deserializeBoxTSNamespaceExportDeclaration(pos + 8, ast);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for Statement`);
  }
}

function deserializeDirective(pos, ast) {
  return new Directive(pos, ast);
}

class Directive {
  type = 'Directive';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast, directive: void 0 };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get expression() {
    const internal = this.#internal;
    return deserializeStringLiteral(internal.$pos + 8, internal.$ast);
  }

  get directive() {
    const internal = this.#internal,
      node = internal.directive;
    if (node !== void 0) return node;
    return internal.directive = deserializeStr(internal.$pos + 56, internal.$ast);
  }

  toJSON() {
    return {
      type: 'Directive',
      start: this.start,
      end: this.end,
      expression: this.expression,
      directive: this.directive,
    };
  }
}

function deserializeHashbang(pos, ast) {
  return new Hashbang(pos, ast);
}

class Hashbang {
  type = 'Hashbang';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast, value: void 0 };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get value() {
    const internal = this.#internal,
      node = internal.value;
    if (node !== void 0) return node;
    return internal.value = deserializeStr(internal.$pos + 8, internal.$ast);
  }

  toJSON() {
    return {
      type: 'Hashbang',
      start: this.start,
      end: this.end,
      value: this.value,
    };
  }
}

function deserializeBlockStatement(pos, ast) {
  return new BlockStatement(pos, ast);
}

class BlockStatement {
  type = 'BlockStatement';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast, body: void 0 };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get body() {
    const internal = this.#internal,
      node = internal.body;
    if (node !== void 0) return node;
    return internal.body = deserializeVecStatement(internal.$pos + 8, internal.$ast);
  }

  toJSON() {
    return {
      type: 'BlockStatement',
      start: this.start,
      end: this.end,
      body: this.body,
    };
  }
}

function deserializeDeclaration(pos, ast) {
  switch (ast.buffer[pos]) {
    case 32:
      return deserializeBoxVariableDeclaration(pos + 8, ast);
    case 33:
      return deserializeBoxFunction(pos + 8, ast);
    case 34:
      return deserializeBoxClass(pos + 8, ast);
    case 35:
      return deserializeBoxTSTypeAliasDeclaration(pos + 8, ast);
    case 36:
      return deserializeBoxTSInterfaceDeclaration(pos + 8, ast);
    case 37:
      return deserializeBoxTSEnumDeclaration(pos + 8, ast);
    case 38:
      return deserializeBoxTSModuleDeclaration(pos + 8, ast);
    case 39:
      return deserializeBoxTSImportEqualsDeclaration(pos + 8, ast);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for Declaration`);
  }
}

function deserializeVariableDeclaration(pos, ast) {
  return new VariableDeclaration(pos, ast);
}

class VariableDeclaration {
  type = 'VariableDeclaration';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast, declarations: void 0 };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get kind() {
    const internal = this.#internal;
    return deserializeVariableDeclarationKind(internal.$pos + 32, internal.$ast);
  }

  get declarations() {
    const internal = this.#internal,
      node = internal.declarations;
    if (node !== void 0) return node;
    return internal.declarations = deserializeVecVariableDeclarator(internal.$pos + 8, internal.$ast);
  }

  get declare() {
    const internal = this.#internal;
    return deserializeBool(internal.$pos + 33, internal.$ast);
  }

  toJSON() {
    return {
      type: 'VariableDeclaration',
      start: this.start,
      end: this.end,
      kind: this.kind,
      declarations: this.declarations,
      declare: this.declare,
    };
  }
}

function deserializeVariableDeclarationKind(pos, ast) {
  switch (ast.buffer[pos]) {
    case 0:
      return 'var';
    case 1:
      return 'let';
    case 2:
      return 'const';
    case 3:
      return 'using';
    case 4:
      return 'await using';
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for VariableDeclarationKind`);
  }
}

function deserializeVariableDeclarator(pos, ast) {
  return new VariableDeclarator(pos, ast);
}

class VariableDeclarator {
  type = 'VariableDeclarator';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get id() {
    const internal = this.#internal;
    return deserializeBindingPattern(internal.$pos + 8, internal.$ast);
  }

  get init() {
    const internal = this.#internal;
    return deserializeOptionExpression(internal.$pos + 40, internal.$ast);
  }

  get definite() {
    const internal = this.#internal;
    return deserializeBool(internal.$pos + 57, internal.$ast);
  }

  toJSON() {
    return {
      type: 'VariableDeclarator',
      start: this.start,
      end: this.end,
      id: this.id,
      init: this.init,
      definite: this.definite,
    };
  }
}

function deserializeEmptyStatement(pos, ast) {
  return new EmptyStatement(pos, ast);
}

class EmptyStatement {
  type = 'EmptyStatement';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  toJSON() {
    return {
      type: 'EmptyStatement',
      start: this.start,
      end: this.end,
    };
  }
}

function deserializeExpressionStatement(pos, ast) {
  return new ExpressionStatement(pos, ast);
}

class ExpressionStatement {
  type = 'ExpressionStatement';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get expression() {
    const internal = this.#internal;
    return deserializeExpression(internal.$pos + 8, internal.$ast);
  }

  toJSON() {
    return {
      type: 'ExpressionStatement',
      start: this.start,
      end: this.end,
      expression: this.expression,
    };
  }
}

function deserializeIfStatement(pos, ast) {
  return new IfStatement(pos, ast);
}

class IfStatement {
  type = 'IfStatement';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get test() {
    const internal = this.#internal;
    return deserializeExpression(internal.$pos + 8, internal.$ast);
  }

  get consequent() {
    const internal = this.#internal;
    return deserializeStatement(internal.$pos + 24, internal.$ast);
  }

  get alternate() {
    const internal = this.#internal;
    return deserializeOptionStatement(internal.$pos + 40, internal.$ast);
  }

  toJSON() {
    return {
      type: 'IfStatement',
      start: this.start,
      end: this.end,
      test: this.test,
      consequent: this.consequent,
      alternate: this.alternate,
    };
  }
}

function deserializeDoWhileStatement(pos, ast) {
  return new DoWhileStatement(pos, ast);
}

class DoWhileStatement {
  type = 'DoWhileStatement';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get body() {
    const internal = this.#internal;
    return deserializeStatement(internal.$pos + 8, internal.$ast);
  }

  get test() {
    const internal = this.#internal;
    return deserializeExpression(internal.$pos + 24, internal.$ast);
  }

  toJSON() {
    return {
      type: 'DoWhileStatement',
      start: this.start,
      end: this.end,
      body: this.body,
      test: this.test,
    };
  }
}

function deserializeWhileStatement(pos, ast) {
  return new WhileStatement(pos, ast);
}

class WhileStatement {
  type = 'WhileStatement';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get test() {
    const internal = this.#internal;
    return deserializeExpression(internal.$pos + 8, internal.$ast);
  }

  get body() {
    const internal = this.#internal;
    return deserializeStatement(internal.$pos + 24, internal.$ast);
  }

  toJSON() {
    return {
      type: 'WhileStatement',
      start: this.start,
      end: this.end,
      test: this.test,
      body: this.body,
    };
  }
}

function deserializeForStatement(pos, ast) {
  return new ForStatement(pos, ast);
}

class ForStatement {
  type = 'ForStatement';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get init() {
    const internal = this.#internal;
    return deserializeOptionForStatementInit(internal.$pos + 8, internal.$ast);
  }

  get test() {
    const internal = this.#internal;
    return deserializeOptionExpression(internal.$pos + 24, internal.$ast);
  }

  get update() {
    const internal = this.#internal;
    return deserializeOptionExpression(internal.$pos + 40, internal.$ast);
  }

  get body() {
    const internal = this.#internal;
    return deserializeStatement(internal.$pos + 56, internal.$ast);
  }

  toJSON() {
    return {
      type: 'ForStatement',
      start: this.start,
      end: this.end,
      init: this.init,
      test: this.test,
      update: this.update,
      body: this.body,
    };
  }
}

function deserializeForStatementInit(pos, ast) {
  switch (ast.buffer[pos]) {
    case 0:
      return deserializeBoxBooleanLiteral(pos + 8, ast);
    case 1:
      return deserializeBoxNullLiteral(pos + 8, ast);
    case 2:
      return deserializeBoxNumericLiteral(pos + 8, ast);
    case 3:
      return deserializeBoxBigIntLiteral(pos + 8, ast);
    case 4:
      return deserializeBoxRegExpLiteral(pos + 8, ast);
    case 5:
      return deserializeBoxStringLiteral(pos + 8, ast);
    case 6:
      return deserializeBoxTemplateLiteral(pos + 8, ast);
    case 7:
      return deserializeBoxIdentifierReference(pos + 8, ast);
    case 8:
      return deserializeBoxMetaProperty(pos + 8, ast);
    case 9:
      return deserializeBoxSuper(pos + 8, ast);
    case 10:
      return deserializeBoxArrayExpression(pos + 8, ast);
    case 11:
      return deserializeBoxArrowFunctionExpression(pos + 8, ast);
    case 12:
      return deserializeBoxAssignmentExpression(pos + 8, ast);
    case 13:
      return deserializeBoxAwaitExpression(pos + 8, ast);
    case 14:
      return deserializeBoxBinaryExpression(pos + 8, ast);
    case 15:
      return deserializeBoxCallExpression(pos + 8, ast);
    case 16:
      return deserializeBoxChainExpression(pos + 8, ast);
    case 17:
      return deserializeBoxClass(pos + 8, ast);
    case 18:
      return deserializeBoxConditionalExpression(pos + 8, ast);
    case 19:
      return deserializeBoxFunction(pos + 8, ast);
    case 20:
      return deserializeBoxImportExpression(pos + 8, ast);
    case 21:
      return deserializeBoxLogicalExpression(pos + 8, ast);
    case 22:
      return deserializeBoxNewExpression(pos + 8, ast);
    case 23:
      return deserializeBoxObjectExpression(pos + 8, ast);
    case 24:
      return deserializeBoxParenthesizedExpression(pos + 8, ast);
    case 25:
      return deserializeBoxSequenceExpression(pos + 8, ast);
    case 26:
      return deserializeBoxTaggedTemplateExpression(pos + 8, ast);
    case 27:
      return deserializeBoxThisExpression(pos + 8, ast);
    case 28:
      return deserializeBoxUnaryExpression(pos + 8, ast);
    case 29:
      return deserializeBoxUpdateExpression(pos + 8, ast);
    case 30:
      return deserializeBoxYieldExpression(pos + 8, ast);
    case 31:
      return deserializeBoxPrivateInExpression(pos + 8, ast);
    case 32:
      return deserializeBoxJSXElement(pos + 8, ast);
    case 33:
      return deserializeBoxJSXFragment(pos + 8, ast);
    case 34:
      return deserializeBoxTSAsExpression(pos + 8, ast);
    case 35:
      return deserializeBoxTSSatisfiesExpression(pos + 8, ast);
    case 36:
      return deserializeBoxTSTypeAssertion(pos + 8, ast);
    case 37:
      return deserializeBoxTSNonNullExpression(pos + 8, ast);
    case 38:
      return deserializeBoxTSInstantiationExpression(pos + 8, ast);
    case 39:
      return deserializeBoxV8IntrinsicExpression(pos + 8, ast);
    case 48:
      return deserializeBoxComputedMemberExpression(pos + 8, ast);
    case 49:
      return deserializeBoxStaticMemberExpression(pos + 8, ast);
    case 50:
      return deserializeBoxPrivateFieldExpression(pos + 8, ast);
    case 64:
      return deserializeBoxVariableDeclaration(pos + 8, ast);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for ForStatementInit`);
  }
}

function deserializeForInStatement(pos, ast) {
  return new ForInStatement(pos, ast);
}

class ForInStatement {
  type = 'ForInStatement';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get left() {
    const internal = this.#internal;
    return deserializeForStatementLeft(internal.$pos + 8, internal.$ast);
  }

  get right() {
    const internal = this.#internal;
    return deserializeExpression(internal.$pos + 24, internal.$ast);
  }

  get body() {
    const internal = this.#internal;
    return deserializeStatement(internal.$pos + 40, internal.$ast);
  }

  toJSON() {
    return {
      type: 'ForInStatement',
      start: this.start,
      end: this.end,
      left: this.left,
      right: this.right,
      body: this.body,
    };
  }
}

function deserializeForStatementLeft(pos, ast) {
  switch (ast.buffer[pos]) {
    case 0:
      return deserializeBoxIdentifierReference(pos + 8, ast);
    case 1:
      return deserializeBoxTSAsExpression(pos + 8, ast);
    case 2:
      return deserializeBoxTSSatisfiesExpression(pos + 8, ast);
    case 3:
      return deserializeBoxTSNonNullExpression(pos + 8, ast);
    case 4:
      return deserializeBoxTSTypeAssertion(pos + 8, ast);
    case 8:
      return deserializeBoxArrayAssignmentTarget(pos + 8, ast);
    case 9:
      return deserializeBoxObjectAssignmentTarget(pos + 8, ast);
    case 16:
      return deserializeBoxVariableDeclaration(pos + 8, ast);
    case 48:
      return deserializeBoxComputedMemberExpression(pos + 8, ast);
    case 49:
      return deserializeBoxStaticMemberExpression(pos + 8, ast);
    case 50:
      return deserializeBoxPrivateFieldExpression(pos + 8, ast);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for ForStatementLeft`);
  }
}

function deserializeForOfStatement(pos, ast) {
  return new ForOfStatement(pos, ast);
}

class ForOfStatement {
  type = 'ForOfStatement';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get await() {
    const internal = this.#internal;
    return deserializeBool(internal.$pos + 60, internal.$ast);
  }

  get left() {
    const internal = this.#internal;
    return deserializeForStatementLeft(internal.$pos + 8, internal.$ast);
  }

  get right() {
    const internal = this.#internal;
    return deserializeExpression(internal.$pos + 24, internal.$ast);
  }

  get body() {
    const internal = this.#internal;
    return deserializeStatement(internal.$pos + 40, internal.$ast);
  }

  toJSON() {
    return {
      type: 'ForOfStatement',
      start: this.start,
      end: this.end,
      await: this.await,
      left: this.left,
      right: this.right,
      body: this.body,
    };
  }
}

function deserializeContinueStatement(pos, ast) {
  return new ContinueStatement(pos, ast);
}

class ContinueStatement {
  type = 'ContinueStatement';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get label() {
    const internal = this.#internal;
    return deserializeOptionLabelIdentifier(internal.$pos + 8, internal.$ast);
  }

  toJSON() {
    return {
      type: 'ContinueStatement',
      start: this.start,
      end: this.end,
      label: this.label,
    };
  }
}

function deserializeBreakStatement(pos, ast) {
  return new BreakStatement(pos, ast);
}

class BreakStatement {
  type = 'BreakStatement';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get label() {
    const internal = this.#internal;
    return deserializeOptionLabelIdentifier(internal.$pos + 8, internal.$ast);
  }

  toJSON() {
    return {
      type: 'BreakStatement',
      start: this.start,
      end: this.end,
      label: this.label,
    };
  }
}

function deserializeReturnStatement(pos, ast) {
  return new ReturnStatement(pos, ast);
}

class ReturnStatement {
  type = 'ReturnStatement';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get argument() {
    const internal = this.#internal;
    return deserializeOptionExpression(internal.$pos + 8, internal.$ast);
  }

  toJSON() {
    return {
      type: 'ReturnStatement',
      start: this.start,
      end: this.end,
      argument: this.argument,
    };
  }
}

function deserializeWithStatement(pos, ast) {
  return new WithStatement(pos, ast);
}

class WithStatement {
  type = 'WithStatement';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get object() {
    const internal = this.#internal;
    return deserializeExpression(internal.$pos + 8, internal.$ast);
  }

  get body() {
    const internal = this.#internal;
    return deserializeStatement(internal.$pos + 24, internal.$ast);
  }

  toJSON() {
    return {
      type: 'WithStatement',
      start: this.start,
      end: this.end,
      object: this.object,
      body: this.body,
    };
  }
}

function deserializeSwitchStatement(pos, ast) {
  return new SwitchStatement(pos, ast);
}

class SwitchStatement {
  type = 'SwitchStatement';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast, cases: void 0 };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get discriminant() {
    const internal = this.#internal;
    return deserializeExpression(internal.$pos + 8, internal.$ast);
  }

  get cases() {
    const internal = this.#internal,
      node = internal.cases;
    if (node !== void 0) return node;
    return internal.cases = deserializeVecSwitchCase(internal.$pos + 24, internal.$ast);
  }

  toJSON() {
    return {
      type: 'SwitchStatement',
      start: this.start,
      end: this.end,
      discriminant: this.discriminant,
      cases: this.cases,
    };
  }
}

function deserializeSwitchCase(pos, ast) {
  return new SwitchCase(pos, ast);
}

class SwitchCase {
  type = 'SwitchCase';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast, consequent: void 0 };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get test() {
    const internal = this.#internal;
    return deserializeOptionExpression(internal.$pos + 8, internal.$ast);
  }

  get consequent() {
    const internal = this.#internal,
      node = internal.consequent;
    if (node !== void 0) return node;
    return internal.consequent = deserializeVecStatement(internal.$pos + 24, internal.$ast);
  }

  toJSON() {
    return {
      type: 'SwitchCase',
      start: this.start,
      end: this.end,
      test: this.test,
      consequent: this.consequent,
    };
  }
}

function deserializeLabeledStatement(pos, ast) {
  return new LabeledStatement(pos, ast);
}

class LabeledStatement {
  type = 'LabeledStatement';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get label() {
    const internal = this.#internal;
    return deserializeLabelIdentifier(internal.$pos + 8, internal.$ast);
  }

  get body() {
    const internal = this.#internal;
    return deserializeStatement(internal.$pos + 32, internal.$ast);
  }

  toJSON() {
    return {
      type: 'LabeledStatement',
      start: this.start,
      end: this.end,
      label: this.label,
      body: this.body,
    };
  }
}

function deserializeThrowStatement(pos, ast) {
  return new ThrowStatement(pos, ast);
}

class ThrowStatement {
  type = 'ThrowStatement';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get argument() {
    const internal = this.#internal;
    return deserializeExpression(internal.$pos + 8, internal.$ast);
  }

  toJSON() {
    return {
      type: 'ThrowStatement',
      start: this.start,
      end: this.end,
      argument: this.argument,
    };
  }
}

function deserializeTryStatement(pos, ast) {
  return new TryStatement(pos, ast);
}

class TryStatement {
  type = 'TryStatement';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get block() {
    const internal = this.#internal;
    return deserializeBoxBlockStatement(internal.$pos + 8, internal.$ast);
  }

  get handler() {
    const internal = this.#internal;
    return deserializeOptionBoxCatchClause(internal.$pos + 16, internal.$ast);
  }

  get finalizer() {
    const internal = this.#internal;
    return deserializeOptionBoxBlockStatement(internal.$pos + 24, internal.$ast);
  }

  toJSON() {
    return {
      type: 'TryStatement',
      start: this.start,
      end: this.end,
      block: this.block,
      handler: this.handler,
      finalizer: this.finalizer,
    };
  }
}

function deserializeCatchClause(pos, ast) {
  return new CatchClause(pos, ast);
}

class CatchClause {
  type = 'CatchClause';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get param() {
    const internal = this.#internal;
    return deserializeOptionCatchParameter(internal.$pos + 8, internal.$ast);
  }

  get body() {
    const internal = this.#internal;
    return deserializeBoxBlockStatement(internal.$pos + 48, internal.$ast);
  }

  toJSON() {
    return {
      type: 'CatchClause',
      start: this.start,
      end: this.end,
      param: this.param,
      body: this.body,
    };
  }
}

function deserializeCatchParameter(pos, ast) {
  return new CatchParameter(pos, ast);
}

class CatchParameter {
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get pattern() {
    const internal = this.#internal;
    return deserializeBindingPattern(internal.$pos + 8, internal.$ast);
  }

  toJSON() {
    return {
      pattern: this.pattern,
    };
  }
}

function deserializeDebuggerStatement(pos, ast) {
  return new DebuggerStatement(pos, ast);
}

class DebuggerStatement {
  type = 'DebuggerStatement';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  toJSON() {
    return {
      type: 'DebuggerStatement',
      start: this.start,
      end: this.end,
    };
  }
}

function deserializeBindingPattern(pos, ast) {
  return new BindingPattern(pos, ast);
}

class BindingPattern {
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get kind() {
    const internal = this.#internal;
    return deserializeBindingPatternKind(internal.$pos, internal.$ast);
  }

  get typeAnnotation() {
    const internal = this.#internal;
    return deserializeOptionBoxTSTypeAnnotation(internal.$pos + 16, internal.$ast);
  }

  get optional() {
    const internal = this.#internal;
    return deserializeBool(internal.$pos + 24, internal.$ast);
  }

  toJSON() {
    return {
      kind: this.kind,
      typeAnnotation: this.typeAnnotation,
      optional: this.optional,
    };
  }
}

function deserializeBindingPatternKind(pos, ast) {
  switch (ast.buffer[pos]) {
    case 0:
      return deserializeBoxBindingIdentifier(pos + 8, ast);
    case 1:
      return deserializeBoxObjectPattern(pos + 8, ast);
    case 2:
      return deserializeBoxArrayPattern(pos + 8, ast);
    case 3:
      return deserializeBoxAssignmentPattern(pos + 8, ast);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for BindingPatternKind`);
  }
}

function deserializeAssignmentPattern(pos, ast) {
  return new AssignmentPattern(pos, ast);
}

class AssignmentPattern {
  type = 'AssignmentPattern';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get left() {
    const internal = this.#internal;
    return deserializeBindingPattern(internal.$pos + 8, internal.$ast);
  }

  get right() {
    const internal = this.#internal;
    return deserializeExpression(internal.$pos + 40, internal.$ast);
  }

  toJSON() {
    return {
      type: 'AssignmentPattern',
      start: this.start,
      end: this.end,
      left: this.left,
      right: this.right,
    };
  }
}

function deserializeObjectPattern(pos, ast) {
  return new ObjectPattern(pos, ast);
}

class ObjectPattern {
  type = 'ObjectPattern';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast, properties: void 0 };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get properties() {
    const internal = this.#internal,
      node = internal.properties;
    if (node !== void 0) return node;
    return internal.properties = deserializeVecBindingProperty(internal.$pos + 8, internal.$ast);
  }

  toJSON() {
    return {
      type: 'ObjectPattern',
      start: this.start,
      end: this.end,
      properties: this.properties,
    };
  }
}

function deserializeBindingProperty(pos, ast) {
  return new BindingProperty(pos, ast);
}

class BindingProperty {
  type = 'BindingProperty';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get key() {
    const internal = this.#internal;
    return deserializePropertyKey(internal.$pos + 8, internal.$ast);
  }

  get value() {
    const internal = this.#internal;
    return deserializeBindingPattern(internal.$pos + 24, internal.$ast);
  }

  get shorthand() {
    const internal = this.#internal;
    return deserializeBool(internal.$pos + 56, internal.$ast);
  }

  get computed() {
    const internal = this.#internal;
    return deserializeBool(internal.$pos + 57, internal.$ast);
  }

  toJSON() {
    return {
      type: 'BindingProperty',
      start: this.start,
      end: this.end,
      key: this.key,
      value: this.value,
      shorthand: this.shorthand,
      computed: this.computed,
    };
  }
}

function deserializeArrayPattern(pos, ast) {
  return new ArrayPattern(pos, ast);
}

class ArrayPattern {
  type = 'ArrayPattern';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast, elements: void 0 };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get elements() {
    const internal = this.#internal,
      node = internal.elements;
    if (node !== void 0) return node;
    return internal.elements = deserializeVecOptionBindingPattern(internal.$pos + 8, internal.$ast);
  }

  toJSON() {
    return {
      type: 'ArrayPattern',
      start: this.start,
      end: this.end,
      elements: this.elements,
    };
  }
}

function deserializeBindingRestElement(pos, ast) {
  return new BindingRestElement(pos, ast);
}

class BindingRestElement {
  type = 'BindingRestElement';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get argument() {
    const internal = this.#internal;
    return deserializeBindingPattern(internal.$pos + 8, internal.$ast);
  }

  toJSON() {
    return {
      type: 'BindingRestElement',
      start: this.start,
      end: this.end,
      argument: this.argument,
    };
  }
}

function deserializeFunction(pos, ast) {
  return new Function(pos, ast);
}

class Function {
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get type() {
    const internal = this.#internal;
    return deserializeFunctionType(internal.$pos + 84, internal.$ast);
  }

  get id() {
    const internal = this.#internal;
    return deserializeOptionBindingIdentifier(internal.$pos + 8, internal.$ast);
  }

  get generator() {
    const internal = this.#internal;
    return deserializeBool(internal.$pos + 85, internal.$ast);
  }

  get async() {
    const internal = this.#internal;
    return deserializeBool(internal.$pos + 86, internal.$ast);
  }

  get declare() {
    const internal = this.#internal;
    return deserializeBool(internal.$pos + 87, internal.$ast);
  }

  get typeParameters() {
    const internal = this.#internal;
    return deserializeOptionBoxTSTypeParameterDeclaration(internal.$pos + 40, internal.$ast);
  }

  get params() {
    const internal = this.#internal;
    return deserializeBoxFormalParameters(internal.$pos + 56, internal.$ast);
  }

  get returnType() {
    const internal = this.#internal;
    return deserializeOptionBoxTSTypeAnnotation(internal.$pos + 64, internal.$ast);
  }

  get body() {
    const internal = this.#internal;
    return deserializeOptionBoxFunctionBody(internal.$pos + 72, internal.$ast);
  }

  toJSON() {
    return {
      start: this.start,
      end: this.end,
      type: this.type,
      id: this.id,
      generator: this.generator,
      async: this.async,
      declare: this.declare,
      typeParameters: this.typeParameters,
      params: this.params,
      returnType: this.returnType,
      body: this.body,
    };
  }
}

function deserializeFunctionType(pos, ast) {
  switch (ast.buffer[pos]) {
    case 0:
      return 'FunctionDeclaration';
    case 1:
      return 'FunctionExpression';
    case 2:
      return 'TSDeclareFunction';
    case 3:
      return 'TSEmptyBodyFunctionExpression';
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for FunctionType`);
  }
}

function deserializeFormalParameters(pos, ast) {
  return new FormalParameters(pos, ast);
}

class FormalParameters {
  type = 'FormalParameters';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast, items: void 0 };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get kind() {
    const internal = this.#internal;
    return deserializeFormalParameterKind(internal.$pos + 40, internal.$ast);
  }

  get items() {
    const internal = this.#internal,
      node = internal.items;
    if (node !== void 0) return node;
    return internal.items = deserializeVecFormalParameter(internal.$pos + 8, internal.$ast);
  }

  toJSON() {
    return {
      type: 'FormalParameters',
      start: this.start,
      end: this.end,
      kind: this.kind,
      items: this.items,
    };
  }
}

function deserializeFormalParameter(pos, ast) {
  return new FormalParameter(pos, ast);
}

class FormalParameter {
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast, decorators: void 0 };
  }

  get decorators() {
    const internal = this.#internal,
      node = internal.decorators;
    if (node !== void 0) return node;
    return internal.decorators = deserializeVecDecorator(internal.$pos + 8, internal.$ast);
  }

  get pattern() {
    const internal = this.#internal;
    return deserializeBindingPattern(internal.$pos + 32, internal.$ast);
  }

  toJSON() {
    return {
      decorators: this.decorators,
      pattern: this.pattern,
    };
  }
}

function deserializeFormalParameterKind(pos, ast) {
  switch (ast.buffer[pos]) {
    case 0:
      return 'FormalParameter';
    case 1:
      return 'UniqueFormalParameters';
    case 2:
      return 'ArrowFormalParameters';
    case 3:
      return 'Signature';
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for FormalParameterKind`);
  }
}

function deserializeFunctionBody(pos, ast) {
  return new FunctionBody(pos, ast);
}

class FunctionBody {
  type = 'FunctionBody';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast, body: void 0 };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get body() {
    const internal = this.#internal,
      node = internal.body;
    if (node !== void 0) return node;
    return internal.body = deserializeVecStatement(internal.$pos + 32, internal.$ast);
  }

  toJSON() {
    return {
      type: 'FunctionBody',
      start: this.start,
      end: this.end,
      body: this.body,
    };
  }
}

function deserializeArrowFunctionExpression(pos, ast) {
  return new ArrowFunctionExpression(pos, ast);
}

class ArrowFunctionExpression {
  type = 'ArrowFunctionExpression';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get expression() {
    const internal = this.#internal;
    return deserializeBool(internal.$pos + 44, internal.$ast);
  }

  get async() {
    const internal = this.#internal;
    return deserializeBool(internal.$pos + 45, internal.$ast);
  }

  get typeParameters() {
    const internal = this.#internal;
    return deserializeOptionBoxTSTypeParameterDeclaration(internal.$pos + 8, internal.$ast);
  }

  get params() {
    const internal = this.#internal;
    return deserializeBoxFormalParameters(internal.$pos + 16, internal.$ast);
  }

  get returnType() {
    const internal = this.#internal;
    return deserializeOptionBoxTSTypeAnnotation(internal.$pos + 24, internal.$ast);
  }

  get body() {
    const internal = this.#internal;
    return deserializeBoxFunctionBody(internal.$pos + 32, internal.$ast);
  }

  toJSON() {
    return {
      type: 'ArrowFunctionExpression',
      start: this.start,
      end: this.end,
      expression: this.expression,
      async: this.async,
      typeParameters: this.typeParameters,
      params: this.params,
      returnType: this.returnType,
      body: this.body,
    };
  }
}

function deserializeYieldExpression(pos, ast) {
  return new YieldExpression(pos, ast);
}

class YieldExpression {
  type = 'YieldExpression';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get delegate() {
    const internal = this.#internal;
    return deserializeBool(internal.$pos + 24, internal.$ast);
  }

  get argument() {
    const internal = this.#internal;
    return deserializeOptionExpression(internal.$pos + 8, internal.$ast);
  }

  toJSON() {
    return {
      type: 'YieldExpression',
      start: this.start,
      end: this.end,
      delegate: this.delegate,
      argument: this.argument,
    };
  }
}

function deserializeClass(pos, ast) {
  return new Class(pos, ast);
}

class Class {
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast, decorators: void 0, implements: void 0 };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get type() {
    const internal = this.#internal;
    return deserializeClassType(internal.$pos + 132, internal.$ast);
  }

  get decorators() {
    const internal = this.#internal,
      node = internal.decorators;
    if (node !== void 0) return node;
    return internal.decorators = deserializeVecDecorator(internal.$pos + 8, internal.$ast);
  }

  get id() {
    const internal = this.#internal;
    return deserializeOptionBindingIdentifier(internal.$pos + 32, internal.$ast);
  }

  get typeParameters() {
    const internal = this.#internal;
    return deserializeOptionBoxTSTypeParameterDeclaration(internal.$pos + 64, internal.$ast);
  }

  get superClass() {
    const internal = this.#internal;
    return deserializeOptionExpression(internal.$pos + 72, internal.$ast);
  }

  get superTypeArguments() {
    const internal = this.#internal;
    return deserializeOptionBoxTSTypeParameterInstantiation(internal.$pos + 88, internal.$ast);
  }

  get implements() {
    const internal = this.#internal,
      node = internal.implements;
    if (node !== void 0) return node;
    return internal.implements = deserializeVecTSClassImplements(internal.$pos + 96, internal.$ast);
  }

  get body() {
    const internal = this.#internal;
    return deserializeBoxClassBody(internal.$pos + 120, internal.$ast);
  }

  get abstract() {
    const internal = this.#internal;
    return deserializeBool(internal.$pos + 133, internal.$ast);
  }

  get declare() {
    const internal = this.#internal;
    return deserializeBool(internal.$pos + 134, internal.$ast);
  }

  toJSON() {
    return {
      start: this.start,
      end: this.end,
      type: this.type,
      decorators: this.decorators,
      id: this.id,
      typeParameters: this.typeParameters,
      superClass: this.superClass,
      superTypeArguments: this.superTypeArguments,
      implements: this.implements,
      body: this.body,
      abstract: this.abstract,
      declare: this.declare,
    };
  }
}

function deserializeClassType(pos, ast) {
  switch (ast.buffer[pos]) {
    case 0:
      return 'ClassDeclaration';
    case 1:
      return 'ClassExpression';
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for ClassType`);
  }
}

function deserializeClassBody(pos, ast) {
  return new ClassBody(pos, ast);
}

class ClassBody {
  type = 'ClassBody';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast, body: void 0 };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get body() {
    const internal = this.#internal,
      node = internal.body;
    if (node !== void 0) return node;
    return internal.body = deserializeVecClassElement(internal.$pos + 8, internal.$ast);
  }

  toJSON() {
    return {
      type: 'ClassBody',
      start: this.start,
      end: this.end,
      body: this.body,
    };
  }
}

function deserializeClassElement(pos, ast) {
  switch (ast.buffer[pos]) {
    case 0:
      return deserializeBoxStaticBlock(pos + 8, ast);
    case 1:
      return deserializeBoxMethodDefinition(pos + 8, ast);
    case 2:
      return deserializeBoxPropertyDefinition(pos + 8, ast);
    case 3:
      return deserializeBoxAccessorProperty(pos + 8, ast);
    case 4:
      return deserializeBoxTSIndexSignature(pos + 8, ast);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for ClassElement`);
  }
}

function deserializeMethodDefinition(pos, ast) {
  return new MethodDefinition(pos, ast);
}

class MethodDefinition {
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast, decorators: void 0 };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get type() {
    const internal = this.#internal;
    return deserializeMethodDefinitionType(internal.$pos + 56, internal.$ast);
  }

  get decorators() {
    const internal = this.#internal,
      node = internal.decorators;
    if (node !== void 0) return node;
    return internal.decorators = deserializeVecDecorator(internal.$pos + 8, internal.$ast);
  }

  get key() {
    const internal = this.#internal;
    return deserializePropertyKey(internal.$pos + 32, internal.$ast);
  }

  get value() {
    const internal = this.#internal;
    return deserializeBoxFunction(internal.$pos + 48, internal.$ast);
  }

  get kind() {
    const internal = this.#internal;
    return deserializeMethodDefinitionKind(internal.$pos + 57, internal.$ast);
  }

  get computed() {
    const internal = this.#internal;
    return deserializeBool(internal.$pos + 58, internal.$ast);
  }

  get static() {
    const internal = this.#internal;
    return deserializeBool(internal.$pos + 59, internal.$ast);
  }

  get override() {
    const internal = this.#internal;
    return deserializeBool(internal.$pos + 60, internal.$ast);
  }

  get optional() {
    const internal = this.#internal;
    return deserializeBool(internal.$pos + 61, internal.$ast);
  }

  get accessibility() {
    const internal = this.#internal;
    return deserializeOptionTSAccessibility(internal.$pos + 62, internal.$ast);
  }

  toJSON() {
    return {
      start: this.start,
      end: this.end,
      type: this.type,
      decorators: this.decorators,
      key: this.key,
      value: this.value,
      kind: this.kind,
      computed: this.computed,
      static: this.static,
      override: this.override,
      optional: this.optional,
      accessibility: this.accessibility,
    };
  }
}

function deserializeMethodDefinitionType(pos, ast) {
  switch (ast.buffer[pos]) {
    case 0:
      return 'MethodDefinition';
    case 1:
      return 'TSAbstractMethodDefinition';
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for MethodDefinitionType`);
  }
}

function deserializePropertyDefinition(pos, ast) {
  return new PropertyDefinition(pos, ast);
}

class PropertyDefinition {
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast, decorators: void 0 };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get type() {
    const internal = this.#internal;
    return deserializePropertyDefinitionType(internal.$pos + 72, internal.$ast);
  }

  get decorators() {
    const internal = this.#internal,
      node = internal.decorators;
    if (node !== void 0) return node;
    return internal.decorators = deserializeVecDecorator(internal.$pos + 8, internal.$ast);
  }

  get key() {
    const internal = this.#internal;
    return deserializePropertyKey(internal.$pos + 32, internal.$ast);
  }

  get typeAnnotation() {
    const internal = this.#internal;
    return deserializeOptionBoxTSTypeAnnotation(internal.$pos + 48, internal.$ast);
  }

  get value() {
    const internal = this.#internal;
    return deserializeOptionExpression(internal.$pos + 56, internal.$ast);
  }

  get computed() {
    const internal = this.#internal;
    return deserializeBool(internal.$pos + 73, internal.$ast);
  }

  get static() {
    const internal = this.#internal;
    return deserializeBool(internal.$pos + 74, internal.$ast);
  }

  get declare() {
    const internal = this.#internal;
    return deserializeBool(internal.$pos + 75, internal.$ast);
  }

  get override() {
    const internal = this.#internal;
    return deserializeBool(internal.$pos + 76, internal.$ast);
  }

  get optional() {
    const internal = this.#internal;
    return deserializeBool(internal.$pos + 77, internal.$ast);
  }

  get definite() {
    const internal = this.#internal;
    return deserializeBool(internal.$pos + 78, internal.$ast);
  }

  get readonly() {
    const internal = this.#internal;
    return deserializeBool(internal.$pos + 79, internal.$ast);
  }

  get accessibility() {
    const internal = this.#internal;
    return deserializeOptionTSAccessibility(internal.$pos + 80, internal.$ast);
  }

  toJSON() {
    return {
      start: this.start,
      end: this.end,
      type: this.type,
      decorators: this.decorators,
      key: this.key,
      typeAnnotation: this.typeAnnotation,
      value: this.value,
      computed: this.computed,
      static: this.static,
      declare: this.declare,
      override: this.override,
      optional: this.optional,
      definite: this.definite,
      readonly: this.readonly,
      accessibility: this.accessibility,
    };
  }
}

function deserializePropertyDefinitionType(pos, ast) {
  switch (ast.buffer[pos]) {
    case 0:
      return 'PropertyDefinition';
    case 1:
      return 'TSAbstractPropertyDefinition';
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for PropertyDefinitionType`);
  }
}

function deserializeMethodDefinitionKind(pos, ast) {
  switch (ast.buffer[pos]) {
    case 0:
      return 'constructor';
    case 1:
      return 'method';
    case 2:
      return 'get';
    case 3:
      return 'set';
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for MethodDefinitionKind`);
  }
}

function deserializePrivateIdentifier(pos, ast) {
  return new PrivateIdentifier(pos, ast);
}

class PrivateIdentifier {
  type = 'PrivateIdentifier';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast, name: void 0 };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get name() {
    const internal = this.#internal,
      node = internal.name;
    if (node !== void 0) return node;
    return internal.name = deserializeStr(internal.$pos + 8, internal.$ast);
  }

  toJSON() {
    return {
      type: 'PrivateIdentifier',
      start: this.start,
      end: this.end,
      name: this.name,
    };
  }
}

function deserializeStaticBlock(pos, ast) {
  return new StaticBlock(pos, ast);
}

class StaticBlock {
  type = 'StaticBlock';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast, body: void 0 };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get body() {
    const internal = this.#internal,
      node = internal.body;
    if (node !== void 0) return node;
    return internal.body = deserializeVecStatement(internal.$pos + 8, internal.$ast);
  }

  toJSON() {
    return {
      type: 'StaticBlock',
      start: this.start,
      end: this.end,
      body: this.body,
    };
  }
}

function deserializeModuleDeclaration(pos, ast) {
  switch (ast.buffer[pos]) {
    case 64:
      return deserializeBoxImportDeclaration(pos + 8, ast);
    case 65:
      return deserializeBoxExportAllDeclaration(pos + 8, ast);
    case 66:
      return deserializeBoxExportDefaultDeclaration(pos + 8, ast);
    case 67:
      return deserializeBoxExportNamedDeclaration(pos + 8, ast);
    case 68:
      return deserializeBoxTSExportAssignment(pos + 8, ast);
    case 69:
      return deserializeBoxTSNamespaceExportDeclaration(pos + 8, ast);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for ModuleDeclaration`);
  }
}

function deserializeAccessorPropertyType(pos, ast) {
  switch (ast.buffer[pos]) {
    case 0:
      return 'AccessorProperty';
    case 1:
      return 'TSAbstractAccessorProperty';
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for AccessorPropertyType`);
  }
}

function deserializeAccessorProperty(pos, ast) {
  return new AccessorProperty(pos, ast);
}

class AccessorProperty {
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast, decorators: void 0 };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get type() {
    const internal = this.#internal;
    return deserializeAccessorPropertyType(internal.$pos + 72, internal.$ast);
  }

  get decorators() {
    const internal = this.#internal,
      node = internal.decorators;
    if (node !== void 0) return node;
    return internal.decorators = deserializeVecDecorator(internal.$pos + 8, internal.$ast);
  }

  get key() {
    const internal = this.#internal;
    return deserializePropertyKey(internal.$pos + 32, internal.$ast);
  }

  get typeAnnotation() {
    const internal = this.#internal;
    return deserializeOptionBoxTSTypeAnnotation(internal.$pos + 48, internal.$ast);
  }

  get value() {
    const internal = this.#internal;
    return deserializeOptionExpression(internal.$pos + 56, internal.$ast);
  }

  get computed() {
    const internal = this.#internal;
    return deserializeBool(internal.$pos + 73, internal.$ast);
  }

  get static() {
    const internal = this.#internal;
    return deserializeBool(internal.$pos + 74, internal.$ast);
  }

  get override() {
    const internal = this.#internal;
    return deserializeBool(internal.$pos + 75, internal.$ast);
  }

  get definite() {
    const internal = this.#internal;
    return deserializeBool(internal.$pos + 76, internal.$ast);
  }

  get accessibility() {
    const internal = this.#internal;
    return deserializeOptionTSAccessibility(internal.$pos + 77, internal.$ast);
  }

  toJSON() {
    return {
      start: this.start,
      end: this.end,
      type: this.type,
      decorators: this.decorators,
      key: this.key,
      typeAnnotation: this.typeAnnotation,
      value: this.value,
      computed: this.computed,
      static: this.static,
      override: this.override,
      definite: this.definite,
      accessibility: this.accessibility,
    };
  }
}

function deserializeImportExpression(pos, ast) {
  return new ImportExpression(pos, ast);
}

class ImportExpression {
  type = 'ImportExpression';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get source() {
    const internal = this.#internal;
    return deserializeExpression(internal.$pos + 8, internal.$ast);
  }

  get options() {
    const internal = this.#internal;
    return deserializeOptionExpression(internal.$pos + 24, internal.$ast);
  }

  get phase() {
    const internal = this.#internal;
    return deserializeOptionImportPhase(internal.$pos + 40, internal.$ast);
  }

  toJSON() {
    return {
      type: 'ImportExpression',
      start: this.start,
      end: this.end,
      source: this.source,
      options: this.options,
      phase: this.phase,
    };
  }
}

function deserializeImportDeclaration(pos, ast) {
  return new ImportDeclaration(pos, ast);
}

class ImportDeclaration {
  type = 'ImportDeclaration';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get specifiers() {
    const internal = this.#internal;
    return deserializeOptionVecImportDeclarationSpecifier(internal.$pos + 8, internal.$ast);
  }

  get source() {
    const internal = this.#internal;
    return deserializeStringLiteral(internal.$pos + 32, internal.$ast);
  }

  get phase() {
    const internal = this.#internal;
    return deserializeOptionImportPhase(internal.$pos + 88, internal.$ast);
  }

  get attributes() {
    const internal = this.#internal;
    return deserializeOptionBoxWithClause(internal.$pos + 80, internal.$ast);
  }

  get importKind() {
    const internal = this.#internal;
    return deserializeImportOrExportKind(internal.$pos + 89, internal.$ast);
  }

  toJSON() {
    return {
      type: 'ImportDeclaration',
      start: this.start,
      end: this.end,
      specifiers: this.specifiers,
      source: this.source,
      phase: this.phase,
      attributes: this.attributes,
      importKind: this.importKind,
    };
  }
}

function deserializeImportPhase(pos, ast) {
  switch (ast.buffer[pos]) {
    case 0:
      return 'source';
    case 1:
      return 'defer';
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for ImportPhase`);
  }
}

function deserializeImportDeclarationSpecifier(pos, ast) {
  switch (ast.buffer[pos]) {
    case 0:
      return deserializeBoxImportSpecifier(pos + 8, ast);
    case 1:
      return deserializeBoxImportDefaultSpecifier(pos + 8, ast);
    case 2:
      return deserializeBoxImportNamespaceSpecifier(pos + 8, ast);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for ImportDeclarationSpecifier`);
  }
}

function deserializeImportSpecifier(pos, ast) {
  return new ImportSpecifier(pos, ast);
}

class ImportSpecifier {
  type = 'ImportSpecifier';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get imported() {
    const internal = this.#internal;
    return deserializeModuleExportName(internal.$pos + 8, internal.$ast);
  }

  get local() {
    const internal = this.#internal;
    return deserializeBindingIdentifier(internal.$pos + 64, internal.$ast);
  }

  get importKind() {
    const internal = this.#internal;
    return deserializeImportOrExportKind(internal.$pos + 96, internal.$ast);
  }

  toJSON() {
    return {
      type: 'ImportSpecifier',
      start: this.start,
      end: this.end,
      imported: this.imported,
      local: this.local,
      importKind: this.importKind,
    };
  }
}

function deserializeImportDefaultSpecifier(pos, ast) {
  return new ImportDefaultSpecifier(pos, ast);
}

class ImportDefaultSpecifier {
  type = 'ImportDefaultSpecifier';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get local() {
    const internal = this.#internal;
    return deserializeBindingIdentifier(internal.$pos + 8, internal.$ast);
  }

  toJSON() {
    return {
      type: 'ImportDefaultSpecifier',
      start: this.start,
      end: this.end,
      local: this.local,
    };
  }
}

function deserializeImportNamespaceSpecifier(pos, ast) {
  return new ImportNamespaceSpecifier(pos, ast);
}

class ImportNamespaceSpecifier {
  type = 'ImportNamespaceSpecifier';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get local() {
    const internal = this.#internal;
    return deserializeBindingIdentifier(internal.$pos + 8, internal.$ast);
  }

  toJSON() {
    return {
      type: 'ImportNamespaceSpecifier',
      start: this.start,
      end: this.end,
      local: this.local,
    };
  }
}

function deserializeWithClause(pos, ast) {
  return new WithClause(pos, ast);
}

class WithClause {
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast, attributes: void 0 };
  }

  get attributes() {
    const internal = this.#internal,
      node = internal.attributes;
    if (node !== void 0) return node;
    return internal.attributes = deserializeVecImportAttribute(internal.$pos + 32, internal.$ast);
  }

  toJSON() {
    return {
      attributes: this.attributes,
    };
  }
}

function deserializeImportAttribute(pos, ast) {
  return new ImportAttribute(pos, ast);
}

class ImportAttribute {
  type = 'ImportAttribute';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get key() {
    const internal = this.#internal;
    return deserializeImportAttributeKey(internal.$pos + 8, internal.$ast);
  }

  get value() {
    const internal = this.#internal;
    return deserializeStringLiteral(internal.$pos + 64, internal.$ast);
  }

  toJSON() {
    return {
      type: 'ImportAttribute',
      start: this.start,
      end: this.end,
      key: this.key,
      value: this.value,
    };
  }
}

function deserializeImportAttributeKey(pos, ast) {
  switch (ast.buffer[pos]) {
    case 0:
      return deserializeIdentifierName(pos + 8, ast);
    case 1:
      return deserializeStringLiteral(pos + 8, ast);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for ImportAttributeKey`);
  }
}

function deserializeExportNamedDeclaration(pos, ast) {
  return new ExportNamedDeclaration(pos, ast);
}

class ExportNamedDeclaration {
  type = 'ExportNamedDeclaration';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast, specifiers: void 0 };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get declaration() {
    const internal = this.#internal;
    return deserializeOptionDeclaration(internal.$pos + 8, internal.$ast);
  }

  get specifiers() {
    const internal = this.#internal,
      node = internal.specifiers;
    if (node !== void 0) return node;
    return internal.specifiers = deserializeVecExportSpecifier(internal.$pos + 24, internal.$ast);
  }

  get source() {
    const internal = this.#internal;
    return deserializeOptionStringLiteral(internal.$pos + 48, internal.$ast);
  }

  get exportKind() {
    const internal = this.#internal;
    return deserializeImportOrExportKind(internal.$pos + 104, internal.$ast);
  }

  get attributes() {
    const internal = this.#internal;
    return deserializeOptionBoxWithClause(internal.$pos + 96, internal.$ast);
  }

  toJSON() {
    return {
      type: 'ExportNamedDeclaration',
      start: this.start,
      end: this.end,
      declaration: this.declaration,
      specifiers: this.specifiers,
      source: this.source,
      exportKind: this.exportKind,
      attributes: this.attributes,
    };
  }
}

function deserializeExportDefaultDeclaration(pos, ast) {
  return new ExportDefaultDeclaration(pos, ast);
}

class ExportDefaultDeclaration {
  type = 'ExportDefaultDeclaration';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get declaration() {
    const internal = this.#internal;
    return deserializeExportDefaultDeclarationKind(internal.$pos + 64, internal.$ast);
  }

  toJSON() {
    return {
      type: 'ExportDefaultDeclaration',
      start: this.start,
      end: this.end,
      declaration: this.declaration,
    };
  }
}

function deserializeExportAllDeclaration(pos, ast) {
  return new ExportAllDeclaration(pos, ast);
}

class ExportAllDeclaration {
  type = 'ExportAllDeclaration';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get exported() {
    const internal = this.#internal;
    return deserializeOptionModuleExportName(internal.$pos + 8, internal.$ast);
  }

  get source() {
    const internal = this.#internal;
    return deserializeStringLiteral(internal.$pos + 64, internal.$ast);
  }

  get attributes() {
    const internal = this.#internal;
    return deserializeOptionBoxWithClause(internal.$pos + 112, internal.$ast);
  }

  get exportKind() {
    const internal = this.#internal;
    return deserializeImportOrExportKind(internal.$pos + 120, internal.$ast);
  }

  toJSON() {
    return {
      type: 'ExportAllDeclaration',
      start: this.start,
      end: this.end,
      exported: this.exported,
      source: this.source,
      attributes: this.attributes,
      exportKind: this.exportKind,
    };
  }
}

function deserializeExportSpecifier(pos, ast) {
  return new ExportSpecifier(pos, ast);
}

class ExportSpecifier {
  type = 'ExportSpecifier';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get local() {
    const internal = this.#internal;
    return deserializeModuleExportName(internal.$pos + 8, internal.$ast);
  }

  get exported() {
    const internal = this.#internal;
    return deserializeModuleExportName(internal.$pos + 64, internal.$ast);
  }

  get exportKind() {
    const internal = this.#internal;
    return deserializeImportOrExportKind(internal.$pos + 120, internal.$ast);
  }

  toJSON() {
    return {
      type: 'ExportSpecifier',
      start: this.start,
      end: this.end,
      local: this.local,
      exported: this.exported,
      exportKind: this.exportKind,
    };
  }
}

function deserializeExportDefaultDeclarationKind(pos, ast) {
  switch (ast.buffer[pos]) {
    case 0:
      return deserializeBoxBooleanLiteral(pos + 8, ast);
    case 1:
      return deserializeBoxNullLiteral(pos + 8, ast);
    case 2:
      return deserializeBoxNumericLiteral(pos + 8, ast);
    case 3:
      return deserializeBoxBigIntLiteral(pos + 8, ast);
    case 4:
      return deserializeBoxRegExpLiteral(pos + 8, ast);
    case 5:
      return deserializeBoxStringLiteral(pos + 8, ast);
    case 6:
      return deserializeBoxTemplateLiteral(pos + 8, ast);
    case 7:
      return deserializeBoxIdentifierReference(pos + 8, ast);
    case 8:
      return deserializeBoxMetaProperty(pos + 8, ast);
    case 9:
      return deserializeBoxSuper(pos + 8, ast);
    case 10:
      return deserializeBoxArrayExpression(pos + 8, ast);
    case 11:
      return deserializeBoxArrowFunctionExpression(pos + 8, ast);
    case 12:
      return deserializeBoxAssignmentExpression(pos + 8, ast);
    case 13:
      return deserializeBoxAwaitExpression(pos + 8, ast);
    case 14:
      return deserializeBoxBinaryExpression(pos + 8, ast);
    case 15:
      return deserializeBoxCallExpression(pos + 8, ast);
    case 16:
      return deserializeBoxChainExpression(pos + 8, ast);
    case 17:
      return deserializeBoxClass(pos + 8, ast);
    case 18:
      return deserializeBoxConditionalExpression(pos + 8, ast);
    case 19:
      return deserializeBoxFunction(pos + 8, ast);
    case 20:
      return deserializeBoxImportExpression(pos + 8, ast);
    case 21:
      return deserializeBoxLogicalExpression(pos + 8, ast);
    case 22:
      return deserializeBoxNewExpression(pos + 8, ast);
    case 23:
      return deserializeBoxObjectExpression(pos + 8, ast);
    case 24:
      return deserializeBoxParenthesizedExpression(pos + 8, ast);
    case 25:
      return deserializeBoxSequenceExpression(pos + 8, ast);
    case 26:
      return deserializeBoxTaggedTemplateExpression(pos + 8, ast);
    case 27:
      return deserializeBoxThisExpression(pos + 8, ast);
    case 28:
      return deserializeBoxUnaryExpression(pos + 8, ast);
    case 29:
      return deserializeBoxUpdateExpression(pos + 8, ast);
    case 30:
      return deserializeBoxYieldExpression(pos + 8, ast);
    case 31:
      return deserializeBoxPrivateInExpression(pos + 8, ast);
    case 32:
      return deserializeBoxJSXElement(pos + 8, ast);
    case 33:
      return deserializeBoxJSXFragment(pos + 8, ast);
    case 34:
      return deserializeBoxTSAsExpression(pos + 8, ast);
    case 35:
      return deserializeBoxTSSatisfiesExpression(pos + 8, ast);
    case 36:
      return deserializeBoxTSTypeAssertion(pos + 8, ast);
    case 37:
      return deserializeBoxTSNonNullExpression(pos + 8, ast);
    case 38:
      return deserializeBoxTSInstantiationExpression(pos + 8, ast);
    case 39:
      return deserializeBoxV8IntrinsicExpression(pos + 8, ast);
    case 48:
      return deserializeBoxComputedMemberExpression(pos + 8, ast);
    case 49:
      return deserializeBoxStaticMemberExpression(pos + 8, ast);
    case 50:
      return deserializeBoxPrivateFieldExpression(pos + 8, ast);
    case 64:
      return deserializeBoxFunction(pos + 8, ast);
    case 65:
      return deserializeBoxClass(pos + 8, ast);
    case 66:
      return deserializeBoxTSInterfaceDeclaration(pos + 8, ast);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for ExportDefaultDeclarationKind`);
  }
}

function deserializeModuleExportName(pos, ast) {
  switch (ast.buffer[pos]) {
    case 0:
      return deserializeIdentifierName(pos + 8, ast);
    case 1:
      return deserializeIdentifierReference(pos + 8, ast);
    case 2:
      return deserializeStringLiteral(pos + 8, ast);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for ModuleExportName`);
  }
}

function deserializeV8IntrinsicExpression(pos, ast) {
  return new V8IntrinsicExpression(pos, ast);
}

class V8IntrinsicExpression {
  type = 'V8IntrinsicExpression';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast, arguments: void 0 };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get name() {
    const internal = this.#internal;
    return deserializeIdentifierName(internal.$pos + 8, internal.$ast);
  }

  get arguments() {
    const internal = this.#internal,
      node = internal.arguments;
    if (node !== void 0) return node;
    return internal.arguments = deserializeVecArgument(internal.$pos + 32, internal.$ast);
  }

  toJSON() {
    return {
      type: 'V8IntrinsicExpression',
      start: this.start,
      end: this.end,
      name: this.name,
      arguments: this.arguments,
    };
  }
}

function deserializeBooleanLiteral(pos, ast) {
  return new BooleanLiteral(pos, ast);
}

class BooleanLiteral {
  type = 'BooleanLiteral';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get value() {
    const internal = this.#internal;
    return deserializeBool(internal.$pos + 8, internal.$ast);
  }

  toJSON() {
    return {
      type: 'BooleanLiteral',
      start: this.start,
      end: this.end,
      value: this.value,
    };
  }
}

function deserializeNullLiteral(pos, ast) {
  return new NullLiteral(pos, ast);
}

class NullLiteral {
  type = 'NullLiteral';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  toJSON() {
    return {
      type: 'NullLiteral',
      start: this.start,
      end: this.end,
    };
  }
}

function deserializeNumericLiteral(pos, ast) {
  return new NumericLiteral(pos, ast);
}

class NumericLiteral {
  type = 'NumericLiteral';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast, raw: void 0 };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get value() {
    const internal = this.#internal;
    return deserializeF64(internal.$pos + 8, internal.$ast);
  }

  get raw() {
    const internal = this.#internal,
      node = internal.raw;
    if (node !== void 0) return node;
    return internal.raw = deserializeOptionStr(internal.$pos + 16, internal.$ast);
  }

  toJSON() {
    return {
      type: 'NumericLiteral',
      start: this.start,
      end: this.end,
      value: this.value,
      raw: this.raw,
    };
  }
}

function deserializeStringLiteral(pos, ast) {
  return new StringLiteral(pos, ast);
}

class StringLiteral {
  type = 'StringLiteral';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast, value: void 0, raw: void 0 };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get value() {
    const internal = this.#internal,
      node = internal.value;
    if (node !== void 0) return node;
    return internal.value = deserializeStr(internal.$pos + 8, internal.$ast);
  }

  get raw() {
    const internal = this.#internal,
      node = internal.raw;
    if (node !== void 0) return node;
    return internal.raw = deserializeOptionStr(internal.$pos + 24, internal.$ast);
  }

  toJSON() {
    return {
      type: 'StringLiteral',
      start: this.start,
      end: this.end,
      value: this.value,
      raw: this.raw,
    };
  }
}

function deserializeBigIntLiteral(pos, ast) {
  return new BigIntLiteral(pos, ast);
}

class BigIntLiteral {
  type = 'BigIntLiteral';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast, value: void 0, raw: void 0 };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get value() {
    const internal = this.#internal,
      node = internal.value;
    if (node !== void 0) return node;
    return internal.value = deserializeStr(internal.$pos + 8, internal.$ast);
  }

  get raw() {
    const internal = this.#internal,
      node = internal.raw;
    if (node !== void 0) return node;
    return internal.raw = deserializeOptionStr(internal.$pos + 24, internal.$ast);
  }

  toJSON() {
    return {
      type: 'BigIntLiteral',
      start: this.start,
      end: this.end,
      value: this.value,
      raw: this.raw,
    };
  }
}

function deserializeRegExpLiteral(pos, ast) {
  return new RegExpLiteral(pos, ast);
}

class RegExpLiteral {
  type = 'RegExpLiteral';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast, raw: void 0 };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get regex() {
    const internal = this.#internal;
    return deserializeRegExp(internal.$pos + 8, internal.$ast);
  }

  get raw() {
    const internal = this.#internal,
      node = internal.raw;
    if (node !== void 0) return node;
    return internal.raw = deserializeOptionStr(internal.$pos + 40, internal.$ast);
  }

  toJSON() {
    return {
      type: 'RegExpLiteral',
      start: this.start,
      end: this.end,
      regex: this.regex,
      raw: this.raw,
    };
  }
}

function deserializeRegExp(pos, ast) {
  return new RegExp(pos, ast);
}

class RegExp {
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get pattern() {
    const internal = this.#internal;
    return deserializeRegExpPattern(internal.$pos, internal.$ast);
  }

  get flags() {
    const internal = this.#internal;
    return deserializeRegExpFlags(internal.$pos + 24, internal.$ast);
  }

  toJSON() {
    return {
      pattern: this.pattern,
      flags: this.flags,
    };
  }
}

function deserializeRegExpPattern(pos, ast) {
  return new RegExpPattern(pos, ast);
}

class RegExpPattern {
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast, pattern: void 0 };
  }

  get pattern() {
    const internal = this.#internal,
      node = internal.pattern;
    if (node !== void 0) return node;
    return internal.pattern = deserializeStr(internal.$pos, internal.$ast);
  }

  toJSON() {
    return {
      pattern: this.pattern,
    };
  }
}

function deserializeRegExpFlags(pos, ast) {
  return new RegExpFlags(pos, ast);
}

class RegExpFlags {
  type = 'RegExpFlags';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get 0() {
    const internal = this.#internal;
    return deserializeU8(internal.$pos, internal.$ast);
  }

  toJSON() {
    return {
      type: 'RegExpFlags',
    };
  }
}

function deserializeJSXElement(pos, ast) {
  return new JSXElement(pos, ast);
}

class JSXElement {
  type = 'JSXElement';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast, children: void 0 };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get openingElement() {
    const internal = this.#internal;
    return deserializeBoxJSXOpeningElement(internal.$pos + 8, internal.$ast);
  }

  get children() {
    const internal = this.#internal,
      node = internal.children;
    if (node !== void 0) return node;
    return internal.children = deserializeVecJSXChild(internal.$pos + 16, internal.$ast);
  }

  get closingElement() {
    const internal = this.#internal;
    return deserializeOptionBoxJSXClosingElement(internal.$pos + 40, internal.$ast);
  }

  toJSON() {
    return {
      type: 'JSXElement',
      start: this.start,
      end: this.end,
      openingElement: this.openingElement,
      children: this.children,
      closingElement: this.closingElement,
    };
  }
}

function deserializeJSXOpeningElement(pos, ast) {
  return new JSXOpeningElement(pos, ast);
}

class JSXOpeningElement {
  type = 'JSXOpeningElement';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast, attributes: void 0 };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get name() {
    const internal = this.#internal;
    return deserializeJSXElementName(internal.$pos + 8, internal.$ast);
  }

  get typeArguments() {
    const internal = this.#internal;
    return deserializeOptionBoxTSTypeParameterInstantiation(internal.$pos + 24, internal.$ast);
  }

  get attributes() {
    const internal = this.#internal,
      node = internal.attributes;
    if (node !== void 0) return node;
    return internal.attributes = deserializeVecJSXAttributeItem(internal.$pos + 32, internal.$ast);
  }

  toJSON() {
    return {
      type: 'JSXOpeningElement',
      start: this.start,
      end: this.end,
      name: this.name,
      typeArguments: this.typeArguments,
      attributes: this.attributes,
    };
  }
}

function deserializeJSXClosingElement(pos, ast) {
  return new JSXClosingElement(pos, ast);
}

class JSXClosingElement {
  type = 'JSXClosingElement';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get name() {
    const internal = this.#internal;
    return deserializeJSXElementName(internal.$pos + 8, internal.$ast);
  }

  toJSON() {
    return {
      type: 'JSXClosingElement',
      start: this.start,
      end: this.end,
      name: this.name,
    };
  }
}

function deserializeJSXFragment(pos, ast) {
  return new JSXFragment(pos, ast);
}

class JSXFragment {
  type = 'JSXFragment';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast, children: void 0 };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get openingFragment() {
    const internal = this.#internal;
    return deserializeJSXOpeningFragment(internal.$pos + 8, internal.$ast);
  }

  get children() {
    const internal = this.#internal,
      node = internal.children;
    if (node !== void 0) return node;
    return internal.children = deserializeVecJSXChild(internal.$pos + 16, internal.$ast);
  }

  get closingFragment() {
    const internal = this.#internal;
    return deserializeJSXClosingFragment(internal.$pos + 40, internal.$ast);
  }

  toJSON() {
    return {
      type: 'JSXFragment',
      start: this.start,
      end: this.end,
      openingFragment: this.openingFragment,
      children: this.children,
      closingFragment: this.closingFragment,
    };
  }
}

function deserializeJSXOpeningFragment(pos, ast) {
  return new JSXOpeningFragment(pos, ast);
}

class JSXOpeningFragment {
  type = 'JSXOpeningFragment';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  toJSON() {
    return {
      type: 'JSXOpeningFragment',
      start: this.start,
      end: this.end,
    };
  }
}

function deserializeJSXClosingFragment(pos, ast) {
  return new JSXClosingFragment(pos, ast);
}

class JSXClosingFragment {
  type = 'JSXClosingFragment';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  toJSON() {
    return {
      type: 'JSXClosingFragment',
      start: this.start,
      end: this.end,
    };
  }
}

function deserializeJSXElementName(pos, ast) {
  switch (ast.buffer[pos]) {
    case 0:
      return deserializeBoxJSXIdentifier(pos + 8, ast);
    case 1:
      return deserializeBoxIdentifierReference(pos + 8, ast);
    case 2:
      return deserializeBoxJSXNamespacedName(pos + 8, ast);
    case 3:
      return deserializeBoxJSXMemberExpression(pos + 8, ast);
    case 4:
      return deserializeBoxThisExpression(pos + 8, ast);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for JSXElementName`);
  }
}

function deserializeJSXNamespacedName(pos, ast) {
  return new JSXNamespacedName(pos, ast);
}

class JSXNamespacedName {
  type = 'JSXNamespacedName';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get namespace() {
    const internal = this.#internal;
    return deserializeJSXIdentifier(internal.$pos + 8, internal.$ast);
  }

  get name() {
    const internal = this.#internal;
    return deserializeJSXIdentifier(internal.$pos + 32, internal.$ast);
  }

  toJSON() {
    return {
      type: 'JSXNamespacedName',
      start: this.start,
      end: this.end,
      namespace: this.namespace,
      name: this.name,
    };
  }
}

function deserializeJSXMemberExpression(pos, ast) {
  return new JSXMemberExpression(pos, ast);
}

class JSXMemberExpression {
  type = 'JSXMemberExpression';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get object() {
    const internal = this.#internal;
    return deserializeJSXMemberExpressionObject(internal.$pos + 8, internal.$ast);
  }

  get property() {
    const internal = this.#internal;
    return deserializeJSXIdentifier(internal.$pos + 24, internal.$ast);
  }

  toJSON() {
    return {
      type: 'JSXMemberExpression',
      start: this.start,
      end: this.end,
      object: this.object,
      property: this.property,
    };
  }
}

function deserializeJSXMemberExpressionObject(pos, ast) {
  switch (ast.buffer[pos]) {
    case 0:
      return deserializeBoxIdentifierReference(pos + 8, ast);
    case 1:
      return deserializeBoxJSXMemberExpression(pos + 8, ast);
    case 2:
      return deserializeBoxThisExpression(pos + 8, ast);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for JSXMemberExpressionObject`);
  }
}

function deserializeJSXExpressionContainer(pos, ast) {
  return new JSXExpressionContainer(pos, ast);
}

class JSXExpressionContainer {
  type = 'JSXExpressionContainer';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get expression() {
    const internal = this.#internal;
    return deserializeJSXExpression(internal.$pos + 8, internal.$ast);
  }

  toJSON() {
    return {
      type: 'JSXExpressionContainer',
      start: this.start,
      end: this.end,
      expression: this.expression,
    };
  }
}

function deserializeJSXExpression(pos, ast) {
  switch (ast.buffer[pos]) {
    case 0:
      return deserializeBoxBooleanLiteral(pos + 8, ast);
    case 1:
      return deserializeBoxNullLiteral(pos + 8, ast);
    case 2:
      return deserializeBoxNumericLiteral(pos + 8, ast);
    case 3:
      return deserializeBoxBigIntLiteral(pos + 8, ast);
    case 4:
      return deserializeBoxRegExpLiteral(pos + 8, ast);
    case 5:
      return deserializeBoxStringLiteral(pos + 8, ast);
    case 6:
      return deserializeBoxTemplateLiteral(pos + 8, ast);
    case 7:
      return deserializeBoxIdentifierReference(pos + 8, ast);
    case 8:
      return deserializeBoxMetaProperty(pos + 8, ast);
    case 9:
      return deserializeBoxSuper(pos + 8, ast);
    case 10:
      return deserializeBoxArrayExpression(pos + 8, ast);
    case 11:
      return deserializeBoxArrowFunctionExpression(pos + 8, ast);
    case 12:
      return deserializeBoxAssignmentExpression(pos + 8, ast);
    case 13:
      return deserializeBoxAwaitExpression(pos + 8, ast);
    case 14:
      return deserializeBoxBinaryExpression(pos + 8, ast);
    case 15:
      return deserializeBoxCallExpression(pos + 8, ast);
    case 16:
      return deserializeBoxChainExpression(pos + 8, ast);
    case 17:
      return deserializeBoxClass(pos + 8, ast);
    case 18:
      return deserializeBoxConditionalExpression(pos + 8, ast);
    case 19:
      return deserializeBoxFunction(pos + 8, ast);
    case 20:
      return deserializeBoxImportExpression(pos + 8, ast);
    case 21:
      return deserializeBoxLogicalExpression(pos + 8, ast);
    case 22:
      return deserializeBoxNewExpression(pos + 8, ast);
    case 23:
      return deserializeBoxObjectExpression(pos + 8, ast);
    case 24:
      return deserializeBoxParenthesizedExpression(pos + 8, ast);
    case 25:
      return deserializeBoxSequenceExpression(pos + 8, ast);
    case 26:
      return deserializeBoxTaggedTemplateExpression(pos + 8, ast);
    case 27:
      return deserializeBoxThisExpression(pos + 8, ast);
    case 28:
      return deserializeBoxUnaryExpression(pos + 8, ast);
    case 29:
      return deserializeBoxUpdateExpression(pos + 8, ast);
    case 30:
      return deserializeBoxYieldExpression(pos + 8, ast);
    case 31:
      return deserializeBoxPrivateInExpression(pos + 8, ast);
    case 32:
      return deserializeBoxJSXElement(pos + 8, ast);
    case 33:
      return deserializeBoxJSXFragment(pos + 8, ast);
    case 34:
      return deserializeBoxTSAsExpression(pos + 8, ast);
    case 35:
      return deserializeBoxTSSatisfiesExpression(pos + 8, ast);
    case 36:
      return deserializeBoxTSTypeAssertion(pos + 8, ast);
    case 37:
      return deserializeBoxTSNonNullExpression(pos + 8, ast);
    case 38:
      return deserializeBoxTSInstantiationExpression(pos + 8, ast);
    case 39:
      return deserializeBoxV8IntrinsicExpression(pos + 8, ast);
    case 48:
      return deserializeBoxComputedMemberExpression(pos + 8, ast);
    case 49:
      return deserializeBoxStaticMemberExpression(pos + 8, ast);
    case 50:
      return deserializeBoxPrivateFieldExpression(pos + 8, ast);
    case 64:
      return deserializeJSXEmptyExpression(pos + 8, ast);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for JSXExpression`);
  }
}

function deserializeJSXEmptyExpression(pos, ast) {
  return new JSXEmptyExpression(pos, ast);
}

class JSXEmptyExpression {
  type = 'JSXEmptyExpression';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  toJSON() {
    return {
      type: 'JSXEmptyExpression',
      start: this.start,
      end: this.end,
    };
  }
}

function deserializeJSXAttributeItem(pos, ast) {
  switch (ast.buffer[pos]) {
    case 0:
      return deserializeBoxJSXAttribute(pos + 8, ast);
    case 1:
      return deserializeBoxJSXSpreadAttribute(pos + 8, ast);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for JSXAttributeItem`);
  }
}

function deserializeJSXAttribute(pos, ast) {
  return new JSXAttribute(pos, ast);
}

class JSXAttribute {
  type = 'JSXAttribute';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get name() {
    const internal = this.#internal;
    return deserializeJSXAttributeName(internal.$pos + 8, internal.$ast);
  }

  get value() {
    const internal = this.#internal;
    return deserializeOptionJSXAttributeValue(internal.$pos + 24, internal.$ast);
  }

  toJSON() {
    return {
      type: 'JSXAttribute',
      start: this.start,
      end: this.end,
      name: this.name,
      value: this.value,
    };
  }
}

function deserializeJSXSpreadAttribute(pos, ast) {
  return new JSXSpreadAttribute(pos, ast);
}

class JSXSpreadAttribute {
  type = 'JSXSpreadAttribute';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get argument() {
    const internal = this.#internal;
    return deserializeExpression(internal.$pos + 8, internal.$ast);
  }

  toJSON() {
    return {
      type: 'JSXSpreadAttribute',
      start: this.start,
      end: this.end,
      argument: this.argument,
    };
  }
}

function deserializeJSXAttributeName(pos, ast) {
  switch (ast.buffer[pos]) {
    case 0:
      return deserializeBoxJSXIdentifier(pos + 8, ast);
    case 1:
      return deserializeBoxJSXNamespacedName(pos + 8, ast);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for JSXAttributeName`);
  }
}

function deserializeJSXAttributeValue(pos, ast) {
  switch (ast.buffer[pos]) {
    case 0:
      return deserializeBoxStringLiteral(pos + 8, ast);
    case 1:
      return deserializeBoxJSXExpressionContainer(pos + 8, ast);
    case 2:
      return deserializeBoxJSXElement(pos + 8, ast);
    case 3:
      return deserializeBoxJSXFragment(pos + 8, ast);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for JSXAttributeValue`);
  }
}

function deserializeJSXIdentifier(pos, ast) {
  return new JSXIdentifier(pos, ast);
}

class JSXIdentifier {
  type = 'JSXIdentifier';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast, name: void 0 };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get name() {
    const internal = this.#internal,
      node = internal.name;
    if (node !== void 0) return node;
    return internal.name = deserializeStr(internal.$pos + 8, internal.$ast);
  }

  toJSON() {
    return {
      type: 'JSXIdentifier',
      start: this.start,
      end: this.end,
      name: this.name,
    };
  }
}

function deserializeJSXChild(pos, ast) {
  switch (ast.buffer[pos]) {
    case 0:
      return deserializeBoxJSXText(pos + 8, ast);
    case 1:
      return deserializeBoxJSXElement(pos + 8, ast);
    case 2:
      return deserializeBoxJSXFragment(pos + 8, ast);
    case 3:
      return deserializeBoxJSXExpressionContainer(pos + 8, ast);
    case 4:
      return deserializeBoxJSXSpreadChild(pos + 8, ast);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for JSXChild`);
  }
}

function deserializeJSXSpreadChild(pos, ast) {
  return new JSXSpreadChild(pos, ast);
}

class JSXSpreadChild {
  type = 'JSXSpreadChild';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get expression() {
    const internal = this.#internal;
    return deserializeExpression(internal.$pos + 8, internal.$ast);
  }

  toJSON() {
    return {
      type: 'JSXSpreadChild',
      start: this.start,
      end: this.end,
      expression: this.expression,
    };
  }
}

function deserializeJSXText(pos, ast) {
  return new JSXText(pos, ast);
}

class JSXText {
  type = 'JSXText';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast, value: void 0, raw: void 0 };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get value() {
    const internal = this.#internal,
      node = internal.value;
    if (node !== void 0) return node;
    return internal.value = deserializeStr(internal.$pos + 8, internal.$ast);
  }

  get raw() {
    const internal = this.#internal,
      node = internal.raw;
    if (node !== void 0) return node;
    return internal.raw = deserializeOptionStr(internal.$pos + 24, internal.$ast);
  }

  toJSON() {
    return {
      type: 'JSXText',
      start: this.start,
      end: this.end,
      value: this.value,
      raw: this.raw,
    };
  }
}

function deserializeTSThisParameter(pos, ast) {
  return new TSThisParameter(pos, ast);
}

class TSThisParameter {
  type = 'TSThisParameter';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get typeAnnotation() {
    const internal = this.#internal;
    return deserializeOptionBoxTSTypeAnnotation(internal.$pos + 16, internal.$ast);
  }

  toJSON() {
    return {
      type: 'TSThisParameter',
      start: this.start,
      end: this.end,
      typeAnnotation: this.typeAnnotation,
    };
  }
}

function deserializeTSEnumDeclaration(pos, ast) {
  return new TSEnumDeclaration(pos, ast);
}

class TSEnumDeclaration {
  type = 'TSEnumDeclaration';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get id() {
    const internal = this.#internal;
    return deserializeBindingIdentifier(internal.$pos + 8, internal.$ast);
  }

  get body() {
    const internal = this.#internal;
    return deserializeTSEnumBody(internal.$pos + 40, internal.$ast);
  }

  get const() {
    const internal = this.#internal;
    return deserializeBool(internal.$pos + 76, internal.$ast);
  }

  get declare() {
    const internal = this.#internal;
    return deserializeBool(internal.$pos + 77, internal.$ast);
  }

  toJSON() {
    return {
      type: 'TSEnumDeclaration',
      start: this.start,
      end: this.end,
      id: this.id,
      body: this.body,
      const: this.const,
      declare: this.declare,
    };
  }
}

function deserializeTSEnumBody(pos, ast) {
  return new TSEnumBody(pos, ast);
}

class TSEnumBody {
  type = 'TSEnumBody';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast, members: void 0 };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get members() {
    const internal = this.#internal,
      node = internal.members;
    if (node !== void 0) return node;
    return internal.members = deserializeVecTSEnumMember(internal.$pos + 8, internal.$ast);
  }

  toJSON() {
    return {
      type: 'TSEnumBody',
      start: this.start,
      end: this.end,
      members: this.members,
    };
  }
}

function deserializeTSEnumMember(pos, ast) {
  return new TSEnumMember(pos, ast);
}

class TSEnumMember {
  type = 'TSEnumMember';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get id() {
    const internal = this.#internal;
    return deserializeTSEnumMemberName(internal.$pos + 8, internal.$ast);
  }

  get initializer() {
    const internal = this.#internal;
    return deserializeOptionExpression(internal.$pos + 24, internal.$ast);
  }

  toJSON() {
    return {
      type: 'TSEnumMember',
      start: this.start,
      end: this.end,
      id: this.id,
      initializer: this.initializer,
    };
  }
}

function deserializeTSEnumMemberName(pos, ast) {
  switch (ast.buffer[pos]) {
    case 0:
      return deserializeBoxIdentifierName(pos + 8, ast);
    case 1:
      return deserializeBoxStringLiteral(pos + 8, ast);
    case 2:
      return deserializeBoxStringLiteral(pos + 8, ast);
    case 3:
      return deserializeBoxTemplateLiteral(pos + 8, ast);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for TSEnumMemberName`);
  }
}

function deserializeTSTypeAnnotation(pos, ast) {
  return new TSTypeAnnotation(pos, ast);
}

class TSTypeAnnotation {
  type = 'TSTypeAnnotation';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get typeAnnotation() {
    const internal = this.#internal;
    return deserializeTSType(internal.$pos + 8, internal.$ast);
  }

  toJSON() {
    return {
      type: 'TSTypeAnnotation',
      start: this.start,
      end: this.end,
      typeAnnotation: this.typeAnnotation,
    };
  }
}

function deserializeTSLiteralType(pos, ast) {
  return new TSLiteralType(pos, ast);
}

class TSLiteralType {
  type = 'TSLiteralType';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get literal() {
    const internal = this.#internal;
    return deserializeTSLiteral(internal.$pos + 8, internal.$ast);
  }

  toJSON() {
    return {
      type: 'TSLiteralType',
      start: this.start,
      end: this.end,
      literal: this.literal,
    };
  }
}

function deserializeTSLiteral(pos, ast) {
  switch (ast.buffer[pos]) {
    case 0:
      return deserializeBoxBooleanLiteral(pos + 8, ast);
    case 1:
      return deserializeBoxNumericLiteral(pos + 8, ast);
    case 2:
      return deserializeBoxBigIntLiteral(pos + 8, ast);
    case 3:
      return deserializeBoxStringLiteral(pos + 8, ast);
    case 4:
      return deserializeBoxTemplateLiteral(pos + 8, ast);
    case 5:
      return deserializeBoxUnaryExpression(pos + 8, ast);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for TSLiteral`);
  }
}

function deserializeTSType(pos, ast) {
  switch (ast.buffer[pos]) {
    case 0:
      return deserializeBoxTSAnyKeyword(pos + 8, ast);
    case 1:
      return deserializeBoxTSBigIntKeyword(pos + 8, ast);
    case 2:
      return deserializeBoxTSBooleanKeyword(pos + 8, ast);
    case 3:
      return deserializeBoxTSIntrinsicKeyword(pos + 8, ast);
    case 4:
      return deserializeBoxTSNeverKeyword(pos + 8, ast);
    case 5:
      return deserializeBoxTSNullKeyword(pos + 8, ast);
    case 6:
      return deserializeBoxTSNumberKeyword(pos + 8, ast);
    case 7:
      return deserializeBoxTSObjectKeyword(pos + 8, ast);
    case 8:
      return deserializeBoxTSStringKeyword(pos + 8, ast);
    case 9:
      return deserializeBoxTSSymbolKeyword(pos + 8, ast);
    case 10:
      return deserializeBoxTSThisType(pos + 8, ast);
    case 11:
      return deserializeBoxTSUndefinedKeyword(pos + 8, ast);
    case 12:
      return deserializeBoxTSUnknownKeyword(pos + 8, ast);
    case 13:
      return deserializeBoxTSVoidKeyword(pos + 8, ast);
    case 14:
      return deserializeBoxTSArrayType(pos + 8, ast);
    case 15:
      return deserializeBoxTSConditionalType(pos + 8, ast);
    case 16:
      return deserializeBoxTSConstructorType(pos + 8, ast);
    case 17:
      return deserializeBoxTSFunctionType(pos + 8, ast);
    case 18:
      return deserializeBoxTSImportType(pos + 8, ast);
    case 19:
      return deserializeBoxTSIndexedAccessType(pos + 8, ast);
    case 20:
      return deserializeBoxTSInferType(pos + 8, ast);
    case 21:
      return deserializeBoxTSIntersectionType(pos + 8, ast);
    case 22:
      return deserializeBoxTSLiteralType(pos + 8, ast);
    case 23:
      return deserializeBoxTSMappedType(pos + 8, ast);
    case 24:
      return deserializeBoxTSNamedTupleMember(pos + 8, ast);
    case 26:
      return deserializeBoxTSTemplateLiteralType(pos + 8, ast);
    case 27:
      return deserializeBoxTSTupleType(pos + 8, ast);
    case 28:
      return deserializeBoxTSTypeLiteral(pos + 8, ast);
    case 29:
      return deserializeBoxTSTypeOperator(pos + 8, ast);
    case 30:
      return deserializeBoxTSTypePredicate(pos + 8, ast);
    case 31:
      return deserializeBoxTSTypeQuery(pos + 8, ast);
    case 32:
      return deserializeBoxTSTypeReference(pos + 8, ast);
    case 33:
      return deserializeBoxTSUnionType(pos + 8, ast);
    case 34:
      return deserializeBoxTSParenthesizedType(pos + 8, ast);
    case 35:
      return deserializeBoxJSDocNullableType(pos + 8, ast);
    case 36:
      return deserializeBoxJSDocNonNullableType(pos + 8, ast);
    case 37:
      return deserializeBoxJSDocUnknownType(pos + 8, ast);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for TSType`);
  }
}

function deserializeTSConditionalType(pos, ast) {
  return new TSConditionalType(pos, ast);
}

class TSConditionalType {
  type = 'TSConditionalType';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get checkType() {
    const internal = this.#internal;
    return deserializeTSType(internal.$pos + 8, internal.$ast);
  }

  get extendsType() {
    const internal = this.#internal;
    return deserializeTSType(internal.$pos + 24, internal.$ast);
  }

  get trueType() {
    const internal = this.#internal;
    return deserializeTSType(internal.$pos + 40, internal.$ast);
  }

  get falseType() {
    const internal = this.#internal;
    return deserializeTSType(internal.$pos + 56, internal.$ast);
  }

  toJSON() {
    return {
      type: 'TSConditionalType',
      start: this.start,
      end: this.end,
      checkType: this.checkType,
      extendsType: this.extendsType,
      trueType: this.trueType,
      falseType: this.falseType,
    };
  }
}

function deserializeTSUnionType(pos, ast) {
  return new TSUnionType(pos, ast);
}

class TSUnionType {
  type = 'TSUnionType';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast, types: void 0 };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get types() {
    const internal = this.#internal,
      node = internal.types;
    if (node !== void 0) return node;
    return internal.types = deserializeVecTSType(internal.$pos + 8, internal.$ast);
  }

  toJSON() {
    return {
      type: 'TSUnionType',
      start: this.start,
      end: this.end,
      types: this.types,
    };
  }
}

function deserializeTSIntersectionType(pos, ast) {
  return new TSIntersectionType(pos, ast);
}

class TSIntersectionType {
  type = 'TSIntersectionType';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast, types: void 0 };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get types() {
    const internal = this.#internal,
      node = internal.types;
    if (node !== void 0) return node;
    return internal.types = deserializeVecTSType(internal.$pos + 8, internal.$ast);
  }

  toJSON() {
    return {
      type: 'TSIntersectionType',
      start: this.start,
      end: this.end,
      types: this.types,
    };
  }
}

function deserializeTSParenthesizedType(pos, ast) {
  return new TSParenthesizedType(pos, ast);
}

class TSParenthesizedType {
  type = 'TSParenthesizedType';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get typeAnnotation() {
    const internal = this.#internal;
    return deserializeTSType(internal.$pos + 8, internal.$ast);
  }

  toJSON() {
    return {
      type: 'TSParenthesizedType',
      start: this.start,
      end: this.end,
      typeAnnotation: this.typeAnnotation,
    };
  }
}

function deserializeTSTypeOperator(pos, ast) {
  return new TSTypeOperator(pos, ast);
}

class TSTypeOperator {
  type = 'TSTypeOperator';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get operator() {
    const internal = this.#internal;
    return deserializeTSTypeOperatorOperator(internal.$pos + 24, internal.$ast);
  }

  get typeAnnotation() {
    const internal = this.#internal;
    return deserializeTSType(internal.$pos + 8, internal.$ast);
  }

  toJSON() {
    return {
      type: 'TSTypeOperator',
      start: this.start,
      end: this.end,
      operator: this.operator,
      typeAnnotation: this.typeAnnotation,
    };
  }
}

function deserializeTSTypeOperatorOperator(pos, ast) {
  switch (ast.buffer[pos]) {
    case 0:
      return 'keyof';
    case 1:
      return 'unique';
    case 2:
      return 'readonly';
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for TSTypeOperatorOperator`);
  }
}

function deserializeTSArrayType(pos, ast) {
  return new TSArrayType(pos, ast);
}

class TSArrayType {
  type = 'TSArrayType';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get elementType() {
    const internal = this.#internal;
    return deserializeTSType(internal.$pos + 8, internal.$ast);
  }

  toJSON() {
    return {
      type: 'TSArrayType',
      start: this.start,
      end: this.end,
      elementType: this.elementType,
    };
  }
}

function deserializeTSIndexedAccessType(pos, ast) {
  return new TSIndexedAccessType(pos, ast);
}

class TSIndexedAccessType {
  type = 'TSIndexedAccessType';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get objectType() {
    const internal = this.#internal;
    return deserializeTSType(internal.$pos + 8, internal.$ast);
  }

  get indexType() {
    const internal = this.#internal;
    return deserializeTSType(internal.$pos + 24, internal.$ast);
  }

  toJSON() {
    return {
      type: 'TSIndexedAccessType',
      start: this.start,
      end: this.end,
      objectType: this.objectType,
      indexType: this.indexType,
    };
  }
}

function deserializeTSTupleType(pos, ast) {
  return new TSTupleType(pos, ast);
}

class TSTupleType {
  type = 'TSTupleType';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast, elementTypes: void 0 };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get elementTypes() {
    const internal = this.#internal,
      node = internal.elementTypes;
    if (node !== void 0) return node;
    return internal.elementTypes = deserializeVecTSTupleElement(internal.$pos + 8, internal.$ast);
  }

  toJSON() {
    return {
      type: 'TSTupleType',
      start: this.start,
      end: this.end,
      elementTypes: this.elementTypes,
    };
  }
}

function deserializeTSNamedTupleMember(pos, ast) {
  return new TSNamedTupleMember(pos, ast);
}

class TSNamedTupleMember {
  type = 'TSNamedTupleMember';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get label() {
    const internal = this.#internal;
    return deserializeIdentifierName(internal.$pos + 8, internal.$ast);
  }

  get elementType() {
    const internal = this.#internal;
    return deserializeTSTupleElement(internal.$pos + 32, internal.$ast);
  }

  get optional() {
    const internal = this.#internal;
    return deserializeBool(internal.$pos + 48, internal.$ast);
  }

  toJSON() {
    return {
      type: 'TSNamedTupleMember',
      start: this.start,
      end: this.end,
      label: this.label,
      elementType: this.elementType,
      optional: this.optional,
    };
  }
}

function deserializeTSOptionalType(pos, ast) {
  return new TSOptionalType(pos, ast);
}

class TSOptionalType {
  type = 'TSOptionalType';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get typeAnnotation() {
    const internal = this.#internal;
    return deserializeTSType(internal.$pos + 8, internal.$ast);
  }

  toJSON() {
    return {
      type: 'TSOptionalType',
      start: this.start,
      end: this.end,
      typeAnnotation: this.typeAnnotation,
    };
  }
}

function deserializeTSRestType(pos, ast) {
  return new TSRestType(pos, ast);
}

class TSRestType {
  type = 'TSRestType';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get typeAnnotation() {
    const internal = this.#internal;
    return deserializeTSType(internal.$pos + 8, internal.$ast);
  }

  toJSON() {
    return {
      type: 'TSRestType',
      start: this.start,
      end: this.end,
      typeAnnotation: this.typeAnnotation,
    };
  }
}

function deserializeTSTupleElement(pos, ast) {
  switch (ast.buffer[pos]) {
    case 0:
      return deserializeBoxTSAnyKeyword(pos + 8, ast);
    case 1:
      return deserializeBoxTSBigIntKeyword(pos + 8, ast);
    case 2:
      return deserializeBoxTSBooleanKeyword(pos + 8, ast);
    case 3:
      return deserializeBoxTSIntrinsicKeyword(pos + 8, ast);
    case 4:
      return deserializeBoxTSNeverKeyword(pos + 8, ast);
    case 5:
      return deserializeBoxTSNullKeyword(pos + 8, ast);
    case 6:
      return deserializeBoxTSNumberKeyword(pos + 8, ast);
    case 7:
      return deserializeBoxTSObjectKeyword(pos + 8, ast);
    case 8:
      return deserializeBoxTSStringKeyword(pos + 8, ast);
    case 9:
      return deserializeBoxTSSymbolKeyword(pos + 8, ast);
    case 10:
      return deserializeBoxTSThisType(pos + 8, ast);
    case 11:
      return deserializeBoxTSUndefinedKeyword(pos + 8, ast);
    case 12:
      return deserializeBoxTSUnknownKeyword(pos + 8, ast);
    case 13:
      return deserializeBoxTSVoidKeyword(pos + 8, ast);
    case 14:
      return deserializeBoxTSArrayType(pos + 8, ast);
    case 15:
      return deserializeBoxTSConditionalType(pos + 8, ast);
    case 16:
      return deserializeBoxTSConstructorType(pos + 8, ast);
    case 17:
      return deserializeBoxTSFunctionType(pos + 8, ast);
    case 18:
      return deserializeBoxTSImportType(pos + 8, ast);
    case 19:
      return deserializeBoxTSIndexedAccessType(pos + 8, ast);
    case 20:
      return deserializeBoxTSInferType(pos + 8, ast);
    case 21:
      return deserializeBoxTSIntersectionType(pos + 8, ast);
    case 22:
      return deserializeBoxTSLiteralType(pos + 8, ast);
    case 23:
      return deserializeBoxTSMappedType(pos + 8, ast);
    case 24:
      return deserializeBoxTSNamedTupleMember(pos + 8, ast);
    case 26:
      return deserializeBoxTSTemplateLiteralType(pos + 8, ast);
    case 27:
      return deserializeBoxTSTupleType(pos + 8, ast);
    case 28:
      return deserializeBoxTSTypeLiteral(pos + 8, ast);
    case 29:
      return deserializeBoxTSTypeOperator(pos + 8, ast);
    case 30:
      return deserializeBoxTSTypePredicate(pos + 8, ast);
    case 31:
      return deserializeBoxTSTypeQuery(pos + 8, ast);
    case 32:
      return deserializeBoxTSTypeReference(pos + 8, ast);
    case 33:
      return deserializeBoxTSUnionType(pos + 8, ast);
    case 34:
      return deserializeBoxTSParenthesizedType(pos + 8, ast);
    case 35:
      return deserializeBoxJSDocNullableType(pos + 8, ast);
    case 36:
      return deserializeBoxJSDocNonNullableType(pos + 8, ast);
    case 37:
      return deserializeBoxJSDocUnknownType(pos + 8, ast);
    case 64:
      return deserializeBoxTSOptionalType(pos + 8, ast);
    case 65:
      return deserializeBoxTSRestType(pos + 8, ast);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for TSTupleElement`);
  }
}

function deserializeTSAnyKeyword(pos, ast) {
  return new TSAnyKeyword(pos, ast);
}

class TSAnyKeyword {
  type = 'TSAnyKeyword';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  toJSON() {
    return {
      type: 'TSAnyKeyword',
      start: this.start,
      end: this.end,
    };
  }
}

function deserializeTSStringKeyword(pos, ast) {
  return new TSStringKeyword(pos, ast);
}

class TSStringKeyword {
  type = 'TSStringKeyword';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  toJSON() {
    return {
      type: 'TSStringKeyword',
      start: this.start,
      end: this.end,
    };
  }
}

function deserializeTSBooleanKeyword(pos, ast) {
  return new TSBooleanKeyword(pos, ast);
}

class TSBooleanKeyword {
  type = 'TSBooleanKeyword';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  toJSON() {
    return {
      type: 'TSBooleanKeyword',
      start: this.start,
      end: this.end,
    };
  }
}

function deserializeTSNumberKeyword(pos, ast) {
  return new TSNumberKeyword(pos, ast);
}

class TSNumberKeyword {
  type = 'TSNumberKeyword';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  toJSON() {
    return {
      type: 'TSNumberKeyword',
      start: this.start,
      end: this.end,
    };
  }
}

function deserializeTSNeverKeyword(pos, ast) {
  return new TSNeverKeyword(pos, ast);
}

class TSNeverKeyword {
  type = 'TSNeverKeyword';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  toJSON() {
    return {
      type: 'TSNeverKeyword',
      start: this.start,
      end: this.end,
    };
  }
}

function deserializeTSIntrinsicKeyword(pos, ast) {
  return new TSIntrinsicKeyword(pos, ast);
}

class TSIntrinsicKeyword {
  type = 'TSIntrinsicKeyword';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  toJSON() {
    return {
      type: 'TSIntrinsicKeyword',
      start: this.start,
      end: this.end,
    };
  }
}

function deserializeTSUnknownKeyword(pos, ast) {
  return new TSUnknownKeyword(pos, ast);
}

class TSUnknownKeyword {
  type = 'TSUnknownKeyword';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  toJSON() {
    return {
      type: 'TSUnknownKeyword',
      start: this.start,
      end: this.end,
    };
  }
}

function deserializeTSNullKeyword(pos, ast) {
  return new TSNullKeyword(pos, ast);
}

class TSNullKeyword {
  type = 'TSNullKeyword';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  toJSON() {
    return {
      type: 'TSNullKeyword',
      start: this.start,
      end: this.end,
    };
  }
}

function deserializeTSUndefinedKeyword(pos, ast) {
  return new TSUndefinedKeyword(pos, ast);
}

class TSUndefinedKeyword {
  type = 'TSUndefinedKeyword';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  toJSON() {
    return {
      type: 'TSUndefinedKeyword',
      start: this.start,
      end: this.end,
    };
  }
}

function deserializeTSVoidKeyword(pos, ast) {
  return new TSVoidKeyword(pos, ast);
}

class TSVoidKeyword {
  type = 'TSVoidKeyword';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  toJSON() {
    return {
      type: 'TSVoidKeyword',
      start: this.start,
      end: this.end,
    };
  }
}

function deserializeTSSymbolKeyword(pos, ast) {
  return new TSSymbolKeyword(pos, ast);
}

class TSSymbolKeyword {
  type = 'TSSymbolKeyword';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  toJSON() {
    return {
      type: 'TSSymbolKeyword',
      start: this.start,
      end: this.end,
    };
  }
}

function deserializeTSThisType(pos, ast) {
  return new TSThisType(pos, ast);
}

class TSThisType {
  type = 'TSThisType';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  toJSON() {
    return {
      type: 'TSThisType',
      start: this.start,
      end: this.end,
    };
  }
}

function deserializeTSObjectKeyword(pos, ast) {
  return new TSObjectKeyword(pos, ast);
}

class TSObjectKeyword {
  type = 'TSObjectKeyword';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  toJSON() {
    return {
      type: 'TSObjectKeyword',
      start: this.start,
      end: this.end,
    };
  }
}

function deserializeTSBigIntKeyword(pos, ast) {
  return new TSBigIntKeyword(pos, ast);
}

class TSBigIntKeyword {
  type = 'TSBigIntKeyword';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  toJSON() {
    return {
      type: 'TSBigIntKeyword',
      start: this.start,
      end: this.end,
    };
  }
}

function deserializeTSTypeReference(pos, ast) {
  return new TSTypeReference(pos, ast);
}

class TSTypeReference {
  type = 'TSTypeReference';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get typeName() {
    const internal = this.#internal;
    return deserializeTSTypeName(internal.$pos + 8, internal.$ast);
  }

  get typeArguments() {
    const internal = this.#internal;
    return deserializeOptionBoxTSTypeParameterInstantiation(internal.$pos + 24, internal.$ast);
  }

  toJSON() {
    return {
      type: 'TSTypeReference',
      start: this.start,
      end: this.end,
      typeName: this.typeName,
      typeArguments: this.typeArguments,
    };
  }
}

function deserializeTSTypeName(pos, ast) {
  switch (ast.buffer[pos]) {
    case 0:
      return deserializeBoxIdentifierReference(pos + 8, ast);
    case 1:
      return deserializeBoxTSQualifiedName(pos + 8, ast);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for TSTypeName`);
  }
}

function deserializeTSQualifiedName(pos, ast) {
  return new TSQualifiedName(pos, ast);
}

class TSQualifiedName {
  type = 'TSQualifiedName';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get left() {
    const internal = this.#internal;
    return deserializeTSTypeName(internal.$pos + 8, internal.$ast);
  }

  get right() {
    const internal = this.#internal;
    return deserializeIdentifierName(internal.$pos + 24, internal.$ast);
  }

  toJSON() {
    return {
      type: 'TSQualifiedName',
      start: this.start,
      end: this.end,
      left: this.left,
      right: this.right,
    };
  }
}

function deserializeTSTypeParameterInstantiation(pos, ast) {
  return new TSTypeParameterInstantiation(pos, ast);
}

class TSTypeParameterInstantiation {
  type = 'TSTypeParameterInstantiation';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast, params: void 0 };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get params() {
    const internal = this.#internal,
      node = internal.params;
    if (node !== void 0) return node;
    return internal.params = deserializeVecTSType(internal.$pos + 8, internal.$ast);
  }

  toJSON() {
    return {
      type: 'TSTypeParameterInstantiation',
      start: this.start,
      end: this.end,
      params: this.params,
    };
  }
}

function deserializeTSTypeParameter(pos, ast) {
  return new TSTypeParameter(pos, ast);
}

class TSTypeParameter {
  type = 'TSTypeParameter';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get name() {
    const internal = this.#internal;
    return deserializeBindingIdentifier(internal.$pos + 8, internal.$ast);
  }

  get constraint() {
    const internal = this.#internal;
    return deserializeOptionTSType(internal.$pos + 40, internal.$ast);
  }

  get default() {
    const internal = this.#internal;
    return deserializeOptionTSType(internal.$pos + 56, internal.$ast);
  }

  get in() {
    const internal = this.#internal;
    return deserializeBool(internal.$pos + 72, internal.$ast);
  }

  get out() {
    const internal = this.#internal;
    return deserializeBool(internal.$pos + 73, internal.$ast);
  }

  get const() {
    const internal = this.#internal;
    return deserializeBool(internal.$pos + 74, internal.$ast);
  }

  toJSON() {
    return {
      type: 'TSTypeParameter',
      start: this.start,
      end: this.end,
      name: this.name,
      constraint: this.constraint,
      default: this.default,
      in: this.in,
      out: this.out,
      const: this.const,
    };
  }
}

function deserializeTSTypeParameterDeclaration(pos, ast) {
  return new TSTypeParameterDeclaration(pos, ast);
}

class TSTypeParameterDeclaration {
  type = 'TSTypeParameterDeclaration';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast, params: void 0 };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get params() {
    const internal = this.#internal,
      node = internal.params;
    if (node !== void 0) return node;
    return internal.params = deserializeVecTSTypeParameter(internal.$pos + 8, internal.$ast);
  }

  toJSON() {
    return {
      type: 'TSTypeParameterDeclaration',
      start: this.start,
      end: this.end,
      params: this.params,
    };
  }
}

function deserializeTSTypeAliasDeclaration(pos, ast) {
  return new TSTypeAliasDeclaration(pos, ast);
}

class TSTypeAliasDeclaration {
  type = 'TSTypeAliasDeclaration';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get id() {
    const internal = this.#internal;
    return deserializeBindingIdentifier(internal.$pos + 8, internal.$ast);
  }

  get typeParameters() {
    const internal = this.#internal;
    return deserializeOptionBoxTSTypeParameterDeclaration(internal.$pos + 40, internal.$ast);
  }

  get typeAnnotation() {
    const internal = this.#internal;
    return deserializeTSType(internal.$pos + 48, internal.$ast);
  }

  get declare() {
    const internal = this.#internal;
    return deserializeBool(internal.$pos + 68, internal.$ast);
  }

  toJSON() {
    return {
      type: 'TSTypeAliasDeclaration',
      start: this.start,
      end: this.end,
      id: this.id,
      typeParameters: this.typeParameters,
      typeAnnotation: this.typeAnnotation,
      declare: this.declare,
    };
  }
}

function deserializeTSAccessibility(pos, ast) {
  switch (ast.buffer[pos]) {
    case 0:
      return 'private';
    case 1:
      return 'protected';
    case 2:
      return 'public';
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for TSAccessibility`);
  }
}

function deserializeTSClassImplements(pos, ast) {
  return new TSClassImplements(pos, ast);
}

class TSClassImplements {
  type = 'TSClassImplements';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get expression() {
    const internal = this.#internal;
    return deserializeTSTypeName(internal.$pos + 8, internal.$ast);
  }

  get typeArguments() {
    const internal = this.#internal;
    return deserializeOptionBoxTSTypeParameterInstantiation(internal.$pos + 24, internal.$ast);
  }

  toJSON() {
    return {
      type: 'TSClassImplements',
      start: this.start,
      end: this.end,
      expression: this.expression,
      typeArguments: this.typeArguments,
    };
  }
}

function deserializeTSInterfaceDeclaration(pos, ast) {
  return new TSInterfaceDeclaration(pos, ast);
}

class TSInterfaceDeclaration {
  type = 'TSInterfaceDeclaration';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast, extends: void 0 };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get id() {
    const internal = this.#internal;
    return deserializeBindingIdentifier(internal.$pos + 8, internal.$ast);
  }

  get typeParameters() {
    const internal = this.#internal;
    return deserializeOptionBoxTSTypeParameterDeclaration(internal.$pos + 40, internal.$ast);
  }

  get extends() {
    const internal = this.#internal,
      node = internal.extends;
    if (node !== void 0) return node;
    return internal.extends = deserializeVecTSInterfaceHeritage(internal.$pos + 48, internal.$ast);
  }

  get body() {
    const internal = this.#internal;
    return deserializeBoxTSInterfaceBody(internal.$pos + 72, internal.$ast);
  }

  get declare() {
    const internal = this.#internal;
    return deserializeBool(internal.$pos + 84, internal.$ast);
  }

  toJSON() {
    return {
      type: 'TSInterfaceDeclaration',
      start: this.start,
      end: this.end,
      id: this.id,
      typeParameters: this.typeParameters,
      extends: this.extends,
      body: this.body,
      declare: this.declare,
    };
  }
}

function deserializeTSInterfaceBody(pos, ast) {
  return new TSInterfaceBody(pos, ast);
}

class TSInterfaceBody {
  type = 'TSInterfaceBody';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast, body: void 0 };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get body() {
    const internal = this.#internal,
      node = internal.body;
    if (node !== void 0) return node;
    return internal.body = deserializeVecTSSignature(internal.$pos + 8, internal.$ast);
  }

  toJSON() {
    return {
      type: 'TSInterfaceBody',
      start: this.start,
      end: this.end,
      body: this.body,
    };
  }
}

function deserializeTSPropertySignature(pos, ast) {
  return new TSPropertySignature(pos, ast);
}

class TSPropertySignature {
  type = 'TSPropertySignature';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get computed() {
    const internal = this.#internal;
    return deserializeBool(internal.$pos + 32, internal.$ast);
  }

  get optional() {
    const internal = this.#internal;
    return deserializeBool(internal.$pos + 33, internal.$ast);
  }

  get readonly() {
    const internal = this.#internal;
    return deserializeBool(internal.$pos + 34, internal.$ast);
  }

  get key() {
    const internal = this.#internal;
    return deserializePropertyKey(internal.$pos + 8, internal.$ast);
  }

  get typeAnnotation() {
    const internal = this.#internal;
    return deserializeOptionBoxTSTypeAnnotation(internal.$pos + 24, internal.$ast);
  }

  toJSON() {
    return {
      type: 'TSPropertySignature',
      start: this.start,
      end: this.end,
      computed: this.computed,
      optional: this.optional,
      readonly: this.readonly,
      key: this.key,
      typeAnnotation: this.typeAnnotation,
    };
  }
}

function deserializeTSSignature(pos, ast) {
  switch (ast.buffer[pos]) {
    case 0:
      return deserializeBoxTSIndexSignature(pos + 8, ast);
    case 1:
      return deserializeBoxTSPropertySignature(pos + 8, ast);
    case 2:
      return deserializeBoxTSCallSignatureDeclaration(pos + 8, ast);
    case 3:
      return deserializeBoxTSConstructSignatureDeclaration(pos + 8, ast);
    case 4:
      return deserializeBoxTSMethodSignature(pos + 8, ast);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for TSSignature`);
  }
}

function deserializeTSIndexSignature(pos, ast) {
  return new TSIndexSignature(pos, ast);
}

class TSIndexSignature {
  type = 'TSIndexSignature';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast, parameters: void 0 };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get parameters() {
    const internal = this.#internal,
      node = internal.parameters;
    if (node !== void 0) return node;
    return internal.parameters = deserializeVecTSIndexSignatureName(internal.$pos + 8, internal.$ast);
  }

  get typeAnnotation() {
    const internal = this.#internal;
    return deserializeBoxTSTypeAnnotation(internal.$pos + 32, internal.$ast);
  }

  get readonly() {
    const internal = this.#internal;
    return deserializeBool(internal.$pos + 40, internal.$ast);
  }

  get static() {
    const internal = this.#internal;
    return deserializeBool(internal.$pos + 41, internal.$ast);
  }

  toJSON() {
    return {
      type: 'TSIndexSignature',
      start: this.start,
      end: this.end,
      parameters: this.parameters,
      typeAnnotation: this.typeAnnotation,
      readonly: this.readonly,
      static: this.static,
    };
  }
}

function deserializeTSCallSignatureDeclaration(pos, ast) {
  return new TSCallSignatureDeclaration(pos, ast);
}

class TSCallSignatureDeclaration {
  type = 'TSCallSignatureDeclaration';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get typeParameters() {
    const internal = this.#internal;
    return deserializeOptionBoxTSTypeParameterDeclaration(internal.$pos + 8, internal.$ast);
  }

  get params() {
    const internal = this.#internal;
    return deserializeBoxFormalParameters(internal.$pos + 24, internal.$ast);
  }

  get returnType() {
    const internal = this.#internal;
    return deserializeOptionBoxTSTypeAnnotation(internal.$pos + 32, internal.$ast);
  }

  toJSON() {
    return {
      type: 'TSCallSignatureDeclaration',
      start: this.start,
      end: this.end,
      typeParameters: this.typeParameters,
      params: this.params,
      returnType: this.returnType,
    };
  }
}

function deserializeTSMethodSignatureKind(pos, ast) {
  switch (ast.buffer[pos]) {
    case 0:
      return 'method';
    case 1:
      return 'get';
    case 2:
      return 'set';
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for TSMethodSignatureKind`);
  }
}

function deserializeTSMethodSignature(pos, ast) {
  return new TSMethodSignature(pos, ast);
}

class TSMethodSignature {
  type = 'TSMethodSignature';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get key() {
    const internal = this.#internal;
    return deserializePropertyKey(internal.$pos + 8, internal.$ast);
  }

  get computed() {
    const internal = this.#internal;
    return deserializeBool(internal.$pos + 60, internal.$ast);
  }

  get optional() {
    const internal = this.#internal;
    return deserializeBool(internal.$pos + 61, internal.$ast);
  }

  get kind() {
    const internal = this.#internal;
    return deserializeTSMethodSignatureKind(internal.$pos + 62, internal.$ast);
  }

  get typeParameters() {
    const internal = this.#internal;
    return deserializeOptionBoxTSTypeParameterDeclaration(internal.$pos + 24, internal.$ast);
  }

  get params() {
    const internal = this.#internal;
    return deserializeBoxFormalParameters(internal.$pos + 40, internal.$ast);
  }

  get returnType() {
    const internal = this.#internal;
    return deserializeOptionBoxTSTypeAnnotation(internal.$pos + 48, internal.$ast);
  }

  toJSON() {
    return {
      type: 'TSMethodSignature',
      start: this.start,
      end: this.end,
      key: this.key,
      computed: this.computed,
      optional: this.optional,
      kind: this.kind,
      typeParameters: this.typeParameters,
      params: this.params,
      returnType: this.returnType,
    };
  }
}

function deserializeTSConstructSignatureDeclaration(pos, ast) {
  return new TSConstructSignatureDeclaration(pos, ast);
}

class TSConstructSignatureDeclaration {
  type = 'TSConstructSignatureDeclaration';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get typeParameters() {
    const internal = this.#internal;
    return deserializeOptionBoxTSTypeParameterDeclaration(internal.$pos + 8, internal.$ast);
  }

  get params() {
    const internal = this.#internal;
    return deserializeBoxFormalParameters(internal.$pos + 16, internal.$ast);
  }

  get returnType() {
    const internal = this.#internal;
    return deserializeOptionBoxTSTypeAnnotation(internal.$pos + 24, internal.$ast);
  }

  toJSON() {
    return {
      type: 'TSConstructSignatureDeclaration',
      start: this.start,
      end: this.end,
      typeParameters: this.typeParameters,
      params: this.params,
      returnType: this.returnType,
    };
  }
}

function deserializeTSIndexSignatureName(pos, ast) {
  return new TSIndexSignatureName(pos, ast);
}

class TSIndexSignatureName {
  type = 'TSIndexSignatureName';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast, name: void 0 };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get name() {
    const internal = this.#internal,
      node = internal.name;
    if (node !== void 0) return node;
    return internal.name = deserializeStr(internal.$pos + 8, internal.$ast);
  }

  get typeAnnotation() {
    const internal = this.#internal;
    return deserializeBoxTSTypeAnnotation(internal.$pos + 24, internal.$ast);
  }

  toJSON() {
    return {
      type: 'TSIndexSignatureName',
      start: this.start,
      end: this.end,
      name: this.name,
      typeAnnotation: this.typeAnnotation,
    };
  }
}

function deserializeTSInterfaceHeritage(pos, ast) {
  return new TSInterfaceHeritage(pos, ast);
}

class TSInterfaceHeritage {
  type = 'TSInterfaceHeritage';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get expression() {
    const internal = this.#internal;
    return deserializeExpression(internal.$pos + 8, internal.$ast);
  }

  get typeArguments() {
    const internal = this.#internal;
    return deserializeOptionBoxTSTypeParameterInstantiation(internal.$pos + 24, internal.$ast);
  }

  toJSON() {
    return {
      type: 'TSInterfaceHeritage',
      start: this.start,
      end: this.end,
      expression: this.expression,
      typeArguments: this.typeArguments,
    };
  }
}

function deserializeTSTypePredicate(pos, ast) {
  return new TSTypePredicate(pos, ast);
}

class TSTypePredicate {
  type = 'TSTypePredicate';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get parameterName() {
    const internal = this.#internal;
    return deserializeTSTypePredicateName(internal.$pos + 8, internal.$ast);
  }

  get asserts() {
    const internal = this.#internal;
    return deserializeBool(internal.$pos + 32, internal.$ast);
  }

  get typeAnnotation() {
    const internal = this.#internal;
    return deserializeOptionBoxTSTypeAnnotation(internal.$pos + 24, internal.$ast);
  }

  toJSON() {
    return {
      type: 'TSTypePredicate',
      start: this.start,
      end: this.end,
      parameterName: this.parameterName,
      asserts: this.asserts,
      typeAnnotation: this.typeAnnotation,
    };
  }
}

function deserializeTSTypePredicateName(pos, ast) {
  switch (ast.buffer[pos]) {
    case 0:
      return deserializeBoxIdentifierName(pos + 8, ast);
    case 1:
      return deserializeTSThisType(pos + 8, ast);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for TSTypePredicateName`);
  }
}

function deserializeTSModuleDeclaration(pos, ast) {
  return new TSModuleDeclaration(pos, ast);
}

class TSModuleDeclaration {
  type = 'TSModuleDeclaration';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get id() {
    const internal = this.#internal;
    return deserializeTSModuleDeclarationName(internal.$pos + 8, internal.$ast);
  }

  get body() {
    const internal = this.#internal;
    return deserializeOptionTSModuleDeclarationBody(internal.$pos + 64, internal.$ast);
  }

  get kind() {
    const internal = this.#internal;
    return deserializeTSModuleDeclarationKind(internal.$pos + 84, internal.$ast);
  }

  get declare() {
    const internal = this.#internal;
    return deserializeBool(internal.$pos + 85, internal.$ast);
  }

  toJSON() {
    return {
      type: 'TSModuleDeclaration',
      start: this.start,
      end: this.end,
      id: this.id,
      body: this.body,
      kind: this.kind,
      declare: this.declare,
    };
  }
}

function deserializeTSModuleDeclarationKind(pos, ast) {
  switch (ast.buffer[pos]) {
    case 0:
      return 'global';
    case 1:
      return 'module';
    case 2:
      return 'namespace';
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for TSModuleDeclarationKind`);
  }
}

function deserializeTSModuleDeclarationName(pos, ast) {
  switch (ast.buffer[pos]) {
    case 0:
      return deserializeBindingIdentifier(pos + 8, ast);
    case 1:
      return deserializeStringLiteral(pos + 8, ast);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for TSModuleDeclarationName`);
  }
}

function deserializeTSModuleDeclarationBody(pos, ast) {
  switch (ast.buffer[pos]) {
    case 0:
      return deserializeBoxTSModuleDeclaration(pos + 8, ast);
    case 1:
      return deserializeBoxTSModuleBlock(pos + 8, ast);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for TSModuleDeclarationBody`);
  }
}

function deserializeTSModuleBlock(pos, ast) {
  return new TSModuleBlock(pos, ast);
}

class TSModuleBlock {
  type = 'TSModuleBlock';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast, body: void 0 };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get body() {
    const internal = this.#internal,
      node = internal.body;
    if (node !== void 0) return node;
    return internal.body = deserializeVecStatement(internal.$pos + 32, internal.$ast);
  }

  toJSON() {
    return {
      type: 'TSModuleBlock',
      start: this.start,
      end: this.end,
      body: this.body,
    };
  }
}

function deserializeTSTypeLiteral(pos, ast) {
  return new TSTypeLiteral(pos, ast);
}

class TSTypeLiteral {
  type = 'TSTypeLiteral';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast, members: void 0 };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get members() {
    const internal = this.#internal,
      node = internal.members;
    if (node !== void 0) return node;
    return internal.members = deserializeVecTSSignature(internal.$pos + 8, internal.$ast);
  }

  toJSON() {
    return {
      type: 'TSTypeLiteral',
      start: this.start,
      end: this.end,
      members: this.members,
    };
  }
}

function deserializeTSInferType(pos, ast) {
  return new TSInferType(pos, ast);
}

class TSInferType {
  type = 'TSInferType';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get typeParameter() {
    const internal = this.#internal;
    return deserializeBoxTSTypeParameter(internal.$pos + 8, internal.$ast);
  }

  toJSON() {
    return {
      type: 'TSInferType',
      start: this.start,
      end: this.end,
      typeParameter: this.typeParameter,
    };
  }
}

function deserializeTSTypeQuery(pos, ast) {
  return new TSTypeQuery(pos, ast);
}

class TSTypeQuery {
  type = 'TSTypeQuery';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get exprName() {
    const internal = this.#internal;
    return deserializeTSTypeQueryExprName(internal.$pos + 8, internal.$ast);
  }

  get typeArguments() {
    const internal = this.#internal;
    return deserializeOptionBoxTSTypeParameterInstantiation(internal.$pos + 24, internal.$ast);
  }

  toJSON() {
    return {
      type: 'TSTypeQuery',
      start: this.start,
      end: this.end,
      exprName: this.exprName,
      typeArguments: this.typeArguments,
    };
  }
}

function deserializeTSTypeQueryExprName(pos, ast) {
  switch (ast.buffer[pos]) {
    case 0:
      return deserializeBoxIdentifierReference(pos + 8, ast);
    case 1:
      return deserializeBoxTSQualifiedName(pos + 8, ast);
    case 2:
      return deserializeBoxTSImportType(pos + 8, ast);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for TSTypeQueryExprName`);
  }
}

function deserializeTSImportType(pos, ast) {
  return new TSImportType(pos, ast);
}

class TSImportType {
  type = 'TSImportType';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get argument() {
    const internal = this.#internal;
    return deserializeTSType(internal.$pos + 8, internal.$ast);
  }

  get options() {
    const internal = this.#internal;
    return deserializeOptionBoxObjectExpression(internal.$pos + 24, internal.$ast);
  }

  get qualifier() {
    const internal = this.#internal;
    return deserializeOptionTSTypeName(internal.$pos + 32, internal.$ast);
  }

  get typeArguments() {
    const internal = this.#internal;
    return deserializeOptionBoxTSTypeParameterInstantiation(internal.$pos + 48, internal.$ast);
  }

  toJSON() {
    return {
      type: 'TSImportType',
      start: this.start,
      end: this.end,
      argument: this.argument,
      options: this.options,
      qualifier: this.qualifier,
      typeArguments: this.typeArguments,
    };
  }
}

function deserializeTSFunctionType(pos, ast) {
  return new TSFunctionType(pos, ast);
}

class TSFunctionType {
  type = 'TSFunctionType';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get typeParameters() {
    const internal = this.#internal;
    return deserializeOptionBoxTSTypeParameterDeclaration(internal.$pos + 8, internal.$ast);
  }

  get params() {
    const internal = this.#internal;
    return deserializeBoxFormalParameters(internal.$pos + 24, internal.$ast);
  }

  get returnType() {
    const internal = this.#internal;
    return deserializeBoxTSTypeAnnotation(internal.$pos + 32, internal.$ast);
  }

  toJSON() {
    return {
      type: 'TSFunctionType',
      start: this.start,
      end: this.end,
      typeParameters: this.typeParameters,
      params: this.params,
      returnType: this.returnType,
    };
  }
}

function deserializeTSConstructorType(pos, ast) {
  return new TSConstructorType(pos, ast);
}

class TSConstructorType {
  type = 'TSConstructorType';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get abstract() {
    const internal = this.#internal;
    return deserializeBool(internal.$pos + 32, internal.$ast);
  }

  get typeParameters() {
    const internal = this.#internal;
    return deserializeOptionBoxTSTypeParameterDeclaration(internal.$pos + 8, internal.$ast);
  }

  get params() {
    const internal = this.#internal;
    return deserializeBoxFormalParameters(internal.$pos + 16, internal.$ast);
  }

  get returnType() {
    const internal = this.#internal;
    return deserializeBoxTSTypeAnnotation(internal.$pos + 24, internal.$ast);
  }

  toJSON() {
    return {
      type: 'TSConstructorType',
      start: this.start,
      end: this.end,
      abstract: this.abstract,
      typeParameters: this.typeParameters,
      params: this.params,
      returnType: this.returnType,
    };
  }
}

function deserializeTSMappedType(pos, ast) {
  return new TSMappedType(pos, ast);
}

class TSMappedType {
  type = 'TSMappedType';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get nameType() {
    const internal = this.#internal;
    return deserializeOptionTSType(internal.$pos + 16, internal.$ast);
  }

  get typeAnnotation() {
    const internal = this.#internal;
    return deserializeOptionTSType(internal.$pos + 32, internal.$ast);
  }

  get optional() {
    const internal = this.#internal;
    return deserializeOptionTSMappedTypeModifierOperator(internal.$pos + 52, internal.$ast);
  }

  get readonly() {
    const internal = this.#internal;
    return deserializeOptionTSMappedTypeModifierOperator(internal.$pos + 53, internal.$ast);
  }

  toJSON() {
    return {
      type: 'TSMappedType',
      start: this.start,
      end: this.end,
      nameType: this.nameType,
      typeAnnotation: this.typeAnnotation,
      optional: this.optional,
      readonly: this.readonly,
    };
  }
}

function deserializeTSMappedTypeModifierOperator(pos, ast) {
  switch (ast.buffer[pos]) {
    case 0:
      return 'true';
    case 1:
      return '+';
    case 2:
      return '-';
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for TSMappedTypeModifierOperator`);
  }
}

function deserializeTSTemplateLiteralType(pos, ast) {
  return new TSTemplateLiteralType(pos, ast);
}

class TSTemplateLiteralType {
  type = 'TSTemplateLiteralType';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast, quasis: void 0, types: void 0 };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get quasis() {
    const internal = this.#internal,
      node = internal.quasis;
    if (node !== void 0) return node;
    return internal.quasis = deserializeVecTemplateElement(internal.$pos + 8, internal.$ast);
  }

  get types() {
    const internal = this.#internal,
      node = internal.types;
    if (node !== void 0) return node;
    return internal.types = deserializeVecTSType(internal.$pos + 32, internal.$ast);
  }

  toJSON() {
    return {
      type: 'TSTemplateLiteralType',
      start: this.start,
      end: this.end,
      quasis: this.quasis,
      types: this.types,
    };
  }
}

function deserializeTSAsExpression(pos, ast) {
  return new TSAsExpression(pos, ast);
}

class TSAsExpression {
  type = 'TSAsExpression';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get expression() {
    const internal = this.#internal;
    return deserializeExpression(internal.$pos + 8, internal.$ast);
  }

  get typeAnnotation() {
    const internal = this.#internal;
    return deserializeTSType(internal.$pos + 24, internal.$ast);
  }

  toJSON() {
    return {
      type: 'TSAsExpression',
      start: this.start,
      end: this.end,
      expression: this.expression,
      typeAnnotation: this.typeAnnotation,
    };
  }
}

function deserializeTSSatisfiesExpression(pos, ast) {
  return new TSSatisfiesExpression(pos, ast);
}

class TSSatisfiesExpression {
  type = 'TSSatisfiesExpression';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get expression() {
    const internal = this.#internal;
    return deserializeExpression(internal.$pos + 8, internal.$ast);
  }

  get typeAnnotation() {
    const internal = this.#internal;
    return deserializeTSType(internal.$pos + 24, internal.$ast);
  }

  toJSON() {
    return {
      type: 'TSSatisfiesExpression',
      start: this.start,
      end: this.end,
      expression: this.expression,
      typeAnnotation: this.typeAnnotation,
    };
  }
}

function deserializeTSTypeAssertion(pos, ast) {
  return new TSTypeAssertion(pos, ast);
}

class TSTypeAssertion {
  type = 'TSTypeAssertion';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get typeAnnotation() {
    const internal = this.#internal;
    return deserializeTSType(internal.$pos + 8, internal.$ast);
  }

  get expression() {
    const internal = this.#internal;
    return deserializeExpression(internal.$pos + 24, internal.$ast);
  }

  toJSON() {
    return {
      type: 'TSTypeAssertion',
      start: this.start,
      end: this.end,
      typeAnnotation: this.typeAnnotation,
      expression: this.expression,
    };
  }
}

function deserializeTSImportEqualsDeclaration(pos, ast) {
  return new TSImportEqualsDeclaration(pos, ast);
}

class TSImportEqualsDeclaration {
  type = 'TSImportEqualsDeclaration';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get id() {
    const internal = this.#internal;
    return deserializeBindingIdentifier(internal.$pos + 8, internal.$ast);
  }

  get moduleReference() {
    const internal = this.#internal;
    return deserializeTSModuleReference(internal.$pos + 40, internal.$ast);
  }

  get importKind() {
    const internal = this.#internal;
    return deserializeImportOrExportKind(internal.$pos + 56, internal.$ast);
  }

  toJSON() {
    return {
      type: 'TSImportEqualsDeclaration',
      start: this.start,
      end: this.end,
      id: this.id,
      moduleReference: this.moduleReference,
      importKind: this.importKind,
    };
  }
}

function deserializeTSModuleReference(pos, ast) {
  switch (ast.buffer[pos]) {
    case 0:
      return deserializeBoxIdentifierReference(pos + 8, ast);
    case 1:
      return deserializeBoxTSQualifiedName(pos + 8, ast);
    case 2:
      return deserializeBoxTSExternalModuleReference(pos + 8, ast);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for TSModuleReference`);
  }
}

function deserializeTSExternalModuleReference(pos, ast) {
  return new TSExternalModuleReference(pos, ast);
}

class TSExternalModuleReference {
  type = 'TSExternalModuleReference';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get expression() {
    const internal = this.#internal;
    return deserializeStringLiteral(internal.$pos + 8, internal.$ast);
  }

  toJSON() {
    return {
      type: 'TSExternalModuleReference',
      start: this.start,
      end: this.end,
      expression: this.expression,
    };
  }
}

function deserializeTSNonNullExpression(pos, ast) {
  return new TSNonNullExpression(pos, ast);
}

class TSNonNullExpression {
  type = 'TSNonNullExpression';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get expression() {
    const internal = this.#internal;
    return deserializeExpression(internal.$pos + 8, internal.$ast);
  }

  toJSON() {
    return {
      type: 'TSNonNullExpression',
      start: this.start,
      end: this.end,
      expression: this.expression,
    };
  }
}

function deserializeDecorator(pos, ast) {
  return new Decorator(pos, ast);
}

class Decorator {
  type = 'Decorator';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get expression() {
    const internal = this.#internal;
    return deserializeExpression(internal.$pos + 8, internal.$ast);
  }

  toJSON() {
    return {
      type: 'Decorator',
      start: this.start,
      end: this.end,
      expression: this.expression,
    };
  }
}

function deserializeTSExportAssignment(pos, ast) {
  return new TSExportAssignment(pos, ast);
}

class TSExportAssignment {
  type = 'TSExportAssignment';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get expression() {
    const internal = this.#internal;
    return deserializeExpression(internal.$pos + 8, internal.$ast);
  }

  toJSON() {
    return {
      type: 'TSExportAssignment',
      start: this.start,
      end: this.end,
      expression: this.expression,
    };
  }
}

function deserializeTSNamespaceExportDeclaration(pos, ast) {
  return new TSNamespaceExportDeclaration(pos, ast);
}

class TSNamespaceExportDeclaration {
  type = 'TSNamespaceExportDeclaration';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get id() {
    const internal = this.#internal;
    return deserializeIdentifierName(internal.$pos + 8, internal.$ast);
  }

  toJSON() {
    return {
      type: 'TSNamespaceExportDeclaration',
      start: this.start,
      end: this.end,
      id: this.id,
    };
  }
}

function deserializeTSInstantiationExpression(pos, ast) {
  return new TSInstantiationExpression(pos, ast);
}

class TSInstantiationExpression {
  type = 'TSInstantiationExpression';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get expression() {
    const internal = this.#internal;
    return deserializeExpression(internal.$pos + 8, internal.$ast);
  }

  get typeArguments() {
    const internal = this.#internal;
    return deserializeBoxTSTypeParameterInstantiation(internal.$pos + 24, internal.$ast);
  }

  toJSON() {
    return {
      type: 'TSInstantiationExpression',
      start: this.start,
      end: this.end,
      expression: this.expression,
      typeArguments: this.typeArguments,
    };
  }
}

function deserializeImportOrExportKind(pos, ast) {
  switch (ast.buffer[pos]) {
    case 0:
      return 'value';
    case 1:
      return 'type';
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for ImportOrExportKind`);
  }
}

function deserializeJSDocNullableType(pos, ast) {
  return new JSDocNullableType(pos, ast);
}

class JSDocNullableType {
  type = 'JSDocNullableType';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get typeAnnotation() {
    const internal = this.#internal;
    return deserializeTSType(internal.$pos + 8, internal.$ast);
  }

  get postfix() {
    const internal = this.#internal;
    return deserializeBool(internal.$pos + 24, internal.$ast);
  }

  toJSON() {
    return {
      type: 'JSDocNullableType',
      start: this.start,
      end: this.end,
      typeAnnotation: this.typeAnnotation,
      postfix: this.postfix,
    };
  }
}

function deserializeJSDocNonNullableType(pos, ast) {
  return new JSDocNonNullableType(pos, ast);
}

class JSDocNonNullableType {
  type = 'JSDocNonNullableType';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get typeAnnotation() {
    const internal = this.#internal;
    return deserializeTSType(internal.$pos + 8, internal.$ast);
  }

  get postfix() {
    const internal = this.#internal;
    return deserializeBool(internal.$pos + 24, internal.$ast);
  }

  toJSON() {
    return {
      type: 'JSDocNonNullableType',
      start: this.start,
      end: this.end,
      typeAnnotation: this.typeAnnotation,
      postfix: this.postfix,
    };
  }
}

function deserializeJSDocUnknownType(pos, ast) {
  return new JSDocUnknownType(pos, ast);
}

class JSDocUnknownType {
  type = 'JSDocUnknownType';
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  toJSON() {
    return {
      type: 'JSDocUnknownType',
      start: this.start,
      end: this.end,
    };
  }
}

function deserializeCommentKind(pos, ast) {
  switch (ast.buffer[pos]) {
    case 0:
      return 'Line';
    case 1:
      return 'Block';
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for CommentKind`);
  }
}

function deserializeComment(pos, ast) {
  return new Comment(pos, ast);
}

class Comment {
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get type() {
    const internal = this.#internal;
    return deserializeCommentKind(internal.$pos + 12, internal.$ast);
  }

  toJSON() {
    return {
      start: this.start,
      end: this.end,
      type: this.type,
    };
  }
}

function deserializeNameSpan(pos, ast) {
  return new NameSpan(pos, ast);
}

class NameSpan {
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast, value: void 0 };
  }

  get value() {
    const internal = this.#internal,
      node = internal.value;
    if (node !== void 0) return node;
    return internal.value = deserializeStr(internal.$pos + 8, internal.$ast);
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  toJSON() {
    return {
      value: this.value,
      start: this.start,
      end: this.end,
    };
  }
}

function deserializeImportEntry(pos, ast) {
  return new ImportEntry(pos, ast);
}

class ImportEntry {
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get importName() {
    const internal = this.#internal;
    return deserializeImportImportName(internal.$pos + 32, internal.$ast);
  }

  get localName() {
    const internal = this.#internal;
    return deserializeNameSpan(internal.$pos + 64, internal.$ast);
  }

  get isType() {
    const internal = this.#internal;
    return deserializeBool(internal.$pos + 88, internal.$ast);
  }

  toJSON() {
    return {
      importName: this.importName,
      localName: this.localName,
      isType: this.isType,
    };
  }
}

function deserializeImportImportName(pos, ast) {
  switch (ast.buffer[pos]) {
    case 0:
      return deserializeNameSpan(pos + 8, ast);
    case 1:
      return 'namespaceObject';
    case 2:
      return deserializeSpan(pos + 8, ast);
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for ImportImportName`);
  }
}

function deserializeExportEntry(pos, ast) {
  return new ExportEntry(pos, ast);
}

class ExportEntry {
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get moduleRequest() {
    const internal = this.#internal;
    return deserializeOptionNameSpan(internal.$pos + 16, internal.$ast);
  }

  get importName() {
    const internal = this.#internal;
    return deserializeExportImportName(internal.$pos + 40, internal.$ast);
  }

  get exportName() {
    const internal = this.#internal;
    return deserializeExportExportName(internal.$pos + 72, internal.$ast);
  }

  get localName() {
    const internal = this.#internal;
    return deserializeExportLocalName(internal.$pos + 104, internal.$ast);
  }

  get isType() {
    const internal = this.#internal;
    return deserializeBool(internal.$pos + 136, internal.$ast);
  }

  toJSON() {
    return {
      start: this.start,
      end: this.end,
      moduleRequest: this.moduleRequest,
      importName: this.importName,
      exportName: this.exportName,
      localName: this.localName,
      isType: this.isType,
    };
  }
}

function deserializeExportImportName(pos, ast) {
  switch (ast.buffer[pos]) {
    case 0:
      return deserializeNameSpan(pos + 8, ast);
    case 1:
      return 'all';
    case 2:
      return 'allButDefault';
    case 3:
      return 'null';
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for ExportImportName`);
  }
}

function deserializeExportExportName(pos, ast) {
  switch (ast.buffer[pos]) {
    case 0:
      return deserializeNameSpan(pos + 8, ast);
    case 1:
      return deserializeSpan(pos + 8, ast);
    case 2:
      return 'null';
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for ExportExportName`);
  }
}

function deserializeExportLocalName(pos, ast) {
  switch (ast.buffer[pos]) {
    case 0:
      return deserializeNameSpan(pos + 8, ast);
    case 1:
      return deserializeNameSpan(pos + 8, ast);
    case 2:
      return 'null';
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for ExportLocalName`);
  }
}

function deserializeDynamicImport(pos, ast) {
  return new DynamicImport(pos, ast);
}

class DynamicImport {
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get moduleRequest() {
    const internal = this.#internal;
    return deserializeSpan(internal.$pos + 8, internal.$ast);
  }

  toJSON() {
    return {
      start: this.start,
      end: this.end,
      moduleRequest: this.moduleRequest,
    };
  }
}

function deserializeAssignmentOperator(pos, ast) {
  switch (ast.buffer[pos]) {
    case 0:
      return '=';
    case 1:
      return '+=';
    case 2:
      return '-=';
    case 3:
      return '*=';
    case 4:
      return '/=';
    case 5:
      return '%=';
    case 6:
      return '**=';
    case 7:
      return '<<=';
    case 8:
      return '>>=';
    case 9:
      return '>>>=';
    case 10:
      return '|=';
    case 11:
      return '^=';
    case 12:
      return '&=';
    case 13:
      return '||=';
    case 14:
      return '&&=';
    case 15:
      return '??=';
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for AssignmentOperator`);
  }
}

function deserializeBinaryOperator(pos, ast) {
  switch (ast.buffer[pos]) {
    case 0:
      return '==';
    case 1:
      return '!=';
    case 2:
      return '===';
    case 3:
      return '!==';
    case 4:
      return '<';
    case 5:
      return '<=';
    case 6:
      return '>';
    case 7:
      return '>=';
    case 8:
      return '+';
    case 9:
      return '-';
    case 10:
      return '*';
    case 11:
      return '/';
    case 12:
      return '%';
    case 13:
      return '**';
    case 14:
      return '<<';
    case 15:
      return '>>';
    case 16:
      return '>>>';
    case 17:
      return '|';
    case 18:
      return '^';
    case 19:
      return '&';
    case 20:
      return 'in';
    case 21:
      return 'instanceof';
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for BinaryOperator`);
  }
}

function deserializeLogicalOperator(pos, ast) {
  switch (ast.buffer[pos]) {
    case 0:
      return '||';
    case 1:
      return '&&';
    case 2:
      return '??';
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for LogicalOperator`);
  }
}

function deserializeUnaryOperator(pos, ast) {
  switch (ast.buffer[pos]) {
    case 0:
      return '+';
    case 1:
      return '-';
    case 2:
      return '!';
    case 3:
      return '~';
    case 4:
      return 'typeof';
    case 5:
      return 'void';
    case 6:
      return 'delete';
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for UnaryOperator`);
  }
}

function deserializeUpdateOperator(pos, ast) {
  switch (ast.buffer[pos]) {
    case 0:
      return '++';
    case 1:
      return '--';
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for UpdateOperator`);
  }
}

function deserializeSpan(pos, ast) {
  return new Span(pos, ast);
}

class Span {
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  toJSON() {
    return {
      start: this.start,
      end: this.end,
    };
  }
}

function deserializeSourceType(pos, ast) {
  return new SourceType(pos, ast);
}

class SourceType {
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast };
  }

  get sourceType() {
    const internal = this.#internal;
    return deserializeModuleKind(internal.$pos + 1, internal.$ast);
  }

  toJSON() {
    return {
      sourceType: this.sourceType,
    };
  }
}

function deserializeModuleKind(pos, ast) {
  switch (ast.buffer[pos]) {
    case 0:
      return 'script';
    case 1:
      return 'module';
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for ModuleKind`);
  }
}

function deserializeRawTransferData(pos, ast) {
  return new RawTransferData(pos, ast);
}

class RawTransferData {
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast, comments: void 0, errors: void 0 };
  }

  get program() {
    const internal = this.#internal;
    return deserializeProgram(internal.$pos, internal.$ast);
  }

  get comments() {
    const internal = this.#internal,
      node = internal.comments;
    if (node !== void 0) return node;
    return internal.comments = deserializeVecComment(internal.$pos + 128, internal.$ast);
  }

  get module() {
    const internal = this.#internal;
    return deserializeEcmaScriptModule(internal.$pos + 152, internal.$ast);
  }

  get errors() {
    const internal = this.#internal,
      node = internal.errors;
    if (node !== void 0) return node;
    return internal.errors = deserializeVecError(internal.$pos + 256, internal.$ast);
  }

  toJSON() {
    return {
      program: this.program,
      comments: this.comments,
      module: this.module,
      errors: this.errors,
    };
  }
}

function deserializeError(pos, ast) {
  return new Error(pos, ast);
}

class Error {
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast, message: void 0, labels: void 0, helpMessage: void 0, codeframe: void 0 };
  }

  get severity() {
    const internal = this.#internal;
    return deserializeErrorSeverity(internal.$pos + 72, internal.$ast);
  }

  get message() {
    const internal = this.#internal,
      node = internal.message;
    if (node !== void 0) return node;
    return internal.message = deserializeStr(internal.$pos, internal.$ast);
  }

  get labels() {
    const internal = this.#internal,
      node = internal.labels;
    if (node !== void 0) return node;
    return internal.labels = deserializeVecErrorLabel(internal.$pos + 16, internal.$ast);
  }

  get helpMessage() {
    const internal = this.#internal,
      node = internal.helpMessage;
    if (node !== void 0) return node;
    return internal.helpMessage = deserializeOptionStr(internal.$pos + 40, internal.$ast);
  }

  get codeframe() {
    const internal = this.#internal,
      node = internal.codeframe;
    if (node !== void 0) return node;
    return internal.codeframe = deserializeStr(internal.$pos + 56, internal.$ast);
  }

  toJSON() {
    return {
      severity: this.severity,
      message: this.message,
      labels: this.labels,
      helpMessage: this.helpMessage,
      codeframe: this.codeframe,
    };
  }
}

function deserializeErrorSeverity(pos, ast) {
  switch (ast.buffer[pos]) {
    case 0:
      return 'Error';
    case 1:
      return 'Warning';
    case 2:
      return 'Advice';
    default:
      throw new Error(`Unexpected discriminant ${ast.buffer[pos]} for ErrorSeverity`);
  }
}

function deserializeErrorLabel(pos, ast) {
  return new ErrorLabel(pos, ast);
}

class ErrorLabel {
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast, message: void 0 };
  }

  get message() {
    const internal = this.#internal,
      node = internal.message;
    if (node !== void 0) return node;
    return internal.message = deserializeOptionStr(internal.$pos + 8, internal.$ast);
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  toJSON() {
    return {
      message: this.message,
      start: this.start,
      end: this.end,
    };
  }
}

function deserializeEcmaScriptModule(pos, ast) {
  return new EcmaScriptModule(pos, ast);
}

class EcmaScriptModule {
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = {
      $pos: pos,
      $ast: ast,
      staticImports: void 0,
      staticExports: void 0,
      dynamicImports: void 0,
      importMetas: void 0,
    };
  }

  get hasModuleSyntax() {
    const internal = this.#internal;
    return deserializeBool(internal.$pos + 96, internal.$ast);
  }

  get staticImports() {
    const internal = this.#internal,
      node = internal.staticImports;
    if (node !== void 0) return node;
    return internal.staticImports = deserializeVecStaticImport(internal.$pos, internal.$ast);
  }

  get staticExports() {
    const internal = this.#internal,
      node = internal.staticExports;
    if (node !== void 0) return node;
    return internal.staticExports = deserializeVecStaticExport(internal.$pos + 24, internal.$ast);
  }

  get dynamicImports() {
    const internal = this.#internal,
      node = internal.dynamicImports;
    if (node !== void 0) return node;
    return internal.dynamicImports = deserializeVecDynamicImport(internal.$pos + 48, internal.$ast);
  }

  get importMetas() {
    const internal = this.#internal,
      node = internal.importMetas;
    if (node !== void 0) return node;
    return internal.importMetas = deserializeVecSpan(internal.$pos + 72, internal.$ast);
  }

  toJSON() {
    return {
      hasModuleSyntax: this.hasModuleSyntax,
      staticImports: this.staticImports,
      staticExports: this.staticExports,
      dynamicImports: this.dynamicImports,
      importMetas: this.importMetas,
    };
  }
}

function deserializeStaticImport(pos, ast) {
  return new StaticImport(pos, ast);
}

class StaticImport {
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast, entries: void 0 };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get moduleRequest() {
    const internal = this.#internal;
    return deserializeNameSpan(internal.$pos + 8, internal.$ast);
  }

  get entries() {
    const internal = this.#internal,
      node = internal.entries;
    if (node !== void 0) return node;
    return internal.entries = deserializeVecImportEntry(internal.$pos + 32, internal.$ast);
  }

  toJSON() {
    return {
      start: this.start,
      end: this.end,
      moduleRequest: this.moduleRequest,
      entries: this.entries,
    };
  }
}

function deserializeStaticExport(pos, ast) {
  return new StaticExport(pos, ast);
}

class StaticExport {
  #internal;

  constructor(pos, ast) {
    if (ast.token !== TOKEN) throw new Error('Constructor is for internal use only');
    this.#internal = { $pos: pos, $ast: ast, entries: void 0 };
  }

  get start() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos, internal.$ast);
  }

  get end() {
    const internal = this.#internal;
    return deserializeU32(internal.$pos + 4, internal.$ast);
  }

  get entries() {
    const internal = this.#internal,
      node = internal.entries;
    if (node !== void 0) return node;
    return internal.entries = deserializeVecExportEntry(internal.$pos + 8, internal.$ast);
  }

  toJSON() {
    return {
      start: this.start,
      end: this.end,
      entries: this.entries,
    };
  }
}

function deserializeStr(pos, ast) {
  const pos32 = pos >> 2,
    { buffer } = ast,
    { uint32 } = buffer,
    len = uint32[pos32 + 2];
  if (len === 0) return '';

  pos = uint32[pos32];
  if (ast.sourceIsAscii && pos < ast.sourceLen) return ast.sourceText.substr(pos, len);

  // Longer strings use `TextDecoder`
  // TODO: Find best switch-over point
  const end = pos + len;
  if (len > 50) return decodeStr(buffer.subarray(pos, end));

  // Shorter strings decode by hand to avoid native call
  let out = '',
    c;
  do {
    c = buffer[pos++];
    if (c < 0x80) {
      out += fromCodePoint(c);
    } else {
      out += decodeStr(buffer.subarray(pos - 1, end));
      break;
    }
  } while (pos < end);

  return out;
}

function deserializeVecComment(pos, ast) {
  const { uint32 } = ast.buffer,
    arr = [],
    pos32 = pos >> 2,
    len = uint32[pos32 + 2];
  pos = uint32[pos32];
  for (let i = 0; i < len; i++) {
    arr.push(deserializeComment(pos, ast));
    pos += 16;
  }
  return arr;
}

function deserializeOptionHashbang(pos, ast) {
  if (ast.buffer.uint32[(pos + 8) >> 2] === 0 && ast.buffer.uint32[(pos + 12) >> 2] === 0) return null;
  return deserializeHashbang(pos, ast);
}

function deserializeVecDirective(pos, ast) {
  const { uint32 } = ast.buffer,
    arr = [],
    pos32 = pos >> 2,
    len = uint32[pos32 + 2];
  pos = uint32[pos32];
  for (let i = 0; i < len; i++) {
    arr.push(deserializeDirective(pos, ast));
    pos += 72;
  }
  return arr;
}

function deserializeVecStatement(pos, ast) {
  const { uint32 } = ast.buffer,
    arr = [],
    pos32 = pos >> 2,
    len = uint32[pos32 + 2];
  pos = uint32[pos32];
  for (let i = 0; i < len; i++) {
    arr.push(deserializeStatement(pos, ast));
    pos += 16;
  }
  return arr;
}

function deserializeBoxBooleanLiteral(pos, ast) {
  return deserializeBooleanLiteral(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxNullLiteral(pos, ast) {
  return deserializeNullLiteral(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxNumericLiteral(pos, ast) {
  return deserializeNumericLiteral(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxBigIntLiteral(pos, ast) {
  return deserializeBigIntLiteral(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxRegExpLiteral(pos, ast) {
  return deserializeRegExpLiteral(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxStringLiteral(pos, ast) {
  return deserializeStringLiteral(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxTemplateLiteral(pos, ast) {
  return deserializeTemplateLiteral(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxIdentifierReference(pos, ast) {
  return deserializeIdentifierReference(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxMetaProperty(pos, ast) {
  return deserializeMetaProperty(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxSuper(pos, ast) {
  return deserializeSuper(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxArrayExpression(pos, ast) {
  return deserializeArrayExpression(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxArrowFunctionExpression(pos, ast) {
  return deserializeArrowFunctionExpression(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxAssignmentExpression(pos, ast) {
  return deserializeAssignmentExpression(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxAwaitExpression(pos, ast) {
  return deserializeAwaitExpression(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxBinaryExpression(pos, ast) {
  return deserializeBinaryExpression(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxCallExpression(pos, ast) {
  return deserializeCallExpression(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxChainExpression(pos, ast) {
  return deserializeChainExpression(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxClass(pos, ast) {
  return deserializeClass(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxConditionalExpression(pos, ast) {
  return deserializeConditionalExpression(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxFunction(pos, ast) {
  return deserializeFunction(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxImportExpression(pos, ast) {
  return deserializeImportExpression(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxLogicalExpression(pos, ast) {
  return deserializeLogicalExpression(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxNewExpression(pos, ast) {
  return deserializeNewExpression(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxObjectExpression(pos, ast) {
  return deserializeObjectExpression(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxParenthesizedExpression(pos, ast) {
  return deserializeParenthesizedExpression(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxSequenceExpression(pos, ast) {
  return deserializeSequenceExpression(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxTaggedTemplateExpression(pos, ast) {
  return deserializeTaggedTemplateExpression(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxThisExpression(pos, ast) {
  return deserializeThisExpression(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxUnaryExpression(pos, ast) {
  return deserializeUnaryExpression(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxUpdateExpression(pos, ast) {
  return deserializeUpdateExpression(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxYieldExpression(pos, ast) {
  return deserializeYieldExpression(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxPrivateInExpression(pos, ast) {
  return deserializePrivateInExpression(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxJSXElement(pos, ast) {
  return deserializeJSXElement(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxJSXFragment(pos, ast) {
  return deserializeJSXFragment(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxTSAsExpression(pos, ast) {
  return deserializeTSAsExpression(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxTSSatisfiesExpression(pos, ast) {
  return deserializeTSSatisfiesExpression(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxTSTypeAssertion(pos, ast) {
  return deserializeTSTypeAssertion(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxTSNonNullExpression(pos, ast) {
  return deserializeTSNonNullExpression(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxTSInstantiationExpression(pos, ast) {
  return deserializeTSInstantiationExpression(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxV8IntrinsicExpression(pos, ast) {
  return deserializeV8IntrinsicExpression(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeVecArrayExpressionElement(pos, ast) {
  const { uint32 } = ast.buffer,
    arr = [],
    pos32 = pos >> 2,
    len = uint32[pos32 + 2];
  pos = uint32[pos32];
  for (let i = 0; i < len; i++) {
    arr.push(deserializeArrayExpressionElement(pos, ast));
    pos += 16;
  }
  return arr;
}

function deserializeBoxSpreadElement(pos, ast) {
  return deserializeSpreadElement(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeVecObjectPropertyKind(pos, ast) {
  const { uint32 } = ast.buffer,
    arr = [],
    pos32 = pos >> 2,
    len = uint32[pos32 + 2];
  pos = uint32[pos32];
  for (let i = 0; i < len; i++) {
    arr.push(deserializeObjectPropertyKind(pos, ast));
    pos += 16;
  }
  return arr;
}

function deserializeBoxObjectProperty(pos, ast) {
  return deserializeObjectProperty(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBool(pos, ast) {
  return ast.buffer[pos] === 1;
}

function deserializeBoxIdentifierName(pos, ast) {
  return deserializeIdentifierName(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxPrivateIdentifier(pos, ast) {
  return deserializePrivateIdentifier(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeVecTemplateElement(pos, ast) {
  const { uint32 } = ast.buffer,
    arr = [],
    pos32 = pos >> 2,
    len = uint32[pos32 + 2];
  pos = uint32[pos32];
  for (let i = 0; i < len; i++) {
    arr.push(deserializeTemplateElement(pos, ast));
    pos += 48;
  }
  return arr;
}

function deserializeVecExpression(pos, ast) {
  const { uint32 } = ast.buffer,
    arr = [],
    pos32 = pos >> 2,
    len = uint32[pos32 + 2];
  pos = uint32[pos32];
  for (let i = 0; i < len; i++) {
    arr.push(deserializeExpression(pos, ast));
    pos += 16;
  }
  return arr;
}

function deserializeBoxTSTypeParameterInstantiation(pos, ast) {
  return deserializeTSTypeParameterInstantiation(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeOptionBoxTSTypeParameterInstantiation(pos, ast) {
  if (ast.buffer.uint32[pos >> 2] === 0 && ast.buffer.uint32[(pos + 4) >> 2] === 0) return null;
  return deserializeBoxTSTypeParameterInstantiation(pos, ast);
}

function deserializeOptionStr(pos, ast) {
  if (ast.buffer.uint32[pos >> 2] === 0 && ast.buffer.uint32[(pos + 4) >> 2] === 0) return null;
  return deserializeStr(pos, ast);
}

function deserializeBoxComputedMemberExpression(pos, ast) {
  return deserializeComputedMemberExpression(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxStaticMemberExpression(pos, ast) {
  return deserializeStaticMemberExpression(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxPrivateFieldExpression(pos, ast) {
  return deserializePrivateFieldExpression(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeVecArgument(pos, ast) {
  const { uint32 } = ast.buffer,
    arr = [],
    pos32 = pos >> 2,
    len = uint32[pos32 + 2];
  pos = uint32[pos32];
  for (let i = 0; i < len; i++) {
    arr.push(deserializeArgument(pos, ast));
    pos += 16;
  }
  return arr;
}

function deserializeBoxArrayAssignmentTarget(pos, ast) {
  return deserializeArrayAssignmentTarget(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxObjectAssignmentTarget(pos, ast) {
  return deserializeObjectAssignmentTarget(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeOptionAssignmentTargetMaybeDefault(pos, ast) {
  if (ast.buffer[pos] === 51) return null;
  return deserializeAssignmentTargetMaybeDefault(pos, ast);
}

function deserializeVecOptionAssignmentTargetMaybeDefault(pos, ast) {
  const { uint32 } = ast.buffer,
    arr = [],
    pos32 = pos >> 2,
    len = uint32[pos32 + 2];
  pos = uint32[pos32];
  for (let i = 0; i < len; i++) {
    arr.push(deserializeOptionAssignmentTargetMaybeDefault(pos, ast));
    pos += 16;
  }
  return arr;
}

function deserializeOptionAssignmentTargetRest(pos, ast) {
  if (ast.buffer[pos + 8] === 51) return null;
  return deserializeAssignmentTargetRest(pos, ast);
}

function deserializeVecAssignmentTargetProperty(pos, ast) {
  const { uint32 } = ast.buffer,
    arr = [],
    pos32 = pos >> 2,
    len = uint32[pos32 + 2];
  pos = uint32[pos32];
  for (let i = 0; i < len; i++) {
    arr.push(deserializeAssignmentTargetProperty(pos, ast));
    pos += 16;
  }
  return arr;
}

function deserializeBoxAssignmentTargetWithDefault(pos, ast) {
  return deserializeAssignmentTargetWithDefault(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxAssignmentTargetPropertyIdentifier(pos, ast) {
  return deserializeAssignmentTargetPropertyIdentifier(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxAssignmentTargetPropertyProperty(pos, ast) {
  return deserializeAssignmentTargetPropertyProperty(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeOptionExpression(pos, ast) {
  if (ast.buffer[pos] === 51) return null;
  return deserializeExpression(pos, ast);
}

function deserializeBoxBlockStatement(pos, ast) {
  return deserializeBlockStatement(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxBreakStatement(pos, ast) {
  return deserializeBreakStatement(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxContinueStatement(pos, ast) {
  return deserializeContinueStatement(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxDebuggerStatement(pos, ast) {
  return deserializeDebuggerStatement(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxDoWhileStatement(pos, ast) {
  return deserializeDoWhileStatement(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxEmptyStatement(pos, ast) {
  return deserializeEmptyStatement(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxExpressionStatement(pos, ast) {
  return deserializeExpressionStatement(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxForInStatement(pos, ast) {
  return deserializeForInStatement(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxForOfStatement(pos, ast) {
  return deserializeForOfStatement(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxForStatement(pos, ast) {
  return deserializeForStatement(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxIfStatement(pos, ast) {
  return deserializeIfStatement(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxLabeledStatement(pos, ast) {
  return deserializeLabeledStatement(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxReturnStatement(pos, ast) {
  return deserializeReturnStatement(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxSwitchStatement(pos, ast) {
  return deserializeSwitchStatement(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxThrowStatement(pos, ast) {
  return deserializeThrowStatement(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxTryStatement(pos, ast) {
  return deserializeTryStatement(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxWhileStatement(pos, ast) {
  return deserializeWhileStatement(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxWithStatement(pos, ast) {
  return deserializeWithStatement(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxVariableDeclaration(pos, ast) {
  return deserializeVariableDeclaration(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxTSTypeAliasDeclaration(pos, ast) {
  return deserializeTSTypeAliasDeclaration(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxTSInterfaceDeclaration(pos, ast) {
  return deserializeTSInterfaceDeclaration(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxTSEnumDeclaration(pos, ast) {
  return deserializeTSEnumDeclaration(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxTSModuleDeclaration(pos, ast) {
  return deserializeTSModuleDeclaration(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxTSImportEqualsDeclaration(pos, ast) {
  return deserializeTSImportEqualsDeclaration(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeVecVariableDeclarator(pos, ast) {
  const { uint32 } = ast.buffer,
    arr = [],
    pos32 = pos >> 2,
    len = uint32[pos32 + 2];
  pos = uint32[pos32];
  for (let i = 0; i < len; i++) {
    arr.push(deserializeVariableDeclarator(pos, ast));
    pos += 64;
  }
  return arr;
}

function deserializeOptionStatement(pos, ast) {
  if (ast.buffer[pos] === 70) return null;
  return deserializeStatement(pos, ast);
}

function deserializeOptionForStatementInit(pos, ast) {
  if (ast.buffer[pos] === 65) return null;
  return deserializeForStatementInit(pos, ast);
}

function deserializeOptionLabelIdentifier(pos, ast) {
  if (ast.buffer.uint32[(pos + 8) >> 2] === 0 && ast.buffer.uint32[(pos + 12) >> 2] === 0) return null;
  return deserializeLabelIdentifier(pos, ast);
}

function deserializeVecSwitchCase(pos, ast) {
  const { uint32 } = ast.buffer,
    arr = [],
    pos32 = pos >> 2,
    len = uint32[pos32 + 2];
  pos = uint32[pos32];
  for (let i = 0; i < len; i++) {
    arr.push(deserializeSwitchCase(pos, ast));
    pos += 48;
  }
  return arr;
}

function deserializeBoxCatchClause(pos, ast) {
  return deserializeCatchClause(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeOptionBoxCatchClause(pos, ast) {
  if (ast.buffer.uint32[pos >> 2] === 0 && ast.buffer.uint32[(pos + 4) >> 2] === 0) return null;
  return deserializeBoxCatchClause(pos, ast);
}

function deserializeOptionBoxBlockStatement(pos, ast) {
  if (ast.buffer.uint32[pos >> 2] === 0 && ast.buffer.uint32[(pos + 4) >> 2] === 0) return null;
  return deserializeBoxBlockStatement(pos, ast);
}

function deserializeOptionCatchParameter(pos, ast) {
  if (ast.buffer[pos + 32] === 2) return null;
  return deserializeCatchParameter(pos, ast);
}

function deserializeBoxTSTypeAnnotation(pos, ast) {
  return deserializeTSTypeAnnotation(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeOptionBoxTSTypeAnnotation(pos, ast) {
  if (ast.buffer.uint32[pos >> 2] === 0 && ast.buffer.uint32[(pos + 4) >> 2] === 0) return null;
  return deserializeBoxTSTypeAnnotation(pos, ast);
}

function deserializeBoxBindingIdentifier(pos, ast) {
  return deserializeBindingIdentifier(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxObjectPattern(pos, ast) {
  return deserializeObjectPattern(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxArrayPattern(pos, ast) {
  return deserializeArrayPattern(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxAssignmentPattern(pos, ast) {
  return deserializeAssignmentPattern(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeVecBindingProperty(pos, ast) {
  const { uint32 } = ast.buffer,
    arr = [],
    pos32 = pos >> 2,
    len = uint32[pos32 + 2];
  pos = uint32[pos32];
  for (let i = 0; i < len; i++) {
    arr.push(deserializeBindingProperty(pos, ast));
    pos += 64;
  }
  return arr;
}

function deserializeBoxBindingRestElement(pos, ast) {
  return deserializeBindingRestElement(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeOptionBoxBindingRestElement(pos, ast) {
  if (ast.buffer.uint32[pos >> 2] === 0 && ast.buffer.uint32[(pos + 4) >> 2] === 0) return null;
  return deserializeBoxBindingRestElement(pos, ast);
}

function deserializeOptionBindingPattern(pos, ast) {
  if (ast.buffer[pos + 24] === 2) return null;
  return deserializeBindingPattern(pos, ast);
}

function deserializeVecOptionBindingPattern(pos, ast) {
  const { uint32 } = ast.buffer,
    arr = [],
    pos32 = pos >> 2,
    len = uint32[pos32 + 2];
  pos = uint32[pos32];
  for (let i = 0; i < len; i++) {
    arr.push(deserializeOptionBindingPattern(pos, ast));
    pos += 32;
  }
  return arr;
}

function deserializeOptionBindingIdentifier(pos, ast) {
  if (ast.buffer.uint32[(pos + 8) >> 2] === 0 && ast.buffer.uint32[(pos + 12) >> 2] === 0) return null;
  return deserializeBindingIdentifier(pos, ast);
}

function deserializeBoxTSTypeParameterDeclaration(pos, ast) {
  return deserializeTSTypeParameterDeclaration(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeOptionBoxTSTypeParameterDeclaration(pos, ast) {
  if (ast.buffer.uint32[pos >> 2] === 0 && ast.buffer.uint32[(pos + 4) >> 2] === 0) return null;
  return deserializeBoxTSTypeParameterDeclaration(pos, ast);
}

function deserializeBoxTSThisParameter(pos, ast) {
  return deserializeTSThisParameter(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeOptionBoxTSThisParameter(pos, ast) {
  if (ast.buffer.uint32[pos >> 2] === 0 && ast.buffer.uint32[(pos + 4) >> 2] === 0) return null;
  return deserializeBoxTSThisParameter(pos, ast);
}

function deserializeBoxFormalParameters(pos, ast) {
  return deserializeFormalParameters(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxFunctionBody(pos, ast) {
  return deserializeFunctionBody(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeOptionBoxFunctionBody(pos, ast) {
  if (ast.buffer.uint32[pos >> 2] === 0 && ast.buffer.uint32[(pos + 4) >> 2] === 0) return null;
  return deserializeBoxFunctionBody(pos, ast);
}

function deserializeVecFormalParameter(pos, ast) {
  const { uint32 } = ast.buffer,
    arr = [],
    pos32 = pos >> 2,
    len = uint32[pos32 + 2];
  pos = uint32[pos32];
  for (let i = 0; i < len; i++) {
    arr.push(deserializeFormalParameter(pos, ast));
    pos += 72;
  }
  return arr;
}

function deserializeVecDecorator(pos, ast) {
  const { uint32 } = ast.buffer,
    arr = [],
    pos32 = pos >> 2,
    len = uint32[pos32 + 2];
  pos = uint32[pos32];
  for (let i = 0; i < len; i++) {
    arr.push(deserializeDecorator(pos, ast));
    pos += 24;
  }
  return arr;
}

function deserializeOptionTSAccessibility(pos, ast) {
  if (ast.buffer[pos] === 3) return null;
  return deserializeTSAccessibility(pos, ast);
}

function deserializeVecTSClassImplements(pos, ast) {
  const { uint32 } = ast.buffer,
    arr = [],
    pos32 = pos >> 2,
    len = uint32[pos32 + 2];
  pos = uint32[pos32];
  for (let i = 0; i < len; i++) {
    arr.push(deserializeTSClassImplements(pos, ast));
    pos += 32;
  }
  return arr;
}

function deserializeBoxClassBody(pos, ast) {
  return deserializeClassBody(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeVecClassElement(pos, ast) {
  const { uint32 } = ast.buffer,
    arr = [],
    pos32 = pos >> 2,
    len = uint32[pos32 + 2];
  pos = uint32[pos32];
  for (let i = 0; i < len; i++) {
    arr.push(deserializeClassElement(pos, ast));
    pos += 16;
  }
  return arr;
}

function deserializeBoxStaticBlock(pos, ast) {
  return deserializeStaticBlock(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxMethodDefinition(pos, ast) {
  return deserializeMethodDefinition(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxPropertyDefinition(pos, ast) {
  return deserializePropertyDefinition(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxAccessorProperty(pos, ast) {
  return deserializeAccessorProperty(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxTSIndexSignature(pos, ast) {
  return deserializeTSIndexSignature(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxImportDeclaration(pos, ast) {
  return deserializeImportDeclaration(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxExportAllDeclaration(pos, ast) {
  return deserializeExportAllDeclaration(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxExportDefaultDeclaration(pos, ast) {
  return deserializeExportDefaultDeclaration(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxExportNamedDeclaration(pos, ast) {
  return deserializeExportNamedDeclaration(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxTSExportAssignment(pos, ast) {
  return deserializeTSExportAssignment(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxTSNamespaceExportDeclaration(pos, ast) {
  return deserializeTSNamespaceExportDeclaration(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeOptionImportPhase(pos, ast) {
  if (ast.buffer[pos] === 2) return null;
  return deserializeImportPhase(pos, ast);
}

function deserializeVecImportDeclarationSpecifier(pos, ast) {
  const { uint32 } = ast.buffer,
    arr = [],
    pos32 = pos >> 2,
    len = uint32[pos32 + 2];
  pos = uint32[pos32];
  for (let i = 0; i < len; i++) {
    arr.push(deserializeImportDeclarationSpecifier(pos, ast));
    pos += 16;
  }
  return arr;
}

function deserializeOptionVecImportDeclarationSpecifier(pos, ast) {
  if (ast.buffer.uint32[pos >> 2] === 0 && ast.buffer.uint32[(pos + 4) >> 2] === 0) return null;
  return deserializeVecImportDeclarationSpecifier(pos, ast);
}

function deserializeBoxWithClause(pos, ast) {
  return deserializeWithClause(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeOptionBoxWithClause(pos, ast) {
  if (ast.buffer.uint32[pos >> 2] === 0 && ast.buffer.uint32[(pos + 4) >> 2] === 0) return null;
  return deserializeBoxWithClause(pos, ast);
}

function deserializeBoxImportSpecifier(pos, ast) {
  return deserializeImportSpecifier(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxImportDefaultSpecifier(pos, ast) {
  return deserializeImportDefaultSpecifier(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxImportNamespaceSpecifier(pos, ast) {
  return deserializeImportNamespaceSpecifier(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeVecImportAttribute(pos, ast) {
  const { uint32 } = ast.buffer,
    arr = [],
    pos32 = pos >> 2,
    len = uint32[pos32 + 2];
  pos = uint32[pos32];
  for (let i = 0; i < len; i++) {
    arr.push(deserializeImportAttribute(pos, ast));
    pos += 112;
  }
  return arr;
}

function deserializeOptionDeclaration(pos, ast) {
  if (ast.buffer[pos] === 31) return null;
  return deserializeDeclaration(pos, ast);
}

function deserializeVecExportSpecifier(pos, ast) {
  const { uint32 } = ast.buffer,
    arr = [],
    pos32 = pos >> 2,
    len = uint32[pos32 + 2];
  pos = uint32[pos32];
  for (let i = 0; i < len; i++) {
    arr.push(deserializeExportSpecifier(pos, ast));
    pos += 128;
  }
  return arr;
}

function deserializeOptionStringLiteral(pos, ast) {
  if (ast.buffer[pos + 40] === 2) return null;
  return deserializeStringLiteral(pos, ast);
}

function deserializeOptionModuleExportName(pos, ast) {
  if (ast.buffer[pos] === 3) return null;
  return deserializeModuleExportName(pos, ast);
}

function deserializeF64(pos, ast) {
  return ast.buffer.float64[pos >> 3];
}

function deserializeU8(pos, ast) {
  return ast.buffer[pos];
}

function deserializeBoxJSXOpeningElement(pos, ast) {
  return deserializeJSXOpeningElement(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeVecJSXChild(pos, ast) {
  const { uint32 } = ast.buffer,
    arr = [],
    pos32 = pos >> 2,
    len = uint32[pos32 + 2];
  pos = uint32[pos32];
  for (let i = 0; i < len; i++) {
    arr.push(deserializeJSXChild(pos, ast));
    pos += 16;
  }
  return arr;
}

function deserializeBoxJSXClosingElement(pos, ast) {
  return deserializeJSXClosingElement(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeOptionBoxJSXClosingElement(pos, ast) {
  if (ast.buffer.uint32[pos >> 2] === 0 && ast.buffer.uint32[(pos + 4) >> 2] === 0) return null;
  return deserializeBoxJSXClosingElement(pos, ast);
}

function deserializeVecJSXAttributeItem(pos, ast) {
  const { uint32 } = ast.buffer,
    arr = [],
    pos32 = pos >> 2,
    len = uint32[pos32 + 2];
  pos = uint32[pos32];
  for (let i = 0; i < len; i++) {
    arr.push(deserializeJSXAttributeItem(pos, ast));
    pos += 16;
  }
  return arr;
}

function deserializeBoxJSXIdentifier(pos, ast) {
  return deserializeJSXIdentifier(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxJSXNamespacedName(pos, ast) {
  return deserializeJSXNamespacedName(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxJSXMemberExpression(pos, ast) {
  return deserializeJSXMemberExpression(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxJSXAttribute(pos, ast) {
  return deserializeJSXAttribute(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxJSXSpreadAttribute(pos, ast) {
  return deserializeJSXSpreadAttribute(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeOptionJSXAttributeValue(pos, ast) {
  if (ast.buffer[pos] === 4) return null;
  return deserializeJSXAttributeValue(pos, ast);
}

function deserializeBoxJSXExpressionContainer(pos, ast) {
  return deserializeJSXExpressionContainer(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxJSXText(pos, ast) {
  return deserializeJSXText(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxJSXSpreadChild(pos, ast) {
  return deserializeJSXSpreadChild(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeVecTSEnumMember(pos, ast) {
  const { uint32 } = ast.buffer,
    arr = [],
    pos32 = pos >> 2,
    len = uint32[pos32 + 2];
  pos = uint32[pos32];
  for (let i = 0; i < len; i++) {
    arr.push(deserializeTSEnumMember(pos, ast));
    pos += 40;
  }
  return arr;
}

function deserializeBoxTSAnyKeyword(pos, ast) {
  return deserializeTSAnyKeyword(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxTSBigIntKeyword(pos, ast) {
  return deserializeTSBigIntKeyword(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxTSBooleanKeyword(pos, ast) {
  return deserializeTSBooleanKeyword(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxTSIntrinsicKeyword(pos, ast) {
  return deserializeTSIntrinsicKeyword(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxTSNeverKeyword(pos, ast) {
  return deserializeTSNeverKeyword(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxTSNullKeyword(pos, ast) {
  return deserializeTSNullKeyword(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxTSNumberKeyword(pos, ast) {
  return deserializeTSNumberKeyword(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxTSObjectKeyword(pos, ast) {
  return deserializeTSObjectKeyword(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxTSStringKeyword(pos, ast) {
  return deserializeTSStringKeyword(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxTSSymbolKeyword(pos, ast) {
  return deserializeTSSymbolKeyword(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxTSUndefinedKeyword(pos, ast) {
  return deserializeTSUndefinedKeyword(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxTSUnknownKeyword(pos, ast) {
  return deserializeTSUnknownKeyword(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxTSVoidKeyword(pos, ast) {
  return deserializeTSVoidKeyword(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxTSArrayType(pos, ast) {
  return deserializeTSArrayType(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxTSConditionalType(pos, ast) {
  return deserializeTSConditionalType(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxTSConstructorType(pos, ast) {
  return deserializeTSConstructorType(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxTSFunctionType(pos, ast) {
  return deserializeTSFunctionType(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxTSImportType(pos, ast) {
  return deserializeTSImportType(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxTSIndexedAccessType(pos, ast) {
  return deserializeTSIndexedAccessType(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxTSInferType(pos, ast) {
  return deserializeTSInferType(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxTSIntersectionType(pos, ast) {
  return deserializeTSIntersectionType(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxTSLiteralType(pos, ast) {
  return deserializeTSLiteralType(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxTSMappedType(pos, ast) {
  return deserializeTSMappedType(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxTSNamedTupleMember(pos, ast) {
  return deserializeTSNamedTupleMember(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxTSTemplateLiteralType(pos, ast) {
  return deserializeTSTemplateLiteralType(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxTSThisType(pos, ast) {
  return deserializeTSThisType(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxTSTupleType(pos, ast) {
  return deserializeTSTupleType(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxTSTypeLiteral(pos, ast) {
  return deserializeTSTypeLiteral(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxTSTypeOperator(pos, ast) {
  return deserializeTSTypeOperator(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxTSTypePredicate(pos, ast) {
  return deserializeTSTypePredicate(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxTSTypeQuery(pos, ast) {
  return deserializeTSTypeQuery(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxTSTypeReference(pos, ast) {
  return deserializeTSTypeReference(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxTSUnionType(pos, ast) {
  return deserializeTSUnionType(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxTSParenthesizedType(pos, ast) {
  return deserializeTSParenthesizedType(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxJSDocNullableType(pos, ast) {
  return deserializeJSDocNullableType(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxJSDocNonNullableType(pos, ast) {
  return deserializeJSDocNonNullableType(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxJSDocUnknownType(pos, ast) {
  return deserializeJSDocUnknownType(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeVecTSType(pos, ast) {
  const { uint32 } = ast.buffer,
    arr = [],
    pos32 = pos >> 2,
    len = uint32[pos32 + 2];
  pos = uint32[pos32];
  for (let i = 0; i < len; i++) {
    arr.push(deserializeTSType(pos, ast));
    pos += 16;
  }
  return arr;
}

function deserializeVecTSTupleElement(pos, ast) {
  const { uint32 } = ast.buffer,
    arr = [],
    pos32 = pos >> 2,
    len = uint32[pos32 + 2];
  pos = uint32[pos32];
  for (let i = 0; i < len; i++) {
    arr.push(deserializeTSTupleElement(pos, ast));
    pos += 16;
  }
  return arr;
}

function deserializeBoxTSOptionalType(pos, ast) {
  return deserializeTSOptionalType(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxTSRestType(pos, ast) {
  return deserializeTSRestType(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxTSQualifiedName(pos, ast) {
  return deserializeTSQualifiedName(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeOptionTSType(pos, ast) {
  if (ast.buffer[pos] === 38) return null;
  return deserializeTSType(pos, ast);
}

function deserializeVecTSTypeParameter(pos, ast) {
  const { uint32 } = ast.buffer,
    arr = [],
    pos32 = pos >> 2,
    len = uint32[pos32 + 2];
  pos = uint32[pos32];
  for (let i = 0; i < len; i++) {
    arr.push(deserializeTSTypeParameter(pos, ast));
    pos += 80;
  }
  return arr;
}

function deserializeVecTSInterfaceHeritage(pos, ast) {
  const { uint32 } = ast.buffer,
    arr = [],
    pos32 = pos >> 2,
    len = uint32[pos32 + 2];
  pos = uint32[pos32];
  for (let i = 0; i < len; i++) {
    arr.push(deserializeTSInterfaceHeritage(pos, ast));
    pos += 32;
  }
  return arr;
}

function deserializeBoxTSInterfaceBody(pos, ast) {
  return deserializeTSInterfaceBody(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeVecTSSignature(pos, ast) {
  const { uint32 } = ast.buffer,
    arr = [],
    pos32 = pos >> 2,
    len = uint32[pos32 + 2];
  pos = uint32[pos32];
  for (let i = 0; i < len; i++) {
    arr.push(deserializeTSSignature(pos, ast));
    pos += 16;
  }
  return arr;
}

function deserializeBoxTSPropertySignature(pos, ast) {
  return deserializeTSPropertySignature(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxTSCallSignatureDeclaration(pos, ast) {
  return deserializeTSCallSignatureDeclaration(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxTSConstructSignatureDeclaration(pos, ast) {
  return deserializeTSConstructSignatureDeclaration(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxTSMethodSignature(pos, ast) {
  return deserializeTSMethodSignature(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeVecTSIndexSignatureName(pos, ast) {
  const { uint32 } = ast.buffer,
    arr = [],
    pos32 = pos >> 2,
    len = uint32[pos32 + 2];
  pos = uint32[pos32];
  for (let i = 0; i < len; i++) {
    arr.push(deserializeTSIndexSignatureName(pos, ast));
    pos += 32;
  }
  return arr;
}

function deserializeOptionTSModuleDeclarationBody(pos, ast) {
  if (ast.buffer[pos] === 2) return null;
  return deserializeTSModuleDeclarationBody(pos, ast);
}

function deserializeBoxTSModuleBlock(pos, ast) {
  return deserializeTSModuleBlock(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeBoxTSTypeParameter(pos, ast) {
  return deserializeTSTypeParameter(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeOptionBoxObjectExpression(pos, ast) {
  if (ast.buffer.uint32[pos >> 2] === 0 && ast.buffer.uint32[(pos + 4) >> 2] === 0) return null;
  return deserializeBoxObjectExpression(pos, ast);
}

function deserializeOptionTSTypeName(pos, ast) {
  if (ast.buffer[pos] === 2) return null;
  return deserializeTSTypeName(pos, ast);
}

function deserializeOptionTSMappedTypeModifierOperator(pos, ast) {
  if (ast.buffer[pos] === 3) return null;
  return deserializeTSMappedTypeModifierOperator(pos, ast);
}

function deserializeBoxTSExternalModuleReference(pos, ast) {
  return deserializeTSExternalModuleReference(ast.buffer.uint32[pos >> 2], ast);
}

function deserializeU32(pos, ast) {
  return ast.buffer.uint32[pos >> 2];
}

function deserializeOptionNameSpan(pos, ast) {
  if (ast.buffer.uint32[(pos + 8) >> 2] === 0 && ast.buffer.uint32[(pos + 12) >> 2] === 0) return null;
  return deserializeNameSpan(pos, ast);
}

function deserializeU64(pos, ast) {
  const { uint32 } = ast.buffer,
    pos32 = pos >> 2;
  return uint32[pos32] + uint32[pos32 + 1] * 4294967296;
}

function deserializeOptionU64(pos, ast) {
  if (ast.buffer[pos] === 0) return null;
  return deserializeU64(pos + 8, ast);
}

function deserializeVecError(pos, ast) {
  const { uint32 } = ast.buffer,
    arr = [],
    pos32 = pos >> 2,
    len = uint32[pos32 + 2];
  pos = uint32[pos32];
  for (let i = 0; i < len; i++) {
    arr.push(deserializeError(pos, ast));
    pos += 80;
  }
  return arr;
}

function deserializeVecErrorLabel(pos, ast) {
  const { uint32 } = ast.buffer,
    arr = [],
    pos32 = pos >> 2,
    len = uint32[pos32 + 2];
  pos = uint32[pos32];
  for (let i = 0; i < len; i++) {
    arr.push(deserializeErrorLabel(pos, ast));
    pos += 24;
  }
  return arr;
}

function deserializeVecStaticImport(pos, ast) {
  const { uint32 } = ast.buffer,
    arr = [],
    pos32 = pos >> 2,
    len = uint32[pos32 + 2];
  pos = uint32[pos32];
  for (let i = 0; i < len; i++) {
    arr.push(deserializeStaticImport(pos, ast));
    pos += 56;
  }
  return arr;
}

function deserializeVecStaticExport(pos, ast) {
  const { uint32 } = ast.buffer,
    arr = [],
    pos32 = pos >> 2,
    len = uint32[pos32 + 2];
  pos = uint32[pos32];
  for (let i = 0; i < len; i++) {
    arr.push(deserializeStaticExport(pos, ast));
    pos += 32;
  }
  return arr;
}

function deserializeVecDynamicImport(pos, ast) {
  const { uint32 } = ast.buffer,
    arr = [],
    pos32 = pos >> 2,
    len = uint32[pos32 + 2];
  pos = uint32[pos32];
  for (let i = 0; i < len; i++) {
    arr.push(deserializeDynamicImport(pos, ast));
    pos += 16;
  }
  return arr;
}

function deserializeVecSpan(pos, ast) {
  const { uint32 } = ast.buffer,
    arr = [],
    pos32 = pos >> 2,
    len = uint32[pos32 + 2];
  pos = uint32[pos32];
  for (let i = 0; i < len; i++) {
    arr.push(deserializeSpan(pos, ast));
    pos += 8;
  }
  return arr;
}

function deserializeVecImportEntry(pos, ast) {
  const { uint32 } = ast.buffer,
    arr = [],
    pos32 = pos >> 2,
    len = uint32[pos32 + 2];
  pos = uint32[pos32];
  for (let i = 0; i < len; i++) {
    arr.push(deserializeImportEntry(pos, ast));
    pos += 96;
  }
  return arr;
}

function deserializeVecExportEntry(pos, ast) {
  const { uint32 } = ast.buffer,
    arr = [],
    pos32 = pos >> 2,
    len = uint32[pos32 + 2];
  pos = uint32[pos32];
  for (let i = 0; i < len; i++) {
    arr.push(deserializeExportEntry(pos, ast));
    pos += 144;
  }
  return arr;
}
