/**
 * routes indexer.All the indexers will have the logic to load all the available files on the fly
 * present within the folder.
 * @author Ritosh Yadav
 * @since Jan 01, 2019
 */
import fs from "fs";

const skip = "index.js";

const files = fs.readdirSync(__dirname);

/**
 * this expression will auto deploy all the routes in this path
 */
console.log("files",files)
export default app =>{
    console.log("hereeeee===>app",app)
    files.map(file => file !== skip && require(`./${file}`).default(app));

}