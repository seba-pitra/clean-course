import localPosts from "../data/local-database.json"
import { Post } from "./05-dependency-b"

export abstract class PostProvider {
  
  abstract getPosts(): Promise<Post[]>

} 

export class LocalDataBaseService implements PostProvider {

  // async getFakePosts() {
  async getPosts() {
      return [
          {
              'userId': 1,
              'id': 1,
              'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
              'body': 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'
          },
          {
              'userId': 1,
              'id': 2,
              'title': 'qui est esse',
              'body': 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla'
          }
        ]
  }

}


export class JsonDatabaseService implements PostProvider {

  async getPosts() {
    return localPosts
  }

}

// http methods
export class HttpClient {
  async get(url: string) {
    const resp = await fetch(url)
    const data = await resp.json()
    return data
  }
}

export class WebApiPostService implements PostProvider {
  constructor( private http: HttpClient ) {}

  async getPosts() {
    const data = await this.http.get("https://jsonplaceholder.typicode.com/posts")
    return data
  }
}


 