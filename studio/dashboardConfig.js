export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fd8fd8d48e26f2c87f010af',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-as2c8xnr',
                  apiId: 'ac4ea46a-b488-4b1d-81ff-1087b9ea4d2b'
                },
                {
                  buildHookId: '5fd8fd8d48e26f2ed0f00cbd',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-hnzja3h7',
                  apiId: 'e7cf4b72-0f9a-42af-9c92-40aee869bc7b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MuddMedia/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-hnzja3h7.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
