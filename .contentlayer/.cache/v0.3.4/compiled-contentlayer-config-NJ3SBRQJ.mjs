// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypePrettyCode from "rehype-pretty-code";
var Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: `docs/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string" },
    date: { type: "date" },
    toc: { type: "boolean", default: true, required: false },
    group: { type: "string", required: true },
    // For sidebar grouping
    order: { type: "number", required: false }
    // For ordering within a group
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`
    },
    slugAsParams: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/")
    },
    headings: {
      type: "json",
      resolve: async (doc) => {
        const regXHeader = /\n(?<flag>#{2,3})\s+(?<content>.+)/g;
        const headings = Array.from(doc.body.raw.matchAll(regXHeader)).map(
          ({ groups }) => {
            const flag = groups?.flag;
            const content = groups?.content;
            return {
              level: flag?.length,
              text: content,
              slug: content?.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "")
            };
          }
        );
        return headings;
      }
    }
  }
}));
var rehypePrettyCodeOptions = {
  theme: "one-dark-pro",
  // or any other theme Shiki supports
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
  onVisitHighlightedLine(node) {
    node.properties.className.push("line--highlighted");
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ["word--highlighted"];
  }
};
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Doc],
  disableImportAliasWarning: true,
  mdx: {
    rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]]
  }
});
export {
  Doc,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-NJ3SBRQJ.mjs.map
