var icons = {
  "window-shutter-half":[0,0,24,24,"M3 4H21V8H19V20H17V8H7V20H5V8H3V4M8 9H16V11H8V9M8 12H16V14H8V12M8"],
  "skylight-open":[0,0,24,24,"M 6 11 H 18 V 4 H 6 Z V 11 M 18 13 H 6 V 20 H 18 V 13 M 6 2 H 18 A 2 2 0 0 1 20 4 V 20 A 2 2 0 0 1 18 22 H 6 A 2 2 0 0 1 4 20 V 4 A 2 2 0 0 1 6 2 Z"],
  "skylight-closed":[0,0,24,24,"M 6 18 H 18 V 6 H 6 V 18 M 6 2 H 18 A 2 2 0 0 1 20 4 V 20 A 2 2 0 0 1 18 22 H 6 A 2 2 0 0 1 4 20 V 4 A 2 2 0 0 1 6 2 Z"],
  "skylight-half":[0,0,24,24,"M 6 8 H 18 V 4 H 6 V 8 M 18 10 H 6 V 15 H 18 V 10 M 6 20 H 18 V 17 H 6 V 20 M 6 2 H 18 A 2 2 0 0 1 20 4 V 20 A 2 2 0 0 1 18 22 H 6 A 2 2 0 0 1 4 20 V 4 A 2 2 0 0 1 6 2 Z"]
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
