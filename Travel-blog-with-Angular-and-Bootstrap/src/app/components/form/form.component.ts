import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Post } from '../../interfaces/post.interface';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})


export class FormComponent {

  form! : FormGroup;
  upDateArray!: Post[];

  constructor (private postService: PostsService) {
    



  }

  ngOnInit(): void {

    this.form = new FormGroup({

      title: new FormControl(''),
      text: new FormControl(''),
      excerpt: new FormControl (''),
      author: new FormControl (''),
      img: new FormControl (''),
      date: new FormControl (''),
      
    })

  }
  
  onSubmit () {
    console.log (this.form.value)
    this.upDateArray = this.postService.newP(this.form.value);
    console.log (this.upDateArray)
  }

// Campos: 
// - Título post
// - Texto post
// - Imagen
// - Categoría (select)
// - Fecha publicación

// Botón crear: evento que al hacer click desencadene un método en el componente que haga una llamada a un método del servicio agregarPost(Post) que se encargue de recibir el formulario como objeto, y haga un push en el array de posts. 

// Required: todos los campos son obligatorios. 

// Testing: validar la url (y resto de campos). -->

}
