export class PostPreview {  static push(): any {
    throw new Error("Method not implemented.");
  }

  public upvote: number = 0;
  constructor(public title: string, public titleLink:string) { }
}
