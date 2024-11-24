const validate = require('./validate');
const modelKey = require('./model.key')

module.exports = {
  ...validate,
  ...modelKey
};
