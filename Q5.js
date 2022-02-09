const turl = require('turl');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
  path: 'shortend-urls.csv',
  header: [
    {id: 'org', title: 'Orginal'},
    {id: 'short', title: 'Shortend'},
  ]
});

const org_url = [
    'http://sousmonarbre.com/qphj/bd963843d2239ed78aa6f7b0a36b537d/qdp/shapely-table-mat-design-office-bay-decoration-mes-at-work-decorating-ideas-office-decoration-mes-design-ideas-cream-wall-paint-decoration-messroom-wooden-laminate-ing-tosca-color__office-decorating-ideas.jpg',
    'https://doodleart.redbull.com/assets/managed/entries/processed/sm/367010617181759_36211000.jpg',
    'https://www.justcolor.net/wp-content/uploads/sites/1/nggallery/doodle-art-doodling/coloring-page-adults-doodle-art-rachel.jpg',
    'https://i.pinimg.com/originals/e5/55/a3/e555a39ca5457a079a9bcce59f61f8d5.jpg',
    'http://canhotopazelite.info/wp-content/uploads/2018/08/office-bay-decoration-themes-with-office-bay-decoration-themes-elegant-yet-fun-office-bay-decoration-14.jpg',
    'https://i.pinimg.com/originals/ef/4c/91/ef4c91fb73e61e19211a0589187ccaa6.jpg',
    'https://static.vecteezy.com/system/resources/previews/000/107/464/non_2x/huge-doodle-vector-pack.jpg',
    'https://i.ytimg.com/vi/O5u1apUkYV0/maxresdefault.jpg',
    'https://media.glassdoor.com/l/e9/c1/7a/84/independence-day-celebration.jpg'
    ];

let arr = [];

org_url.forEach( url => {

    turl.shorten(url).then((res) => {
        
        arr.push({
            "org" : url,
            "short" : res
        })}).catch((err) => {
        console.log(err);
    });
});


data = [
    {
      org: 'https://i.pinimg.com/originals/ef/4c/91/ef4c91fb73e61e19211a0589187ccaa6.jpg',
      short: 'https://tinyurl.com/yacewo9s'
    },
    {
      org: 'https://i.ytimg.com/vi/O5u1apUkYV0/maxresdefault.jpg',
      short: 'https://tinyurl.com/y949t22a'
    },
    {
      org: 'https://www.justcolor.net/wp-content/uploads/sites/1/nggallery/doodle-art-doodling/coloring-page-adults-doodle-art-rachel.jpg',
      short: 'https://tinyurl.com/y7fe25e8'
    },
    {
      org: 'http://sousmonarbre.com/qphj/bd963843d2239ed78aa6f7b0a36b537d/qdp/shapely-table-mat-design-office-bay-decoration-mes-at-work-decorating-ideas-office-decoration-mes-design-ideas-cream-wall-paint-decoration-messroom-wooden-laminate-ing-tosca-color__office-decorating-ideas.jpg',
      short: 'https://tinyurl.com/yboy9749'
    },
    {
      org: 'https://static.vecteezy.com/system/resources/previews/000/107/464/non_2x/huge-doodle-vector-pack.jpg',
      short: 'https://tinyurl.com/y8d9lds5'
    },
    {
      org: 'https://media.glassdoor.com/l/e9/c1/7a/84/independence-day-celebration.jpg',
      short: 'https://tinyurl.com/yaq5mvnc'
    },
    {
      org: 'http://canhotopazelite.info/wp-content/uploads/2018/08/office-bay-decoration-themes-with-office-bay-decoration-themes-elegant-yet-fun-office-bay-decoration-14.jpg',
      short: 'https://tinyurl.com/yb6td63t'
    },
    {
      org: 'https://i.pinimg.com/originals/e5/55/a3/e555a39ca5457a079a9bcce59f61f8d5.jpg',
      short: 'https://tinyurl.com/ycyaqkuu'
    },
    {
      org: 'https://doodleart.redbull.com/assets/managed/entries/processed/sm/367010617181759_36211000.jpg',
      short: 'https://tinyurl.com/yatjspa8'
    }
  ];

setTimeout(() => {
    csvWriter.writeRecords(arr).then(()=> console.log('CSV Created'));
}, 3000)