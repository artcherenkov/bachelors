function objectToString(obj, indent = "") {
  const nextIndent = indent + "  ";
  if (obj instanceof RegExp) {
    return obj.toString();
  } else if (Array.isArray(obj)) {
    if (obj.length === 0) {
      return "[]";
    }
    let result = "[\n";
    for (let i = 0; i < obj.length; i++) {
      result += nextIndent + objectToString(obj[i], nextIndent);
      if (i !== obj.length - 1) {
        result += ",";
      }
      result += "\n";
    }
    result += indent + "]";
    return result;
  } else if (typeof obj === "object" && obj !== null) {
    const keys = Object.keys(obj);
    if (keys.length === 0) {
      return "{}";
    }
    let result = "{\n";
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      result += nextIndent + key + ": " + objectToString(obj[key], nextIndent);
      if (i !== keys.length - 1) {
        result += ",";
      }
      result += "\n";
    }
    result += indent + "}";
    return result;
  } else {
    return JSON.stringify(obj);
  }
}

module.exports = { objectToString };
