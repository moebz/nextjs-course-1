import Database from "../../../database/db";

const allAvos = async (request, response) => {
  const db = Database;
  const allEntries = await db.getAll();

  response.statusCode = 200;
  response.setHeader("Content-type", "application/json");
  response.end(JSON.stringify({ data: allEntries }));
};

export default allAvos;
