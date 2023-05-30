const ElemetsArray = () => {
  const array1: number[] = [1, 2, 3, 4, 5, 5, 4, 3, 2, 1];
  const array2: string[] = ["a", "b", "c", "a", "b", "c"];
  const array3: boolean[] = [true, false, true, false, true];

  function getUniqueElements<T>(array: T[]): T[] {
    const uniqueElements: T[] = [];
    for (const element of array) {
      if (!uniqueElements.includes(element)) {
        uniqueElements.push(element);
      }
    }

    return uniqueElements;
  }

  return (
    <div>
      <h1>Retorna o elemento unico dentro de um array:</h1>
      <ul>
        <li>
          array1: number[] = [1, 2, 3, 4, 5, 5, 4, 3, 2, 1] =
          {getUniqueElements(array1)}
        </li>
        <li>
          array2: string[] = ["a", "b", "c", "a", "b", "c"]; =
          {getUniqueElements(array2)}
        </li>
        <li>
          array3: boolean[] = [true, false, true, false, true] =
          {getUniqueElements(array3)}
        </li>
      </ul>
    </div>
  );
};

export default ElemetsArray;
