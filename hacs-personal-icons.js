var icons = {
  "window-shutter-half":[0,0,24,24,"M3 4H21V8H19V20H17V8H7V20H5V8H3V4M8 9H16V11H8V9M8 12H16V14H8V12M8"]
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
