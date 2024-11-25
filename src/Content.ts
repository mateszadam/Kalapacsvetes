import fs from "fs"; // https://nodejs.org/docs/latest-v14.x/api/fs.html
import http from "http"; // https://nodejs.org/docs/latest-v14.x/api/http.html
import url from "url"; // https://nodejs.org/docs/latest-v14.x/api/url.html
import Solution from "./Solution";
import Contestant from "./Contestant";

export default function content(
  req: http.IncomingMessage,
  res: http.ServerResponse
): void {
  // favicon.ico kérés kiszolgálása:
  if (req.url === "/favicon.ico") {
    res.writeHead(200, { "Content-Type": "image/x-icon" });
    fs.createReadStream("favicon.ico").pipe(res);
    return;
  }
  // Weboldal inicializálása + head rész:
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.write("<!DOCTYPE html>");
  res.write("<html lang='hu'>");
  res.write("<head>");
  res.write("<meta charset='utf-8'>");
  res.write(
    "<style>input, pre {font-family:monospace; font-size:1em; font-weight:bold;}</style>"
  );
  res.write(
    "<meta name='viewport' content='width=device-width, initial-scale=1.0'>"
  );
  res.write("<title>Kalapácsvetés</title>");
  res.write("</head>");
  res.write("<body><form><pre>");

  res.write('<h1 style="text-align: center">Kalapácsvetés</h1>');
  res.write('<h5 style="text-align: center">2021.május.12.</h5>');
  res.write('<div style="margin: 50px auto 0px auto; width: fit-content; font-size: 16px">');  
  // ##############

  const solution: Solution = new Solution("Selejtezo2012.txt");

  res.write(
    `5.feladat: Versenyzők száma a selejtezőben: ${solution.contestantsCount} fő\n`
  );
  res.write(
    `6.feladat: 78,00 méter feletti teljesítménnyel továbjutott: ${solution.qualifiedOver78Count} fő\n`
  );

  res.write(
    `9.feladat: A selejtező nyelrese:\n\t${solution.biggestThrow.formattedOutput}`
  );
  // *************
  res.write("</div>");

  res.write("</pre></form></body></html>");
  res.end();
}
