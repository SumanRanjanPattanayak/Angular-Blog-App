import { Component, OnInit } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['../../styles.css']
})
export class BlogComponent implements OnInit {
  articles!: any[];
  ngOnInit(): void {
    this.fetchNews();
  }
  fetchNews(): void {
    const url = 'https://newsapi.org/v2/everything?' +
      'q=Technology&' +
      'from=2023-05-30&' +
      'sortBy=popularity&' +
      'apiKey=fda8f90ebddf44fda7e02c13cd1f0068';

    axios.get(url)
      .then(response => {
        this.articles = response.data.articles;
      })
      .catch(error => {
        console.log('Error fetching news:', error);
      });
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