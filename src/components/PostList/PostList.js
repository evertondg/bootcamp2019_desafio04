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
            content: 'Conteúdo do comentário'
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
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar:
                'https://instagram.faqa4-1.fna.fbcdn.net/vp/a925857fad786362df1a31e4f31f6273/5E51117C/t51.2885-19/s150x150/74487316_489392058457047_8665968836127752192_n.jpg?_nc_ht=instagram.faqa4-1.fna.fbcdn.net'
            },
            content: 'Conteúdo do comentário'
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
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar:
                'https://instagram.faqa4-1.fna.fbcdn.net/vp/a925857fad786362df1a31e4f31f6273/5E51117C/t51.2885-19/s150x150/74487316_489392058457047_8665968836127752192_n.jpg?_nc_ht=instagram.faqa4-1.fna.fbcdn.net'
            },
            content: 'Conteúdo do comentário'
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
