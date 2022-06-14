import { c as create_ssr_component, a as add_attribute, v as validate_component, e as escape } from "../../chunks/index-2ac0d6f8.js";
var app = "";
const Coffee = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size: size2 = "1em" } = $$props;
  let { width = size2 } = $$props;
  let { height = size2 } = $$props;
  let { color = "currentColor" } = $$props;
  let { viewBox = "0 0 24 24" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size2 !== void 0)
    $$bindings.size(size2);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.viewBox === void 0 && $$bindings.viewBox && viewBox !== void 0)
    $$bindings.viewBox(viewBox);
  return `<svg${add_attribute("width", width, 0)}${add_attribute("height", height, 0)}${add_attribute("viewBox", viewBox, 0)}><path d="${"M2,21H20V19H2M20,8H18V5H20M20,3H4V13A4,4 0 0,0 8,17H14A4,4 0 0,0 18,13V10H20A2,2 0 0,0 22,8V5C22,3.89 21.1,3 20,3Z"}"${add_attribute("fill", color, 0)}></path></svg>`;
});
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size: size2 = "1em" } = $$props;
  let { width = size2 } = $$props;
  let { height = size2 } = $$props;
  let { color = "currentColor" } = $$props;
  let { viewBox = "0 0 24 24" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size2 !== void 0)
    $$bindings.size(size2);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.viewBox === void 0 && $$bindings.viewBox && viewBox !== void 0)
    $$bindings.viewBox(viewBox);
  return `<svg${add_attribute("width", width, 0)}${add_attribute("height", height, 0)}${add_attribute("viewBox", viewBox, 0)}><path d="${"M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"}"${add_attribute("fill", color, 0)}></path></svg>`;
});
let size = "32px";
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="${"flex items-center w-full h-16 bg-c-dark-purple text-white relative"}"><h1 class="${"text-3xl mx-5 underline font-bold"}"><a class="${"flex items-center"}" href="${"/"}">2T1C
			<span class="${"mt-2"}">${validate_component(Coffee, "Coffee").$$render($$result, { size }, {}, {})}</span></a></h1>
	<div class="${"mx-10 invisible sm:visible"}"><button class="${"w-24 hover:underline"}">PlayMusic</button>
		<button class="${"w-24 hover:underline"}">Du th\xE9</button></div>
	<div class="${escape("invisible") + " flex flex-col w-full sm:hidden bg-c-mid-purple absolute top-16 z-10"}"><button class="${"h-10 hover:underline"}">PlayMusic</button>
		<button class="${"h-10 hover:underline"}">Du th\xE9</button></div>
	<div class="${"block mt-1.5 sm:hidden absolute right-3"}"><button>${validate_component(Menu, "Menu").$$render($$result, { size }, {}, {})}</button></div>
</nav>`;
});
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
${slots.default ? slots.default({}) : ``}`;
});
export { _layout as default };
