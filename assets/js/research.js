/* Research Details Table */

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Last-Mile Cold Chain Logistics Monitoring",
    authors: "Andile Masela",
    conferences: "BSc Honours in Computer Science, University of the Western Cape",
    researchYr: 2023,
    citebox: "popup1",
    absbox: "absPopup1",
    image: "assets/images/experience-page/uwc.png",
    pdf: "assets/docs/A_Masela_3942528_cold_chain.pdf",
    citation: {
      vancouver:
        "Masela A. Last-Mile Cold Chain Logistics Monitoring. BSc Honours in Computer Science, University of the Western Cape; 2023.",
    },
    abstract:
      "This honours research explores an IoT-driven approach to last-mile cold chain monitoring using Arduino, GPS and MQTT messaging to improve visibility, reliability and response time in temperature-sensitive logistics workflows.",
  },
];

const renderActionLinks = (pdf) => {
  if (!pdf) return "";
  return `
    <a class="button button-accent button-small text-right button-abstract mr-2" href="${pdf}" target="_blank" rel="noopener noreferrer">
      PREVIEW PDF
    </a>
    <a class="button button-accent button-small text-right button-abstract" href="${pdf}" download>
      DOWNLOAD PDF
    </a>
  `;
};

const fillData = () => {
  let output = "";
  research.forEach(
    ({ image, title, authors, conferences, researchYr, citebox, citation, absbox, abstract, pdf }) =>
      (output += `
            <tr> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class="researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle">${title}</a> 
                    <div class="authors">${authors}</div> 
                    <div class="rConferences">${conferences}
                        <div class="researchY">${researchYr}</div>
                    </div>
                    <div class="d-flex flex-wrap" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract mr-2" type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                        <button class="button button-accent button-small text-right button-abstract mr-2" type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                        ${renderActionLinks(pdf)}
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">${abstract}</div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">${citation.vancouver}</div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", fillData);
