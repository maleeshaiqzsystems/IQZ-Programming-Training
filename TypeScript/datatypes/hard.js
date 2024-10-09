"use strict";
//function overload
function getItemLength(nameOrNames) {
    if (typeof nameOrNames === "string") {
        return nameOrNames.length;
    }
    else if (Array.isArray(nameOrNames)) {
        return "hello world";
    }
    return 0;
}
getItemLength(["", ""]);
