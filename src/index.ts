import { promises as fs } from 'fs'
import getTheme from './theme'

const acmeTheme = getTheme({
  theme: "acme",
  name: "Acme",
});

const goPlaygroundTheme = getTheme({
  theme: "go-playground",
  name: "Go - Playground",
});

const goSourceTheme = getTheme({
  theme: "go-source",
  name: "Go - Source",
});

fs.mkdir("./themes", { recursive: true })
  .then(() => Promise.all([
    fs.writeFile("./themes/acme.json", JSON.stringify(acmeTheme, null, 2)),
    fs.writeFile("./themes/go-playground.json", JSON.stringify(goPlaygroundTheme, null, 2)),
    fs.writeFile("./themes/go-source.json", JSON.stringify(goSourceTheme, null, 2)),
  ]))
  .catch(() => process.exit(1))
