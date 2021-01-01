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
                  buildHookId: '5feefd31ec07609197ec2664',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-bdivtpw9',
                  apiId: 'ae12ce65-e704-4294-8266-9e2391c75f81'
                },
                {
                  buildHookId: '5feefd31e8dbfbc3d6ca0a06',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-k9bqo7nn',
                  apiId: 'f12cac23-5e8f-402e-9dc2-95de3db0fded'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/miloshavlicek/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-k9bqo7nn.netlify.app', category: 'apps'}
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
