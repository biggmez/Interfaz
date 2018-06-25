(function(window, undefined) {
  var dictionary = {
    "bba8c084-1439-4e88-990c-091720de8366": "RECONOCIOMIENTO_FACIAL",
    "7b499e3c-4a01-43f1-aa6f-25c6690a42b9": "GPS_LUGAR_ESTANCO_IR",
    "3243e84c-6ded-4cf3-8271-3b5e2e87b0d0": "GPS_INICIO",
    "344e6cbb-e7e7-4a5f-85a4-bcbefa23e329": "GPS_LUGAR_AGREGADO",
    "86d3ef64-9e7d-4ce5-8c3d-3f660baae98f": "GPS_AGREGARLugar",
    "ad44fcb4-0de7-4ba8-852d-5fa4b7b0643f": "INICIO",
    "1653aac8-88b8-4551-bfdb-b729b40823d3": "ENTRADA_1429",
    "ac8183dc-ed61-4761-94dc-a04949231074": "RECONOCIOMIENTO_FACIALeDCION",
    "3185cf85-df4f-4dbc-9b99-49861649ce71": "RECONOCIOMIENTO_AGREGAR",
    "e73b655d-d3ec-4dcc-a55c-6e0293422bde": "960 grid - 16 columns",
    "ef07b413-721c-418e-81b1-33a7ed533245": "960 grid - 12 columns",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);