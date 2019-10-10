//const tpl =  makeTemplate('hello ${name}')
//const name = 'world';
//tpl({name});
const makeTemplate = (templateString) => {
  return (templateData) => new Function(`{${Object.keys(templateData).join(',')}}`, 'return `' + templateString + '`')(templateData);
}

module.exports = makeTemplate;
