const fs = require("fs");
const path = require("path");
const parse = require("csv-parse/lib/sync");

function loadCsvData(filePath) {
  const csvFile = fs.readFileSync(
    path.resolve(__dirname, "..", "fixtures", filePath)
  );
  const records = parse(csvFile, {
    columns: true,
    skip_empty_lines: true,
  });
  return records;
}

module.exports = { loadCsvData };
