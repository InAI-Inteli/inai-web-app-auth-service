const usuarioValidator = require('./usuarioValidator');
const templateValidator = require('./templateValidator');
const diretoriaValidator = require('./diretoriaValidator');
const membroDiretoriaValidator = require('./membroDiretoriaValidator');
const cargoValidator = require('./cargoValidator');

class ValidatorFactory {
    static getValidator(validatorName) {
        switch (validatorName) {
        case 'usuarios':
            return usuarioValidator;
        case 'template':
            return templateValidator;
        case 'diretorias':
            return diretoriaValidator;
        case 'membro-diretoria':
            return membroDiretoriaValidator;
        case 'cargos':
            return cargoValidator;
        default:
            return null;
        }
    }

    static getValidatorInstance(validatorName, language) {
        const Validator = ValidatorFactory.getValidator(validatorName);
        return new Validator(language);
    }

    static validate(validatorName, dto, language) {
        const validator = ValidatorFactory.getValidatorInstance(validatorName, language);
        return validator.validate(dto);
    }

    static validateAtualizacao(validatorName, dto, language) {
        const validator = ValidatorFactory.getValidatorInstance(validatorName, language);
        return validator.validateAtualizacao(dto);
    }
}

module.exports = ValidatorFactory;