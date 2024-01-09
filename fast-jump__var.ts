export type VueAst = AST<{ jsx: true; loc: true }>
type AST<T extends TSESTreeOptions> = TSESTree.Program & (T['comment'] extends true ? {
  comments: TSESTree.Comment[]
} : EmptyObject) & (T['tokens'] extends true ? {
  tokens: TSESTree.Token[]
} : EmptyObject)
