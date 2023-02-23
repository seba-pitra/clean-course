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
    public attributes: InputAttributes;
    public events: InputEvents;

    constructor({ id, type, placeholder }: IInputElement) {
      this.HtmlElement = new HtmlElement(id, type);
      this.attributes = new InputAttributes(placeholder);
      this.events = new InputEvents();
    }
  }

  const nameField = new InputElement({
    id: "Fernando",
    type: "select",
    placeholder: "txtName",
  });

  console.log({ nameField });
})();
