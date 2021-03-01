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
                  buildHookId: '603d11e955dc140082177ee7',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-3j5oxdtq',
                  apiId: '399cce9f-87b2-48a4-851c-3100d0337208'
                },
                {
                  buildHookId: '603d11e9fc63f3009f56f085',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-8wqup84h',
                  apiId: 'e9ff7f2b-fab1-440e-a387-118d59f88d7e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mattdanielbrown/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-8wqup84h.netlify.app', category: 'apps'}
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
