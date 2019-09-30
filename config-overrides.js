const { override, fixBabelImports, addLessLoader,  addDecoratorsLegacy } = require('customize-cra');
const theme = require('./theme.js')

module.exports = override(
       // eslint-disable-next-line no-undef
       fixBabelImports('import', {
         libraryName: 'antd',
         libraryDirectory: 'es',
         style: true,
       }),
       addDecoratorsLegacy(),
        // eslint-disable-next-line no-undef
        addLessLoader({ 
           javascriptEnabled: true, 
           modifyVars: theme
        }),
    );
  

    