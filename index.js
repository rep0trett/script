// Имя файлы из которого читаем
import playlist from './p-2.json' with { type: "json" };
import fs from 'fs';

// файл в который нужно записать
const FILE_NAME = './p-2.txt';

const pl = playlist.playlist

const playlistTitle = pl.title;
console.log('?', playlistTitle, fs);
fs.writeFileSync(FILE_NAME, playlistTitle);
fs.appendFileSync(FILE_NAME, `
    
    `);

pl.tracks.forEach(({ artists, title }) => {
    let allArtists = '';
    artists.forEach(({ name }) => {
        allArtists += ' ' + name + ', ';
    });
    const dataLine = `${title}, ${allArtists}
    `;
    fs.appendFileSync(FILE_NAME, dataLine);
})