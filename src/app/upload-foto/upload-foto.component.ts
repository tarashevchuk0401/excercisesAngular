import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage'
@Component({
  selector: 'app-upload-foto',
  templateUrl: './upload-foto.component.html',
  styleUrls: ['./upload-foto.component.scss']
})
export class UploadFotoComponent {

  constructor(private fileStorage: AngularFireStorage) { }

  async onFileChange(event: any) {
    let file = event?.target.files[0];
    if (file) {
      const path = `yt${file.name}`;
      const uploadTask = await this.fileStorage.upload(path, file)
      const url = await uploadTask.ref.getDownloadURL();
      console.log(url)
    }
  }

}
