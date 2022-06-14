import { c as create_ssr_component, d as createEventDispatcher, a as add_attribute, v as validate_component } from "../../chunks/index-2ac0d6f8.js";
import "youtube-player";
const Src = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id = void 0 } = $$props;
  let { videoId } = $$props;
  let { options = void 0 } = $$props;
  let { class: className } = $$props;
  let playerElem;
  createEventDispatcher();
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.videoId === void 0 && $$bindings.videoId && videoId !== void 0)
    $$bindings.videoId(videoId);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<div${add_attribute("class", className, 0)}><div${add_attribute("id", id, 0)}${add_attribute("this", playerElem, 0)}></div></div>`;
});
const Test = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Src, "YouTube").$$render($$result, { videoId: "zw47ymC0RNQ" }, {}, {})}`;
});
export { Test as default };
