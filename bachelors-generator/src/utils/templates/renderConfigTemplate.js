const renderImportsTemplate = (schemas) => {
  return schemas
    .map(({ schemaName, mcsName }) => {
      return `import {${schemaName}} from "./${mcsName}/${schemaName}";`;
    })
    .join("\n");
};

const renderMockArrItemTemplate = (schemas) => {
  return schemas
    .map(({ schemaName }) => {
      return `\t{...${schemaName}},`;
    })
    .join("\n");
};

const renderConfigTemplate = (schemas) => {
  return `
${renderImportsTemplate(schemas)}

export const BROWSER_INTERCEPT = [
 ${renderMockArrItemTemplate(schemas)}
];
`.trim();
};

module.exports = { renderConfigTemplate };
