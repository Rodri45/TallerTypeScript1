import { data } from './data.js';
import { Serie } from './serie.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
let promedio: number = 0;
let promedioTbody: HTMLElement = document.getElementById("promedio")!;

renderSeriesInTable(data);

function renderSeriesInTable(series: Serie[]): void {
    series.forEach((serie) => {
        let trElement = document.createElement("tr");
        promedio += serie.seasons;
        
        trElement.innerHTML = `
            <th>${serie.id}</th>
            <td class="text-primary"><a href="${serie.link}" target="_blank">${serie.name}</a></td>
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>`;
        
        seriesTbody.appendChild(trElement);
    });
    
    promedio = Math.round(promedio / series.length);
    promedioTbody.innerHTML = `Promedio de temporadas: ${promedio}`;
}
