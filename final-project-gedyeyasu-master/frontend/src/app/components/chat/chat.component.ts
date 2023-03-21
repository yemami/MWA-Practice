import { Component, OnInit } from '@angular/core';

export class Message {
  constructor(public text: string, public sender = 'user', public timestamp = new Date()) { }
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  messages: Message[] = [];
  messageInput = '';

  constructor() { }

  ngOnInit(): void {
  }

  sendMessage() {
    if (this.messageInput.trim() !== '') {
      const message = new Message(this.messageInput);
      this.messages.push(message);
      this.messageInput = '';
    }
  }
}
