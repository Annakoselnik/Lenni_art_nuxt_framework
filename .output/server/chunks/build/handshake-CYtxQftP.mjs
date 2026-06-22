import { openBlock, createElementBlock, createElementVNode } from 'vue';

const _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "110",
  height: "110",
  fill: "none"
};
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, [..._cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "#1F1E1E",
      d: "M0 0h110v110H0z"
    }, null, -1),
    createElementVNode("g", { "clip-path": "url(#clipPath_2)" }, [
      createElementVNode("path", { d: "M43 43h24v24H43z" }),
      createElementVNode("path", {
        fill: "#BC3324",
        d: "M59.48 53.41c-.39.39-1.04.39-1.43 0l-4.47-4.46-7.05 7.04-.66-.63a3 3 0 0 1 0-4.24l4.24-4.24a3 3 0 0 1 4.24 0L59.48 52c.39.39.39 1.02 0 1.41m.7-2.12c.78.78.78 2.05 0 2.83-1.27 1.27-2.61.22-2.83 0l-3.76-3.76-5.57 5.57a.996.996 0 0 0 0 1.41c.39.39 1.02.39 1.42 0l4.62-4.62.71.71-4.62 4.62a.996.996 0 0 0 0 1.41c.39.39 1.02.39 1.42 0l4.62-4.62.71.71-4.62 4.62a.998.998 0 0 0 1.41 1.41l4.62-4.62.71.71-4.62 4.62a.998.998 0 0 0 1.41 1.41l8.32-8.34a3 3 0 0 0 0-4.24l-4.24-4.24a3 3 0 0 0-4.18-.06z"
      })
    ], -1)
  ])]);
}
const handshake = { render };

export { handshake as default, render };
//# sourceMappingURL=handshake-CYtxQftP.mjs.map
