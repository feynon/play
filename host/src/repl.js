const createPlugin = require("@extism/extism")

const plugin = await createPlugin(
    'https://github.com/extism/plugins/releases/latest/download/count_vowels.wasm',
    { useWasi: true }
);
let out = await plugin.call("count_vowels", "Hello, World!");
console.log(out.text())
// => '{"count":3,"total":3,"vowels":"aeiouAEIOU"}'