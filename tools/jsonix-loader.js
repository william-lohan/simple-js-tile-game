const { getOptions } = require('loader-utils');
const { validate } = require('schema-utils');
const { Jsonix } = require('jsonix');

const schema = {
  type: 'object',
  properties: {
    mappings: {
      type: 'array',
      items: {
        type: 'object'
      }
    },
  },
};

function jsonixLoader(source) {
  const options = getOptions(this);
  validate(schema, options);

  const context = new Jsonix.Context(options.mappings);
  const unmarshaller = context.createUnmarshaller();

  const unmarshalled = unmarshaller.unmarshalString(source);

  return `export default ${JSON.stringify(unmarshalled)}`;
}

module.exports = jsonixLoader;
