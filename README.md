# University List Germany for Javascript
At the moment, this repository provides three things, all related to a list of Germany's universities and how that can be used as simple as possible from Node.js

1. Provide [a bunch of simple information on all of Germany's universities](./data) which aims to be as up-to-date as possible
2. An [npm module](./npm) for Node.js which makes it simple to use this university data from JavaScript/TypeScript as easy as possible.
3. [Another simple module](./wiki-parser) written in typescript that parses [Wikipedia's current list of universities in Germany](https://de.wikipedia.org/wiki/Liste_der_Hochschulen_in_Deutschland)

## TODO: 
So this lists lists a couple of tasks someone can do in the future (if anyone should have free time left...)
- [ ] Check details for all universities (Is the parsed data correct?)
- [ ] Add more nicknames
- [ ] Add tests to check if uni format is correct (primarily for Pull Requests)
- [ ] Add explanation on how to do a Pull Request (to this repo) with proposed data changes
- [ ] Add university email domains so that we get a complete list with the official email domains of all universities in Germany (so we can better use them for verification)
- [ ] Explain repository structure and basic idea
- [ ] add explanation to the format's fields