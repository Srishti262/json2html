
export default function json2html(data) {

    let html = '<table data-user="tech.srishti.nitb@gmail.com">';

    html += "<thead><tr>";
    const headers = new Set();
    data.forEach(item => Object.keys(item).forEach(key => headers.add(key)));
    headers.forEach(header => html += `<th>${header}</th>`);
    html += "</tr></thead>";

    html += "<tbody>";
    data.forEach(row => {
        html += "<tr>";
        headers.forEach(header => html += `<td>${row[header] || ''}</td>`);
        html += "</tr>";
    });
    html += "</tbody></table>";
    
    return html;
}
