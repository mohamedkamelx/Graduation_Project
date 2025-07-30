type User = {
  id: number
  name: string
  profilepic?: string
}

export const me: User = { id: 33, name: 'me', profilepic: 'https://th.bing.com/th?id=OIF.vSju5mDISm%2fV1NhMZgaG5A&rs=1&pid=ImgDetMain&o=7&rm=3' }

type CommentObj = {
  user: User
  text: string
  time: Date
}

type Like = {
  user: User
}

export interface Post {
  id: number
  text: string
  post_image?: string
  user: User
  likecount: number
  commentscount: number
  sharecount: number
  sharetime: Date
  isliked: boolean 
  commentList?: CommentObj[] 
  likeList: Like[]
}

const users: User[] = [
  {
    id: 1,
    name: "Sarah Chen",
    profilepic: "https://tse1.mm.bing.net/th/id/OIP.RP3xS0EZ8z8Xmx-e-OCpMwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 2,
    name: "Mike Rodriguez",
    profilepic: 'https://c.wallhere.com/photos/30/a9/League_of_Legends_video_game_characters-2203487.jpg!d'
  },
  {
    id: 3,
    name: "Emma Thompson",
    profilepic: 'https://i.kinja-img.com/gawker-media/image/upload/t_original/fmi7xumnny1wfoc2th39.jpg'
  }
]

const posts: Post[] = [
  {
    id: 1,
    text: "Just finished an amazing hike in the mountains! The view from the top was absolutely breathtaking. Nature never fails to inspire me 🏔️",
    post_image: 'https://tse1.mm.bing.net/th/id/OIP.OFMlQdJWRGUjT2PNEWN00AHaEK?rs=1&pid=ImgDetMain&o=7&rm=3',
    user: users[0],
    likecount: 142,
    commentscount: 23,
    sharecount: 8,
    sharetime: new Date("2025-07-21T14:30"),
    isliked: false,
    commentList: [{user:users[0],text:'hey brooooooooooooooo',time:new Date("2025-07-21T18:00")},{user:users[0],text:'hey beautifule image',time:new Date("2025-07-21T18:45")}], 
    likeList: []
  },
  {
    id: 2,
    text: "Experimenting with a new recipe today - homemade pasta with mushroom truffle sauce. The kitchen smells incredible! 🍝✨",
    post_image: '',
    user: users[1],
    likecount: 89,
    commentscount: 15,
    sharecount: 4,
    sharetime: new Date("2025-07-21T18:45"),
    isliked :false,
    commentList: [],
    likeList:[]
  },
  {
    id: 3,
    text: "Reading this fascinating book about quantum physics. Mind = blown 🤯 The universe is so much weirder than we think!",
    post_image: '',
    user: users[2],
    likecount: 67,
    commentscount: 31,
    sharecount: 12,
    sharetime: new Date("2025-07-21T10:15"),
    isliked :false,
    commentList:[],
    likeList:[]
  },
  {
    id: 6,
    text: "Late night gaming session with the crew. Finally beat that boss we've been stuck on for weeks! Team coordination is everything 🎮",
    post_image: '',
    user: users[1],
    likecount: 94,
    commentscount: 19,
    sharecount: 6,
    sharetime: new Date("2025-07-20T23:45"),
    isliked :false,
    commentList:[],
    likeList:[]
  },{
    id: 7,
    text: "Caught the sunrise during my morning run today. Totally worth getting up early for 🌅🏃‍♂️",
    post_image: '',
    user: users[0],
    likecount: 120,
    commentscount: 10,
    sharecount: 5,
    sharetime: new Date("2025-07-21T06:15"),
    isliked: false,
    commentList: [],
    likeList: []
  },
  {
    id: 8,
    text: "Finally cleaned out my garage. Found my old skateboard and gave it a ride – still got it! 🛹",
    post_image: '',
    user: users[1],
    likecount: 88,
    commentscount: 7,
    sharecount: 2,
    sharetime: new Date("2025-07-19T13:20"),
    isliked: false,
    commentList: [],
    likeList: []
  },
  {
    id: 9,
    text: "Tried painting for the first time in years. It’s abstract... but I kind of like it 🎨🖌️",
    post_image: '',
    user: users[2],
    likecount: 76,
    commentscount: 12,
    sharecount: 3,
    sharetime: new Date("2025-07-18T17:00"),
    isliked: false,
    commentList: [],
    likeList: []
  },
  {
    id: 10,
    text: "Baking therapy: made some chocolate chip cookies and the whole house smells amazing 🍪",
    post_image: '',
    user: users[1],
    likecount: 132,
    commentscount: 18,
    sharecount: 6,
    sharetime: new Date("2025-07-17T20:30"),
    isliked: false,
    commentList: [],
    likeList: []
  },
  {
    id: 11,
    text: "Watched a documentary about black holes. I can’t stop thinking about time dilation 🌀🕒",
    post_image: '',
    user: users[2],
    likecount: 54,
    commentscount: 9,
    sharecount: 2,
    sharetime: new Date("2025-07-17T14:00"),
    isliked: false,
    commentList: [],
    likeList: []
  },
  {
    id: 12,
    text: "Planted a small herb garden on my balcony. Can't wait to cook with fresh basil 🌿🍝",
    post_image: '',
    user: users[0],
    likecount: 101,
    commentscount: 11,
    sharecount: 5,
    sharetime: new Date("2025-07-16T08:45"),
    isliked: false,
    commentList: [],
    likeList: []
  },
  {
    id: 13,
    text: "Attended a local poetry slam. So much raw talent and emotion in that room 📝🎤",
    post_image: '',
    user: users[1],
    likecount: 66,
    commentscount: 6,
    sharecount: 1,
    sharetime: new Date("2025-07-15T19:00"),
    isliked: false,
    commentList: [],
    likeList: []
  },
  {
    id: 14,
    text: "Trying out meditation to manage stress. Anyone else doing daily mindfulness? 🧘‍♀️🧠",
    post_image: '',
    user: users[2],
    likecount: 82,
    commentscount: 13,
    sharecount: 4,
    sharetime: new Date("2025-07-14T07:30"),
    isliked: false,
    commentList: [],
    likeList: []
  },
  {
    id: 15,
    text: "Weekend DIY project: built a bookshelf from scratch! Woodworking is oddly satisfying 🔨📚",
    post_image: '',
    user: users[0],
    likecount: 119,
    commentscount: 17,
    sharecount: 6,
    sharetime: new Date("2025-07-13T15:10"),
    isliked: false,
    commentList: [],
    likeList: []
  },
  {
    id: 16,
    text: "Rainy day + hot coffee + good book = perfect combo ☕📖",
    post_image: '',
    user: users[2],
    likecount: 97,
    commentscount: 8,
    sharecount: 3,
    sharetime: new Date("2025-07-13T09:30"),
    isliked: false,
    commentList: [],
    likeList: []
  }
]

export { users, posts }
export type { User, CommentObj, Like }  