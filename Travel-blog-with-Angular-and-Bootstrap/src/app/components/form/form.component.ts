import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from '../../interfaces/post.interface';
import { PostsService } from '../../services/posts.service';
import { CategoriesService } from '../../services/categories.service';
import { Category } from '../../interfaces/category.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})


export class FormComponent {

  form! : FormGroup;
  upDateArray!: Post[];
  arrCategories: Category [];
  extensionWrong: boolean;

  constructor (private postService: PostsService, private categoriesService: CategoriesService ) {

    this.arrCategories =  [];
    this.extensionWrong = false;
  }

  ngOnInit(): void {

    this.form = new FormGroup({

      // title: new FormControl('', [Validators.required, Validators.minLength(25), Validators.maxLength(130)]),
      // text: new FormControl('', [Validators.required, Validators.minLength(300)]),
      // excerpt: new FormControl ('', Validators.required),
      // author: new FormControl ('', [Validators.required, Validators.minLength(8), Validators.maxLength(25)]),

      img: new FormControl('', [Validators.required]),
      // date: new FormControl ('', Validators.required),
      // id_category: new FormControl ('', Validators.required)

      title: new FormControl(''),
      text: new FormControl(''),
      excerpt: new FormControl (''),
      author: new FormControl (''),
      // img: new FormControl (''),
      date: new FormControl (''),
      id_category: new FormControl ('')
      
    },[])

    this.arrCategories = this.categoriesService.getAll();
    console.log (this.arrCategories)

  }
  
  onSubmit () {
    console.log (this.form.value)
    this.upDateArray = this.postService.newP(this.form.value);
    console.log (this.upDateArray)
  }

  onSaveIdCategorySelected ($event: any) {


    
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
