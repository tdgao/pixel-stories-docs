import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://pixelstories.io",
  output: "server",
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
  integrations: [
    starlight({
      title: "Pixel Stories User Guide",
      logo: {
        light: "./src/assets/logo-light.svg",
        dark: "./src/assets/logo-dark.svg",
        replacesTitle: true,
      },
      social: {
        youtube: "https://www.youtube.com/channel/UC62czApVKmYFH8clyDqKiVQ",
        github: "https://github.com/tdgao/pixel-stories-docs",
        discord: "https://discord.gg/XN9EaUh26g",
      },
      components: {
        // Override the default `SocialIcons` component.
        SocialIcons: "./src/components/NavButtons.astro",
      },
      editLink: {
        baseUrl: "https://github.com/tdgao/pixel-stories-docs",
      },
      customCss: [
        // Relative path to your custom CSS file
        "./src/styles/tailwind.css",
        "./src/styles/custom.css",
      ],
      sidebar: [
        {
          label: "Start Here",
          items: [
            {
              label: "Getting Started",
              link: "/getting-started/",
            },
            {
              label: "Why Pixel Stories?",
              link: "/why-pixel-stories/",
            },
            {
              label: "Default Assets",
              link: "/assets/",
            },
          ],
        },
        {
          label: "Tutorials",
          items: [
            {
              label: "Basic Pixel Stories",
              link: "/tutorials/basic/",
            },
            // {
            //   label: "Advanced Pixel Stories",
            //   link: "/tutorials/advanced/",
            // },
          ],
        },
        {
          label: "Features",
          items: [
            {
              label: "Events system",
              link: "/features/events-system/",
            },
            {
              label: "Map Editor",
              link: "/features/map-editor/",
            },
            // {
            //   label: "Variables and Branching",
            //   link: "/features/variables-and-branching/",
            // },
            {
              label: "Asset Management",
              link: "/features/asset-management/",
            },
          ],
        },
        {
          label: "Events Reference",
          items: [
            {
              label: "Spawn Actor",
              link: "/events/spawn-actor/",
            },
            {
              label: "Remove Actor",
              link: "/events/remove-actor/",
            },
            {
              label: "Move Actor",
              link: "/events/move-actor/",
            },
            {
              label: "Transfer Player",
              link: "/events/transfer-player/",
            },
          ],
        },
        // {
        //   label: "How-to Guides",
        //   autogenerate: {
        //     directory: "/guides",
        //   },
        // },
      ],
    }),
    tailwind(),
  ],
});
