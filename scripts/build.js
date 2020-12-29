const { build } = require("esbuild")

const __DEV__ = process.env.NODE_ENV || "development"

build({
	entryPoints: ["src/index.tsx"],
	define: {
		// "__DEV__": JSON.stringify(process.env.NODE_ENV || "development"),
		"process.env.NODE_ENV": JSON.stringify(__DEV__),
	},
	bundle: true,
	minify: __DEV__ === "production",
	outfile: "build/bundle.js",
})
