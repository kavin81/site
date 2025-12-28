import { rehypePrettyCode, type Options } from "rehype-pretty-code"
import {
    transformerNotationDiff,
    transformerNotationHighlight,
    transformerNotationFocus,
    transformerNotationErrorLevel,
    transformerRenderIndentGuides,
} from "@shikijs/transformers"
import { transformerCopyButton, transformerFoldableLines } from "@rehype-pretty/transformers"



export function rehypeTransformers(args: Options): Array<[typeof rehypePrettyCode, Options]> {
    return [
        [
            rehypePrettyCode,
            {
                ...args,
                transformers: [
                    ...(args.transformers || []),
                    transformerNotationDiff(),
                    transformerNotationHighlight(),
                    transformerNotationFocus(),
                    transformerNotationErrorLevel(),
                    transformerRenderIndentGuides(),
                    transformerCopyButton({
                        visibility: 'hover',
                        feedbackDuration: 2_500,
                    }),
                    transformerFoldableLines(),
                ],
            } satisfies Options,
        ],
    ];
}
