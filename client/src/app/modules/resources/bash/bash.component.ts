import { Component, OnInit } from '@angular/core';
import { KeyBinding } from 'src/app/app-data/app-models';

@Component({
  selector: 'app-bash',
  templateUrl: './bash.component.html',
  styleUrls: ['./bash.component.scss']
})
export class BashComponent implements OnInit {


  displayedColumns = ['index', 'keys', 'actions', 'examples'];

  dataSource: KeyBinding[] = [
    new KeyBinding(1, 'cp -r ./source/. ./destination/', 'copy all contents from source directory to destination directory', 'Bash shortcut'),
    new KeyBinding(2, 'mkdir -p ./dir1/dir2/', 'create a hierarchy of directories', 'Bash shortcut'),
    new KeyBinding(3, `find . -type d -name 'azure'\n find . -type f -name 'azure.ts'\n find . -type f -name '*.ts' -exec grep 'Emoji' {} \\;`, 
    'recursively find directory with name azure under the current directory\n recursively find file with name azure.ts under the current' + 
    'directory\n recursively find a .ts file containing string "Emoji" under the current directory', 'Bash shortcut'),
    new KeyBinding(4, 'Ctrl r; then type "ng serve"', 'reverse search command history for a command starting with "ng serve"', 'Bash shortcut'),
    new KeyBinding(5, 'Ctrl Alt t', 'launch terminal', 'Ubuntu Linux shortcut'),
    new KeyBinding(6, 'Alt F2', 'launch quick terminal for one-liner, e.g. gnome-session-quit', 'Ubuntu Linux shortcut')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
