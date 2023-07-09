import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']
})
export class ActividadesComponent  {
  activityData: any[] = []; // Declaración de la variable "items"



  uploadXML(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const xmlContent =reader.result as string;
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlContent, 'text/xml');
      const activities = xmlDoc.getElementsByTagName('activadade');
      this.activityData = [];
      for (let i = 0; i < activities.length; i++) {
        const activity = activities[i];
        const data = {
          fechaini: activity.getElementsByTagName('fechaini')[0].textContent,
          fechafin: activity.getElementsByTagName('fechafin')[0].textContent,
          TutorCargo: activity.getElementsByTagName('TutorCargo')[0].textContent,
          TemaProyecto: activity.getElementsByTagName('TemaProyecto')[0].textContent,
          SintesisProyecto: activity.getElementsByTagName('SintesisProyecto')[0].textContent,
          DescripcionActividades: activity.getElementsByTagName('DescripcionActividades')[0].textContent,
          ValoracionEstudiante: activity.getElementsByTagName('ValoracionEstudiante')[0].textContent
        };
        this.activityData.push(data);
      }
    };
    reader.readAsText(file);
  }

  
  
  
}
