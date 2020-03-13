
export class ConditionError extends Error {
  constructor(prop: any) {
    super(prop);
    this.name = name;
  }
}

export interface Condition {
  execute(str: string): string | ConditionError;
}

export interface Comparator {
  compare(str1: string, str2: string, isParentChildAttitude: boolean): boolean;
}


export interface BinaryTreeStructure {

  marshal(tree: BinaryTreeStructure): string;

  unMarshal(str: string): BinaryTreeStructure;
}

// при каждой операции вставки или удаления отсортированный порядок сохраняется

// При поиске искомое значение сравниается с корнем. Если больше - то поиск в правом потомке,
// если меньше - то в левом. Если найдено - поиск прекращается
