(() => {
  //* Aplicar el principio de responsabilidad única
  //* Priorizar la composición frente a la herencia

  type HtmlType = "input" | "select" | "textarea" | "radio";

  class HtmlElement {
    constructor(public id: string, public type: HtmlType) {}
  }

  class InputAttributes {
    constructor(public placeholder: string) {}
  }

  class InputEvents {
    constructor() {}

    setFocus() {}
    getValue() {}
    isActive() {}
    removeValue() {}
  }

  //? Idea para la nueva clase InputElement
  interface IInputElement {
    id: string;
    type: HtmlType;
    placeholder: string;
  }

  class InputElement {
    public HtmlElement: HtmlElement;
    public InputAttributes: InputAttributes;
    public InputEvents: InputEvents;

    constructor({ id, type, placeholder }: IInputElement) {
      this.HtmlElement = new HtmlElement(id, type);
      this.InputAttributes = new InputAttributes(placeholder);
      this.InputEvents = new InputEvents();
    }
  }

  const nameField = new InputElement({
    id: "Fernando",
    type: "select",
    placeholder: "txtName",
  });

  console.log({ nameField });
})();
