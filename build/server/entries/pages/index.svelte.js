import { c as create_ssr_component, a as add_attribute, v as validate_component } from "../../chunks/index-2ac0d6f8.js";
const Bed = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  return `<svg${add_attribute("width", width, 0)}${add_attribute("height", height, 0)}${add_attribute("viewBox", viewBox, 0)}><path d="${"M19,7H11V14H3V5H1V20H3V17H21V20H23V11A4,4 0 0,0 19,7M7,13A3,3 0 0,0 10,10A3,3 0 0,0 7,7A3,3 0 0,0 4,10A3,3 0 0,0 7,13Z"}"${add_attribute("fill", color, 0)}></path></svg>`;
});
const Sofa = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  return `<svg${add_attribute("width", width, 0)}${add_attribute("height", height, 0)}${add_attribute("viewBox", viewBox, 0)}><path d="${"M12.5 7C12.5 5.89 13.39 5 14.5 5H18C19.1 5 20 5.9 20 7V9.16C18.84 9.57 18 10.67 18 11.97V14H12.5V7M6 11.96V14H11.5V7C11.5 5.89 10.61 5 9.5 5H6C4.9 5 4 5.9 4 7V9.15C5.16 9.56 6 10.67 6 11.96M20.66 10.03C19.68 10.19 19 11.12 19 12.12V15H5V12C5 10.9 4.11 10 3 10S1 10.9 1 12V17C1 18.1 1.9 19 3 19V21H5V19H19V21H21V19C22.1 19 23 18.1 23 17V12C23 10.79 21.91 9.82 20.66 10.03Z"}"${add_attribute("fill", color, 0)}></path></svg>`;
});
let size = "24px";
const Blabla = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"relative w-full sm:h-64 text-white"}"><div class="${"sm:absolute sm:top-5 m-5 sm:left-20 bg-c-mid-purple p-2 border rounded-lg"}"><h2 class="${"font-bold flex items-center text-xl"}">Un lieu de repos
			<span class="${"ml-2"}">${validate_component(Bed, "Bed").$$render($$result, { size }, {}, {})}</span></h2>
		<p class="${"italic"}">Venez donc vous posez autour d&#39;une petite tasse</p></div>

	<div class="${"sm:absolute sm:bottom-5 m-5 sm:right-20 bg-c-mid-purple p-2 border rounded-lg"}"><h2 class="${"font-bold flex items-center text-xl"}">La convivialit\xE9 avant tout
			<span class="${"ml-2 mb-0.5"}">${validate_component(Sofa, "Sofa").$$render($$result, { size }, {}, {})}</span></h2>
		<p class="${"italic"}">R\xE9servez un canap\xE9 ou m\xEAme un fauteuil avec vos amis</p></div>
</div>`;
});
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Blabla, "About").$$render($$result, {}, {}, {})}`;
});
export { Routes as default };
