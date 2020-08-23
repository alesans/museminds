const path = require(`path`);
const _ = require('lodash');

const makeRequest = (graphql, request) =>
  new Promise((resolve, reject) => {
    // Query for nodes to use in creating pages.
    resolve(
      graphql(request).then((result) => {
        if (result.errors) {
          reject(result.errors);
        }
        return result;
      })
    );
  });
// NODES
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  //   // getBlog
  //   const getBlog = makeRequest(
  //     graphql,
  //     `
  //    {
  //      allContentfulBlog (
  //        sort: { fields: [createdAt], order: DESC }
  //        filter: {
  //          node_locale: {eq: "en-US"}},)
  //      {
  //        edges {
  //          node {
  //            id
  //            slug
  //          }
  //        }
  //      }
  //    }
  //    `
  //   ).then((result) => {
  //     result.data.allContentfulBlog.edges.forEach(({ node }) => {
  //       createPage({
  //         path: `blog/${node.slug}`,
  //         component: path.resolve(`src/templates/blog/post.js`),
  //         context: {
  //           id: node.id,
  //         },
  //       });
  //     });
  //   });

  //   // getBlogArchive
  //   const getBlogArchive = makeRequest(
  //     graphql,
  //     `
  // {
  //   allContentfulBlog (
  //     sort: { fields: [createdAt], order: DESC }
  //     filter: {
  //       node_locale: {eq: "en-US"}},)
  //   {
  //     edges {
  //       node {
  //         id
  //         slug
  //       }
  //     }
  //   }
  // }
  // `
  //   ).then((result) => {
  //     const blogs = result.data.allContentfulBlog.edges;
  //     // Create paginated pages for blogs in archive.
  //     const blogsPerPage = 16;
  //     const numPages = Math.ceil(blogs.length / blogsPerPage);

  //     Array.from({ length: numPages }).forEach((_, i) => {
  //       createPage({
  //         path: i === 0 ? `/blog` : `/blog/${i + 1}`,
  //         component: path.resolve(`./src/templates/blog/archive.js`),
  //         context: {
  //           limit: blogsPerPage,
  //           skip: i * blogsPerPage,
  //           numPages,
  //           currentPage: i + 1,
  //         },
  //       });
  //     });
  //   });

  //   // getBlogCategories
  //   const getBlogCategories = new Promise((resolve, reject) => {
  //     graphql(`
  //       {
  //         allContentfulCategory(
  //           sort: { fields: [title, createdAt], order: DESC }
  //           filter: { node_locale: { eq: "en-US" } }
  //         ) {
  //           edges {
  //             node {
  //               slug
  //               title
  //               blog {
  //                 title
  //                 slug
  //               }
  //             }
  //           }
  //           distinct(field: title)
  //         }
  //       }
  //     `).then((result) => {
  //       if (result.errors) {
  //         result.errors.forEach((e) => console.error(e.toString()));
  //         return Promise.reject(result.errors);
  //       }

  //       const categories = result.data.allContentfulCategory.distinct;

  //       const allCoursesByCategory = result.data.allContentfulCategory.edges;

  //       categories.forEach((category) => {
  //         const categoryPath = `/blog/category/${_.kebabCase(category)}`;

  //         let blogByCategory = [];

  //         allCoursesByCategory.forEach((edge) => {
  //           if (_.includes(edge.node.title, category)) {
  //             blogByCategory = blogByCategory.concat(edge.node.blog);
  //           }
  //         });

  //         // Create paginated pages for blogs in categories.
  //         const blogsPerPage = 16;

  //         const numPages = Math.ceil(blogByCategory.length / blogsPerPage);
  //         Array.from({ length: numPages }).forEach((_, i) => {
  //           createPage({
  //             path: i === 0 ? `${categoryPath}` : `${categoryPath}/${i + 1}`,
  //             component: path.resolve('./src/templates/blog/category.js'),
  //             context: {
  //               limit: blogsPerPage,
  //               skip: i * blogsPerPage,
  //               numPages,
  //               currentPage: i + 1,
  //               category,
  //               categoryPath,
  //             },
  //           });
  //         });
  //       });
  //       resolve();
  //     });
  //   });
  // WORD NODES
  // getWork
  const getWork = makeRequest(
    graphql,
    `
   {
     allContentfulWork (
       sort: { fields: [createdAt], order: DESC }
       filter: {
         node_locale: {eq: "es-CR"}},)
     {
       edges {
         node {
           id
           slug
         }
       }
     }
   }
   `
  ).then((result) => {
    result.data.allContentfulWork.edges.forEach(({ node }) => {
      createPage({
        path: `proyectos/${node.slug}`,
        component: path.resolve(`src/templates/work/case.js`),
        context: {
          id: node.id,
        },
      });
    });
  });

  // getWorkArchive
  const getWorkArchive = makeRequest(
    graphql,
    `
{
  allContentfulWork (
    sort: { fields: [createdAt], order: DESC }
    filter: {
      node_locale: {eq: "en-US"}},)
  {
    edges {
      node {
        id
        slug
      }
    }
  }
}
`
  ).then((result) => {
    const works = result.data.allContentfulWork.edges;
    // Create paginated pages for works in archive.
    const worksPerPage = 12;
    const numPages = Math.ceil(works.length / worksPerPage);

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/proyectos` : `/proyectos/${i + 1}`,
        component: path.resolve(`./src/templates/work/archive.js`),
        context: {
          limit: worksPerPage,
          skip: i * worksPerPage,
          numPages,
          currentPage: i + 1,
        },
      });
    });
  });

  // getWorkCategories
  const getWorkCategories = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulCategory(
          sort: { fields: [title, createdAt], order: DESC }
          filter: { node_locale: { eq: "en-US" } }
        ) {
          edges {
            node {
              slug
              title
              work {
                title
                slug
              }
            }
          }
          distinct(field: title)
        }
      }
    `).then((result) => {
      if (result.errors) {
        result.errors.forEach((e) => console.error(e.toString()));
        return Promise.reject(result.errors);
      }

      const categories = result.data.allContentfulCategory.distinct;

      const allWorksByCategory = result.data.allContentfulCategory.edges;

      categories.forEach((category) => {
        const categoryPath = `/proyectos/categoria/${_.kebabCase(category)}`;

        let workByCategory = [];

        allWorksByCategory.forEach((edge) => {
          if (_.includes(edge.node.title, category)) {
            workByCategory = workByCategory.concat(edge.node.work);
          }
        });

        // Create paginated pages for works in categories.
        const worksPerPage = 12;

        const numPages = Math.ceil(workByCategory.length / worksPerPage);
        Array.from({ length: numPages }).forEach((_, i) => {
          createPage({
            path: i === 0 ? `${categoryPath}` : `${categoryPath}/${i + 1}`,
            component: path.resolve('./src/templates/work/category.js'),
            context: {
              limit: worksPerPage,
              skip: i * worksPerPage,
              numPages,
              currentPage: i + 1,
              category,
              categoryPath,
            },
          });
        });
      });
      resolve();
    });
  });

  // STORE

  //   return Promise.all([getBlog, getBlogArchive, getBlogCategories, getWork, getWorkArchive, getWorkCategories]);
  return Promise.all([getWork, getWorkArchive, getWorkCategories]);
};
