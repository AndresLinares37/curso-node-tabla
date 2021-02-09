const argv = require('yargs')
                    .option('b',{
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        describe: 'Base a multiplicar'
                    })
                    .check((argv, options) => {
                        if ( isNaN(argv.b)){
                            throw 'La base debe ser un número'
                        }
                        return true;
                    })
                    .option('l',{
                        alias: 'listar',
                        type: 'boolean',
                        default: false,
                        demandOption: false,
                        describe: '¿Listar o no listar?'
                    })
                    .option('h',{
                        alias: 'hasta',
                        type: 'number',
                        demandOption: false,
                        default: 10,
                        describe: 'Limite a multiplicar'
                    })
                    .check((argv, options) => {
                        if ( isNaN(argv.h)){
                            throw 'El hasta debe ser un número'
                        }
                        return true;
                    })
                    .argv;

module.exports = argv;