function getModels () {
  let {join, dirname} = require('path');
  const { readdirSync } = require('fs')
  const modelsDir = join(dirname(__filename)+'/');
  const getDirectories = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)
  const directories = getDirectories(modelsDir);
  let models = {};
  for(let dir of directories){
    if(dir !== 'db'){
      let dirents = readdirSync(`${modelsDir}/${dir}/`,{ withFileTypes: true });
      for(let dirent of dirents){
        models[dirent.name.replace('.js','')] = require(`${modelsDir}/${dir}/${dirent.name}`)
      }
    }
  }
  return models
}
module.exports=getModels()