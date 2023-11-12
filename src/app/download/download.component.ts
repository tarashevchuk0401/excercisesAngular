import { Component } from '@angular/core';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent {

  account = {
    IBAN: 'UA56464654',
    ballance: 545
  }

  exportToJSON(data: any) {
    return JSON.stringify(data);
  }

  downloadFile(data: any, filename: string): void {
    const blob = new Blob([data], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }


  exportData(): void {
    this.downloadFile(this.exportToJSON(this.account), 'exported-data.json');
  }

}
