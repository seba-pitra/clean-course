import { PostService } from './05-dependency-b';
import { JsonDatabaseService, LocalDataBaseService, WebApiPostService, HttpClient } from './05-dependency-c';


// Main
(async () => {

    const provider = new WebApiPostService(new HttpClient())

    const postService = new PostService(provider);

    const posts = await postService.getPosts();

    console.log({ posts })


})();