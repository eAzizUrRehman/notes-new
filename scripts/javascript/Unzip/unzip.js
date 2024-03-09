const fs = require("fs");
const extract = require("extract-zip");
const path = require("path");

const src_dir = path.resolve("./cwhnotes");
const dst_dir = path.resolve("./Harry");

console.log(`Source directory (absolute path): ${src_dir}`);
console.log(`Destination directory (absolute path): ${dst_dir}`);

fs.readdirSync(src_dir).forEach((file) => {
  if (path.extname(file) === ".zip") {
    const file_path = path.join(src_dir, file);
    const unzip_dir = path.join(
      dst_dir,
      path.basename(file, ".zip").replace(/-/g, " ")
    );
    console.log(`Unzipping ${file_path} to ${unzip_dir}`);
    fs.mkdirSync(unzip_dir, { recursive: true });
    extract(file_path, { dir: unzip_dir })
      .then(() => console.log(`Extracted ${file} to ${unzip_dir}`))
      .catch((err) => console.error(`Failed to extract ${file}: ${err}`));
  }
});
