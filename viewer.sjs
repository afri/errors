@ = require([
  'mho:std',
  'mho:app',
  {id:'test', name:'test'}
]);
try {
@test.testFunction();
}catch(e) { 
  @mainContent .. @appendContent(`<pre>${String(e)}</pre>`);
}
