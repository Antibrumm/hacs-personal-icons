var icons = {
  "window-shutter-half":[0,0,24,24,"M3 4H21V8H19V20H17V8H7V20H5V8H3V4M8 9H16V11H8V9M8 12H16V14H8V12M8"],
  "window-open":[0,0,24,24,"m 3 5 l 15 15 l 2 -2 l -15 -15 m -3 8 l 20 0 l -2 -2 l -16 0 m 3 0 l 4 0 l 2 2 l -4 0"],
  "window-closed":[0,0,24,24,"m 3 5 15 15 l 2 -2 l -15 -15 m 2 1 l 12 12 l 0 -2 l -10 -10"],
  "window-half":[0,0,24,24,"m 3 5 l 15 15 l 2 -2 l -15 -15 m -2 6 l 18 6 l -1 -2 l -15 -5 m 1.5 0.5 l 6 2 l 2.5 2.5 l -6 -2"]
};


async function getIcon(name) {
  if (!(name in icons)) {
    console.log(`Icon "${name}" not available`);
    return '';
  }
  
  var svgDef = icons[name];
  var primaryPath = svgDef[4];
  return {
    path: primaryPath,
    viewBox: svgDef[0] + " " + svgDef[1] + " " + svgDef[2] + " " + svgDef[3]
  };
}

window.customIconsets = window.customIconsets || {};
window.customIconsets["mine"] = getIcon;
