import { c as create_ssr_component, a as add_attribute, v as validate_component, e as escape, b as each } from "../../chunks/index-2ac0d6f8.js";
import { io } from "socket.io-client";
const Youtube = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { videoId } = $$props;
  let { nextVideo } = $$props;
  if ($$props.videoId === void 0 && $$bindings.videoId && videoId !== void 0)
    $$bindings.videoId(videoId);
  if ($$props.nextVideo === void 0 && $$bindings.nextVideo && nextVideo !== void 0)
    $$bindings.nextVideo(nextVideo);
  return `<div id="${"player"}" class="${"my-3"}"></div>`;
});
const Close = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "1em" } = $$props;
  let { width = size } = $$props;
  let { height = size } = $$props;
  let { color = "currentColor" } = $$props;
  let { viewBox = "0 0 24 24" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.viewBox === void 0 && $$bindings.viewBox && viewBox !== void 0)
    $$bindings.viewBox(viewBox);
  return `<svg${add_attribute("width", width, 0)}${add_attribute("height", height, 0)}${add_attribute("viewBox", viewBox, 0)}><path d="${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}"${add_attribute("fill", color, 0)}></path></svg>`;
});
const Play = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "1em" } = $$props;
  let { width = size } = $$props;
  let { height = size } = $$props;
  let { color = "currentColor" } = $$props;
  let { viewBox = "0 0 24 24" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.viewBox === void 0 && $$bindings.viewBox && viewBox !== void 0)
    $$bindings.viewBox(viewBox);
  return `<svg${add_attribute("width", width, 0)}${add_attribute("height", height, 0)}${add_attribute("viewBox", viewBox, 0)}><path d="${"M8,5.14V19.14L19,12.14L8,5.14Z"}"${add_attribute("fill", color, 0)}></path></svg>`;
});
const PlayMusic = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentEmbed;
  let embedList;
  const socket = io();
  let searchEmbed = "";
  socket.on("setMusic", (data) => {
    if (currentEmbed != "") {
      embedList = [...embedList, data];
    } else {
      currentEmbed = data.embed;
    }
  });
  const removeFromQueue = (m) => {
    embedList.splice(embedList.indexOf(m), 1);
    embedList = [...embedList];
  };
  const changeMusic = () => {
    if (embedList.length === 0)
      return null;
    let nextMusic = embedList[0].embed;
    removeFromQueue(embedList[0]);
    return nextMusic;
  };
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    currentEmbed = "";
    embedList = [];
    $$rendered = `${$$result.head += `<script src="${"https://www.youtube.com/iframe_api"}" data-svelte="svelte-uqb4l9"><\/script>`, ""}

<div class="${"mt-10 flex flex-col w-full"}"><input name="${"music"}" id="${"inputMusic"}" placeholder="${"Youtube Key link"}" class="${"text-center h-8"}"${add_attribute("value", searchEmbed, 0)}>
	<button class="${"btn bg-c-dark-purple mt-2 border w-32 rounded mx-auto text-white"}">Search</button></div>

${!(currentEmbed === "") ? `<div class="${"flex justify-center"}">${validate_component(Youtube, "YouTube").$$render($$result, {
      nextVideo: changeMusic,
      videoId: currentEmbed
    }, {
      videoId: ($$value) => {
        currentEmbed = $$value;
        $$settled = false;
      }
    }, {})}</div>` : ``}

<div class="${escape(!(embedList.length === 0) ? "visible" : "invisible") + " overflow-x-auto h-auto w-full flex border"}">${each(embedList, (m) => {
      return `<div class="${"grow-0 shrink-0 h-auto w-48 bg-c-dark-purple text-white border relative cursor-pointer z-0"}"><span class="${"absolute right-1 top-1 z-10"}">${validate_component(Close, "Close").$$render($$result, {}, {}, {})}</span>
			<span class="${"absolute left-1 top-1 z-10"}">${validate_component(Play, "Play").$$render($$result, {}, {}, {})}</span>
			<p class="${"p-4 absolute"}">${escape(m.title)}</p>
			<img${add_attribute("src", m.thumbnail, 0)}${add_attribute("alt", m.title, 0)}>
		</div>`;
    })}</div>`;
  } while (!$$settled);
  return $$rendered;
});
export { PlayMusic as default };
