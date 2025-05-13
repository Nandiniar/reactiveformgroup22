import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup ,ReactiveFormsModule} from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reactiveformgroup22';

  profileForm =new  FormGroup({
    name:new FormControl('Nandini'),
    password:new FormControl('123'),
    email:new FormControl('nandinitest.com')

  })
  onSubmit(){
    console.log("on submit called")
    console.log(this.profileForm.value)
  }
  setValue(){
    this.profileForm.setValue(
      {
        name:'Nandi',
password:"321",
email:'nandi@test.com'
      }
    )
  }
}