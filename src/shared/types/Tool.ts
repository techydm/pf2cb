export class Tool {
  public name: string;
  public path: string;
  public icon: string;

  constructor(name: string, path: string, icon: string) {
    this.name = name;
    this.path = path;
    this.icon = `ra ${icon} ra-fw ra-3x`;
  }
}
