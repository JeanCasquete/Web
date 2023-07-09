import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { practica } from '../components/practicas/practicas';  // Assume you have a Product interface or class



@Injectable({
  providedIn: 'root'
})
export class LogicaService {

  constructor(private afs: AngularFirestore) { }

  agregarDatos(id: string, actividad: string, horas: number, observaciones: string) {
    this.afs.collection('Practicas', ref => ref.where('id', '==', id))
      .get()
      .subscribe(querySnapshot => {
        if (querySnapshot.size > 0) {
          console.log('Esa id ya existe.');
        } else {
          const datos = {
            id: id,
            actividad: actividad,
            horas: horas,
            observaciones: observaciones
          };
          this.afs.collection('Practicas').add(datos)
            .then(() => {
              console.log('Datos agregados correctamente a Firestore.');
            })
            .catch((error) => {
              console.error('Error al agregar los datos a Firestore:', error);
            });
        }
      }, error => {
        console.error('Error al consultar la colección:', error);
      });
  }
  
  

  getpracticas(): Observable<any[]> {
    // Obtiene los documentos de la colección "compras"
    return this.afs.collection('Practicas').valueChanges();
  
}
}