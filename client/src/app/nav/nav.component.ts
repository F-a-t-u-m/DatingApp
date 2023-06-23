import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { AccountService } from '../services/account.service';
import { User } from '../models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  model: any = {}

  constructor(
    public accountService: AccountService
  ) { }

  ngOnInit(): void {

  }

  login() {
    this.accountService.login(this.model).subscribe({
      next: response => {
        console.log(`response`, response);
      },
      error: error => {
        console.log(`error`, error);
      }
    })
  }

  logout() {
    this.accountService.logout();
  }

}
