// vite.config.js
import { defineConfig } from "file:///C:/Users/User/Dropbox/Course/HexSchool/2024-%E5%88%87%E7%89%88%E4%B8%8A%E8%AA%B2%E8%A8%98%E9%8C%84/HexSchool-WebPageLayout_2024/WeeklyTasks/week6/node_modules/vite/dist/node/index.js";
import { ViteEjsPlugin } from "file:///C:/Users/User/Dropbox/Course/HexSchool/2024-%E5%88%87%E7%89%88%E4%B8%8A%E8%AA%B2%E8%A8%98%E9%8C%84/HexSchool-WebPageLayout_2024/WeeklyTasks/week6/node_modules/vite-plugin-ejs/index.js";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { glob } from "file:///C:/Users/User/Dropbox/Course/HexSchool/2024-%E5%88%87%E7%89%88%E4%B8%8A%E8%AA%B2%E8%A8%98%E9%8C%84/HexSchool-WebPageLayout_2024/WeeklyTasks/week6/node_modules/glob/dist/mjs/index.js";
import liveReload from "file:///C:/Users/User/Dropbox/Course/HexSchool/2024-%E5%88%87%E7%89%88%E4%B8%8A%E8%AA%B2%E8%A8%98%E9%8C%84/HexSchool-WebPageLayout_2024/WeeklyTasks/week6/node_modules/vite-plugin-live-reload/dist/index.js";
var __vite_injected_original_import_meta_url = "file:///C:/Users/User/Dropbox/Course/HexSchool/2024-%E5%88%87%E7%89%88%E4%B8%8A%E8%AA%B2%E8%A8%98%E9%8C%84/HexSchool-WebPageLayout_2024/WeeklyTasks/week6/vite.config.js";
function moveOutputPlugin() {
  return {
    name: "move-output",
    enforce: "post",
    apply: "build",
    async generateBundle(options, bundle) {
      for (const fileName in bundle) {
        if (fileName.startsWith("pages/")) {
          const newFileName = fileName.slice("pages/".length);
          bundle[fileName].fileName = newFileName;
        }
      }
    }
  };
}
var vite_config_default = defineConfig({
  // base 的寫法：
  // base: '/Repository 的名稱/'
  base: "/2024week6/",
  plugins: [
    liveReload(["./layout/**/*.ejs", "./pages/**/*.ejs", "./pages/**/*.html"]),
    ViteEjsPlugin(),
    moveOutputPlugin()
  ],
  server: {
    // 啟動 server 時預設開啟的頁面
    open: "pages/index.html"
  },
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        glob.sync("pages/**/*.html").map((file) => [
          path.relative("pages", file.slice(0, file.length - path.extname(file).length)),
          fileURLToPath(new URL(file, __vite_injected_original_import_meta_url))
        ])
      )
    },
    outDir: "dist"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxVc2VyXFxcXERyb3Bib3hcXFxcQ291cnNlXFxcXEhleFNjaG9vbFxcXFwyMDI0LVx1NTIwN1x1NzI0OFx1NEUwQVx1OEFCMlx1OEExOFx1OTMwNFxcXFxIZXhTY2hvb2wtV2ViUGFnZUxheW91dF8yMDI0XFxcXFdlZWtseVRhc2tzXFxcXHdlZWs2XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxVc2VyXFxcXERyb3Bib3hcXFxcQ291cnNlXFxcXEhleFNjaG9vbFxcXFwyMDI0LVx1NTIwN1x1NzI0OFx1NEUwQVx1OEFCMlx1OEExOFx1OTMwNFxcXFxIZXhTY2hvb2wtV2ViUGFnZUxheW91dF8yMDI0XFxcXFdlZWtseVRhc2tzXFxcXHdlZWs2XFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9Vc2VyL0Ryb3Bib3gvQ291cnNlL0hleFNjaG9vbC8yMDI0LSVFNSU4OCU4NyVFNyU4OSU4OCVFNCVCOCU4QSVFOCVBQSVCMiVFOCVBOCU5OCVFOSU4QyU4NC9IZXhTY2hvb2wtV2ViUGFnZUxheW91dF8yMDI0L1dlZWtseVRhc2tzL3dlZWs2L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgeyBWaXRlRWpzUGx1Z2luIH0gZnJvbSAndml0ZS1wbHVnaW4tZWpzJztcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGggfSBmcm9tICdub2RlOnVybCc7XG5pbXBvcnQgcGF0aCBmcm9tICdub2RlOnBhdGgnO1xuaW1wb3J0IHsgZ2xvYiB9IGZyb20gJ2dsb2InO1xuXG5pbXBvcnQgbGl2ZVJlbG9hZCBmcm9tICd2aXRlLXBsdWdpbi1saXZlLXJlbG9hZCc7XG5cbmZ1bmN0aW9uIG1vdmVPdXRwdXRQbHVnaW4oKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ21vdmUtb3V0cHV0JyxcbiAgICBlbmZvcmNlOiAncG9zdCcsXG4gICAgYXBwbHk6ICdidWlsZCcsXG4gICAgYXN5bmMgZ2VuZXJhdGVCdW5kbGUob3B0aW9ucywgYnVuZGxlKSB7XG4gICAgICBmb3IgKGNvbnN0IGZpbGVOYW1lIGluIGJ1bmRsZSkge1xuICAgICAgICBpZiAoZmlsZU5hbWUuc3RhcnRzV2l0aCgncGFnZXMvJykpIHtcbiAgICAgICAgICBjb25zdCBuZXdGaWxlTmFtZSA9IGZpbGVOYW1lLnNsaWNlKCdwYWdlcy8nLmxlbmd0aCk7XG4gICAgICAgICAgYnVuZGxlW2ZpbGVOYW1lXS5maWxlTmFtZSA9IG5ld0ZpbGVOYW1lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgLy8gYmFzZSBcdTc2ODRcdTVCRUJcdTZDRDVcdUZGMUFcbiAgLy8gYmFzZTogJy9SZXBvc2l0b3J5IFx1NzY4NFx1NTQwRFx1N0EzMS8nXG4gIGJhc2U6ICcvMjAyNHdlZWs2LycsXG4gIHBsdWdpbnM6IFtcbiAgICBsaXZlUmVsb2FkKFsnLi9sYXlvdXQvKiovKi5lanMnLCAnLi9wYWdlcy8qKi8qLmVqcycsICcuL3BhZ2VzLyoqLyouaHRtbCddKSxcbiAgICBWaXRlRWpzUGx1Z2luKCksXG4gICAgbW92ZU91dHB1dFBsdWdpbigpLFxuICBdLFxuICBzZXJ2ZXI6IHtcbiAgICAvLyBcdTU1NUZcdTUyRDUgc2VydmVyIFx1NjY0Mlx1OTgxMFx1OEEyRFx1OTU4Qlx1NTU1Rlx1NzY4NFx1OTgwMVx1OTc2MlxuICAgIG9wZW46ICdwYWdlcy9pbmRleC5odG1sJyxcbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBpbnB1dDogT2JqZWN0LmZyb21FbnRyaWVzKFxuICAgICAgICBnbG9iXG4gICAgICAgICAgLnN5bmMoJ3BhZ2VzLyoqLyouaHRtbCcpXG4gICAgICAgICAgLm1hcCgoZmlsZSkgPT4gW1xuICAgICAgICAgICAgcGF0aC5yZWxhdGl2ZSgncGFnZXMnLCBmaWxlLnNsaWNlKDAsIGZpbGUubGVuZ3RoIC0gcGF0aC5leHRuYW1lKGZpbGUpLmxlbmd0aCkpLFxuICAgICAgICAgICAgZmlsZVVSTFRvUGF0aChuZXcgVVJMKGZpbGUsIGltcG9ydC5tZXRhLnVybCkpLFxuICAgICAgICAgIF0pXG4gICAgICApLFxuICAgIH0sXG4gICAgb3V0RGlyOiAnZGlzdCcsXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBeWhCLFNBQVMsb0JBQW9CO0FBQ3RqQixTQUFTLHFCQUFxQjtBQUM5QixTQUFTLHFCQUFxQjtBQUM5QixPQUFPLFVBQVU7QUFDakIsU0FBUyxZQUFZO0FBRXJCLE9BQU8sZ0JBQWdCO0FBTnNTLElBQU0sMkNBQTJDO0FBUTlXLFNBQVMsbUJBQW1CO0FBQzFCLFNBQU87QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULE9BQU87QUFBQSxJQUNQLE1BQU0sZUFBZSxTQUFTLFFBQVE7QUFDcEMsaUJBQVcsWUFBWSxRQUFRO0FBQzdCLFlBQUksU0FBUyxXQUFXLFFBQVEsR0FBRztBQUNqQyxnQkFBTSxjQUFjLFNBQVMsTUFBTSxTQUFTLE1BQU07QUFDbEQsaUJBQU8sUUFBUSxFQUFFLFdBQVc7QUFBQSxRQUM5QjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGO0FBRUEsSUFBTyxzQkFBUSxhQUFhO0FBQUE7QUFBQTtBQUFBLEVBRzFCLE1BQU07QUFBQSxFQUNOLFNBQVM7QUFBQSxJQUNQLFdBQVcsQ0FBQyxxQkFBcUIsb0JBQW9CLG1CQUFtQixDQUFDO0FBQUEsSUFDekUsY0FBYztBQUFBLElBQ2QsaUJBQWlCO0FBQUEsRUFDbkI7QUFBQSxFQUNBLFFBQVE7QUFBQTtBQUFBLElBRU4sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLGVBQWU7QUFBQSxNQUNiLE9BQU8sT0FBTztBQUFBLFFBQ1osS0FDRyxLQUFLLGlCQUFpQixFQUN0QixJQUFJLENBQUMsU0FBUztBQUFBLFVBQ2IsS0FBSyxTQUFTLFNBQVMsS0FBSyxNQUFNLEdBQUcsS0FBSyxTQUFTLEtBQUssUUFBUSxJQUFJLEVBQUUsTUFBTSxDQUFDO0FBQUEsVUFDN0UsY0FBYyxJQUFJLElBQUksTUFBTSx3Q0FBZSxDQUFDO0FBQUEsUUFDOUMsQ0FBQztBQUFBLE1BQ0w7QUFBQSxJQUNGO0FBQUEsSUFDQSxRQUFRO0FBQUEsRUFDVjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
