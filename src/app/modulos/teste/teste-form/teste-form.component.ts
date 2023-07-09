import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-teste-form',
  templateUrl: './teste-form.component.html',
  styleUrls: ['./teste-form.component.css']
})
export class TesteFormComponent implements OnInit {
  title = 'Desenvolvimento WEB';
  texto: any = "https://www.youtube.com/embed/7RV-pBqujgs";
  nova: any;
  nome: string = "kennedy Luiz";

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.nova = this.sanitizer.bypassSecurityTrustResourceUrl(this.texto);
  }

}
