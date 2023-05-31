import { Component } from '@angular/core';
import { ApiCallService } from '../services/api-call.service';
@Component({
  selector: 'app-c-sharp',
  templateUrl: './c-sharp.component.html',
  styleUrls: ['../../styles.css']
})
export class CSharpComponent {
  apiCall:any;
  constructor(private apiData:ApiCallService)
  {
    this.apiData.api().subscribe((data)=>{
      this.apiCall=data;
    })
  }
  scrollToHeading(index: number): void {
    const headingElement = document.getElementById(`heading${index}`);
    if (headingElement) {
      const offset = 70;
      const topPosition = headingElement.offsetTop - offset;
      window.scrollTo({ top: topPosition, behavior: 'smooth' });
    }
  }
}