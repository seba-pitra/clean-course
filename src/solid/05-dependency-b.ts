import { LocalDataBaseService, JsonDatabaseService, PostProvider } from "./05-dependency-c";

export interface Post {
    body:   string;
    id:     number;
    title:  string;
    userId: number;
}


export class PostService {

    private posts: Post[] = [];

    constructor( private postProvider: PostProvider ) {}

    async getPosts() {
        // const jsonDB = new LocalDataBaseService(); // dependencia oculta
        // this.posts = await jsonDB.getFakePosts();
      this.posts = await this.postProvider.getPosts()

        return this.posts;
    }
}