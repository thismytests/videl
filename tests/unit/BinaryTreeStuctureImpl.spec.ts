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

  });

  describe(`Must be available FIND SUITABLE PARENT for potential node candidate`, () => {
    describe(`if STRING VALUE  >  VALUE of the ROOT NODE`, () => {
      describe(`POTENTIAL PARENT CANDIDATE will be FIND on the RIGHT BRANCH`, () => {
        it(`test1`, () => {
          const rootNodeValue = 'aaa';
          const rightChildNodeValue = 'bbb';
          const newNodeValue = 'ccc';

          const root: Node = new Node(rootNodeValue, null, new Node(rightChildNodeValue));


          const binaryTreeInst: BinaryTreeStructureImpl = new BinaryTreeStructureImpl(root);

          const result = binaryTreeInst.findSuitableParent(newNodeValue);
          expect(result.value).toBe(rightChildNodeValue);
        });

        it(`test2`, () => {
          const rootNodeValue = 'aaa';
          const rightChildNodeValue = 'bbb';
          const potentialParent = 'ccc';
          const potentialChild = 'ddd';

          const root: Node = new Node(rootNodeValue, null, new Node(rightChildNodeValue, null, new Node(potentialParent)));
          const binaryTreeInst: BinaryTreeStructureImpl = new BinaryTreeStructureImpl(root);

          const result = binaryTreeInst.findSuitableParent(potentialChild);
          expect(result.value).toBe(potentialParent);
        });
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

  describe(`Must be available to return size of elements`, () => {
    it(`If there are NOT ITEMS in tree  => 0`, () => {
      const inst: BinaryTreeStructureImpl = new BinaryTreeStructureImpl();
      expect(inst.size()).toBe(0);
    });

    describe(`If TREE IS NOT EMPTY => tree's size`, () => {
      describe(`Test #1`, () => {
        it(`If TREE IS NOT EMPTY => tree's size`, () => {
          const node: Node = new Node('1', new Node('2', new Node('3')))
          const inst: BinaryTreeStructureImpl = new BinaryTreeStructureImpl(node);
          const result = false;
          const expectedResult = true;

          expect(inst.size()).toBe(3);
        });

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
