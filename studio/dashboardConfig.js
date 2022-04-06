export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '624d4d3707fe94216bec7c8b',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-zwm47cit',
                  apiId: 'e37ef6d4-58fc-4e2d-a6b3-8c5ce9cb922c'
                },
                {
                  buildHookId: '624d4d3851ed4924279d6cbd',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-urf7s45n',
                  apiId: 'd2179206-d3bd-49ec-832c-df013de732b0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/smounge/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-urf7s45n.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
