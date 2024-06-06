const allbooks = {
  "1 Nephi": { id: "1Ne", book: "1 Nephi", vol: "bom", start: 1, end: 22 },
  "2 Nephi": { id: "2Ne", book: "2 Nephi", vol: "bom", start: 1, end: 33 },
  Jacob: { id: "Jacob", book: "Jacob", vol: "bom", start: 1, end: 7 },
  Enos: { id: "Enos", book: "Enos", vol: "bom", start: 0, end: 0 },
  Jarom: { id: "Jarom", book: "Jarom", vol: "bom", start: 0, end: 0 },
  Omni: { id: "Omni", book: "Omni", vol: "bom", start: 0, end: 0 },
  "Words of Mormon": {
    id: "WoM",
    book: "Words of Mormon",
    vol: "bom",
    start: 0,
    end: 0,
  },
  Mosiah: { id: "Mosiah", book: "Mosiah", vol: "bom", start: 1, end: 29 },
  Alma: { id: "Alma", book: "Alma", vol: "bom", start: 1, end: 63 },
  Helaman: { id: "Hel", book: "Helaman", vol: "bom", start: 1, end: 16 },
  "3 Nephi": { id: "3Ne", book: "3 Nephi", vol: "bom", start: 1, end: 30 },
  "4 Nephi": { id: "4Ne", book: "4 Nephi", vol: "bom", start: 0, end: 0 },
  Mormon: { id: "Morm", book: "Mormon", vol: "bom", start: 1, end: 9 },
  Ether: { id: "Ether", book: "Ether", vol: "bom", start: 1, end: 15 },
  Moroni: { id: "Moro", book: "Moroni", vol: "bom", start: 1, end: 10 },
  "Doctrine and Covenants": {
    id: "DC",
    book: "Doctrine and Covenants",
    vol: "dc",
    start: 1,
    end: 138,
  },
  Moses: { id: "Moses", book: "Moses", vol: "pgp", start: 1, end: 8 },
  Abraham: { id: "Abr", book: "Abraham", vol: "pgp", start: 1, end: 5 },
  "JS Matthew": {
    id: "JSMatt",
    book: "JS Matthew",
    vol: "pgp",
    start: 0,
    end: 0,
  },
  "JS History": {
    id: "JSHist",
    book: "JS History",
    vol: "pgp",
    start: 0,
    end: 0,
  },
  Matthew: { id: "Matt", book: "Matthew", vol: "nt", start: 1, end: 28 },
  Mark: { id: "Mark", book: "Mark", vol: "nt", start: 1, end: 16 },
  Luke: { id: "Luke", book: "Luke", vol: "nt", start: 1, end: 24 },
  John: { id: "John", book: "John", vol: "nt", start: 1, end: 21 },
  Acts: { id: "Acts", book: "Acts", vol: "nt", start: 1, end: 28 },
  Romans: { id: "Rom", book: "Romans", vol: "nt", start: 1, end: 16 },
  "1 Corinthians": {
    id: "1Cor",
    book: "1 Corinthians",
    vol: "nt",
    start: 1,
    end: 16,
  },
  "2 Corinthians": {
    id: "2Cor",
    book: "2 Corinthians",
    vol: "nt",
    start: 1,
    end: 13,
  },
  Galatians: { id: "Gal", book: "Galatians", vol: "nt", start: 1, end: 6 },
  Ephesians: { id: "Eph", book: "Ephesians", vol: "nt", start: 1, end: 6 },
  Philipians: { id: "Phi", book: "Philippians", vol: "nt", start: 1, end: 4 },
  Colossians: { id: "Col", book: "Colossians", vol: "nt", start: 1, end: 4 },
  "1 Thessalonians": {
    id: "1Th",
    book: "1 Thessalonians",
    vol: "nt",
    start: 1,
    end: 5,
  },
  "2 Thessalonians": {
    id: "2Th",
    book: "2 Thessalonians",
    vol: "nt",
    start: 1,
    end: 3,
  },
  "1 Timothy": { id: "1Tim", book: "1 Timothy", vol: "nt", start: 1, end: 6 },
  " 2Timoth": { id: "2Tim", book: "2 Timothy", vol: "nt", start: 1, end: 4 },
  Titus: { id: "Titus", book: "Titus", vol: "nt", start: 1, end: 3 },
  Hebrews: { id: "Heb", book: "Hebrews", vol: "nt", start: 1, end: 13 },
  James: { id: "Jas", book: "James", vol: "nt", start: 1, end: 5 },
  "1 Peter": { id: "1Pet", book: "1 Peter", vol: "nt", start: 1, end: 5 },
  "2 Peter": { id: "2Pet", book: "2 Peter", vol: "nt", start: 1, end: 3 },
  "1 John": { id: "1Jn", book: "1 John", vol: "nt", start: 1, end: 5 },
  "2 John": { id: "2Jn", book: "2 John", vol: "nt", start: 0, end: 0 },
  "3 John": { id: "3Jn", book: "3 John", vol: "nt", start: 0, end: 0 },
  Jude: { id: "Jude", book: "Jude", vol: "nt", start: 0, end: 0 },
  Revelations: { id: "Rev", book: "Revelations", vol: "nt", start: 1, end: 22 },
};

const vols = [
  "Book of Mormon",
  "Doctrine and Covenants",
  "Pearl of Great Price",
  "New Testament",
];

const volbooks = {
  "Book of Mormon": [
    "1 Nephi",
    "2 Nephi",
    "Jacob",
    "Enos",
    "Jarom",
    "Omni",
    "Words of Mormon",
    "Mosiah",
    "Alma",
    "Helaman",
    "3 Nephi",
    "4 Nephi",
    "Mormon",
    "Ether",
    "Moroni",
  ],
  "Pearl of Great Price": ["Moses", "Abraham", "JS Matthew", "JS History"],
  "New Testament": [
    "Matthew",
    "Mark",
    "Luke",
    "John",
    "Acts",
    "Romans",
    "1 Corinthians",
    "2 Corinthians",
    "Galatians",
    "Ephesians",
    "Philipians",
    "Colossians",
    "1 Thessalonians",
    "2 Thessalonians",
    "1 Timothy",
    " 2Timoth",
    "Titus",
    "Hebrews",
    "James",
    "1 Peter",
    "2 Peter",
    "1 John",
    "2 John",
    "3 John",
    "Jude",
    "Revelations",
  ],
  "Doctrine and Covenants": ["Doctrine and Covenants"],
};

export default allbooks;
export { vols, allbooks, volbooks };
