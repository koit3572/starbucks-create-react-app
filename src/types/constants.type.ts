export interface IMainMenuItemContents {
  name: string;
  contents: {
    menu: {
      [name: string]: string[];
    };
    texture: {
      title: string;
      contents: string;
    }[];
  };
}
