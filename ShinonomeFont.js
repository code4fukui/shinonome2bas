export class ShinonomeFont {
  static async create(size = 16, fontname = "kanjic") {
    const url = "https://code4fukui.github.io/shinonome-font/" + size + "/" + fontname + "/font_src.bit";
    const font = await (await fetch(url)).text();
    return new ShinonomeFont(font);
  }
  constructor(font) {
    this.ss = font.split("\n");
  }
  getBitPattern(c) {
    const ss = this.ss;
    const chk = "# " + c;
    const cnv = (s) => {
      const res = [];
      for (const c of s) {
        res.push(c == "." ? "0" : "1");
      }
      return res.join("");
    };
    for (let i = 0; i < ss.length; i++) {
      const s = ss[i];
      if (s.endsWith(chk)) {
        const res = [];
        for (let j = i - 16; j < i; j++) {
          res.push(cnv(ss[j]));
        }
        return res;
      }
    }
    return null;
  };
}
