const fs = require("fs/promises");

// Read data from the JSON file
async function readDataFromFile(filePath) {
  try {
    const data = await fs.readFile(filePath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading data from file:", error);
    return null;
  }
}

// Write data to the JSON file
async function writeDataToFile(filePath, data) {
  try {
    await fs.writeFile(filePath, JSON.stringify(data, null, 2));
    console.log("Data written to file successfully.");
  } catch (error) {
    console.error("Error writing data to file:", error);
  }
}

// Retrieve paginated data from the JSON file
async function getPaginatedData(filePath, page = 1, limit = 9) {
  const data = await readDataFromFile(filePath);
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  return data.slice(startIndex, endIndex);
}

// Create a new entry in the JSON file
async function createData(filePath, newData) {
  const data = await readDataFromFile(filePath);
  data.push(newData);
  await writeDataToFile(filePath, data);
}

// Retrieve a specific entry from the JSON file by ID
async function getDataById(filePath, id) {
  const data = await readDataFromFile(filePath);
  return data.find((item) => item.id === id);
}

// Update a specific entry in the JSON file by ID
async function updateDataById(filePath, id, updatedData) {
  const data = await readDataFromFile(filePath);
  const index = data.findIndex((item) => item.id === id);

  if (index !== -1) {
    data[index] = { ...data[index], ...updatedData };
    await writeDataToFile(filePath, data);
    console.log("Data updated successfully.");
  } else {
    console.error("Data not found.");
  }
}

// Delete a specific entry from the JSON file by ID
async function deleteDataById(filePath, id) {
  const data = await readDataFromFile(filePath);
  const updatedData = data.filter((item) => item.id !== id);

  if (data.length !== updatedData.length) {
    await writeDataToFile(filePath, updatedData);
    console.log("Data deleted successfully.");
  } else {
    console.error("Data not found.");
  }
}

module.exports = {
  getPaginatedData,
  createData,
  getDataById,
  updateDataById,
  deleteDataById,
};
