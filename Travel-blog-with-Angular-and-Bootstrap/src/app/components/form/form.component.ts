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
  arrCategories: Category [];
  upDateArray!: Post[];
  

  constructor (private postService: PostsService, private categoriesService: CategoriesService ) {

    this.arrCategories =  [];
   
  }

  ngOnInit(): void {

    this.form = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(25), Validators.maxLength(130)]),
      text: new FormControl('', [Validators.required, Validators.minLength(300)]),
      excerpt: new FormControl ('', [Validators.required, Validators.minLength(30)]),
      author: new FormControl ('', [Validators.required, Validators.minLength(8), Validators.maxLength(25)]),
      img: new FormControl('', [Validators.required, Validators.pattern(/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/i)]),
      date: new FormControl ('', Validators.required),
      id_category: new FormControl ('', Validators.required)

      // title: new FormControl(''),
      // text: new FormControl(''),
      // excerpt: new FormControl (''),
      // author: new FormControl (''),
      // img: new FormControl (''),
      // date: new FormControl (''),
      
    },[])
    this.arrCategories = this.categoriesService.getAll();
    console.log (this.arrCategories);
  }
  
  onSubmit () {
    console.log (this.form.value);
    console.log (this.form.value.date);

    // const formDate = this.form.value.date
    // const changeDate = new Date(formDate);

    // const day = changeDate.getDate();
    // const month = changeDate.getMonth() + 1;
    // const year = changeDate.getFullYear();

    // const fechaFormateada = `${day.toString().padStart(2, '0')}-${month.toString().padStart(2, '0')}-${year}`;
    // console.log (fechaFormateada);
   

    this.upDateArray = this.postService.newP(this.form.value);
    console.log (this.upDateArray);
    
  }

  // onSaveIdCategorySelected ($event: any) {


    
  // }
 

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
