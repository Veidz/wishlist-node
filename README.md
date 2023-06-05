# Wishlist - Node

[Next Frontend](https://github.com/Veidz/wishlist-next)<br/>
[ASP.NET Backend](https://github.com/Veidz/wishlist-aspnet)

## Getting Started

First, start mongo server instance with Docker

```bash
docker run -e MONGO_INITDB_ROOT_USERNAME=root -e MONGO_INITDB_ROOT_PASSWORD=root -p 27016:27017 -d mongo
```

After that, create a <code>.env</code> file in the root folder following the <code>.env.example</code> sample.

Then, install the project dependencies:
```bash
npm install
```

Finally, run the development server:
```bash
npm run dev
```

The server will be running at http://localhost:5050 where 5050 is the env port.
