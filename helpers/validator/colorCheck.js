export default function checkFormat(baseColor) {
    // Check input format
    switch (true) {
      case baseColor.startsWith("#"):
        rgbColor = hexToRgb(baseColor);
        break;
      case baseColor.startsWith("hsl("):
        const hslValues = baseColor
          .match(/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/)
          .slice(1)
          .map(parseFloat);
        hslColor = {
          h: hslValues[0],
          s: hslValues[1] / 100,
          l: hslValues[2] / 100,
        };
        rgbColor = hslToRgb(hslColor.h, hslColor.s, hslColor.l);
        break;
      case baseColor.startsWith("rgba("):
        const rgbaValues = baseColor
          .match(/rgba\((\d+),\s*([\d.]+),\s*([\d.]+),\s*([\d.]+)\)/)
          .slice(1)
          .map(parseFloat);
        rgbColor = {
          r: rgbaValues[0],
          g: rgbaValues[1],
          b: rgbaValues[2],
        };
        break;
      default:
        // Unsupported format
        return [];
    }
  }