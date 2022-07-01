import * as path from "path"
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url)

console.log('Название файла: ', path.basename(__filename))