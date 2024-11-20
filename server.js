import express from "express";

const posts = [
    {
        id: 1,
        descricao: "Sunset over the ocean",
        imagem: "https://placecats.com/millie/300/150",
      },
      {
        id: 2,
        descricao: "Cute kitten playing with yarn",
        imagem: "https://placecats.com/millie/300/150",
      },
      {
        id: 3,
        descricao: "Mountain landscape with snow",
        imagem: "https://placecats.com/millie/300/150",
      },
      {
        id: 4,
        descricao: "Delicious pizza with pepperoni",
        imagem: "https://placecats.com/millie/300/150",
      },
      {
        id: 5,
        descricao: "A cozy living room with a fireplace",
        imagem: "https://placecats.com/millie/300/150",
      },
    ];

const app = express();
app.use(express.json())

app.listen(3000, () => {
    console.log("Servidor escutando...")
})

app.get("/posts", (req, res) => {
    res.status(200).json(posts)
});

function findPostByid(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id)
    })
}

app.get("/posts/:id", (req, res) => {
    const index = findPostByid(req.params.id)
    res.status(200).json(posts[index]);
});