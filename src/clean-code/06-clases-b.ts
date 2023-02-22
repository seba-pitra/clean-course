(() => {
  // No aplicando el principio de responsabilidad única

  type Gender = "M" | "F";

  interface IPersonProps {
    birthdate: Date;
    gender: Gender;
    name: string;
  }

  class Person {
    public birthdate: Date;
    public gender: Gender;
    public name: string;

    constructor({ name, gender, birthdate }: IPersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  interface IUserProps {
    email: string;
    role: string;
    birthdate: Date;
    gender: Gender;
    name: string;
  }

  class User extends Person {
    public email: string;
    public lastAccess: Date;
    public role: string;

    constructor({ email, role, name, gender, birthdate }: IUserProps) {
      super({ name, gender, birthdate });

      this.email = email;
      this.lastAccess = new Date();
      this.role = role;
    }

    checkCredentials() {
      return true;
    }
  }

  interface IUserSettingsProps {
    birthdate: Date;
    email: string;
    gender: Gender;
    lastOpenFolder: string;
    name: string;
    role: string;
    workingDirectory: string;
  }

  class UserSettings extends User {
    public workingDirectory;
    public lastOpenFolder;
    constructor({
      workingDirectory,
      lastOpenFolder,
      email,
      role,
      name,
      gender,
      birthdate,
    }: IUserSettingsProps) {
      // super({ email, role, name, gender, birthdate });
      super({ email, role, name, gender, birthdate });
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  const userSettings = new UserSettings({
    workingDirectory: "/usr/home",
    lastOpenFolder: "/home",
    email: "fernando@google.com",
    role: "Admin",
    name: "Fernando",
    gender: "M",
    birthdate: new Date("1985-10-21"),
  });

  console.log({ userSettings });
})();
