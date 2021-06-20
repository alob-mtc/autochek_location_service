"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yamlFileWriter = require("write-yaml-file");
const fileSystem = require("fs");
const typeorm_config_manger_1 = require("../Config/typeorm.config.manger");
class FileWriter {
    static writeTypeormYamlFile() {
        yamlFileWriter('ormconfig.yaml', { default: typeorm_config_manger_1.typeormConfigManager.getTypeOrmConfig() });
        return this;
    }
    static writeTypeormJSONFile() {
        fileSystem.writeFileSync('ormconfig.json', JSON.stringify(typeorm_config_manger_1.typeormConfigManager.getTypeOrmConfig(), null, 2));
        return this;
    }
}
FileWriter.writeTypeormYamlFile();
//# sourceMappingURL=write.file.script.js.map