import { HttpClient, HttpEventType} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  public posts:Post[] = [];

  constructor(public http:HttpClient) {
    this.http.get("/api").subscribe(
      (posts:any) => {
        for(let post of posts) {
          this.posts.push(
            new Post(
              post.nome,
              post.titulo,
              post.subtitulo,
              post.email,
              post.mensagem,
              post.arquivo,
              post.id,
              post.likes))
        }
      }
    )
  }

  salvar(post: Post, file: File) {
    const uploadData = new FormData();
    uploadData.append("nome", post.nome);
    uploadData.append("titulo", post.titulo);
    uploadData.append("subtitulo", post.subtitulo);
    uploadData.append("email", post.email);
    uploadData.append("mensagem", post.mensagem);
    uploadData.append("arquivo", file, file.name);

    this.http.post("/api", uploadData,
      {reportProgress: true, observe: 'events'})
      .subscribe((event: any)=> {
      if (event.type === HttpEventType.Response) {
        let post: any = event.body;
        this.posts.push(
          new Post(
            post.nome,
            post.titulo,
            post.subtitulo,
            post.email,
            post.mensagem,
            post.arquivo,
            post.id,
            post.likes
            )
          );
      }
      if (event.type === HttpEventType.UploadProgress) {
        console.log("UploadProgress");
        console.log(event);
      }
    })
  }

  like(id: number = 0) {
    this.http.get("/api/like/" + id).subscribe(
    (event:any) => {
      let post: any = this.posts.find((post) => post.id == id);
      post.likes = event.likes;
    }
    )
  }

  apagar(id: number = 0) {
    this.http.delete("/api/" + id).subscribe(
      (event: any) => {
        let index = this.posts.findIndex((post) => post.id == id);
        if ( index >= 0) {
          this.posts.splice(index, 1);
        }
      }
    )
  }

}
