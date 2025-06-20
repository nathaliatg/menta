import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import axios from 'axios'; 
import { environment } from '../../environments/environment'; 

interface Plan {
  id: number;
  nome: string; 
  valor: string; 
  descricao: string; 
  features?: string[];
  isPopular?: boolean;
}

@Component({
  selector: 'app-plan-list',
  standalone: true, 
  imports: [ 
    CommonModule, 
    FormsModule   
  ],
  templateUrl: './plan-list.component.html',
  styleUrls: ['./plan-list.component.css']
})
export class PlanListComponent implements OnInit {
  plans: Plan[] = []; 
  filteredPlans: Plan[] = []; 
  searchTerm: string = '';
  filterValue: string = ''; 
  loading: boolean = true;
  error: string | null = null; 

  private apiUrl = environment.apiUrlPlanos; 

  constructor() { }

  ngOnInit(): void {
    this.fetchPlans(); 
  }

  async fetchPlans(): Promise<void> {
    this.loading = true; 
    this.error = null; 
    try {
      const response = await axios.get<Plan[]>(this.apiUrl); 
      this.plans = response.data.map((plan: Plan) => ({ 
          ...plan,
          valor: plan.valor.replace(',', '.') 
      }));
      const popularPlan = this.plans.find(p => p.nome === 'Plus');
      if (popularPlan) {
         popularPlan.isPopular = true;
      }
      this.applyFilters(); 
    } catch (err: any) {
      console.error('Erro ao buscar planos:', err);
      this.error = 'Não foi possível carregar os planos no momento. Tente novamente mais tarde.';
    } finally {
      this.loading = false;
    }
  }

  // Função para buscar e filtrar 
  applyFilters(): void {
    let tempPlans = [...this.plans]; 

      if (this.searchTerm) {
      const lowerSearchTerm = this.searchTerm.toLowerCase();
      tempPlans = tempPlans.filter(plan =>
        plan.nome.toLowerCase().includes(lowerSearchTerm) ||
        plan.descricao.toLowerCase().includes(lowerSearchTerm) ||
        (plan.features && plan.features.some(f => f.toLowerCase().includes(lowerSearchTerm)))
      );
    }

    if (this.filterValue) {
      const selectedMaxPrice = parseFloat(this.filterValue);
      tempPlans = tempPlans.filter(plan => parseFloat(plan.valor) <= selectedMaxPrice);
    }

    this.filteredPlans = tempPlans; // Mostra só os planos filtrados
  }
}