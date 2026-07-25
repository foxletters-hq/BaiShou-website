import { visit } from 'unist-util-visit';
import type { Root } from 'mdast';

const ASIDE_TYPES = new Set(['note', 'tip', 'caution', 'danger']);

/** 将 :::note[标题] ... ::: 转为 <aside class="docs-aside"> */
export function remarkAsides() {
  return (tree: Root) => {
    visit(tree, (node: any, index, parent) => {
      if (node.type !== 'containerDirective') return;
      if (!ASIDE_TYPES.has(node.name)) return;
      if (parent == null || typeof index !== 'number') return;

      const title =
        node.attributes?.title ||
        (node.children?.[0]?.data?.directiveLabel
          ? undefined
          : undefined);

      let label = '';
      if (node.children?.[0]?.data?.directiveLabel) {
        const labelNode = node.children.shift();
        label = (labelNode?.children || [])
          .map((c: any) => c.value || '')
          .join('');
      }
      if (!label && typeof node.attributes?.title === 'string') {
        label = node.attributes.title;
      }

      const data = node.data || (node.data = {});
      data.hName = 'aside';
      data.hProperties = {
        class: `docs-aside docs-aside--${node.name}`,
      };

      if (label) {
        node.children.unshift({
          type: 'paragraph',
          data: {
            hName: 'p',
            hProperties: { class: 'docs-aside__title' },
          },
          children: [{ type: 'text', value: label }],
        });
      }
    });
  };
}
