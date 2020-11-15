export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '5fb12fbef5829166e97993ef',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-dc5vfx4h',
                  apiId: '802dc915-422f-4b5d-a300-33a167db47f2'
                },
                {
                  buildHookId: '5fb12fbe0868123cbd0a4ad6',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-1dsb1f1c',
                  apiId: '1fbf8bda-11ea-454a-ab23-44131a91f6de'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/doffpett/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-1dsb1f1c.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
