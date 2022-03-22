export interface TreeNode {
  name: string;
  children?: TreeNode[];
}

export class KeyBinding {
  constructor(
    public index: number, 
    public keys: string, 
    public actions: string,
    public examples: string = '',
    public mode: string = '',
  ){}
}