import { Component, OnInit } from '@angular/core';
import { KeyBinding } from 'src/app/app-data/app-models';

@Component({
  selector: 'app-vim',
  templateUrl: './vim.component.html',
  styleUrls: ['./vim.component.scss']
})
export class VimComponent implements OnInit {

  displayedColumns = ['index', 'keys', 'actions', 'examples', 'mode'];

  dataSource: KeyBinding[] = [
    new KeyBinding(
      1, 
      'k\n j\n h\n l\n zz\n zt\n zb \n Ctrl + b\n Ctrl + f\n Ctrl + u\n Ctrl + d', 
      'up\n down\n left\n right\n shift current line to middle of screen\nshift current line to top of screen\nshift current line to bottom of screen\n' +
      ' move back one full screen\n move forward one full screen\n move back 1/2 screen\n move forward 1/2 screen', 
      'k - move up 1 row\n5j - move down 5 rows\n4h - move 4 characters to the left\n l - move to the next character\n \n \n \n \n \n \n',
      'normal',
    ),

    new KeyBinding(
      2, '0\n ^\n |\n +\n -\n $\n H\n M\n L\n gg\n G',
      'move to 1st column\n move to 1st non-whitespace of current line\n move to prefixed column number\n ' + 
      'move to the 1st non-whitespace of next line\n' + 
      'move to the 1st non-whitespace of previous line\n move to end of current line\n' + 
      'move to non-white space of the 1st line on screen\n move to non-whitespace of the middle line on screen\n' + 
      'move to non-whitespace of the last line on screen\n ' + 
      'move to beginning of file\n move to end of file if no prefix or prefixed line',
      '\n \n 5| - move to column 5\n 2+ - move to 1st non-whitespace 2 lines below\n 3- - move to 1st non-whitespace 3 lines above\n \n \n \n \n \n' + 
      '5G - move to 1st non-whitespace character of line 5',
      'normal'
    ),

    new KeyBinding(
      3, 'b\n B\n w\n W\n e\n E\n f\n F', 
      'move back 1 word\n move back 1 WORD\n move forward 1 word\n move forward 1 WORD\n move to end of current word\n move to end of current WORD\n ' + 
      'move to next character \n move to previous character (backward)', 
      'b - move to the beginning of the current word\n 3B - move back by 3 WORDs\n 2w - move forward by 2 words\n W - move forward by 1 WORD\n ' + 
      '2e - move to the end of 2nd word\n E - move to the end of current WORD\n f [space] - move to next whitespace\n FA - move to previous A character',
      'normal'
    ),
    
    new KeyBinding(
      4, 'i\n I\n a\n A\n o\n O', 
      'insert before current character\n insert before the 1st non-white character\n append after current character\n ' + 
      'append after end of line\n insert new line below and enter\n insert new line above and enter',
      '',
      'normal \u2192 insert'
    ),
    
    new KeyBinding(5, 'c\n C\n r\n R', 'delete word(s) at cursor and enter insert mode\n delete from cursor to end of line and enter insert mode\n ' + 
    'replace current single character under normal mode\n enter replace mode at cursor', 
    'c2w - replace the next two words\n \n \n',
    'normal \u2192 insert\n normal \u2192 insert\n normal\n normal \u2192 replace'
    ),

    new KeyBinding(6, 'x\n X\n d\n D\n s\n S', 
    'delete character\n delete character backward\n delete\n delete from cursor to end of line (equivalent to d$)\n ' + 
    'insert after deleting prefixed number of characters\n delete entire line and insert',
    '2x - delete 2 characters\n 3X - delete 3 characters backward\n d2w - delete 2 words; d2d - delete 2 lines; dd - delete current line\n \n' + 
    '3s - delete the next 3 characters and insert\n', 'normal\n normal\n normal\n normal\n normal \u2192 insert\n normal \u2192 insert'
    ),

    new KeyBinding(7, 'J\n y\n p\n P\n u\n Ctrl + r',
    'join current line with next line\n yank (copy)\n paste after cursor\n paste before cursor\n undo\n redo the last undo', 
    '\n yy - yank current line\n \n \n \n', 
    'normal'),

    new KeyBinding(8, '%\n {\n }\n ~\n >\n <\n .',
      'jump to matching (), [], {}\n jump to previous blank line\n jump to next blank line\n reverse case of selected block and move cursor forward\n ' +
      'indent\n unindent\n repeat last text-changing command',
      '',
      'normal'
    )

  ]

  constructor() { }
  
  ngOnInit(): void {
  }

}