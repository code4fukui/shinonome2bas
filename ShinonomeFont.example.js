import { ShinonomeFont } from "./ShinonomeFont.js";

const size = 12; // 12, 14, 16, 18
const family = "latin1"; // hankaku, kanjic, kanjip, latin1, marumoji, mincho
const font = await ShinonomeFont.create(size, family);
//const c = "福";
const c = "G";
const p = font.getBitPattern(c);
p.forEach(i => console.log(i));
