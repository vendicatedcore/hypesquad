# hypesquad
garbage code to change your discord hypesquad team!!1!!


Requires [__NODE.js__](https://nodejs.org/en) to run.

```bash
# 1. Create a new folder for the project
mkdir hypesquad
cd hypesquad

# 2. Initialize a new Node.js project 
npm init -y

# 3. Install axios
npm install axios

# 4. Create the JavaScript script file
touch hype.js

# 5. Open the file in your preferred text editor and configure token & hypesquad team
# If you're using nano:
nano hype.js
```

tuff snippet to get utoken of logged entity via devtools:

```js
(webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void 0).exports.default.getToken()
```
