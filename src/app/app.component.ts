import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ValkyrieConnect';
  transition(){
    const section = document.getElementById("section-to-change-color");
    section?.classList.add("fade-out");
  
    setTimeout(() => {
      window.location.href = "pagina2.html"; // Redirige a la nueva página después de 1 segundo (misma duración que la transición CSS)
    }, 1000);
  }
}
