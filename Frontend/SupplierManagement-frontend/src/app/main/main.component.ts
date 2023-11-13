import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [MessageService]
})
export class MainComponent {
  title = 'Sistema de gestión de proveedores';


  // myUploader(event: { files: File[]; }, form: any) {
  //   console.log('Reading file...');
  //   let file = event.files[0];
  //   this.fileService.postSupplierList(file).subscribe(
  //     (result: any) => {
  //       console.log("Archivo cargado")
  //     }
  //   )
  //   form.clear();
  // }
}
