# Wishlist - Node

## Getting Started

First, start mongo server instance with Doccker

```bash
docker run --name mongo -d mongo
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
