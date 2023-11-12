// download.component.ts
import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent {
  selectedFile: File | null = null;
  res:any;

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] as File;
  }

  exportData(): void {
    if (this.selectedFile) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const arrayBuffer = event.target?.result as ArrayBuffer;
        const data = new Uint8Array(arrayBuffer);
        const workbook = XLSX.read(data, { type: 'array' });

        // Assuming you have a single sheet in the Excel file
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];

        // Convert worksheet to JSON
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
        const res = jsonData.filter((i: any) => i.length !== 0)
        this.res = res;
        console.log( res);
      };

      reader.readAsArrayBuffer(this.selectedFile);
    } else {
      console.error('No file selected.');
    }
  }
}
