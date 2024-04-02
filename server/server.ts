import createPlugin from 'https://raw.githubusercontent.com/extism/js-sdk/main/src/mod.ts';

const plugin = await createPlugin(
    'https://github.com/extism/plugins/releases/latest/download/count_vowels.wasm',
    { useWasi: true }
);

let out = await plugin.call("count_vowels", "Hello, World!");
console.log(out.text())
// => '{"count":3,"total":3,"vowels":"aeiouAEIOU"}'

Deno.serve((_request: Request) => {
    return new Response("Hello, world!");
  });