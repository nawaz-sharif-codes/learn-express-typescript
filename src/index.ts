import express, { type Request, type Response } from "express";
import type { User } from "./types/user.ts";
import dotenv from "dotenv";
import type { UserParams } from "./types/user-params.ts";
import type { UserRequestBody } from "./types/user-requestbody.ts";
import type { UserQuery } from "./types/user-query.ts";
import type { CreateUser, UserResponse } from "./types/user-response.ts";

dotenv.config();

const app = express();
app.use(express.json())
const PORT = Number(process.env.PORT) || 8080;

app.get("/user", (request: Request, response: Response) => {
  const user: User = {
    firstName: "Nawaz",
    lastName: "Sharif",
    email: "nawaz@gmail.com",
    contactNumber: "9063656763",
  };
  response
    .status(200)
    .json({ success: true, user, message: "User fetched successfully" });
});

app.get(
  "/user/:id",
  (
    request: Request<UserParams, {}, UserRequestBody, UserQuery>,
    response: Response<UserResponse>,
  ) => {
    console.log(request.params)
    console.log(request.body)
    console.log(request.query)

    const id = request.params.id;
    const email = request.body.email;
    const contactNumber = request.body.contactNumber;
    const page = request.query.page;
    const limit = request.query.limit;

    const data : CreateUser = {
        id,email,contactNumber,page,limit
    }

    response.status(200).json({success : true, data})
  },
);

app.listen(PORT, () => {
  console.log(`Server is running on PORT : ${PORT}`);
});
