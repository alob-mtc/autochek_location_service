import yamlFileWriter = require('write-yaml-file');
import fileSystem = require('fs');
import { typeormConfigManager } from '../Config/typeorm.config.manger';

class FileWriter {
   public static writeTypeormYamlFile(): FileWriter {
      yamlFileWriter('ormconfig.yaml', { default: typeormConfigManager.getTypeOrmConfig() });
      return this;
   }

   // For Json file
   public static writeTypeormJSONFile(): FileWriter {
      fileSystem.writeFileSync(
         'ormconfig.json', // path.resolve(__dirname + '/../ormconfig.json') to choose directory
         JSON.stringify(typeormConfigManager.getTypeOrmConfig(), null, 2),
      );
      return this;
   }
}

FileWriter.writeTypeormYamlFile();
