import {isFirstStringBiggerSecond} from "./comparators/comparators";

export class Node {
  value: string;
  leftChild: Node | null = null;
  rightChild: Node | null = null;

  constructor(value: string,
              leftChild?: Node | null,
              rightChild?: Node | null
  ) {
    this.value = value;
    this.leftChild = leftChild ? leftChild : null;
    this.rightChild = rightChild ? rightChild : null;
  }

  // todo... Nick Litvin... will be test for this
  comparator(comparedNode: Node): boolean {
    return isFirstStringBiggerSecond(this.value, comparedNode.value)
  }

  marshal(): string {
    const returnedObject = {
      value: this.value,
      leftChild: this.leftChild,
      rightChild: this.rightChild
    };

    return JSON.stringify(returnedObject);
  }
}


export class BinaryTreeStructureImpl {
  private _root: Node | null;

  get root(): Node | null {
    return this._root;
  }

  constructor(root?: Node) {
    if (root) {
      this._root = root;
    } else {
      this._root = null;
    }

  }

  addNode(value: string): void {
    if (this.root === null) {
      this._root = new Node(value);
      return;
    }

    const suitableParent = this.findSuitableParent(value);

    /*set in the right branch*/
    if (value > suitableParent.value) {
      suitableParent.rightChild = new Node(value);
    }


    if (value < suitableParent.value) {
      suitableParent.leftChild = new Node(value);
    }
  }

  size(): number {
    if (this._root === null) {
      return 0;
    }

    return 1;
  }

  /**
   * find node which will be Suitable parent
   * */
  findSuitableParent(str: string): Node {
    let parentNode = this._root;
    let isContinueSearch = true;

    while (isContinueSearch) {
      // todo... Nick Litvin... test will be here
      /*search in the right branch*/
      if (parentNode != null && str > parentNode.value) {
        // todo... Nick Litvin... test will be here
        /*if parentNode HAS RIGHT child === > rightChild becomes parentNode */
        if (parentNode.rightChild) {
          parentNode = parentNode.rightChild;
          /** if parentNode HAS NOT right child ==> RETURNS PARENT NODE */
        } else {
          isContinueSearch = false;
          return parentNode;
        }
      }

      /*search in the left branch*/
      if (parentNode != null && str < parentNode.value) {
        // todo... Nick Litvin... test will be here
        /*if parentNode HAS RIGHT child === > rightChild becomes parentNode */
        if (parentNode.leftChild) {
          parentNode = parentNode.leftChild;
          /*if parentNode HAS NOT right child === > RETURNS PARENT NODE */
        } else {
          isContinueSearch = false;
          return parentNode;
        }
      }

      if (parentNode != null && str === parentNode.value) {
        isContinueSearch = false;
      }
    }

    // todo... Nick Litvin... test will be here
    if (parentNode === null) {
      throw new Error('Tree is empty. Must be at least one node element')
    }
    return parentNode;
  }

  marshal(tree: Node): string {
    if (this.root !== null) {
      return this.root.marshal()
    } else {
      throw new Error("Can't make marshal. Tree is empty")
    }
  }

  unMarshal(str: string) {
    try {
      // check the correct number of separated characters
      JSON.parse(str);

      // todo... Nick Litvin... must be check for the correct nested
      this._root = new Node(str);
      return this._root;
    } catch (err) {
      console.error('', err);
    }
  }

}
