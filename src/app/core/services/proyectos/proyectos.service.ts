import { Injectable } from '@angular/core';
import { Proyecto } from './../../../interfaces/proyecto.interface';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  proyectos: Proyecto[] = [
    {
      id:'1',
      titulo: 'Radio Ranchito',
      cliente: 'Ultra México',
      url: 'http://www.radioranchito.com.mx',
      descripcion: 'sitio web',
      imagen: 'assets/images/portadas/radioranchito.jpg'
    },
    {
      id:'2',
      titulo: 'Ultra Noticias',
      cliente: 'Ultra México',
      url: 'http://ultranoticias.com.mx',
      descripcion: 'sitio web',
      imagen: 'assets/images/portadas/ultranoticias.jpg'
    },
    {
      id:'3',
      titulo: 'Presumiendo México',
      cliente: 'Ultra México',
      url: 'http://www.presumiendomexico.com.mx',
      descripcion: 'sitio web',
      imagen: 'assets/images/portadas/presumiendomexico.jpg'
    },
    {
      id:'4',
      titulo: 'Ultraacoustics',
      cliente: 'Ultra México',
      url: 'http://uacoustics.com.mx',
      descripcion: 'sitio web',
      imagen: 'assets/images/portadas/ultraacoustics.jpg'
    },
    {
      id:'5',
      titulo: 'Urbanismo Positivo',
      cliente: 'Ultra México',
      url: 'http://urbanismopositivo.com',
      descripcion: 'sitio web',
      imagen: 'assets/images/portadas/urbanismopositivo.jpg'
    },
    {
      id:'6',
      titulo: 'Universidad Ultra',
      cliente: 'Ultra México',
      url: 'http://universidadultra.com.mx',
      descripcion: 'sitio web',
      imagen: 'assets/images/portadas/uu.jpg'
    },
    {
      id:'7',
      titulo: 'Ultra México',
      cliente: 'Ultra México',
      url: 'http://www.ultramexico.com.mx',
      descripcion: 'sitio web',
      imagen: 'assets/images/portadas/ultramexico.jpg'
    },
    {
      id:'8',
      titulo: 'Herval Give Care',
      cliente: 'HGC Nutrición Natural',
      url: 'http://hgc.mx/',
      descripcion: 'HGC es un corporativo con calidad empresarial y humana que te ofrece el inicio de tu independencia económica. Es nuestro objetivo formar personas autosuficientes económicamente, mediante la obtención de nuevos conocimientos y actitudes que les permitan generar su propia riqueza y prosperidad. Para ser parte de HGC lo único que necesitas es tener sueños, metas, deseos de superación, pero sobre todo un espíritu emprendedor.',
      imagen: 'assets/images/portadas/hgc.jpg'
    }
  ];

  constructor(
    private afDatabase: AngularFireDatabase
  ) { }

  getProyectos() {
    return this.proyectos;
  }

  califProyect(calificacion){
    return this.afDatabase.object(`calificacion/${calificacion.id}`).set(calificacion);
  }
}
