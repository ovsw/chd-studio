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
                // {
                //   buildHookId: '5d564ded4abbf68b4a4d6584',
                //   title: 'Backend Editor - Sanity Studio',
                //   name: 'val-app-studio',
                //   apiId: 'ec6739d1-69a9-453d-acf0-5a0eab4ffd6e'
                // },
                {
                  buildHookId: '5e7242951f833c28ac4b3f7b',
                  title: 'MyChandlerDentists.com Front-End Website',
                  name: 'phx-web',
                  apiId: '78b72c7d-9105-4a02-9193-4a8287bfbc0a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ovsw/chd-app',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://mychandlerdentists.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    },
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    }
  ]
}
