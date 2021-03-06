import React, { Component } from 'react';
import './PostList.css';

import Post from '../Post/Post';
class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Filipe Deschamps',
          avatar:
            'https://instagram.faqa4-1.fna.fbcdn.net/vp/a6036db50776e9a4d552150fb3c6e1d7/5E438429/t51.2885-19/s150x150/57244845_337212433647806_3826073986739994624_n.jpg?_nc_ht=instagram.faqa4-1.fna.fbcdn.net'
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar:
                'https://instagram.faqa4-1.fna.fbcdn.net/vp/a925857fad786362df1a31e4f31f6273/5E51117C/t51.2885-19/s150x150/74487316_489392058457047_8665968836127752192_n.jpg?_nc_ht=instagram.faqa4-1.fna.fbcdn.net'
            },
            content:
              'A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)'
          }
        ]
      },

      {
        id: 2,
        author: {
          name: 'Everton De Grande',
          avatar:
            'https://instagram.faqa4-1.fna.fbcdn.net/vp/e283bf236fdcf6b501842ebc754ef45a/5E5CFC82/t51.2885-19/s150x150/27892629_406683203111489_5044906639291842560_n.jpg?_nc_ht=instagram.faqa4-1.fna.fbcdn.net'
        },
        date: '04 Jun 2019',
        content:
          'Fala galera, beleza?\nEstou fazendo o Bootcamp GoStack e está sendo muito massa! Alguém mais aí fazendo? Comenta aí na publicação para trocarmos uma idéia',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar:
                'https://instagram.faqa4-1.fna.fbcdn.net/vp/a925857fad786362df1a31e4f31f6273/5E51117C/t51.2885-19/s150x150/74487316_489392058457047_8665968836127752192_n.jpg?_nc_ht=instagram.faqa4-1.fna.fbcdn.net'
            },
            content:
              'Show de Bola Everton! Qualquer dúvida lembre-se de utilizar o Discord!'
          },
          {
            id: 2,
            author: {
              name: 'Jhonatta Hollupi',
              avatar:
                'https://www.facebook.com/search/async/profile_picture/?fbid=100002642111964&width=72&height=72'
            },
            content:
              'Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios construída!'
          }
        ]
      },

      {
        id: 3,
        author: {
          name: 'Cindy Yonemi Hosoya',
          avatar:
            'https://instagram.faqa4-1.fna.fbcdn.net/vp/f9bcaa9ba327bf6adb4de8ae62c26166/5E4E1DBF/t51.2885-19/s150x150/42922035_498314840645806_3658564717393215488_n.jpg?_nc_ht=instagram.faqa4-1.fna.fbcdn.net'
        },
        date: '04 Jun 2019',
        content: 'Pessoal, quando sai a próxima Semana Omnistack? ',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar:
                'https://instagram.faqa4-1.fna.fbcdn.net/vp/a925857fad786362df1a31e4f31f6273/5E51117C/t51.2885-19/s150x150/74487316_489392058457047_8665968836127752192_n.jpg?_nc_ht=instagram.faqa4-1.fna.fbcdn.net'
            },
            content: 'Olá Cindy! Em breve enviaremos e-mail informando'
          },
          {
            id: 2,
            author: {
              name: 'Cindy Yonemi Hosoya',
              avatar:
                'https://instagram.faqa4-1.fna.fbcdn.net/vp/f9bcaa9ba327bf6adb4de8ae62c26166/5E4E1DBF/t51.2885-19/s150x150/42922035_498314840645806_3658564717393215488_n.jpg?_nc_ht=instagram.faqa4-1.fna.fbcdn.net'
            },
            content: 'Muito obrigada!'
          },
          {
            id: 3,
            author: {
              name: 'Diego Fernandes ',
              avatar:
                'https://instagram.faqa4-1.fna.fbcdn.net/vp/a925857fad786362df1a31e4f31f6273/5E51117C/t51.2885-19/s150x150/74487316_489392058457047_8665968836127752192_n.jpg?_nc_ht=instagram.faqa4-1.fna.fbcdn.net'
            },
            content: 'Isso ai Fique de olho!'
          }
        ]
      }
    ]
  };

  render() {
    return (
      <div className="content">
        <ul>
          {this.state.posts.map(post => (
            <Post key={post.id} data={post} />
          ))}
        </ul>
      </div>
    );
  }
}

export default PostList;
