const sonnet = document.getElementById('sonnet');
let sonnetText = sonnet.innerHTML;
console.log("sonnet", sonnetText);

var orphanIndex = sonnetText.indexOf("orphans");
console.log("orphanindex", orphanIndex);

var sonnetLength = sonnetText.length;
console.log("sonnetlength", sonnetText.length);

var sonnetUpdate = sonnetText.replace("winter", "yuletide");
console.log("replace", sonnetUpdate);

sonnetUpdate = sonnetUpdate.replace(/ the /g, " a large ");
console.log("sonnetUpdate", sonnetUpdate);

sonnet.innerHTML = sonnetUpdate;


