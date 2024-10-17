import { data } from './data.js';
var seriesTbody = document.getElementById('series');
var promedio = 0;
var promedioTbody = document.getElementById("promedio");
renderSeriesInTable(data);
function renderSeriesInTable(series) {
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        promedio += serie.seasons;
        trElement.innerHTML = "\n            <th>".concat(serie.id, "</th>\n            <td class=\"text-primary\"><a href=\"").concat(serie.link, "\" target=\"_blank\">").concat(serie.name, "</a></td>\n            <td>").concat(serie.channel, "</td>\n            <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
    promedio = Math.round(promedio / series.length);
    promedioTbody.innerHTML = "Promedio de temporadas: ".concat(promedio);
}
