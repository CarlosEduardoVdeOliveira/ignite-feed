export const posts = [
  {
    id: 1,
    author:{
      name: 'Carlos Eduardo',
      avatarUrl: 'https://github.com/carloseduardovdeoliveira.png',
      role:'Dev front-end',
    },
    publishedAt: new Date('2022-10-07 12:13:53'),
    content: [
      {type: 'paragraph', content: "Fala galeraa👋"},
      {type: 'paragraph',content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type: 'link', content: "👉 jane.design/doctorcare"},
    ]
  },
  {
    id: 2,
    author:{
      name: 'Diego Fernandes',
      avatarUrl: 'https://github.com/diego3g.png',
      role:'CTO @Rocketseat',
    },
    publishedAt: new Date('2022-10-10 20:15:00'),
    content: [
      {type: 'paragraph',content: "Fala galeraa👋"},
      {type: 'paragraph',content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type: 'link',content: "👉 jane.design/doctorcare"}        
    ]
  },
]