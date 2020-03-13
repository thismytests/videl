import {BinaryTreeStructureImpl, Node} from '@/components/BinarTree';


describe(`Node`, () => {
  describe('convert itself to string', () => {
    describe(`if conversion is a possible`, () => {
      describe(`will returned string with nodes :`, () => {
        describe(`EXAMPLE 1: `, () => {
          describe(`TREE includes one node with value 'aaa' => `, () => {
            it(`"{\\"value\\":\\"aaa\\",\\"leftChild\\":null,\\"rightChild\\":null}" `, () => {
              const node: Node = new Node("aaa");
              const expectedResult = "{\"value\":\"aaa\",\"leftChild\":null,\"rightChild\":null}";
              expect(node.marshal()).toEqual(expectedResult);
            });
          });
        });
      });
    });
  });
});

describe('BinaryTreeStructureImpl', () => {
  describe(`Must be available ADD NEW NODE to the tree`, () => {
    describe(`if STRING VALUE >  value of the PARENT NODE => `, () => {
      describe(`CREATE NODE && ADD IT TO THE LAST LEAF in the RIGHT BRANCH`, () => {
        describe(`EXAMPLE root = 'aaa' added value = 'bbb' `, () => {
          it(`RESULT:  'aaa'.rightChild === 'bbb'`, () => {
            const root: Node = new Node('aaa');
            const valueForNewNode = 'bbb';

            const binaryTreeInst: BinaryTreeStructureImpl = new BinaryTreeStructureImpl(root);

            binaryTreeInst.addNode(valueForNewNode);

            const result = binaryTreeInst.root?.rightChild?.value;
            expect(result).toBe(valueForNewNode);
          });
        });

        describe(`EXAMPLE root = 'aaa' 
          add value = 'bbb' 
          add value = 'ccc'`, () => {
          it(`RESULT:  'aaa'.rightChild.rightChild === 'bbb'`, () => {
            const root: Node = new Node('aaa');
            const valueForNewNode1 = 'bbb';
            const valueForNewNode2 = 'ccc';

            const binaryTreeInst: BinaryTreeStructureImpl = new BinaryTreeStructureImpl(root);

            // const suitableParent = binaryTreeInst.findSuitableParent(valueForNewNode);
            binaryTreeInst.addNode(valueForNewNode1);
            binaryTreeInst.addNode(valueForNewNode2);

            const result = binaryTreeInst.root?.rightChild?.rightChild?.value;
            expect(result).toBe(valueForNewNode2);
          });
        });

      });
    });

    xdescribe(`if STRING VALUE < value of the PARENT NODE => `, () => {
      describe(`CREATE NODE & ADD IT TO THE LAST LEAF in the LEFT BRANCH`, () => {
        const rightChildNodeValue = 'bbb';
        const root: Node = new Node('aaa');
        const binaryTreeInst: BinaryTreeStructureImpl = new BinaryTreeStructureImpl(root);

        binaryTreeInst.addNode(rightChildNodeValue);

        expect(true).toBe(false);
      });
    });

    xdescribe(`if STRING VALUE ===  value of the PARENT NODE`, () => {
      describe(`NODE IS EXIST. DON'T DO ANYTHING`, () => {
        expect(true).toBe(false);
      });
    });
  });

  describe(`Must be available FIND SUITABLE PARENT for potential node candidate`, () => {
    describe(`if STRING VALUE  >  VALUE of the ROOT NODE`, () => {
      it(`POTENTIAL PARENT CANDIDATE will be FIND on the RIGHT BRANCH`, () => {
        const rootNodeValue = 'aaa';
        const rightChildNodeValue = 'bbb';
        const newNodeValue = 'ccc';

        const root: Node = new Node(rootNodeValue, null, new Node(rightChildNodeValue));


        const binaryTreeInst: BinaryTreeStructureImpl = new BinaryTreeStructureImpl(root);

        const result = binaryTreeInst.findSuitableParent(newNodeValue);
        expect(result.value).toBe(rightChildNodeValue);
      });
    });
    describe(`if STRING VALUE  <  VALUE of the ROOT NODE`, () => {
      it(`POTENTIAL PARENT CANDIDATE will be FIND on the LAST LEFT BRANCH`, () => {
        const rootNodeValue = 'ccc';
        const leftChildNodeValue = 'bbb';
        const newNodeValue = 'aaa';

        const root: Node = new Node(rootNodeValue, new Node(leftChildNodeValue), null);


        const binaryTreeInst: BinaryTreeStructureImpl = new BinaryTreeStructureImpl(root);

        const result = binaryTreeInst.findSuitableParent(newNodeValue);
        expect(result.value).toBe(leftChildNodeValue);
      });
    });
    describe(`if STRING VALUE  === VALUE of the ROOT NODE`, () => {
      describe(`NODE IS EXIST. DON'T DO ANYTHING`, () => {
        const root: Node = new Node('aaa');
        const newValue = 'aaa';

        const binaryTreeInst: BinaryTreeStructureImpl = new BinaryTreeStructureImpl(root);
        binaryTreeInst.addNode(newValue);

        expect(root.value).toBe(newValue);
        expect(root.rightChild).toBe(null);
        expect(root.leftChild).toBe(null);

      });
    });


  });

  describe(`Must be available CONVERT  STRING TO THE TREE`, () => {
    it(`after unmarshal string will be update nodes`, () => {
      const binaryTreeStructure: BinaryTreeStructureImpl = new BinaryTreeStructureImpl();
      expect(binaryTreeStructure.root).toBe(null);
    });
  });
});
