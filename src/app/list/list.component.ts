import { Component, OnInit } from '@angular/core';
import { faFemale, faMale } from '@fortawesome/free-solid-svg-icons'

import { Usuario } from 'src/app/models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  faFemale = faFemale;
  faMale = faMale;
  
  public isLoading = true;
  public usuarios: Usuario[] = [
    new Usuario(1, 'Maria', 'Sanchez', 'marias@mail.com', 16, true, new Date('1994-01-03'), 'F', 8),
    new Usuario(3, 'Juan', 'Perez', 'juanp@mail.com', 16, false, new Date('1992-05-14'), 'M', 10),
    new Usuario(4, 'Pedro', 'Antonio', 'pedroa@mail.com', 16, false, new Date('1980-02-24'), 'M', 4),
    new Usuario(5, 'Sandra', 'Lorenzo', 'sandral@mail.com', 29, true, new Date('1995-08-12'), 'F', 6),
    new Usuario(6, 'Sofia', 'Arias', 'sofiaa@mail.com', 21, true, new Date('2002-07-24'), 'F', 9),

  ];

  ngOnInit(): void {
    setTimeout(()=>{
        this.isLoading = false;
    }, 2000);
  }
}
