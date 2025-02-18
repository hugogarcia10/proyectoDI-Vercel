import { Component, Input } from '@angular/core';
import { Post } from '../../model/modelos';
import { ApiService } from '../../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-postcard',
  standalone: false,
  templateUrl: './postcard.component.html',
  styleUrl: './postcard.component.css'
})
export class PostcardComponent {
  // dato que tiene que ser dado
  @Input() post!: Post
  @Input() mostrar: Boolean = true
  
  constructor(private apiService: ApiService, private router: Router) {
    this.apiService.getAllPost().subscribe((data) => {
      // console.log(data);
    });
    // console.log(apiService.getAllPost());
  }
  verDetalle(id: number) {
    this.router.navigate(['/detail', id]);
  }
}
