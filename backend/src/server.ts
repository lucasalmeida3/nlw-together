import express from "express";


const app =  express();

app.get("/test", (request, response) => {
    return response.send("Olá mundo");
});

app.post("/test-post", (request, response) => {
    return response.send("Olá mundo método POST");
})

app.listen(3000, () => console.log("Server is running"));