import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html'
})
export class UserdetailComponent implements OnInit{

  constructor(private apiService: ApiService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('user.uid');
      this.apiService.getUserById(JSON.parse(localStorage.getItem('id')!));
    });
  }
}
