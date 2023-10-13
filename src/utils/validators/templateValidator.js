class ValidatorBase {
  constructor(schema) {
    this.schema = schema;
  }

  validate(data) {
    return this.schema.validate(data);
  }
}

module.exports = ValidatorBase;