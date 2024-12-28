const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../../msg.json");

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Método não permitido" }),
    };
  }

  const { name, comment } = JSON.parse(event.body);

  if (!name || !comment || name.length > 7 || comment.length > 7) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Nick e comentário devem ter no máximo 7 caracteres." }),
    };
  }

  const newComment = { name, comment, date: new Date().toISOString() };

  try {
    let comments = [];
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath);
      comments = JSON.parse(data);
    }

    comments.push(newComment);

    fs.writeFileSync(filePath, JSON.stringify(comments, null, 2));

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Comentário salvo com sucesso!" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Erro ao salvar o comentário." }),
    };
  }
};
