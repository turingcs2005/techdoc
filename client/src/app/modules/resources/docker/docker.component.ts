import { Component, OnInit } from '@angular/core';
import { Comparison } from 'src/app/app-data/app-models';

@Component({
  selector: 'app-docker',
  templateUrl: './docker.component.html',
  styleUrls: ['./docker.component.scss']
})
export class DockerComponent implements OnInit {

  displayedColumns = ['metric', 'desc1', 'desc2'];

  dataSource: Comparison[] = [
    new Comparison('dependencies', 'Linux kernel', 'Linux OS, C++, Node.js, npm, pm2'),
    new Comparison('apps served', 'any', 'Node.js apps'),
    new Comparison('deployment size', '1GB+ using standard Node.js image; 150MB+ using Alpine Linux', 
    'a few MB or less'),
    new Comparison('load balancing', 'all docker apps', 'all apps served by Node.js')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
