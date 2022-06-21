export const profiles = [
  {
    id: 1,
    name: "John Doe",
    avatar:
      "https://avatars.dicebear.com/api/male/" +
      (Math.floor(Math.random() * 6) + 1) +
      ".svg",
    online: true,
    lastMessage: "Hello, how are you?",
    lastMessageTime: "12:00",
    unreadMessages: 0,
  },
  {
    id: 2,
    name: "Jane Doe",
    avatar:
    "https://avatars.dicebear.com/api/male/" +
    (Math.floor(Math.random() * 6) + 1) +
    ".svg",
    online: false,
    lastMessage: "Hello, how are you?",
    lastMessageTime: "08:00",
    unreadMessages: 0,
  },
];
