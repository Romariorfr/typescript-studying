const Stack = () => {
  class Pilha<T> {
    private elementos: T[];

    constructor() {
      this.elementos = [];
    }

    push(elemento: T): void {
      this.elementos.push(elemento);
    }

    pop(): T | undefined {
      return this.elementos.pop();
    }

    isEmpty(): boolean {
      return this.elementos.length === 0;
    }
  }

  const pilha = new Pilha<number>();

  pilha.push(1);
  pilha.push(2);
  pilha.push(3);

  return (
    <>
      <h1>pilha.pop = {pilha.pop()}</h1>
      <h1>pilha.pop = {pilha.pop()}</h1>
      <h1>pilha.isEmpty = {pilha.isEmpty() ? "true" : "false"}</h1>
      <h1>pilha.pop = {pilha.pop()}</h1>
      <h1>pilha.isEmpty = {pilha.isEmpty() ? "true" : "false"}</h1>
    </>
  );
};

export default Stack;
