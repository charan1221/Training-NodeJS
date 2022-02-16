const async = require('async');
const download = require('image-downloader');
const fs = require('fs');

const img_list = [
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

const root = './Images/';
let current_folder = 0, count = 0;

async function downloadImage(url, filepath){
        return download.image({
        url,
        dest: filepath 
        }).then(({ filename }) => {
            console.log('Saved');
          })
        .catch((err) => console.error(err))
    }

async.forEachOf(img_list,(value, key, callback) => {
    if(!fs.existsSync(root+current_folder)){
        fs.mkdirSync(root+current_folder);
    }

    downloadImage(value,root+current_folder);
    if(++count == 5){
        current_folder++;
        count=0;
    }

    callback();
});