import { Component, OnInit } from '@angular/core';
export interface Chat {
  id: number;
  user: string;
  lastMessage: string;
  timestamp: Date;
}


@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent implements OnInit {
  chats: Chat[] = [
    {
      id: 1,
      user: 'John Doe',
      lastMessage: 'Hey, what\'s up?',
      timestamp: new Date()
    },
    {
      id: 2,
      user: 'Jane Smith',
      lastMessage: 'Can you meet me at 2pm?',
      timestamp: new Date()
    },
    {
      id: 3,
      user: 'Bob Johnson',
      lastMessage: 'I\'m sorry, I can\'t make it today',
      timestamp: new Date()
    },
    {
      id: 4,
      user: 'Alice Lee',
      lastMessage: 'How was your day?',
      timestamp: new Date()
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
