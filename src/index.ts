import http from "http";

import { router } from "./router";

const server = http.createServer((req, res) => router(req,res));

const PORT = process.env.PORT || 3013;

server.listen(PORT, () => console.log("server is running"));
