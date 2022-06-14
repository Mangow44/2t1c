export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"start-c94ae24f.js","js":["start-c94ae24f.js","chunks/index-f1c08749.js"],"css":[]},
		nodes: [
			() => import('./server/nodes/0.js'),
			() => import('./server/nodes/1.js'),
			() => import('./server/nodes/2.js'),
			() => import('./server/nodes/3.js'),
			() => import('./server/nodes/4.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "playMusic",
				pattern: /^\/playMusic\/?$/,
				names: [],
				types: [],
				path: "/playMusic",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "test",
				pattern: /^\/test\/?$/,
				names: [],
				types: [],
				path: "/test",
				shadow: null,
				a: [0,4],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
