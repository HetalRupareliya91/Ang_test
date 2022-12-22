import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-pages-login',
  templateUrl: './pages-login.component.html',
  styleUrls: ['./pages-login.component.css']
})
export class PagesLoginComponent implements OnInit {

  form!: FormGroup;  
  constructor(public userService:UserService) { } 

  ngOnInit(): void {
    this.form = new FormGroup({
      user: new FormControl('', [Validators.required]),
      pass: new FormControl('', Validators.required)
    });
  }

  submit(){
    debugger;
    console.log(this.form.value);
    
    this.userService.userlogin(this.form.value).subscribe((res:any)=>{
      debugger;
      console.log(res.value);
    });
  }

}
