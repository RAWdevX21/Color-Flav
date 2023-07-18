const inform = console.log;
const ColorFlava = new HSLColor;


class RGBColor {
  constructor(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
  }

  hexFlavUp() {
    const componentToHex = (c) => {
      const hex = c.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    };

    return `#${componentToHex(this.r)}${componentToHex(this.g)}${componentToHex(this.b)}`;
  }
}

class HSLColor extends RGBColor {
  hslFlavUp() {
    const max = Math.max(this.r, this.g, this.b) / 255;
    const min = Math.min(this.r, this.g, this.b) / 255;
    const delta = max - min;

    let h = 0;
    let s = 0;
    let l = (max + min) / 2;

    if (delta !== 0) {
      s = delta / (1 - Math.abs(2 * l - 1));

      switch (max) {
        case this.r / 255:
          h = ((this.g / 255 - this.b / 255) / delta) % 6;
          break;
        case this.g / 255:
          h = (this.b / 255 - this.r / 255) / delta + 2;
          break;
        case this.b / 255:
          h = (this.r / 255 - this.g / 255) / delta + 4;
          break;
      }

      h = Math.round(h * 60);
    }

    s = Math.round(s * 100);
    l = Math.round(l * 100);

    return { h, s, l };
  }

  toneUp() {
    const hsl = this.toHSL();
    const tints = [];

    for (let i = 1; i <= 10; i++) {
      const l = Math.max(0, Math.round(hsl.l + (100 - hsl.l) * i / 11));
      tints.push({ h: hsl.h, s: hsl.s, l });
    }

    return tints;
  }

  toneDown() {
    const hsl = this.toHSL();
    const shades = [];

    for (let i = 1; i <= 10; i++) {
      const l = Math.max(0, Math.round(hsl.l - (hsl.l * i) / 11));
      shades.push({ h: hsl.h, s: hsl.s, l });
    }

    return shades;
  }
}

// Example usage
const color = FlavUpTone(0, 100, 50);
console.log(color.hexFlavUp()); // Output: "#ff0000"
console.log(color.hslFlavUp()); // Output: { h: 0, s: 100, l: 50 }
console.log(color.toneUp()); // Output: Array of 10 tints
console.log(color.toneDown()); // Output: Array of 10 shades
