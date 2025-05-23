import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-contact',
  standalone: true, 
  imports: [
    CommonModule, 
    FormsModule   
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm = { // Os campos do formulário
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log('Formulário de Contato Enviado:', this.contactForm);
    alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
    // Limpa o formulário para a próxima mensagem
    this.contactForm = {
      name: '',
      email: '',
      phone: '',
      message: ''
    };
  }
}