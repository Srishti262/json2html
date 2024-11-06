// json2html.js
export default function json2html(data) {
    // Get all unique keys to form the table headers
    const columns = [...new Set(data.flatMap(Object.keys))];

    // Generate the HTML for the table
    const html = `
      <table data-user="tech.srishti.nitb@gmail.com">
        <thead>
          <tr>${columns.map(col => `<th>${col}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map(row => 
            `<tr>${columns.map(col => `<td>${row[col] || ''}</td>`).join('')}</tr>`
          ).join('')}
        </tbody>
      </table>
    `;

    return html;
}
